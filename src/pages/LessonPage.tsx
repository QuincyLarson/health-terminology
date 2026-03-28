import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { ExerciseCard } from "../components/ExerciseCard";
import { content } from "../content";
import { speakText } from "../lib/audio/speak";

export function LessonPage() {
  const { lessonId } = useParams();
  const {
    completeLesson,
    getLessonById,
    getLessonScoreLabel,
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
  const priorScoreLabel = getLessonScoreLabel(lesson.id);
  const lessonIndex = content.lessons.findIndex((entry) => entry.id === lesson.id);
  const firstAttemptCorrect = lessonExercises.reduce((count, exercise) => {
    return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
  }, 0);
  const activeExercise = lessonExercises[activeExerciseIndex];
  const completedExercises = lessonExercises.filter(
    (exercise) => answers[exercise.id] === exercise.answer,
  ).length;
  const progressPercent =
    lessonExercises.length === 0
      ? 100
      : Math.round((completedExercises / lessonExercises.length) * 100);

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
        <div className="title-row">
          <div>
            <p className="eyebrow">{lesson.unitId}</p>
            <h1>{lesson.title}</h1>
          </div>
          <button
            type="button"
            className="button button-quiet"
            onClick={() => speakText(lesson.title, progress.settings.audioEnabled)}
          >
            Speak title
          </button>
        </div>
        <p>{lesson.objective}</p>
        <p className="meta-copy">
          Lesson {lessonIndex + 1} of {content.lessons.length} · {lesson.estimatedMinutes} min
          {priorScoreLabel ? ` · ${priorScoreLabel}` : ""} · {lessonExercises.length} checks
        </p>
        <p className="meta-copy">Why this matters: {lesson.whyItMatters}</p>
      </section>

      <section className="lesson-reference-grid">
        {introducedParts.length > 0 ? (
          <article className="reference-panel stack">
            <h3>Parts</h3>
            {introducedParts.map((part) => (
              <div key={part.id} className="mini-row">
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
          </article>
        ) : null}

        {introducedTerms.length > 0 ? (
          <article className="reference-panel stack">
            <h3>Example terms</h3>
            {introducedTerms.slice(0, 6).map((term) => (
              <div key={term.id} className="stack compact-card">
                <div className="mini-row">
                  <strong>{term.term}</strong>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => speakText(term.term, progress.settings.audioEnabled)}
                  >
                    Speak
                  </button>
                </div>
                <p className="meta-copy">{term.plainMeaning}</p>
              </div>
            ))}
          </article>
        ) : null}

        {introducedAbbreviations.length > 0 ? (
          <article className="reference-panel stack">
            <h3>Abbreviations</h3>
            {introducedAbbreviations.map((abbreviation) => (
              <div key={abbreviation.id} className="stack compact-card">
                <strong>{abbreviation.shortForm}</strong>
                <p className="meta-copy">
                  {abbreviation.expandedForm} · {abbreviation.category}
                </p>
              </div>
            ))}
          </article>
        ) : null}
      </section>

      {activeExercise && !completedThisVisit ? (
        <section className="card stack exercise-stage compact-card">
          <div className="stack">
            <div className="title-row">
              <p className="eyebrow">
                Challenge {activeExerciseIndex + 1} of {lessonExercises.length}
              </p>
              <span className="status-pill">{progressPercent}% complete</span>
            </div>
            <div className="exercise-progress-bar" aria-hidden="true">
              <div
                className="exercise-progress-value"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <ExerciseCard
            allowRetry
            exercise={activeExercise}
            indexLabel={`Challenge ${activeExerciseIndex + 1}`}
            onRetry={() => handleRetry(activeExercise.id)}
            selectedChoice={answers[activeExercise.id] ?? null}
            showCelebration={celebratingExerciseId === activeExercise.id}
            onSelect={(choice) => handleSelect(activeExercise.id, choice)}
          />
          <p className="meta-copy">
            First-pass score this visit: {firstAttemptCorrect} / {lessonExercises.length}
          </p>
        </section>
      ) : null}

      {completedThisVisit ? (
        <section className="card stack lesson-footer compact-card">
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
              ) : null}
              <Link className="button" to="/drills">
                Move into drills
              </Link>
              <Link className="button" to="/">
                Back to curriculum
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
