import { content } from "../src/content";

const lessonMap = new Map(content.lessons.map((lesson) => [lesson.id, lesson]));
const termIdsByUnitId = new Map(
  content.units.map((unit) => [unit.id, new Set<string>()]),
);
const exerciseIdsByUnitId = new Map(
  content.units.map((unit) => [unit.id, new Set<string>()]),
);

for (const term of content.terms) {
  for (const lessonId of term.lessonIds) {
    const unitId = lessonMap.get(lessonId)?.unitId;
    if (unitId) {
      termIdsByUnitId.get(unitId)?.add(term.id);
    }
  }
}

for (const lesson of content.lessons) {
  const exerciseIds = exerciseIdsByUnitId.get(lesson.unitId);
  if (!exerciseIds) {
    continue;
  }

  for (const exerciseId of lesson.exerciseSetIds) {
    exerciseIds.add(exerciseId);
  }
}

const summary = {
  units: content.units.map((unit) => ({
    id: unit.id,
    title: unit.title,
    lessons: unit.lessonIds.length,
    terms: termIdsByUnitId.get(unit.id)?.size ?? 0,
    exercises: exerciseIdsByUnitId.get(unit.id)?.size ?? 0,
  })),
  totals: {
    units: content.units.length,
    lessons: content.lessons.length,
    parts: content.parts.length,
    terms: content.terms.length,
    exercises: content.exercises.length,
    abbreviations: content.abbreviations.length,
  },
};

console.log(JSON.stringify(summary, null, 2));
