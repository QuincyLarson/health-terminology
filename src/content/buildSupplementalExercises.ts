import type {
  Abbreviation,
  Exercise,
  Lesson,
  Part,
  Term,
} from "../types/content";

const MIN_EXERCISES_PER_LESSON = 5;

interface BuildInput {
  abbreviations: Abbreviation[];
  exercises: Exercise[];
  lessons: Lesson[];
  parts: Part[];
  terms: Term[];
}

interface BuildResult {
  exercises: Exercise[];
  lessonExerciseIds: Partial<Record<string, string[]>>;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values));
}

function hashText(value: string): number {
  return Array.from(value).reduce((sum, character) => sum + character.charCodeAt(0), 0);
}

function rotateChoices(correct: string, distractors: string[], seed: string): string[] {
  const choices = [correct, ...distractors];
  const offset = hashText(seed) % choices.length;
  return choices.slice(offset).concat(choices.slice(0, offset));
}

function pickDistractors(
  correct: string,
  localPool: string[],
  globalPool: string[],
  seed: string,
): string[] | null {
  const distractors = unique([...localPool, ...globalPool]).filter((choice) => choice !== correct);
  if (distractors.length < 3) {
    return null;
  }

  return rotateChoices(correct, distractors.slice(0, 3), seed);
}

function buildTermExercise(
  lessonId: string,
  term: Term,
  lessonTerms: Term[],
  allTerms: Term[],
): Exercise | null {
  const choices = pickDistractors(
    term.plainMeaning,
    lessonTerms.map((candidate) => candidate.plainMeaning),
    allTerms.map((candidate) => candidate.plainMeaning),
    term.id,
  );
  if (!choices) {
    return null;
  }

  return {
    id: `exercise-supplement-${lessonId}-${term.id}`,
    type: "infer_meaning",
    prompt: `Which plain meaning matches \`${term.term}\`?`,
    choices,
    answer: term.plainMeaning,
    linkedTermIds: [term.id],
    linkedPartIds: term.parts.map((part) => part.partId),
  };
}

function buildPartExercise(
  lessonId: string,
  part: Part,
  lessonParts: Part[],
  allParts: Part[],
): Exercise | null {
  const choices = pickDistractors(
    part.plainMeaning,
    lessonParts.map((candidate) => candidate.plainMeaning),
    allParts.map((candidate) => candidate.plainMeaning),
    part.id,
  );
  if (!choices) {
    return null;
  }

  return {
    id: `exercise-supplement-${lessonId}-${part.id}`,
    type: "root_match",
    prompt: `Which meaning matches \`${part.text}\`?`,
    choices,
    answer: part.plainMeaning,
    linkedTermIds: [],
    linkedPartIds: [part.id],
  };
}

function buildAbbreviationExercise(
  lessonId: string,
  abbreviation: Abbreviation,
  lessonAbbreviations: Abbreviation[],
  allAbbreviations: Abbreviation[],
): Exercise | null {
  const correctAnswer = abbreviation.expandedForm;
  const choices = pickDistractors(
    correctAnswer,
    lessonAbbreviations.map((candidate) => candidate.expandedForm),
    allAbbreviations.map((candidate) => candidate.expandedForm),
    abbreviation.id,
  );
  if (!choices) {
    return null;
  }

  return {
    id: `exercise-supplement-${lessonId}-${abbreviation.id}`,
    type: "infer_meaning",
    prompt: `Which expansion matches \`${abbreviation.shortForm}\` here?`,
    choices,
    answer: correctAnswer,
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: [abbreviation.id],
  };
}

export function buildSupplementalExercises(input: BuildInput): BuildResult {
  const termMap = new Map(input.terms.map((term) => [term.id, term]));
  const partMap = new Map(input.parts.map((part) => [part.id, part]));
  const abbreviationMap = new Map(
    input.abbreviations.map((abbreviation) => [abbreviation.id, abbreviation]),
  );
  const exerciseMap = new Map(input.exercises.map((exercise) => [exercise.id, exercise]));
  const supplementalExercises: Exercise[] = [];
  const lessonExerciseIds: Partial<Record<string, string[]>> = {};

  for (const lesson of input.lessons) {
    if (lesson.exerciseSetIds.length >= MIN_EXERCISES_PER_LESSON) {
      continue;
    }

    const authoredExercises = lesson.exerciseSetIds
      .map((exerciseId) => exerciseMap.get(exerciseId))
      .filter((exercise): exercise is Exercise => Boolean(exercise));
    const usedPrompts = new Set(authoredExercises.map((exercise) => exercise.prompt));
    const lessonTerms = unique([
      ...lesson.introducesTermIds,
      ...lesson.reinforcesTermIds,
    ])
      .map((termId) => termMap.get(termId))
      .filter((term): term is Term => Boolean(term));
    const lessonParts = unique(lesson.introducesPartIds)
      .map((partId) => partMap.get(partId))
      .filter((part): part is Part => Boolean(part));
    const lessonAbbreviations = unique([
      ...(lesson.introducesAbbreviationIds ?? []),
      ...(lesson.reinforcesAbbreviationIds ?? []),
    ])
      .map((abbreviationId) => abbreviationMap.get(abbreviationId))
      .filter((abbreviation): abbreviation is Abbreviation => Boolean(abbreviation));
    const candidates: Exercise[] = [];

    for (const term of lessonTerms) {
      const exercise = buildTermExercise(lesson.id, term, lessonTerms, input.terms);
      if (exercise && !usedPrompts.has(exercise.prompt)) {
        candidates.push(exercise);
        usedPrompts.add(exercise.prompt);
      }
    }

    for (const part of lessonParts) {
      const exercise = buildPartExercise(lesson.id, part, lessonParts, input.parts);
      if (exercise && !usedPrompts.has(exercise.prompt)) {
        candidates.push(exercise);
        usedPrompts.add(exercise.prompt);
      }
    }

    for (const abbreviation of lessonAbbreviations) {
      const exercise = buildAbbreviationExercise(
        lesson.id,
        abbreviation,
        lessonAbbreviations,
        input.abbreviations,
      );
      if (exercise && !usedPrompts.has(exercise.prompt)) {
        candidates.push(exercise);
        usedPrompts.add(exercise.prompt);
      }
    }

    const neededCount = MIN_EXERCISES_PER_LESSON - lesson.exerciseSetIds.length;
    const supplementalForLesson = candidates.slice(0, neededCount);
    if (supplementalForLesson.length === 0) {
      continue;
    }

    supplementalExercises.push(...supplementalForLesson);
    lessonExerciseIds[lesson.id] = supplementalForLesson.map((exercise) => exercise.id);
  }

  return {
    exercises: supplementalExercises,
    lessonExerciseIds,
  };
}
