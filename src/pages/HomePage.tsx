import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content } from "../content";

export function HomePage() {
  const {
    dueTerms,
    getLessonScoreLabel,
    isLessonUnlocked,
    newTerms,
    orderedLessons,
    progress,
    recommendedLesson,
    setCurrentLesson,
    stats,
  } = useAppState();

  const currentLessonId =
    progress.user.currentLessonId ?? orderedLessons[0]?.id ?? "lesson-unit0-word-parts";
  const currentLesson =
    orderedLessons.find((lesson) => lesson.id === currentLessonId) ?? orderedLessons[0];
  const currentLessonProgress = currentLesson ? progress.lessons[currentLesson.id] : undefined;
  const activeLesson =
    currentLessonProgress && !currentLessonProgress.completed
      ? currentLesson
      : recommendedLesson ?? currentLesson;
  const dueTermIds = new Set(dueTerms.map((term) => term.id));
  const newTermIds = new Set(newTerms.map((term) => term.id));
  const completedLessonIds = new Set(
    Object.entries(progress.lessons)
      .filter(([, lessonProgress]) => lessonProgress.completed)
      .map(([lessonId]) => lessonId),
  );

  return (
    <div className="stack">
      <section className="card learn-hero">
        <p className="eyebrow">HealthTerminology.com</p>
        <h1>Learn Latin and Greek to understand thousands of medical terms.</h1>
        <p>
          Each lesson teaches a small set of reusable roots, affixes, or
          decoding patterns, then applies them in short checks.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/lesson/${activeLesson?.id}`}>
            {stats.completedLessons === 0 ? "Start lesson 1" : "Continue lesson"}
          </Link>
          <Link className="button" to="/drills">
            Open drills
          </Link>
          <Link className="button" to="/profile">
            Open profile
          </Link>
        </div>
      </section>

      <section className="stats-grid learn-stats">
        <article className="card stat-card stat-card-inline">
          <p className="stat-label">Lessons complete</p>
          <p className="stat-value">
            {stats.completedLessons} / {stats.totalLessons}
          </p>
        </article>
        <article className="card stat-card stat-card-inline">
          <p className="stat-label">Due drills</p>
          <p className="stat-value">{dueTerms.length}</p>
        </article>
        <article className="card stat-card stat-card-inline">
          <p className="stat-label">New terms</p>
          <p className="stat-value">{newTerms.length}</p>
        </article>
        <article className="card stat-card stat-card-inline">
          <p className="stat-label">Current lesson</p>
          <p className="stat-value stat-value-small">{activeLesson?.title ?? "Ready"}</p>
        </article>
      </section>

      {content.units.map((unit) => {
        const authoredLessons = unit.lessonIds
          .map((lessonId) => content.lessons.find((lesson) => lesson.id === lessonId))
          .filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson));
        const completedCount = authoredLessons.filter((lesson) =>
          completedLessonIds.has(lesson.id),
        ).length;
        const unitCompleted =
          authoredLessons.length > 0 && completedCount === authoredLessons.length;

        return (
          <section key={unit.id} className="card stack curriculum-section">
            <div className="unit-heading">
              <div>
                <p className="eyebrow">{unit.id}</p>
                <h2>{unit.title}</h2>
              </div>
              <div className="unit-summary-badges">
                <span className={`status-pill${unitCompleted ? " status-complete" : ""}`}>
                  {unitCompleted ? "Complete" : unit.status}
                </span>
                <span className="status-pill">
                  {completedCount} / {authoredLessons.length} complete
                </span>
              </div>
            </div>
            <p className="meta-copy">{unit.summary}</p>
            <ul className="lesson-list curriculum-list">
              {authoredLessons.map((lesson, index) => {
                const lessonProgress = progress.lessons[lesson.id];
                const completed = Boolean(lessonProgress?.completed);
                const unlocked = isLessonUnlocked(lesson.id);
                const inProgress = Boolean(lessonProgress) && !lessonProgress.completed;
                const reviewRecommended =
                  completed &&
                  lesson.introducesTermIds.some(
                    (termId) => dueTermIds.has(termId) || newTermIds.has(termId),
                  );
                const lessonState = completed
                  ? reviewRecommended
                    ? "Drill recommended"
                    : "Completed"
                  : inProgress
                    ? "In progress"
                    : unlocked
                      ? "Ready"
                      : "Locked";
                const scoreLabel = getLessonScoreLabel(lesson.id);

                return (
                  <li key={lesson.id} className="lesson-row curriculum-row">
                    <div className="lesson-check-column" aria-hidden="true">
                      <span className={`lesson-check${completed ? " done" : ""}`}>
                        {completed ? "✓" : index + 1}
                      </span>
                    </div>
                    <div className="lesson-copy">
                      <h3>{lesson.title}</h3>
                      <p>{lesson.objective}</p>
                      <p className="meta-copy">
                        {lesson.estimatedMinutes} min · {lessonState}
                        {scoreLabel ? ` · ${scoreLabel}` : ""}
                      </p>
                    </div>
                    <div className="lesson-actions">
                      <Link
                        className="button"
                        to={`/lesson/${lesson.id}`}
                        onClick={() => setCurrentLesson(lesson.id)}
                      >
                        {completed ? "Open again" : inProgress ? "Resume" : "Open"}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
