import { Link } from "react-router-dom";
import { content } from "../content";
import { useAppState } from "../app/AppState";

export function HomePage() {
  const { dueTerms, newTerms, orderedLessons, progress } = useAppState();
  const currentLessonId =
    progress.user.currentLessonId ?? orderedLessons[0]?.id ?? "lesson-unit0-word-parts";
  const currentLesson =
    orderedLessons.find((lesson) => lesson.id === currentLessonId) ?? orderedLessons[0];
  const completedLessons = orderedLessons.filter(
    (lesson) => progress.lessons[lesson.id]?.completed,
  ).length;

  return (
    <div className="page-grid">
      <section className="card hero-card">
        <p className="eyebrow">Current state</p>
        <h2>Documentation has moved into a working seed app.</h2>
        <p>
          The current build includes Unit 0 foundations, first-pass Unit 1
          affix lessons, content validation, local progress persistence, and
          basic review queues.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/lesson/${currentLesson?.id}`}>
            {completedLessons === 0 ? "Start Unit 0" : "Resume learning"}
          </Link>
          <Link className="button" to="/curriculum">
            Open curriculum map
          </Link>
        </div>
      </section>

      <section className="stats-grid">
        <article className="card stat-card">
          <p className="stat-label">Lessons complete</p>
          <p className="stat-value">
            {completedLessons} / {orderedLessons.length}
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
          <p className="stat-label">Seed terms</p>
          <p className="stat-value">{content.terms.length}</p>
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">Next lesson</p>
        <h3>{currentLesson?.title}</h3>
        <p>{currentLesson?.objective}</p>
        <Link className="text-link" to={`/lesson/${currentLesson?.id}`}>
          Continue to lesson
        </Link>
      </section>
    </div>
  );
}
