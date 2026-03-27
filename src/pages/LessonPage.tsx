import { useState } from "react";
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
  const [completedThisVisit, setCompletedThisVisit] = useState(false);

  if (!lesson) {
    return (
      <section className="card">
        <h2>Lesson not found</h2>
        <Link className="text-link" to="/curriculum">
          Return to curriculum
        </Link>
      </section>
    );
  }

  const lessonExercises = lesson.exerciseSetIds
    .map((exerciseId) => content.exercises.find((exercise) => exercise.id === exerciseId))
    .filter((exercise): exercise is NonNullable<typeof exercise> => Boolean(exercise));
  const introducedParts = content.parts.filter((part) =>
    lesson.introducesPartIds.includes(part.id),
  );
  const introducedTerms = content.terms.filter((term) =>
    lesson.introducesTermIds.includes(term.id),
  );
  const allAnswered = lessonExercises.every((exercise) => answers[exercise.id]);
  const nextLesson = getNextLesson(lesson.id);
  const priorScoreLabel = getLessonScoreLabel(lesson.id);

  function handleComplete(): void {
    const activeLesson = lesson;
    if (!activeLesson) {
      return;
    }
    const score = lessonExercises.reduce((count, exercise) => {
      return count + (answers[exercise.id] === exercise.answer ? 1 : 0);
    }, 0);

    completeLesson(activeLesson.id, score, lessonExercises.length);
    setCompletedThisVisit(true);
  }

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">{lesson.unitId}</p>
        <div className="title-row">
          <h2>{lesson.title}</h2>
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
          Why this matters: {lesson.whyItMatters} · {lesson.estimatedMinutes} min
          {priorScoreLabel ? ` · ${priorScoreLabel}` : ""}
        </p>
      </section>

      {introducedParts.length > 0 ? (
        <section className="card stack">
          <h3>Introduced parts</h3>
          <div className="tag-grid">
            {introducedParts.map((part) => (
              <article key={part.id} className="tag-card">
                <div className="title-row">
                  <strong>{part.text}</strong>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => speakText(part.text, progress.settings.audioEnabled)}
                  >
                    Speak
                  </button>
                </div>
                <p>{part.plainMeaning}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {introducedTerms.length > 0 ? (
        <section className="card stack">
          <h3>Example terms</h3>
          <div className="tag-grid">
            {introducedTerms.map((term) => (
              <article key={term.id} className="tag-card">
                <div className="title-row">
                  <strong>{term.term}</strong>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => speakText(term.term, progress.settings.audioEnabled)}
                  >
                    Speak
                  </button>
                </div>
                <p>{term.plainMeaning}</p>
                <p className="meta-copy">
                  {term.parts.map((part) => `${part.text} = ${part.meaning}`).join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="stack">
        {lessonExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            selectedChoice={answers[exercise.id] ?? null}
            onSelect={(choice) =>
              setAnswers((current) => ({
                ...current,
                [exercise.id]: choice,
              }))
            }
          />
        ))}
      </section>

      <section className="card lesson-footer">
        <p className="meta-copy">
          Completion seeds introduced terms into review and stores lesson mastery
          locally.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="button button-primary"
            disabled={!allAnswered}
            onClick={handleComplete}
          >
            Mark lesson complete
          </button>
          <Link className="button" to="/curriculum">
            Back to curriculum
          </Link>
        </div>
        {completedThisVisit ? (
          <div className="completion-box">
            <p>Lesson complete.</p>
            {nextLesson ? (
              <Link
                className="text-link"
                to={`/lesson/${nextLesson.id}`}
                onClick={() => setCurrentLesson(nextLesson.id)}
              >
                Continue to {nextLesson.title}
              </Link>
            ) : (
              <Link className="text-link" to="/review">
                Move into review
              </Link>
            )}
          </div>
        ) : null}
      </section>
    </div>
  );
}
