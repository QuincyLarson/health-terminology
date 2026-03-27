import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";

export function HomePage() {
  const { dueTerms, eligibleTerms, newTerms, orderedLessons, progress, stats } =
    useAppState();
  const currentLessonId =
    progress.user.currentLessonId ?? orderedLessons[0]?.id ?? "lesson-unit0-word-parts";
  const currentLesson =
    orderedLessons.find((lesson) => lesson.id === currentLessonId) ?? orderedLessons[0];

  return (
    <div className="page-grid">
      <section className="card hero-card">
        <p className="eyebrow">Current state</p>
        <h2>Curriculum, review, endless study, and local progress now work together.</h2>
        <p>
          The current build follows the PRD more closely: curriculum guidance,
          lesson progression, due/new/mixed review, endless mode, and
          progress/stats all live in the same local-only app.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/lesson/${currentLesson?.id}`}>
            {stats.completedLessons === 0 ? "Start Unit 0" : "Resume learning"}
          </Link>
          <Link className="button" to="/curriculum">
            Open curriculum map
          </Link>
          <Link className="button" to="/endless">
            Open endless mode
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
          <p className="eyebrow">Next lesson</p>
          <h3>{currentLesson?.title}</h3>
          <p>{currentLesson?.objective}</p>
          <Link className="text-link" to={`/lesson/${currentLesson?.id}`}>
            Continue to lesson
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
    </div>
  );
}
