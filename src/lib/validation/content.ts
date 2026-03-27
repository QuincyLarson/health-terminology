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

  for (const unit of input.units) {
    for (const lessonId of unit.lessonIds) {
      if (!lessonIds.has(lessonId)) {
        errors.push(`unit ${unit.id} references missing lesson ${lessonId}`);
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
      }
    }
    for (const termId of lesson.introducesTermIds) {
      if (!termIds.has(termId)) {
        errors.push(`lesson ${lesson.id} references missing term ${termId}`);
      }
    }
    for (const termId of lesson.reinforcesTermIds) {
      if (!termIds.has(termId)) {
        errors.push(`lesson ${lesson.id} references missing reinforced term ${termId}`);
      }
    }
    for (const exerciseId of lesson.exerciseSetIds) {
      if (!exerciseIds.has(exerciseId)) {
        errors.push(`lesson ${lesson.id} references missing exercise ${exerciseId}`);
      }
    }
  }

  for (const part of input.parts) {
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
    if (normalizedTerms.has(term.normalizedTerm)) {
      errors.push(
        `term normalized collision: ${term.normalizedTerm} (${normalizedTerms.get(term.normalizedTerm)} and ${term.id})`,
      );
    } else {
      normalizedTerms.set(term.normalizedTerm, term.id);
    }

    for (const prerequisiteId of term.prerequisiteIds) {
      if (!partIds.has(prerequisiteId)) {
        warnings.push(`term ${term.id} references unknown prerequisite ${prerequisiteId}`);
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
      }
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

  return { errors, warnings };
}
