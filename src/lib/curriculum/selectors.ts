import { content } from "../../content";
import type { Lesson, Term } from "../../types/content";
import type { ProgressState, TermProgress } from "../../types/progress";

export interface ProgressStats {
  completedLessons: number;
  totalLessons: number;
  completedUnits: number;
  totalUnits: number;
  seenTerms: number;
  dueTerms: number;
  newTerms: number;
  accuracyRate: number;
}

const lessonMap = new Map(content.lessons.map((lesson) => [lesson.id, lesson]));
const partMap = new Map(content.parts.map((part) => [part.id, part]));

export function getOrderedLessons(): Lesson[] {
  return content.units.flatMap((unit) =>
    unit.lessonIds
      .map((lessonId) => lessonMap.get(lessonId))
      .filter((lesson): lesson is Lesson => Boolean(lesson)),
  );
}

export function getCompletedLessonIds(progress: ProgressState): Set<string> {
  return new Set(
    Object.entries(progress.lessons)
      .filter(([, lesson]) => lesson.completed)
      .map(([lessonId]) => lessonId),
  );
}

export function getLearnedPartIds(progress: ProgressState): Set<string> {
  const completedLessonIds = getCompletedLessonIds(progress);
  const learnedPartIds = new Set<string>();

  for (const lessonId of completedLessonIds) {
    const lesson = lessonMap.get(lessonId);
    if (!lesson) {
      continue;
    }
    for (const partId of lesson.introducesPartIds) {
      learnedPartIds.add(partId);
    }
  }

  return learnedPartIds;
}

export function isLessonUnlocked(
  lesson: Lesson,
  progress: ProgressState,
): boolean {
  if (lesson.prerequisiteLessonIds.length === 0) {
    return true;
  }

  const completedLessonIds = getCompletedLessonIds(progress);
  return lesson.prerequisiteLessonIds.every((lessonId) =>
    completedLessonIds.has(lessonId),
  );
}

export function getUnlockedLessons(progress: ProgressState): Lesson[] {
  return getOrderedLessons().filter((lesson) => isLessonUnlocked(lesson, progress));
}

export function getNextRecommendedLesson(
  progress: ProgressState,
): Lesson | undefined {
  const orderedLessons = getOrderedLessons();
  return orderedLessons.find((lesson) => !progress.lessons[lesson.id]?.completed);
}

export function isTermEligible(
  term: Term,
  progress: ProgressState,
): boolean {
  const completedLessonIds = getCompletedLessonIds(progress);
  const learnedPartIds = getLearnedPartIds(progress);
  if (progress.terms[term.id]) {
    return true;
  }

  const partsSatisfied =
    term.prerequisiteIds.length === 0 ||
    term.prerequisiteIds.every((partId) => {
      if (!partMap.has(partId)) {
        return false;
      }
      return learnedPartIds.has(partId);
    });

  const lessonsSatisfied =
    term.prerequisiteLessonIds.length === 0 ||
    term.prerequisiteLessonIds.every((lessonId) =>
      completedLessonIds.has(lessonId),
    );

  return partsSatisfied && lessonsSatisfied;
}

export function getEligibleTerms(progress: ProgressState): Term[] {
  return content.terms.filter((term) => isTermEligible(term, progress));
}

export function getDueTerms(progress: ProgressState): Term[] {
  return content.terms.filter((term) => {
    const state = progress.terms[term.id];
    if (!state || state.suspended || state.seenCount === 0 || !state.nextDueAt) {
      return false;
    }
    return new Date(state.nextDueAt) <= new Date();
  });
}

export function getNewTerms(
  progress: ProgressState,
  maxCount = 10,
): Term[] {
  return content.terms
    .filter((term) => {
      const state = progress.terms[term.id];
      return Boolean(state) && state.seenCount === 0 && !state.suspended;
    })
    .slice(0, maxCount);
}

export function getMixedTerms(
  progress: ProgressState,
  maxCount = 12,
  maxNew = 4,
): Term[] {
  const dueTerms = getDueTerms(progress);
  const newTerms = getNewTerms(progress, Math.min(maxNew, maxCount));
  const targetDueCount = Math.max(0, maxCount - Math.min(maxNew, maxCount));
  const mixed = [
    ...dueTerms.slice(0, targetDueCount),
    ...newTerms,
    ...dueTerms.slice(targetDueCount),
  ].filter(
    (term, index, allTerms) =>
      allTerms.findIndex((candidate) => candidate.id === term.id) === index,
  );
  return mixed.slice(0, maxCount);
}

export function getReviewProgress(termId: string, progress: ProgressState): TermProgress {
  return (
    progress.terms[termId] ?? {
      seenCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      easeFactor: 2.3,
      intervalDays: 0,
      nextDueAt: null,
      lastSeenAt: null,
      suspended: false,
    }
  );
}

export function buildProgressStats(progress: ProgressState): ProgressStats {
  const completedLessons = Object.values(progress.lessons).filter(
    (lesson) => lesson.completed,
  ).length;
  const completedLessonIds = getCompletedLessonIds(progress);
  const completedUnits = content.units.filter((unit) =>
    unit.lessonIds.length > 0 &&
    unit.lessonIds.every((lessonId) => completedLessonIds.has(lessonId)),
  ).length;
  const termEntries = Object.values(progress.terms);
  const correctAnswers = termEntries.reduce(
    (count, entry) => count + entry.correctCount,
    0,
  );
  const totalAttempts = termEntries.reduce(
    (count, entry) => count + entry.correctCount + entry.incorrectCount,
    0,
  );

  return {
    completedLessons,
    totalLessons: content.lessons.length,
    completedUnits,
    totalUnits: content.units.length,
    seenTerms: termEntries.filter((entry) => entry.seenCount > 0).length,
    dueTerms: getDueTerms(progress).length,
    newTerms: getNewTerms(progress).length,
    accuracyRate: totalAttempts === 0 ? 0 : correctAnswers / totalAttempts,
  };
}
