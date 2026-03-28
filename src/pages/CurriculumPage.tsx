import { Link } from "react-router-dom";
import { content, contentMaps } from "../content";
import { useAppState } from "../app/AppState";
import { getLessonSummary } from "../lib/curriculum/lessonSummary";

export function CurriculumPage() {
  const {
    dueTerms,
    getLessonScoreLabel,
    isLessonUnlocked,
    newTerms,
    progress,
    setCurrentLesson,
  } = useAppState();
  const dueTermIds = new Set(dueTerms.map((term) => term.id));
  const newTermIds = new Set(newTerms.map((term) => term.id));

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">Curriculum map</p>
        <h2>Seed curriculum</h2>
        <p>
          The current seed now spans Units 0 through 6 with authored lessons
          for foundations, body systems, clinical language, administrative
          text, abbreviations, and mixed synthesis.
        </p>
      </section>

      {content.units.map((unit) => (
        <section key={unit.id} className="card stack">
          <div className="unit-heading">
            <div>
              <p className="eyebrow">{unit.id}</p>
              <h3>{unit.title}</h3>
            </div>
            <span className={`status-pill status-${unit.status}`}>{unit.status}</span>
          </div>
          <p>{unit.summary}</p>
          {unit.lessonIds.length > 0 ? (
            <ul className="lesson-list">
              {(contentMaps.lessonsByUnitId.get(unit.id) ?? []).map((lesson) => {
                const scoreLabel = getLessonScoreLabel(lesson.id);
                const lessonProgress = progress.lessons[lesson.id];
                const completed = lessonProgress?.completed;
                const unlocked = isLessonUnlocked(lesson.id);
                const inProgress = Boolean(lessonProgress) && !lessonProgress.completed;
                const reviewRecommended =
                  Boolean(lessonProgress?.completed) &&
                  lesson.introducesTermIds.some(
                    (termId) => dueTermIds.has(termId) || newTermIds.has(termId),
                  );
                const prerequisiteTitles = lesson.prerequisiteLessonIds
                  .map((prerequisiteId) =>
                    contentMaps.lessonMap.get(prerequisiteId)?.title,
                  )
                  .filter((title): title is string => Boolean(title));
                const lessonState = completed
                  ? reviewRecommended
                    ? "Review recommended"
                    : "Completed"
                  : inProgress
                    ? "In progress"
                    : unlocked
                      ? "Ready"
                      : "Recommended later";

                return (
                  <li key={lesson.id} className="lesson-row">
                    <div>
                      <h4>{lesson.title}</h4>
                      <p>{getLessonSummary(lesson)}</p>
                      <p className="meta-copy">
                        {lesson.estimatedMinutes} min
                        {scoreLabel ? ` · ${scoreLabel}` : ""}
                        {!unlocked && prerequisiteTitles.length > 0
                          ? ` · Recommended after ${prerequisiteTitles.join(", ")}`
                          : ""}
                      </p>
                    </div>
                    <div className="lesson-actions">
                      <span className={completed ? "lesson-state done" : "lesson-state"}>
                        {lessonState}
                      </span>
                      <Link
                        className="button"
                        to={`/lesson/${lesson.id}`}
                        onClick={() => setCurrentLesson(lesson.id)}
                      >
                        Open
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="meta-copy">This unit is planned but not yet authored.</p>
          )}
        </section>
      ))}
    </div>
  );
}
