import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content } from "../content";

export function ProgressPage() {
  const { dueTerms, eligibleTerms, newTerms, orderedLessons, progress, stats, storageSnapshotSize } =
    useAppState();
  const currentLesson = orderedLessons.find(
    (lesson) => lesson.id === progress.user.currentLessonId,
  );
  const recentLessons = Object.entries(progress.lessons)
    .sort(([, left], [, right]) =>
      right.lastVisitedAt.localeCompare(left.lastVisitedAt),
    )
    .slice(0, 5)
    .map(([lessonId, lessonProgress]) => ({
      title: content.lessons.find((lesson) => lesson.id === lessonId)?.title ?? lessonId,
      lessonProgress,
    }));
  const bodySystemStats = Array.from(
    new Set(content.terms.map((term) => term.bodySystem)),
  ).map((bodySystem) => {
    const terms = eligibleTerms.filter((term) => term.bodySystem === bodySystem);
    const seen = terms.filter((term) => (progress.terms[term.id]?.seenCount ?? 0) > 0).length;
    const due = terms.filter((term) => dueTerms.some((dueTerm) => dueTerm.id === term.id)).length;
    return {
      bodySystem,
      eligible: terms.length,
      seen,
      due,
    };
  });

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">Progress</p>
        <h2>Local progress and study stats</h2>
        <p>
          Progress tracks lesson completion, review state, and app settings
          entirely in localStorage.
        </p>
      </section>

      <section className="stats-grid">
        <article className="card stat-card">
          <p className="stat-label">Units complete</p>
          <p className="stat-value">
            {stats.completedUnits} / {stats.totalUnits}
          </p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Terms seen</p>
          <p className="stat-value">{stats.seenTerms}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Due now</p>
          <p className="stat-value">{stats.dueTerms}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Accuracy</p>
          <p className="stat-value">{Math.round(stats.accuracyRate * 100)}%</p>
        </article>
      </section>

      <section className="card stack">
        <h3>Current path</h3>
        <p>
          Current lesson: {currentLesson?.title ?? "None selected"} · New terms
          available: {newTerms.length} · Eligible terms: {eligibleTerms.length}
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to={`/lesson/${currentLesson?.id ?? orderedLessons[0]?.id}`}>
            Resume lesson
          </Link>
          <Link className="button" to="/review">
            Review due terms
          </Link>
          <Link className="button" to="/settings">
            Manage backup
          </Link>
        </div>
      </section>

      <section className="card stack">
        <h3>Recent lessons</h3>
        {recentLessons.length > 0 ? (
          <ul className="lesson-list">
            {recentLessons.map((entry) => (
              <li key={entry.title} className="lesson-row">
                <div>
                  <h4>{entry.title}</h4>
                  <p className="meta-copy">
                    {Math.round(entry.lessonProgress.mastery * 100)}% mastery ·
                    {` ${new Date(entry.lessonProgress.lastVisitedAt).toLocaleString()}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="meta-copy">No lesson activity yet.</p>
        )}
      </section>

      <section className="card stack">
        <h3>Body-system coverage</h3>
        <div className="breakdown-grid">
          {bodySystemStats.map((entry) => (
            <article key={entry.bodySystem} className="tag-card">
              <strong>{entry.bodySystem}</strong>
              <p className="meta-copy">
                eligible {entry.eligible} · seen {entry.seen} · due {entry.due}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="card stack">
        <h3>Storage diagnostics</h3>
        <p className="meta-copy">
          Schema version: {progress.version} · Snapshot size: {storageSnapshotSize} bytes
        </p>
        <p className="meta-copy">
          Lessons tracked: {Object.keys(progress.lessons).length} · Terms tracked:{" "}
          {Object.keys(progress.terms).length}
        </p>
      </section>
    </div>
  );
}
