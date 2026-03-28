import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content, contentMaps } from "../content";
import { getLessonSummary } from "../lib/curriculum/lessonSummary";

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
  const currentLesson = contentMaps.lessonMap.get(currentLessonId) ?? orderedLessons[0];
  const currentLessonProgress = currentLesson ? progress.lessons[currentLesson.id] : undefined;
  const activeLesson =
    currentLessonProgress && !currentLessonProgress.completed
      ? currentLesson
      : recommendedLesson ?? currentLesson;
  const hasTrackedProgress =
    Object.keys(progress.lessons).length > 0 || Object.keys(progress.terms).length > 0;
  const dueTermIds = useMemo(
    () => new Set(dueTerms.map((term) => term.id)),
    [dueTerms],
  );
  const newTermIds = useMemo(
    () => new Set(newTerms.map((term) => term.id)),
    [newTerms],
  );
  const completedLessonIds = useMemo(
    () =>
      new Set(
        Object.entries(progress.lessons)
          .filter(([, lessonProgress]) => lessonProgress.completed)
          .map(([lessonId]) => lessonId),
      ),
    [progress.lessons],
  );
  const unitSummaries = useMemo(
    () =>
      content.units.map((unit) => {
        const authoredLessons = contentMaps.lessonsByUnitId.get(unit.id) ?? [];
        const completedCount = authoredLessons.filter((lesson) =>
          completedLessonIds.has(lesson.id),
        ).length;

        return {
          authoredLessons,
          completedCount,
          unit,
          unitCompleted:
            authoredLessons.length > 0 && completedCount === authoredLessons.length,
        };
      }),
    [completedLessonIds],
  );
  const [collapsedUnits, setCollapsedUnits] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCollapsedUnits((current) => {
      let changed = false;
      const next = { ...current };

      for (const { unit, unitCompleted } of unitSummaries) {
        if (next[unit.id] === undefined && unitCompleted) {
          next[unit.id] = true;
          changed = true;
        }
      }

      return changed ? next : current;
    });
  }, [unitSummaries]);

  function toggleUnit(unitId: string): void {
    setCollapsedUnits((current) => ({
      ...current,
      [unitId]: !(current[unitId] ?? false),
    }));
  }

  return (
    <div className="stack">
      <section className="card learn-hero">
        <h1>Learn Latin and Greek Roots to Understand 1,000s of medical terms.</h1>
        <p className="learn-hero-meta">
          Current lesson: {activeLesson?.title ?? "Ready"} · Lessons complete:{" "}
          {stats.completedLessons}
        </p>
        <div className="hero-actions hero-actions-centered">
          <Link
            className="button button-primary"
            to={`/lesson/${activeLesson?.id}`}
            onClick={() => {
              if (activeLesson) {
                setCurrentLesson(activeLesson.id);
              }
            }}
          >
            {hasTrackedProgress ? "Continue learning" : "Start learning"}
          </Link>
        </div>
      </section>

      {unitSummaries.map(({ authoredLessons, completedCount, unit, unitCompleted }) => {
        const collapsed = collapsedUnits[unit.id] ?? false;

        return (
          <section
            key={unit.id}
            className={`card stack curriculum-section${collapsed ? " curriculum-section-collapsed" : ""}`}
          >
            <button
              type="button"
              className="unit-toggle"
              aria-expanded={!collapsed}
              onClick={() => toggleUnit(unit.id)}
            >
              <div className="unit-toggle-copy">
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
                <span className="unit-toggle-indicator">
                  {collapsed ? "Expand" : "Collapse"}
                </span>
              </div>
            </button>
            {!collapsed ? (
              <>
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
                          <p>{getLessonSummary(lesson)}</p>
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
              </>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
