import type { Lesson, Term } from "../../types/content";
import type {
  AppSettings,
  LessonProgress,
  ProgressExport,
  ProgressState,
  TermProgress,
} from "../../types/progress";

export const STORAGE_KEY = "healthterms.progress.v1";
export const STORAGE_VERSION = 1;

const defaultSettings: AppSettings = {
  audioEnabled: true,
  reducedMotion: false,
};

export function createDefaultProgressState(): ProgressState {
  return {
    version: STORAGE_VERSION,
    user: {
      currentUnitId: "unit-0",
      currentLessonId: "lesson-unit0-word-parts",
    },
    lessons: {},
    terms: {},
    settings: defaultSettings,
  };
}

export function loadProgressState(): ProgressState {
  if (typeof window === "undefined") {
    return createDefaultProgressState();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultProgressState();
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return migrateProgressState(parsed);
  } catch {
    return createDefaultProgressState();
  }
}

export function saveProgressState(state: ProgressState): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function migrateProgressState(
  state: Partial<ProgressState> | Partial<ProgressExport>,
): ProgressState {
  return {
    version: STORAGE_VERSION,
    user: {
      currentUnitId: state.user?.currentUnitId ?? "unit-0",
      currentLessonId: state.user?.currentLessonId ?? "lesson-unit0-word-parts",
    },
    lessons: state.lessons ?? {},
    terms: state.terms ?? {},
    settings: {
      audioEnabled: state.settings?.audioEnabled ?? defaultSettings.audioEnabled,
      reducedMotion:
        state.settings?.reducedMotion ?? defaultSettings.reducedMotion,
    },
  };
}

export function createProgressExport(state: ProgressState): ProgressExport {
  return {
    version: STORAGE_VERSION,
    exportedAt: new Date().toISOString(),
    user: state.user,
    lessons: state.lessons,
    terms: state.terms,
    settings: state.settings,
  };
}

export function parseImportedProgress(raw: string): ProgressState {
  const parsed = JSON.parse(raw) as unknown;
  if (!isPlainObject(parsed)) {
    throw new Error("Progress import must be a JSON object.");
  }

  if (typeof parsed.version !== "number") {
    throw new Error("Progress import is missing a numeric version.");
  }

  return migrateProgressState(parsed as Partial<ProgressState>);
}

export function getStorageSnapshotSize(state: ProgressState): number {
  return new Blob([JSON.stringify(state)]).size;
}

export function createLessonProgress(
  score: number,
  totalExercises: number,
): LessonProgress {
  const mastery = totalExercises === 0 ? 1 : score / totalExercises;
  return {
    completed: true,
    mastery,
    score,
    totalExercises,
    lastVisitedAt: new Date().toISOString(),
  };
}

export function seedLessonTerms(
  existing: Record<string, TermProgress>,
  lesson: Lesson,
  terms: Term[],
): Record<string, TermProgress> {
  const next = { ...existing };
  const dueAt = new Date().toISOString();

  for (const termId of lesson.introducesTermIds) {
    const term = terms.find((item) => item.id === termId);
    if (!term || next[termId]) {
      continue;
    }

    next[termId] = {
      seenCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      easeFactor: 2.3,
      intervalDays: 0,
      nextDueAt: dueAt,
      lastSeenAt: null,
      suspended: false,
    };
  }

  return next;
}

export function updateTermAfterReview(
  existing: TermProgress | undefined,
  correct: boolean,
): TermProgress {
  const prior = existing ?? {
    seenCount: 0,
    correctCount: 0,
    incorrectCount: 0,
    easeFactor: 2.3,
    intervalDays: 0,
    nextDueAt: null,
    lastSeenAt: null,
    suspended: false,
  };

  const easeFactor = correct
    ? Math.min(3, prior.easeFactor + 0.1)
    : Math.max(1.3, prior.easeFactor - 0.2);
  const intervalDays = correct
    ? Math.max(1, Math.round((prior.intervalDays || 1) * easeFactor))
    : 0;

  const nextDue = new Date();
  if (correct) {
    nextDue.setDate(nextDue.getDate() + intervalDays);
  }

  return {
    seenCount: prior.seenCount + 1,
    correctCount: prior.correctCount + (correct ? 1 : 0),
    incorrectCount: prior.incorrectCount + (correct ? 0 : 1),
    easeFactor,
    intervalDays,
    nextDueAt: correct ? nextDue.toISOString() : new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
    suspended: false,
  };
}
