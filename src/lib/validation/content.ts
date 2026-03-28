import type {
  Abbreviation,
  Exercise,
  Lesson,
  Part,
  Term,
  Unit,
} from "../../types/content";

interface ValidationInput {
  abbreviations: Abbreviation[];
  exercises: Exercise[];
  lessons: Lesson[];
  parts: Part[];
  terms: Term[];
  units: Unit[];
}

export interface ValidationResult {
  errors: string[];
  warnings: string[];
}

function findDuplicateIds(items: Array<{ id: string }>, label: string): string[] {
  const seen = new Set<string>();
  const duplicates: string[] = [];

  for (const item of items) {
    if (seen.has(item.id)) {
      duplicates.push(`${label} duplicate id: ${item.id}`);
      continue;
    }
    seen.add(item.id);
  }

  return duplicates;
}

function findDuplicateValues(values: string[], label: string): string[] {
  const seen = new Set<string>();
  const duplicates: string[] = [];

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.push(`${label} duplicate reference: ${value}`);
      continue;
    }
    seen.add(value);
  }

  return duplicates;
}

export function validateContent(input: ValidationInput): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  errors.push(...findDuplicateIds(input.units, "unit"));
  errors.push(...findDuplicateIds(input.lessons, "lesson"));
  errors.push(...findDuplicateIds(input.parts, "part"));
  errors.push(...findDuplicateIds(input.terms, "term"));
  errors.push(...findDuplicateIds(input.exercises, "exercise"));
  errors.push(...findDuplicateIds(input.abbreviations, "abbreviation"));

  const unitIds = new Set(input.units.map((item) => item.id));
  const lessonIds = new Set(input.lessons.map((item) => item.id));
  const partIds = new Set(input.parts.map((item) => item.id));
  const termIds = new Set(input.terms.map((item) => item.id));
  const exerciseIds = new Set(input.exercises.map((item) => item.id));
  const abbreviationIds = new Set(input.abbreviations.map((item) => item.id));
  const lessonMap = new Map(input.lessons.map((item) => [item.id, item]));
  const termMap = new Map(input.terms.map((item) => [item.id, item]));
  const lessonIdsInUnits = new Set<string>();
  const exerciseIdsInLessons = new Set<string>();
  const lessonTermIds = new Set<string>();
  const lessonPartIds = new Set<string>();
  const termPartIds = new Set<string>();

  for (const unit of input.units) {
    errors.push(...findDuplicateValues(unit.lessonIds, `unit ${unit.id} lessonIds`));
    errors.push(
      ...findDuplicateValues(
        unit.prerequisiteUnitIds,
        `unit ${unit.id} prerequisiteUnitIds`,
      ),
    );
    for (const lessonId of unit.lessonIds) {
      if (!lessonIds.has(lessonId)) {
        errors.push(`unit ${unit.id} references missing lesson ${lessonId}`);
        continue;
      }

      lessonIdsInUnits.add(lessonId);
      const lesson = lessonMap.get(lessonId);
      if (lesson && lesson.unitId !== unit.id) {
        errors.push(
          `unit ${unit.id} references lesson ${lessonId} but lesson.unitId is ${lesson.unitId}`,
        );
      }
    }
    for (const prerequisiteId of unit.prerequisiteUnitIds) {
      if (!unitIds.has(prerequisiteId)) {
        errors.push(
          `unit ${unit.id} references missing prerequisite unit ${prerequisiteId}`,
        );
      }
    }
  }

  for (const lesson of input.lessons) {
    errors.push(
      ...findDuplicateValues(
        lesson.prerequisiteLessonIds,
        `lesson ${lesson.id} prerequisiteLessonIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.introducesPartIds,
        `lesson ${lesson.id} introducesPartIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.introducesTermIds,
        `lesson ${lesson.id} introducesTermIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.reinforcesTermIds,
        `lesson ${lesson.id} reinforcesTermIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.exerciseSetIds,
        `lesson ${lesson.id} exerciseSetIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.introducesAbbreviationIds ?? [],
        `lesson ${lesson.id} introducesAbbreviationIds`,
      ),
    );
    errors.push(
      ...findDuplicateValues(
        lesson.reinforcesAbbreviationIds ?? [],
        `lesson ${lesson.id} reinforcesAbbreviationIds`,
      ),
    );
    if (!unitIds.has(lesson.unitId)) {
      errors.push(`lesson ${lesson.id} references missing unit ${lesson.unitId}`);
    }
    for (const prerequisiteId of lesson.prerequisiteLessonIds) {
      if (!lessonIds.has(prerequisiteId)) {
        errors.push(
          `lesson ${lesson.id} references missing prerequisite lesson ${prerequisiteId}`,
        );
      }
    }
    for (const partId of lesson.introducesPartIds) {
      if (!partIds.has(partId)) {
        errors.push(`lesson ${lesson.id} references missing part ${partId}`);
        continue;
      }
      lessonPartIds.add(partId);
    }
    for (const termId of lesson.introducesTermIds) {
      if (!termIds.has(termId)) {
        errors.push(`lesson ${lesson.id} references missing term ${termId}`);
        continue;
      }
      lessonTermIds.add(termId);
      const term = termMap.get(termId);
      if (term && !term.lessonIds.includes(lesson.id)) {
        warnings.push(
          `lesson ${lesson.id} introduces term ${termId} but term.lessonIds does not include the lesson`,
        );
      }
    }
    for (const abbreviationId of lesson.introducesAbbreviationIds ?? []) {
      if (!abbreviationIds.has(abbreviationId)) {
        errors.push(
          `lesson ${lesson.id} references missing abbreviation ${abbreviationId}`,
        );
      }
    }
    for (const termId of lesson.reinforcesTermIds) {
      if (!termIds.has(termId)) {
        errors.push(`lesson ${lesson.id} references missing reinforced term ${termId}`);
        continue;
      }
      lessonTermIds.add(termId);
    }
    for (const abbreviationId of lesson.reinforcesAbbreviationIds ?? []) {
      if (!abbreviationIds.has(abbreviationId)) {
        errors.push(
          `lesson ${lesson.id} references missing reinforced abbreviation ${abbreviationId}`,
        );
      }
    }
    for (const exerciseId of lesson.exerciseSetIds) {
      if (!exerciseIds.has(exerciseId)) {
        errors.push(`lesson ${lesson.id} references missing exercise ${exerciseId}`);
        continue;
      }
      exerciseIdsInLessons.add(exerciseId);
    }
  }

  for (const part of input.parts) {
    errors.push(
      ...findDuplicateValues(part.prerequisiteIds, `part ${part.id} prerequisiteIds`),
    );
    if (!unitIds.has(part.unitId)) {
      errors.push(`part ${part.id} references missing unit ${part.unitId}`);
    }
    for (const prerequisiteId of part.prerequisiteIds) {
      if (!partIds.has(prerequisiteId)) {
        errors.push(`part ${part.id} references missing prerequisite ${prerequisiteId}`);
      }
    }
  }

  const normalizedTerms = new Map<string, string>();
  for (const term of input.terms) {
    errors.push(
      ...findDuplicateValues(term.prerequisiteIds, `term ${term.id} prerequisiteIds`),
    );
    errors.push(
      ...findDuplicateValues(
        term.prerequisiteLessonIds,
        `term ${term.id} prerequisiteLessonIds`,
      ),
    );
    errors.push(...findDuplicateValues(term.lessonIds, `term ${term.id} lessonIds`));
    if (normalizedTerms.has(term.normalizedTerm)) {
      errors.push(
        `term normalized collision: ${term.normalizedTerm} (${normalizedTerms.get(term.normalizedTerm)} and ${term.id})`,
      );
    } else {
      normalizedTerms.set(term.normalizedTerm, term.id);
    }

    for (const prerequisiteId of term.prerequisiteIds) {
      if (!partIds.has(prerequisiteId)) {
        errors.push(`term ${term.id} references unknown prerequisite ${prerequisiteId}`);
      }
    }
    for (const prerequisiteLessonId of term.prerequisiteLessonIds) {
      if (!lessonIds.has(prerequisiteLessonId)) {
        errors.push(
          `term ${term.id} references missing prerequisite lesson ${prerequisiteLessonId}`,
        );
      }
    }

    for (const lessonId of term.lessonIds) {
      if (!lessonIds.has(lessonId)) {
        errors.push(`term ${term.id} references missing lesson ${lessonId}`);
      }
    }

    for (const part of term.parts) {
      if (!partIds.has(part.partId)) {
        errors.push(`term ${term.id} references missing part ${part.partId}`);
        continue;
      }
      termPartIds.add(part.partId);
    }
  }

  const shortForms = new Map<string, string>();
  for (const abbreviation of input.abbreviations) {
    const normalizedShortForm = abbreviation.shortForm.toLowerCase();
    if (shortForms.has(normalizedShortForm)) {
      errors.push(
        `abbreviation collision: ${abbreviation.shortForm} (${shortForms.get(normalizedShortForm)} and ${abbreviation.id})`,
      );
      continue;
    }
    shortForms.set(normalizedShortForm, abbreviation.id);
  }

  for (const exercise of input.exercises) {
    errors.push(
      ...findDuplicateValues(exercise.linkedTermIds, `exercise ${exercise.id} linkedTermIds`),
    );
    errors.push(
      ...findDuplicateValues(exercise.linkedPartIds, `exercise ${exercise.id} linkedPartIds`),
    );
    for (const termId of exercise.linkedTermIds) {
      if (!termIds.has(termId)) {
        errors.push(`exercise ${exercise.id} references missing term ${termId}`);
      }
    }
    for (const partId of exercise.linkedPartIds) {
      if (!partIds.has(partId)) {
        errors.push(`exercise ${exercise.id} references missing part ${partId}`);
      }
    }
    for (const abbreviationId of exercise.linkedAbbreviationIds ?? []) {
      if (!abbreviationIds.has(abbreviationId)) {
        errors.push(
          `exercise ${exercise.id} references missing abbreviation ${abbreviationId}`,
        );
      }
    }
  }

  for (const lesson of input.lessons) {
    if (!lessonIdsInUnits.has(lesson.id)) {
      errors.push(`lesson ${lesson.id} is not assigned to any unit`);
    }
  }

  for (const exercise of input.exercises) {
    if (!exerciseIdsInLessons.has(exercise.id)) {
      errors.push(`exercise ${exercise.id} is not assigned to any lesson`);
    }
  }

  for (const term of input.terms) {
    if (!lessonTermIds.has(term.id)) {
      warnings.push(`term ${term.id} is not linked from any lesson introduce or reinforce list`);
    }
  }

  for (const part of input.parts) {
    if (!lessonPartIds.has(part.id) && !termPartIds.has(part.id)) {
      warnings.push(`part ${part.id} is not introduced by any lesson and not used by any term`);
    }
  }

  return { errors, warnings };
}
