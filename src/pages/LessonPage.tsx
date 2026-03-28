import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { ExerciseCard } from "../components/ExerciseCard";
import { content } from "../content";
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
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [celebratingExerciseId, setCelebratingExerciseId] = useState<string | null>(null);
  const [completedThisVisit, setCompletedThisVisit] = useState(false);

  const lessonExercises = useMemo(
    () =>
      (lesson?.exerciseSetIds ?? [])
        .map((exerciseId) => content.exercises.find((exercise) => exercise.id === exerciseId))
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
    setActiveExerciseIndex(0);
    setCelebratingExerciseId(null);
    setCompletedThisVisit(false);
  }, [lesson?.id]);

  useEffect(() => {
    if (!lesson || !celebratingExerciseId) {
      return;
    }

    const activeLesson = lesson;
    const timeoutId = window.setTimeout(() => {
      setCelebratingExerciseId(null);
      const isLastExercise = activeExerciseIndex >= lessonExercises.length - 1;

      if (isLastExercise) {
        const score = lessonExercises.reduce((count, exercise) => {
          return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
        }, 0);
        completeLesson(activeLesson.id, score, lessonExercises.length);
        setCompletedThisVisit(true);
        return;
      }

      setActiveExerciseIndex((current) => current + 1);
    }, progress.settings.reducedMotion ? 250 : 1000);

    return () => window.clearTimeout(timeoutId);
  }, [
    activeExerciseIndex,
    celebratingExerciseId,
    completeLesson,
    firstAnswers,
    lesson,
    lessonExercises,
    progress.settings.reducedMotion,
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

  const introducedParts = content.parts.filter((part) =>
    lesson.introducesPartIds.includes(part.id),
  );
  const introducedTerms = content.terms.filter((term) =>
    lesson.introducesTermIds.includes(term.id),
  );
  const introducedAbbreviations = content.abbreviations.filter((abbreviation) =>
    (lesson.introducesAbbreviationIds ?? []).includes(abbreviation.id),
  );
  const nextLesson = getNextLesson(lesson.id);
  const firstAttemptCorrect = lessonExercises.reduce((count, exercise) => {
    return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
  }, 0);
  const activeExercise = lessonExercises[activeExerciseIndex];

  function handleSelect(exerciseId: string, choice: string): void {
    const exercise = lessonExercises.find((item) => item.id === exerciseId);
    if (!exercise) {
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

    if (choice === exercise.answer) {
      setCelebratingExerciseId(exerciseId);
    }
  }

  function handleRetry(exerciseId: string): void {
    setAnswers((current) => {
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
  }

  return (
    <div className="stack lesson-shell">
      <section className="card stack compact-card">
        <p className="eyebrow">{lesson.unitId}</p>
        <h1>{lesson.title}</h1>
        <p>{getLessonSummary(lesson)}</p>
        <p className="meta-copy">{lesson.estimatedMinutes} min</p>
      </section>

      <section className="card stack compact-card">
        {introducedParts.length > 0 ? (
          <article className="stack reference-section">
            <h3>Parts</h3>
            <div className="reference-list">
              {introducedParts.map((part) => (
                <div key={part.id} className="reference-row">
                  <div>
                    <strong>{part.text}</strong>
                    <p className="meta-copy">{part.plainMeaning}</p>
                  </div>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => speakText(part.text, progress.settings.audioEnabled)}
                  >
                    Speak
                  </button>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {introducedTerms.length > 0 ? (
          <article className="stack reference-section">
            <h3>Example terms</h3>
            <div className="reference-list">
              {introducedTerms.slice(0, 6).map((term) => (
                <div key={term.id} className="reference-row">
                  <div>
                    <strong>{term.term}</strong>
                    <p className="meta-copy">{term.plainMeaning}</p>
                  </div>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => speakText(term.term, progress.settings.audioEnabled)}
                  >
                    Speak
                  </button>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {introducedAbbreviations.length > 0 ? (
          <article className="stack reference-section">
            <h3>Abbreviations</h3>
            <div className="reference-list">
              {introducedAbbreviations.map((abbreviation) => (
                <div key={abbreviation.id} className="reference-row reference-row-text">
                  <div>
                    <strong>{abbreviation.shortForm}</strong>
                    <p className="meta-copy">
                      {abbreviation.expandedForm} · {abbreviation.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ) : null}
      </section>

      {activeExercise && !completedThisVisit ? (
        <section className="exercise-stage">
          <ExerciseCard
            allowRetry
            exercise={activeExercise}
            indexLabel={`${activeExerciseIndex + 1}.`}
            onRetry={() => handleRetry(activeExercise.id)}
            selectedChoice={answers[activeExercise.id] ?? null}
            showCelebration={celebratingExerciseId === activeExercise.id}
            onSelect={(choice) => handleSelect(activeExercise.id, choice)}
          />
        </section>
      ) : null}

      {completedThisVisit ? (
        <section className="card stack compact-card">
          <div className="completion-box stack">
            <h3>Lesson complete</h3>
            <p>
              First-pass mastery: {firstAttemptCorrect} / {lessonExercises.length}
            </p>
            <div className="hero-actions">
              {nextLesson ? (
                <Link
                  className="button button-primary"
                  to={`/lesson/${nextLesson.id}`}
                  onClick={() => setCurrentLesson(nextLesson.id)}
                >
                  Continue to {nextLesson.title}
                </Link>
              ) : (
                <Link className="button button-primary" to="/drills">
                  Open drills
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
