import type { Lesson, Term } from "../../types/content";
import type {
  AppUserState,
  AppSettings,
  LessonProgress,
  ProgressExport,
  ProgressState,
  TermProgress,
  ThemePreference,
} from "../../types/progress";

export const STORAGE_KEY = "healthterminology.progress.v1";
export const RECOVERY_STORAGE_KEY = "healthterminology.progress.v1.recovery";
export const LEGACY_STORAGE_KEY = "healthterms.progress.v1";
export const LEGACY_RECOVERY_STORAGE_KEY = "healthterms.progress.v1.recovery";
export const STORAGE_VERSION = 1;

interface StorageLike {
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
}

interface ProgressImportShape {
  version?: number;
  user?: Partial<AppUserState>;
  lessons?: Record<string, LessonProgress>;
  terms?: Record<string, TermProgress>;
  settings?: Partial<AppSettings>;
  exportedAt?: string;
}

export interface LoadProgressResult {
  hasRecoverySnapshot: boolean;
  recoveryNotice: string | null;
  state: ProgressState;
}

const defaultSettings: AppSettings = {
  audioEnabled: true,
  reducedMotion: false,
  themePreference: "system",
};

function isThemePreference(value: unknown): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

function getBrowserStorage(): StorageLike | null {
  if (typeof globalThis !== "object" || globalThis === null) {
    return null;
  }

  const candidate = globalThis as { localStorage?: StorageLike };
  return candidate.localStorage ?? null;
}

function preserveRecoverySnapshot(raw: string): void {
  const storage = getBrowserStorage();
  if (!storage) {
    return;
  }
  storage.setItem(RECOVERY_STORAGE_KEY, raw);
}

export function getRecoverySnapshot(): string | null {
  const storage = getBrowserStorage();
  if (!storage) {
    return null;
  }
  return (
    storage.getItem(RECOVERY_STORAGE_KEY) ??
    storage.getItem(LEGACY_RECOVERY_STORAGE_KEY)
  );
}

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

export function loadProgressStateResult(): LoadProgressResult {
  const storage = getBrowserStorage();
  if (!storage) {
    return {
      hasRecoverySnapshot: false,
      recoveryNotice: null,
      state: createDefaultProgressState(),
    };
  }

  const raw = storage.getItem(STORAGE_KEY) ?? storage.getItem(LEGACY_STORAGE_KEY);
  if (!raw) {
    return {
      hasRecoverySnapshot: Boolean(
        storage.getItem(RECOVERY_STORAGE_KEY) ??
          storage.getItem(LEGACY_RECOVERY_STORAGE_KEY),
      ),
      recoveryNotice: null,
      state: createDefaultProgressState(),
    };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!isPlainObject(parsed) || typeof parsed.version !== "number") {
      preserveRecoverySnapshot(raw);
      return {
        hasRecoverySnapshot: true,
        recoveryNotice:
          "Saved local progress could not be read safely. A raw recovery backup was preserved and the app loaded a clean local state.",
        state: createDefaultProgressState(),
      };
    }

    return {
      hasRecoverySnapshot: Boolean(
        storage.getItem(RECOVERY_STORAGE_KEY) ??
          storage.getItem(LEGACY_RECOVERY_STORAGE_KEY),
      ),
      recoveryNotice: null,
      state: migrateProgressState(parsed as ProgressImportShape),
    };
  } catch {
    preserveRecoverySnapshot(raw);
    return {
      hasRecoverySnapshot: true,
      recoveryNotice:
        "Saved local progress was corrupted or unreadable. A raw recovery backup was preserved and the app loaded a clean local state.",
      state: createDefaultProgressState(),
    };
  }
}

export function loadProgressState(): ProgressState {
  return loadProgressStateResult().state;
}

export function saveProgressState(state: ProgressState): void {
  const storage = getBrowserStorage();
  if (!storage) {
    return;
  }
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function migrateProgressState(
  state: ProgressImportShape = {},
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
      themePreference: isThemePreference(state.settings?.themePreference)
        ? state.settings.themePreference
        : defaultSettings.themePreference,
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

export function touchLessonProgress(
  existing: LessonProgress | undefined,
): LessonProgress {
  if (existing) {
    return {
      ...existing,
      lastVisitedAt: new Date().toISOString(),
    };
  }

  return {
    completed: false,
    mastery: 0,
    score: 0,
    totalExercises: 0,
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
