import { content, contentMaps } from "../../content";
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

const lessonMap = contentMaps.lessonMap;
const partMap = contentMaps.partMap;
const orderedLessons = content.units.flatMap(
  (unit) => contentMaps.lessonsByUnitId.get(unit.id) ?? [],
);
const defaultTermProgress = {
  seenCount: 0,
  correctCount: 0,
  incorrectCount: 0,
  easeFactor: 2.3,
  intervalDays: 0,
  nextDueAt: null,
  lastSeenAt: null,
  suspended: false,
} satisfies TermProgress;

export interface DerivedProgressCollections {
  completedLessonIds: Set<string>;
  dueTerms: Term[];
  eligibleTermIds: Set<string>;
  eligibleTerms: Term[];
  learnedPartIds: Set<string>;
  mixedTerms: Term[];
  newTerms: Term[];
  recommendedLesson: Lesson | undefined;
  stats: ProgressStats;
  unlockedLessonIds: Set<string>;
  unlockedLessons: Lesson[];
}

function isLessonUnlockedWithCompletedIds(
  lesson: Lesson,
  completedLessonIds: Set<string>,
): boolean {
  return lesson.prerequisiteLessonIds.every((lessonId) =>
    completedLessonIds.has(lessonId),
  );
}

function getLearnedPartIdsFromCompletedLessons(
  completedLessonIds: Set<string>,
): Set<string> {
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

function isTermEligibleWithSets(
  term: Term,
  progress: ProgressState,
  completedLessonIds: Set<string>,
  learnedPartIds: Set<string>,
): boolean {
  if (progress.terms[term.id]) {
    return true;
  }

  const partsSatisfied =
    term.prerequisiteIds.length === 0 ||
    term.prerequisiteIds.every(
      (partId) => partMap.has(partId) && learnedPartIds.has(partId),
    );

  const lessonsSatisfied =
    term.prerequisiteLessonIds.length === 0 ||
    term.prerequisiteLessonIds.every((lessonId) =>
      completedLessonIds.has(lessonId),
    );

  return partsSatisfied && lessonsSatisfied;
}

export function getOrderedLessons(): Lesson[] {
  return orderedLessons;
}

export function getCompletedLessonIds(progress: ProgressState): Set<string> {
  return new Set(
    Object.entries(progress.lessons)
      .filter(([, lesson]) => lesson.completed)
      .map(([lessonId]) => lessonId),
  );
}

export function getLearnedPartIds(progress: ProgressState): Set<string> {
  return getLearnedPartIdsFromCompletedLessons(getCompletedLessonIds(progress));
}

export function isLessonUnlocked(
  lesson: Lesson,
  progress: ProgressState,
): boolean {
  if (lesson.prerequisiteLessonIds.length === 0) {
    return true;
  }

  return isLessonUnlockedWithCompletedIds(
    lesson,
    getCompletedLessonIds(progress),
  );
}

export function getUnlockedLessons(progress: ProgressState): Lesson[] {
  return deriveProgressCollections(progress).unlockedLessons;
}

export function getNextRecommendedLesson(
  progress: ProgressState,
): Lesson | undefined {
  return deriveProgressCollections(progress).recommendedLesson;
}

export function isTermEligible(
  term: Term,
  progress: ProgressState,
): boolean {
  const completedLessonIds = getCompletedLessonIds(progress);
  const learnedPartIds = getLearnedPartIdsFromCompletedLessons(completedLessonIds);
  return isTermEligibleWithSets(
    term,
    progress,
    completedLessonIds,
    learnedPartIds,
  );
}

export function getEligibleTerms(progress: ProgressState): Term[] {
  return deriveProgressCollections(progress).eligibleTerms;
}

export function getDueTerms(progress: ProgressState): Term[] {
  return deriveProgressCollections(progress).dueTerms;
}

export function getNewTerms(
  progress: ProgressState,
  maxCount = 10,
): Term[] {
  return deriveProgressCollections(progress).newTerms.slice(0, maxCount);
}

export function getMixedTerms(
  progress: ProgressState,
  maxCount = 12,
  maxNew = 4,
): Term[] {
  const derived = deriveProgressCollections(progress);
  const dueTerms = derived.dueTerms;
  const newTerms = derived.newTerms.slice(0, Math.min(maxNew, maxCount));
  const targetDueCount = Math.max(0, maxCount - Math.min(maxNew, maxCount));
  const mixed: Term[] = [];
  const seenTermIds = new Set<string>();

  for (const term of [
    ...dueTerms.slice(0, targetDueCount),
    ...newTerms,
    ...dueTerms.slice(targetDueCount),
  ]) {
    if (seenTermIds.has(term.id)) {
      continue;
    }

    mixed.push(term);
    seenTermIds.add(term.id);

    if (mixed.length >= maxCount) {
      break;
    }
  }

  return mixed;
}

export function getReviewProgress(termId: string, progress: ProgressState): TermProgress {
  return progress.terms[termId] ?? defaultTermProgress;
}

export function buildProgressStats(progress: ProgressState): ProgressStats {
  return deriveProgressCollections(progress).stats;
}

export function deriveProgressCollections(
  progress: ProgressState,
  maxMixedCount = 12,
  maxNewForMixed = 4,
): DerivedProgressCollections {
  const completedLessons = Object.values(progress.lessons).filter(
    (lesson) => lesson.completed,
  ).length;
  const completedLessonIds = getCompletedLessonIds(progress);
  const learnedPartIds = getLearnedPartIdsFromCompletedLessons(completedLessonIds);
  const unlockedLessons = orderedLessons.filter((lesson) =>
    lesson.prerequisiteLessonIds.length === 0 ||
    isLessonUnlockedWithCompletedIds(lesson, completedLessonIds),
  );
  const unlockedLessonIds = new Set(unlockedLessons.map((lesson) => lesson.id));
  const recommendedLesson = orderedLessons.find(
    (lesson) => !progress.lessons[lesson.id]?.completed,
  );
  const dueTerms: Term[] = [];
  const newTerms: Term[] = [];
  const eligibleTerms: Term[] = [];
  const eligibleTermIds = new Set<string>();
  const now = Date.now();

  for (const term of content.terms) {
    if (isTermEligibleWithSets(term, progress, completedLessonIds, learnedPartIds)) {
      eligibleTerms.push(term);
      eligibleTermIds.add(term.id);
    }

    const state = progress.terms[term.id];
    if (!state || state.suspended) {
      continue;
    }

    if (state.seenCount === 0) {
      newTerms.push(term);
      continue;
    }

    if (state.nextDueAt && new Date(state.nextDueAt).getTime() <= now) {
      dueTerms.push(term);
    }
  }

  const targetNewCount = Math.min(maxNewForMixed, maxMixedCount);
  const targetDueCount = Math.max(0, maxMixedCount - targetNewCount);
  const mixedTerms: Term[] = [];
  const mixedTermIds = new Set<string>();

  for (const term of [
    ...dueTerms.slice(0, targetDueCount),
    ...newTerms.slice(0, targetNewCount),
    ...dueTerms.slice(targetDueCount),
  ]) {
    if (mixedTermIds.has(term.id)) {
      continue;
    }
    mixedTerms.push(term);
    mixedTermIds.add(term.id);
    if (mixedTerms.length >= maxMixedCount) {
      break;
    }
  }

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
    completedLessonIds,
    dueTerms,
    eligibleTermIds,
    eligibleTerms,
    learnedPartIds,
    mixedTerms,
    newTerms,
    recommendedLesson,
    stats: {
      completedLessons,
      totalLessons: content.lessons.length,
      completedUnits,
      totalUnits: content.units.length,
      seenTerms: termEntries.filter((entry) => entry.seenCount > 0).length,
      dueTerms: dueTerms.length,
      newTerms: newTerms.length,
      accuracyRate: totalAttempts === 0 ? 0 : correctAnswers / totalAttempts,
    },
    unlockedLessonIds,
    unlockedLessons,
  };
}
