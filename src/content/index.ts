import { abbreviations } from "./abbreviations/seedAbbreviations";
import {
  expansionAbbreviations,
  expansionExercises,
  expansionLessons,
  expansionParts,
  expansionTerms,
  unitLessonExtensions,
} from "./expansions";
import { exercises, lessons } from "./lessons/seedLessons";
import { parts } from "./parts/seedParts";
import { terms } from "./terms/seedTerms";
import { units } from "./units/seedUnits";

const mergedUnits = units.map((unit) => ({
  ...unit,
  lessonIds: [...unit.lessonIds, ...(unitLessonExtensions[unit.id] ?? [])],
}));

export const content = {
  abbreviations: [...abbreviations, ...expansionAbbreviations],
  exercises: [...exercises, ...expansionExercises],
  lessons: [...lessons, ...expansionLessons],
  parts: [...parts, ...expansionParts],
  terms: [...terms, ...expansionTerms],
  units: mergedUnits,
};

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

export const contentMaps = {
  abbreviationMap,
  exerciseMap,
  lessonMap,
  lessonsByUnitId,
  lessonTitlesByTermId,
  partMap,
  partsByLessonId,
  termMap,
  termSearchTextById,
  termsByLessonId,
  unitIdsByTermId,
};

export type ContentIndex = typeof content;
