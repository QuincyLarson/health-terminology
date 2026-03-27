export interface LessonProgress {
  completed: boolean;
  mastery: number;
  score: number;
  totalExercises: number;
  lastVisitedAt: string;
}

export interface TermProgress {
  seenCount: number;
  correctCount: number;
  incorrectCount: number;
  easeFactor: number;
  intervalDays: number;
  nextDueAt: string | null;
  lastSeenAt: string | null;
  suspended: boolean;
}

export interface AppSettings {
  audioEnabled: boolean;
  reducedMotion: boolean;
}

export interface AppUserState {
  currentUnitId: string | null;
  currentLessonId: string | null;
}

export interface ProgressState {
  version: number;
  user: AppUserState;
  lessons: Record<string, LessonProgress>;
  terms: Record<string, TermProgress>;
  settings: AppSettings;
}
