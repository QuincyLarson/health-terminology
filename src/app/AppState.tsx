import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { content } from "../content";
import {
  buildProgressStats,
  getDueTerms,
  getEligibleTerms,
  getMixedTerms,
  getNewTerms,
  getNextRecommendedLesson,
  getOrderedLessons,
  getUnlockedLessons,
  isLessonUnlocked,
  isTermEligible,
} from "../lib/curriculum/selectors";
import {
  createProgressExport,
  createDefaultProgressState,
  createLessonProgress,
  getRecoverySnapshot,
  getStorageSnapshotSize,
  loadProgressStateResult,
  parseImportedProgress,
  saveProgressState,
  seedLessonTerms,
  touchLessonProgress,
  updateTermAfterReview,
} from "../lib/progress/storage";
import type { Lesson, Term } from "../types/content";
import type { ProgressState, ThemePreference } from "../types/progress";

interface AppStateValue {
  eligibleTerms: Term[];
  mixedTerms: Term[];
  progress: ProgressState;
  recommendedLesson: Lesson | undefined;
  recoveryNotice: string | null;
  dueTerms: Term[];
  hasRecoverySnapshot: boolean;
  newTerms: Term[];
  orderedLessons: Lesson[];
  resolvedTheme: "light" | "dark";
  storageSnapshotSize: number;
  themePreference: ThemePreference;
  unlockedLessons: Lesson[];
  stats: ReturnType<typeof buildProgressStats>;
  completeLesson: (lessonId: string, score: number, totalExercises: number) => void;
  exportProgress: () => string;
  getLessonById: (lessonId: string) => Lesson | undefined;
  getLessonScoreLabel: (lessonId: string) => string | null;
  getNextLesson: (lessonId: string) => Lesson | undefined;
  importProgress: (raw: string) => void;
  isLessonUnlocked: (lessonId: string) => boolean;
  isTermEligible: (termId: string) => boolean;
  recordReviewResult: (termId: string, correct: boolean) => void;
  resetProgress: () => void;
  setCurrentLesson: (lessonId: string) => void;
  setSetting: (key: "audioEnabled" | "reducedMotion", value: boolean) => void;
  setThemePreference: (value: ThemePreference) => void;
}

const AppStateContext = createContext<AppStateValue | null>(null);
const orderedLessons = getOrderedLessons();

function findLesson(lessonId: string): Lesson | undefined {
  return content.lessons.find((lesson) => lesson.id === lessonId);
}

export function AppStateProvider({ children }: PropsWithChildren) {
  const [initialLoad] = useState(() => loadProgressStateResult());
  const [progress, setProgress] = useState<ProgressState>(() => {
    return initialLoad.state ?? createDefaultProgressState();
  });
  const [recoveryNotice] = useState<string | null>(initialLoad.recoveryNotice);
  const [hasRecoverySnapshot] = useState<boolean>(
    initialLoad.hasRecoverySnapshot || Boolean(getRecoverySnapshot()),
  );
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    saveProgressState(progress);
  }, [progress]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent): void => {
      setSystemPrefersDark(event.matches);
    };

    setSystemPrefersDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const themePreference = progress.settings.themePreference;
  const resolvedTheme =
    themePreference === "system"
      ? systemPrefersDark
        ? "dark"
        : "light"
      : themePreference;

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const unlockedLessons = getUnlockedLessons(progress);
  const eligibleTerms = getEligibleTerms(progress);
  const dueTerms = getDueTerms(progress);
  const newTerms = getNewTerms(progress);
  const mixedTerms = getMixedTerms(progress);
  const stats = buildProgressStats(progress);
  const storageSnapshotSize = getStorageSnapshotSize(progress);
  const recommendedLesson = getNextRecommendedLesson(progress) ?? orderedLessons[0];

  function getLessonById(lessonId: string): Lesson | undefined {
    return findLesson(lessonId);
  }

  function getNextLesson(lessonId: string): Lesson | undefined {
    const index = orderedLessons.findIndex((lesson) => lesson.id === lessonId);
    if (index === -1) {
      return orderedLessons[0];
    }
    return orderedLessons[index + 1];
  }

  function setCurrentLesson(lessonId: string): void {
    const lesson = findLesson(lessonId);
    if (!lesson) {
      return;
    }
    setProgress((current) => ({
      ...current,
      lessons: {
        ...current.lessons,
        [lesson.id]: touchLessonProgress(current.lessons[lesson.id]),
      },
      user: {
        currentLessonId: lesson.id,
        currentUnitId: lesson.unitId,
      },
    }));
  }

  function completeLesson(
    lessonId: string,
    score: number,
    totalExercises: number,
  ): void {
    const lesson = findLesson(lessonId);
    if (!lesson) {
      return;
    }

    setProgress((current) => {
      const lessons = {
        ...current.lessons,
        [lessonId]: createLessonProgress(score, totalExercises),
      };
      const terms = seedLessonTerms(current.terms, lesson, content.terms);
      const draftState = {
        ...current,
        lessons,
        terms,
      };
      const nextLesson =
        getNextRecommendedLesson(draftState) ?? getNextLesson(lessonId);
      return {
        ...draftState,
        user: {
          currentLessonId: nextLesson?.id ?? lesson.id,
          currentUnitId: nextLesson?.unitId ?? lesson.unitId,
        },
      };
    });
  }

  function recordReviewResult(termId: string, correct: boolean): void {
    setProgress((current) => ({
      ...current,
      terms: {
        ...current.terms,
        [termId]: updateTermAfterReview(current.terms[termId], correct),
      },
    }));
  }

  function exportProgress(): string {
    return JSON.stringify(createProgressExport(progress), null, 2);
  }

  function importProgress(raw: string): void {
    setProgress(parseImportedProgress(raw));
  }

  function resetProgress(): void {
    setProgress(createDefaultProgressState());
  }

  function setSetting(
    key: "audioEnabled" | "reducedMotion",
    value: boolean,
  ): void {
    setProgress((current) => ({
      ...current,
      settings: {
        ...current.settings,
        [key]: value,
      },
    }));
  }

  function setThemePreference(value: ThemePreference): void {
    setProgress((current) => ({
      ...current,
      settings: {
        ...current.settings,
        themePreference: value,
      },
    }));
  }

  function getLessonScoreLabel(lessonId: string): string | null {
    const lesson = progress.lessons[lessonId];
    if (!lesson) {
      return null;
    }
    return `${Math.round(lesson.mastery * 100)}% mastery`;
  }

  function getLessonUnlocked(lessonId: string): boolean {
    const lesson = findLesson(lessonId);
    if (!lesson) {
      return false;
    }
    return isLessonUnlocked(lesson, progress);
  }

  function getTermEligible(termId: string): boolean {
    const term = content.terms.find((item) => item.id === termId);
    if (!term) {
      return false;
    }
    return isTermEligible(term, progress);
  }

  return (
    <AppStateContext.Provider
      value={{
        eligibleTerms,
        mixedTerms,
        progress,
        recommendedLesson,
        recoveryNotice,
        dueTerms,
        hasRecoverySnapshot,
        newTerms,
        orderedLessons,
        resolvedTheme,
        storageSnapshotSize,
        themePreference,
        unlockedLessons,
        stats,
        completeLesson,
        exportProgress,
        getLessonById,
        getLessonScoreLabel,
        getNextLesson,
        importProgress,
        isLessonUnlocked: getLessonUnlocked,
        isTermEligible: getTermEligible,
        recordReviewResult,
        resetProgress,
        setCurrentLesson,
        setSetting,
        setThemePreference,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState(): AppStateValue {
  const value = useContext(AppStateContext);
  if (!value) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return value;
}
