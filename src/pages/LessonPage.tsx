import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { ExerciseCard } from "../components/ExerciseCard";
import { contentMaps } from "../content";
import { getLessonSummary } from "../lib/curriculum/lessonSummary";
import { speakText } from "../lib/audio/speak";

export function LessonPage() {
  const { lessonId } = useParams();
  const {
    completeLesson,
    getLessonById,
    getNextLesson,
    progress,
    setCurrentLesson,
  } = useAppState();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [firstAnswers, setFirstAnswers] = useState<Record<string, string>>({});
  const [celebratingExerciseId, setCelebratingExerciseId] = useState<string | null>(null);
  const [exerciseQueue, setExerciseQueue] = useState<string[]>([]);
  const [pendingAdvance, setPendingAdvance] = useState<{
    correct: boolean;
    exerciseId: string;
  } | null>(null);
  const [completedThisVisit, setCompletedThisVisit] = useState(false);

  const lessonExercises = useMemo(
    () =>
      (lesson?.exerciseSetIds ?? [])
        .map((exerciseId) => contentMaps.exerciseMap.get(exerciseId))
        .filter((exercise): exercise is NonNullable<typeof exercise> => Boolean(exercise)),
    [lesson],
  );

  useEffect(() => {
    if (!lesson) {
      return;
    }

    setCurrentLesson(lesson.id);
    setAnswers({});
    setFirstAnswers({});
    setCelebratingExerciseId(null);
    setExerciseQueue(lessonExercises.map((exercise) => exercise.id));
    setPendingAdvance(null);
    setCompletedThisVisit(false);
  }, [lesson?.id]);

  useEffect(() => {
    if (!pendingAdvance) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const { correct, exerciseId } = pendingAdvance;

      setCelebratingExerciseId(null);
      setPendingAdvance(null);
      setAnswers((current) => {
        const next = { ...current };
        delete next[exerciseId];
        return next;
      });
      setExerciseQueue((current) => {
        if (current[0] !== exerciseId) {
          return current;
        }

        const [, ...remaining] = current;
        return correct ? remaining : [...remaining, exerciseId];
      });
    }, progress.settings.reducedMotion ? 250 : 1000);

    return () => window.clearTimeout(timeoutId);
  }, [
    pendingAdvance,
    progress.settings.reducedMotion,
  ]);

  useEffect(() => {
    if (!lesson || completedThisVisit || lessonExercises.length === 0 || exerciseQueue.length > 0) {
      return;
    }

    const score = lessonExercises.reduce((count, exercise) => {
      return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
    }, 0);
    completeLesson(lesson.id, score, lessonExercises.length);
    setCompletedThisVisit(true);
  }, [
    completeLesson,
    completedThisVisit,
    exerciseQueue.length,
    firstAnswers,
    lesson,
    lessonExercises,
  ]);

  if (!lesson) {
    return (
      <section className="card">
        <h2>Lesson not found</h2>
        <Link className="text-link" to="/">
          Return to curriculum
        </Link>
      </section>
    );
  }

  const introducedParts = contentMaps.partsByLessonId.get(lesson.id) ?? [];
  const exampleTerms = Array.from(
    new Map(
      [...(contentMaps.termsByLessonId.get(lesson.id) ?? []), ...lesson.reinforcesTermIds]
        .map((term) => (typeof term === "string" ? contentMaps.termMap.get(term) : term))
        .filter((term): term is NonNullable<ReturnType<typeof contentMaps.termMap.get>> =>
          Boolean(term),
        )
        .map((term) => [term.id, term]),
    ).values(),
  );
  const introducedAbbreviations = (lesson.introducesAbbreviationIds ?? [])
    .map((abbreviationId) => contentMaps.abbreviationMap.get(abbreviationId))
    .filter((abbreviation): abbreviation is NonNullable<typeof abbreviation> =>
      Boolean(abbreviation),
    );
  const nextLesson = getNextLesson(lesson.id);
  const firstAttemptCorrect = lessonExercises.reduce((count, exercise) => {
    return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
  }, 0);
  const activeExerciseId = exerciseQueue[0] ?? null;
  const activeExercise = activeExerciseId
    ? contentMaps.exerciseMap.get(activeExerciseId)
    : undefined;

  function handleSelect(exerciseId: string, choice: string): void {
    const exercise = contentMaps.exerciseMap.get(exerciseId);
    if (!exercise || pendingAdvance) {
      return;
    }

    setAnswers((current) => ({
      ...current,
      [exerciseId]: choice,
    }));
    setFirstAnswers((current) =>
      current[exerciseId]
        ? current
        : {
            ...current,
            [exerciseId]: choice,
          },
    );

    const correct = choice === exercise.answer;
    if (!correct) {
      setCelebratingExerciseId(null);
    }

    setPendingAdvance({ correct, exerciseId });
    if (choice === exercise.answer) {
      setCelebratingExerciseId(exerciseId);
    }
  }

  return (
    <div className="stack lesson-shell">
      <section className="card stack compact-card">
        <p className="eyebrow">{lesson.unitId}</p>
        <h1>{lesson.title}</h1>
        <p>{getLessonSummary(lesson)}</p>
      </section>

      {completedThisVisit ? (
        <section className="exercise-stage">
          <section className="card stack compact-card completion-card">
            <div className="completion-box stack">
              <h3>Lesson complete</h3>
              <p>Questions answered on first try: {firstAttemptCorrect} / {lessonExercises.length}</p>
              <div className="hero-actions">
                {nextLesson ? (
                  <Link
                    className="button button-primary"
                    to={`/lesson/${nextLesson.id}`}
                    onClick={() => setCurrentLesson(nextLesson.id)}
                  >
                    Continue to next lesson
                  </Link>
                ) : (
                  <Link className="button button-primary" to="/drills">
                    Open drills
                  </Link>
                )}
              </div>
            </div>
          </section>
        </section>
      ) : activeExercise ? (
        <section className="exercise-stage">
          <ExerciseCard
            exercise={activeExercise}
            selectedChoice={answers[activeExercise.id] ?? null}
            showCelebration={celebratingExerciseId === activeExercise.id}
            showRetryNotice={
              pendingAdvance?.exerciseId === activeExercise.id &&
              !pendingAdvance.correct
            }
            onSelect={(choice) => handleSelect(activeExercise.id, choice)}
          />
        </section>
      ) : null}

      <section className="card stack compact-card">
        {introducedParts.length > 0 ? (
          <article className="stack reference-section reference-section-inline">
            <div className="reference-list reference-table">
              {introducedParts.map((part) => (
                <div key={part.id} className="reference-row reference-table-row">
                  <strong className="reference-term">{part.text}</strong>
                  <p className="meta-copy reference-meaning">{part.plainMeaning}</p>
                  <button
                    type="button"
                    aria-label={`Play pronunciation for ${part.text}`}
                    className="button button-quiet speaker-button"
                    onClick={() => speakText(part.text, progress.settings.audioEnabled)}
                  >
                    <span aria-hidden="true">&#128266;</span>
                  </button>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {exampleTerms.length > 0 ? (
          <article className="stack reference-section">
            <h3>Example terms</h3>
            <div className="reference-list reference-table">
              {exampleTerms.slice(0, 6).map((term) => (
                <div key={term.id} className="reference-row reference-table-row">
                  <strong className="reference-term">{term.term}</strong>
                  <p className="meta-copy reference-meaning">{term.plainMeaning}</p>
                  <button
                    type="button"
                    aria-label={`Play pronunciation for ${term.term}`}
                    className="button button-quiet speaker-button"
                    onClick={() => speakText(term.term, progress.settings.audioEnabled)}
                  >
                    <span aria-hidden="true">&#128266;</span>
                  </button>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {introducedAbbreviations.length > 0 ? (
          <article className="stack reference-section">
            <h3>Abbreviations</h3>
            <div className="reference-list reference-table">
              {introducedAbbreviations.map((abbreviation) => (
                <div key={abbreviation.id} className="reference-row reference-table-row">
                  <strong className="reference-term">{abbreviation.shortForm}</strong>
                  <p className="meta-copy reference-meaning">
                    {abbreviation.expandedForm} · {abbreviation.category}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ) : null}
      </section>
    </div>
  );
}
