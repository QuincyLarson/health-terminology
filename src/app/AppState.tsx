import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { content } from "../content";
import {
  createDefaultProgressState,
  createLessonProgress,
  loadProgressState,
  migrateProgressState,
  saveProgressState,
  seedLessonTerms,
  updateTermAfterReview,
} from "../lib/progress/storage";
import type { Lesson, Term } from "../types/content";
import type { ProgressState } from "../types/progress";

interface AppStateValue {
  progress: ProgressState;
  dueTerms: Term[];
  newTerms: Term[];
  orderedLessons: Lesson[];
  completeLesson: (lessonId: string, score: number, totalExercises: number) => void;
  exportProgress: () => string;
  getLessonById: (lessonId: string) => Lesson | undefined;
  getLessonScoreLabel: (lessonId: string) => string | null;
  getNextLesson: (lessonId: string) => Lesson | undefined;
  importProgress: (raw: string) => void;
  recordReviewResult: (termId: string, correct: boolean) => void;
  resetProgress: () => void;
  setCurrentLesson: (lessonId: string) => void;
  setSetting: (key: "audioEnabled" | "reducedMotion", value: boolean) => void;
}

const AppStateContext = createContext<AppStateValue | null>(null);

function buildOrderedLessons(): Lesson[] {
  return content.units.flatMap((unit) =>
    unit.lessonIds
      .map((lessonId) => content.lessons.find((lesson) => lesson.id === lessonId))
      .filter((lesson): lesson is Lesson => Boolean(lesson)),
  );
}

const orderedLessons = buildOrderedLessons();

function findNextIncompleteLesson(progress: ProgressState): Lesson | undefined {
  return orderedLessons.find((lesson) => !progress.lessons[lesson.id]?.completed);
}

function findLesson(lessonId: string): Lesson | undefined {
  return content.lessons.find((lesson) => lesson.id === lessonId);
}

export function AppStateProvider({ children }: PropsWithChildren) {
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === "undefined") {
      return createDefaultProgressState();
    }
    return loadProgressState();
  });

  useEffect(() => {
    saveProgressState(progress);
  }, [progress]);

  const dueTerms = content.terms.filter((term) => {
    const state = progress.terms[term.id];
    if (!state || state.suspended || state.seenCount === 0 || !state.nextDueAt) {
      return false;
    }
    return new Date(state.nextDueAt) <= new Date();
  });

  const newTerms = content.terms.filter((term) => {
    const state = progress.terms[term.id];
    return Boolean(state) && state.seenCount === 0 && !state.suspended;
  });

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
      const nextLesson = getNextLesson(lessonId) ?? findNextIncompleteLesson(current);
      return {
        ...current,
        lessons: {
          ...current.lessons,
          [lessonId]: createLessonProgress(score, totalExercises),
        },
        terms: seedLessonTerms(current.terms, lesson, content.terms),
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
    return JSON.stringify(progress, null, 2);
  }

  function importProgress(raw: string): void {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    setProgress(migrateProgressState(parsed));
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

  function getLessonScoreLabel(lessonId: string): string | null {
    const lesson = progress.lessons[lessonId];
    if (!lesson) {
      return null;
    }
    return `${Math.round(lesson.mastery * 100)}% mastery`;
  }

  return (
    <AppStateContext.Provider
      value={{
        progress,
        dueTerms,
        newTerms,
        orderedLessons,
        completeLesson,
        exportProgress,
        getLessonById,
        getLessonScoreLabel,
        getNextLesson,
        importProgress,
        recordReviewResult,
        resetProgress,
        setCurrentLesson,
        setSetting,
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
