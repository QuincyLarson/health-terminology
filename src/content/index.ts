import { abbreviations } from "./abbreviations/seedAbbreviations";
import {
  expansionAbbreviations,
  expansionExercises,
  expansionLessons,
  expansionParts,
  expansionTerms,
  unitLessonExtensions,
} from "./expansions";
import { buildSupplementalExercises } from "./buildSupplementalExercises";
import { lessonExpansionApplied } from "./extensions/lessonExtensionsApplied";
import { lessonExpansionCore } from "./extensions/lessonExtensionsCore";
import { exercises, lessons } from "./lessons/seedLessons";
import { parts } from "./parts/seedParts";
import { lessonExpansionAppliedTerms } from "./terms/lessonExpansionApplied";
import { lessonExpansionCoreTerms } from "./terms/lessonExpansionCore";
import { terms } from "./terms/seedTerms";
import { units } from "./units/seedUnits";
import type { Lesson } from "../types/content";

type LessonExtension = Partial<
  Pick<Lesson, "introducesTermIds" | "reinforcesTermIds">
>;

function appendUnique(values: string[], additions: string[]): string[] {
  return Array.from(new Set([...values, ...additions]));
}

function mergeLessonExtensions(
  ...sources: Array<Partial<Record<Lesson["id"], LessonExtension>>>
): Partial<Record<Lesson["id"], LessonExtension>> {
  const merged: Partial<Record<Lesson["id"], LessonExtension>> = {};

  for (const source of sources) {
    for (const [lessonId, extension] of Object.entries(source)) {
      if (!extension) {
        continue;
      }

      const current = merged[lessonId] ?? {};
      merged[lessonId as Lesson["id"]] = {
        introducesTermIds: appendUnique(
          current.introducesTermIds ?? [],
          extension.introducesTermIds ?? [],
        ),
        reinforcesTermIds: appendUnique(
          current.reinforcesTermIds ?? [],
          extension.reinforcesTermIds ?? [],
        ),
      };
    }
  }

  return merged;
}

const lessonExtensions = mergeLessonExtensions(
  lessonExpansionCore,
  lessonExpansionApplied,
);

const mergedUnits = units.map((unit) => ({
  ...unit,
  lessonIds: appendUnique(unit.lessonIds, unitLessonExtensions[unit.id] ?? []),
}));

const mergedLessons = [...lessons, ...expansionLessons].map((lesson) => {
  const extension = lessonExtensions[lesson.id];
  if (!extension) {
    return lesson;
  }

  return {
    ...lesson,
    introducesTermIds: appendUnique(
      lesson.introducesTermIds,
      extension.introducesTermIds ?? [],
    ),
    reinforcesTermIds: appendUnique(
      lesson.reinforcesTermIds,
      extension.reinforcesTermIds ?? [],
    ),
  };
});

const mergedTerms = [
  ...terms,
  ...expansionTerms,
  ...lessonExpansionCoreTerms,
  ...lessonExpansionAppliedTerms,
];
const baseExercises = [...exercises, ...expansionExercises];
const supplementalExercises = buildSupplementalExercises({
  abbreviations: [...abbreviations, ...expansionAbbreviations],
  exercises: baseExercises,
  lessons: mergedLessons,
  parts: [...parts, ...expansionParts],
  terms: mergedTerms,
});
const finalizedLessons = mergedLessons.map((lesson) => ({
  ...lesson,
  exerciseSetIds: appendUnique(
    lesson.exerciseSetIds,
    supplementalExercises.lessonExerciseIds[lesson.id] ?? [],
  ),
}));

export const content = {
  abbreviations: [...abbreviations, ...expansionAbbreviations],
  exercises: [...baseExercises, ...supplementalExercises.exercises],
  lessons: finalizedLessons,
  parts: [...parts, ...expansionParts],
  terms: mergedTerms,
  units: mergedUnits,
};

const unitMap = new Map(content.units.map((unit) => [unit.id, unit]));
const lessonMap = new Map(content.lessons.map((lesson) => [lesson.id, lesson]));
const exerciseMap = new Map(content.exercises.map((exercise) => [exercise.id, exercise]));
const partMap = new Map(content.parts.map((part) => [part.id, part]));
const termMap = new Map(content.terms.map((term) => [term.id, term]));
const abbreviationMap = new Map(
  content.abbreviations.map((abbreviation) => [abbreviation.id, abbreviation]),
);
const lessonsByUnitId = new Map(
  content.units.map((unit) => [
    unit.id,
    unit.lessonIds
      .map((lessonId) => lessonMap.get(lessonId))
      .filter((lesson): lesson is (typeof content.lessons)[number] => Boolean(lesson)),
  ]),
);
const termsByLessonId = new Map(
  content.lessons.map((lesson) => [
    lesson.id,
    lesson.introducesTermIds
      .map((termId) => termMap.get(termId))
      .filter((term): term is (typeof content.terms)[number] => Boolean(term)),
  ]),
);

const partsByLessonId = new Map(
  content.lessons.map((lesson) => [
    lesson.id,
    lesson.introducesPartIds
      .map((partId) => partMap.get(partId))
      .filter((part): part is (typeof content.parts)[number] => Boolean(part)),
  ]),
);
const unitIdsByTermId = new Map(
  content.terms.map((term) => [
    term.id,
    Array.from(
      new Set(
        term.lessonIds
          .map((lessonId) => lessonMap.get(lessonId)?.unitId)
          .filter((unitId): unitId is string => Boolean(unitId)),
      ),
    ),
  ]),
);
const lessonTitlesByTermId = new Map(
  content.terms.map((term) => [
    term.id,
    term.lessonIds
      .map((lessonId) => lessonMap.get(lessonId)?.title)
      .filter((title): title is string => Boolean(title)),
  ]),
);
const termSearchTextById = new Map(
  content.terms.map((term) => [
    term.id,
    `${term.term} ${term.plainMeaning} ${term.shortDefinition}`.toLowerCase(),
  ]),
);
const bodySystemOptions = Array.from(
  new Set(content.terms.map((term) => term.bodySystem)),
).sort();
const partFilterLabelsByTermId = new Map(
  content.terms.map((term) => [
    term.id,
    term.parts.map((part) => `${part.text} · ${part.meaning}`),
  ]),
);
const partFilterOptions = Array.from(
  new Set(
    content.terms.flatMap((term) => partFilterLabelsByTermId.get(term.id) ?? []),
  ),
).sort();

export const contentMaps = {
  abbreviationMap,
  bodySystemOptions,
  exerciseMap,
  lessonMap,
  lessonsByUnitId,
  lessonTitlesByTermId,
  partMap,
  partFilterLabelsByTermId,
  partFilterOptions,
  partsByLessonId,
  termMap,
  termSearchTextById,
  termsByLessonId,
  unitMap,
  unitIdsByTermId,
};

export type ContentIndex = typeof content;
