import { useEffect, useState } from "react";
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
  const introducedAbbreviations = content.abbreviations.filter((abbreviation) =>
    (lesson.introducesAbbreviationIds ?? []).includes(abbreviation.id),
  );
  const allAnswered = lessonExercises.every((exercise) => answers[exercise.id]);
  const nextLesson = getNextLesson(lesson.id);
  const priorScoreLabel = getLessonScoreLabel(lesson.id);
  const lessonIndex = content.lessons.findIndex((entry) => entry.id === lesson.id);
  const firstAttemptCorrect = lessonExercises.reduce((count, exercise) => {
    return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
  }, 0);

  useEffect(() => {
    setCurrentLesson(lesson.id);
  }, [lesson.id]);

  function handleComplete(): void {
    const activeLesson = lesson;
    if (!activeLesson) {
      return;
    }
    const score = lessonExercises.reduce((count, exercise) => {
      return count + (firstAnswers[exercise.id] === exercise.answer ? 1 : 0);
    }, 0);

    completeLesson(activeLesson.id, score, lessonExercises.length);
    setCompletedThisVisit(true);
  }

  function handleSelect(exerciseId: string, choice: string): void {
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
          Lesson {lessonIndex + 1} of {content.lessons.length} · {lesson.estimatedMinutes} min
          {priorScoreLabel ? ` · ${priorScoreLabel}` : ""} · {lessonExercises.length} checks
        </p>
        <p className="meta-copy">
          Why this matters: {lesson.whyItMatters}
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
                <p className="meta-copy">
                  {part.pronunciationText} · examples: {part.examples.join(", ")}
                </p>
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
                  {term.pronunciationText} · {term.bodySystem} · {term.compositionality}
                </p>
                <p className="meta-copy">{term.shortDefinition}</p>
                <p className="meta-copy">
                  {term.parts.length > 0
                    ? term.parts
                        .map((part) => `${part.text} = ${part.meaning}`)
                        .join(" · ")
                    : "Recognition-first term without a safe decomposition."}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {introducedAbbreviations.length > 0 ? (
        <section className="card stack">
          <h3>Introduced abbreviations</h3>
          <div className="tag-grid">
            {introducedAbbreviations.map((abbreviation) => (
              <article key={abbreviation.id} className="tag-card">
                <div className="title-row">
                  <strong>{abbreviation.shortForm}</strong>
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() =>
                      speakText(abbreviation.shortForm, progress.settings.audioEnabled)
                    }
                  >
                    Speak
                  </button>
                </div>
                <p>{abbreviation.expandedForm}</p>
                <p className="meta-copy">
                  {abbreviation.category}
                  {abbreviation.ambiguous ? " · ambiguous" : " · recognition-first"}
                </p>
                <p className="meta-copy">{abbreviation.meaning}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="stack">
        {lessonExercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.id}
            allowRetry
            exercise={exercise}
            indexLabel={`Exercise ${index + 1} of ${lessonExercises.length}`}
            onRetry={() =>
              setAnswers((current) => {
                const next = { ...current };
                delete next[exercise.id];
                return next;
              })
            }
            selectedChoice={answers[exercise.id] ?? null}
            onSelect={(choice) => handleSelect(exercise.id, choice)}
          />
        ))}
      </section>

      <section className="card lesson-footer">
        <p className="meta-copy">
          Completion seeds introduced terms into review. Abbreviations remain
          recognition-first lesson content and stay browseable on the dedicated abbreviations page.
          Mastery uses first attempts, so retries support learning without requiring a perfect score.
        </p>
        {Object.keys(firstAnswers).length > 0 ? (
          <p className="meta-copy">
            First-pass score this visit: {firstAttemptCorrect} / {lessonExercises.length}
          </p>
        ) : null}
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
            <div className="hero-actions">
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
              <Link className="text-link" to="/review">
                Review newly seeded terms
              </Link>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
