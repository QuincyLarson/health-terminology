import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";

export function HomePage() {
  const {
    dueTerms,
    eligibleTerms,
    newTerms,
    orderedLessons,
    progress,
    recommendedLesson,
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
  const resumeLabel =
    stats.completedLessons === 0
      ? "Start Unit 0"
      : currentLessonProgress && !currentLessonProgress.completed
        ? "Resume lesson"
        : "Continue with next lesson";

  return (
    <div className="page-grid">
      <section className="card hero-card">
        <p className="eyebrow">HealthTerms.com</p>
        <h2>Learn medical language by decoding reusable parts, not memorizing a glossary.</h2>
        <p>
          This is a serious, local-only medical terminology course for curious
          adults. The main path is the curriculum spine: learn high-yield parts,
          complete lessons, then reinforce them through review and endless study.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/lesson/${activeLesson?.id}`}>
            {resumeLabel}
          </Link>
          {dueTerms.length > 0 ? (
            <Link className="button" to="/review">
              Review due terms
            </Link>
          ) : (
            <Link className="button" to="/curriculum">
              Open curriculum map
            </Link>
          )}
          <Link className="button" to="/about">
            Read methodology
          </Link>
        </div>
      </section>

      <section className="stats-grid">
        <article className="card stat-card">
          <p className="stat-label">Lessons complete</p>
          <p className="stat-value">
            {stats.completedLessons} / {stats.totalLessons}
          </p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">New review terms</p>
          <p className="stat-value">{newTerms.length}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Due now</p>
          <p className="stat-value">{dueTerms.length}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Eligible terms</p>
          <p className="stat-value">{eligibleTerms.length}</p>
        </article>
      </section>

      <section className="card stack">
        <div>
          <p className="eyebrow">
            {currentLessonProgress && !currentLessonProgress.completed
              ? "Resume lesson"
              : "Next recommended lesson"}
          </p>
          <h3>{activeLesson?.title}</h3>
          <p>{activeLesson?.objective}</p>
          <Link className="text-link" to={`/lesson/${activeLesson?.id}`}>
            Open lesson
          </Link>
        </div>
        <div>
          <p className="eyebrow">Next review move</p>
          <p className="meta-copy">
            Due now: {dueTerms.length} · New queue: {newTerms.length} · Accuracy:{" "}
            {Math.round(stats.accuracyRate * 100)}%
          </p>
          <div className="hero-actions">
            <Link className="button" to="/review">
              Start review
            </Link>
            <Link className="button" to="/progress">
              Open progress
            </Link>
          </div>
        </div>
      </section>

      <section className="card stack">
        <p className="eyebrow">Curriculum preview</p>
        {orderedLessons.slice(0, 4).map((lesson, index) => (
          <div key={lesson.id} className="mini-row">
            <strong>
              {index + 1}. {lesson.title}
            </strong>
            <p className="meta-copy">
              {lesson.unitId} · {lesson.estimatedMinutes} min
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
