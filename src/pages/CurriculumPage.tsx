import { Link } from "react-router-dom";
import { content } from "../content";
import { useAppState } from "../app/AppState";

export function CurriculumPage() {
  const { getLessonScoreLabel, progress, setCurrentLesson } = useAppState();

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">Curriculum map</p>
        <h2>Seed curriculum</h2>
        <p>
          This first pass focuses on Unit 0 foundations and a narrow Unit 1
          launch slice. Later units remain visible so the sequence stays
          concrete.
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
              {unit.lessonIds.map((lessonId) => {
                const lesson = content.lessons.find((item) => item.id === lessonId);
                if (!lesson) {
                  return null;
                }

                const scoreLabel = getLessonScoreLabel(lesson.id);
                const completed = progress.lessons[lesson.id]?.completed;

                return (
                  <li key={lesson.id} className="lesson-row">
                    <div>
                      <h4>{lesson.title}</h4>
                      <p>{lesson.objective}</p>
                      <p className="meta-copy">
                        {lesson.estimatedMinutes} min
                        {scoreLabel ? ` · ${scoreLabel}` : ""}
                      </p>
                    </div>
                    <div className="lesson-actions">
                      <span className={completed ? "lesson-state done" : "lesson-state"}>
                        {completed ? "Completed" : "Open"}
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
