import type { Exercise } from "../types/content";

interface ExerciseCardProps {
  exercise: Exercise;
  indexLabel?: string;
  allowRetry?: boolean;
  onRetry?: () => void;
  selectedChoice: string | null;
  onSelect: (choice: string) => void;
}

export function ExerciseCard({
  allowRetry = false,
  exercise,
  indexLabel,
  onRetry,
  selectedChoice,
  onSelect,
}: ExerciseCardProps) {
  const answered = selectedChoice !== null;
  const correct = selectedChoice === exercise.answer;

  return (
    <article className="card exercise-card">
      <p className="exercise-type">
        {indexLabel ? `${indexLabel} · ` : ""}
        {exercise.type.replaceAll("_", " ")}
      </p>
      <h3>{exercise.prompt}</h3>
      <div className="choice-list">
        {exercise.choices.map((choice) => (
          <button
            key={choice}
            type="button"
            className={`choice-button${
              answered
                ? choice === exercise.answer
                  ? " choice-correct"
                  : choice === selectedChoice
                    ? " choice-incorrect"
                    : ""
                : ""
            }`}
            onClick={() => onSelect(choice)}
            disabled={answered}
          >
            {choice}
          </button>
        ))}
      </div>
      {answered ? (
        <div className="stack">
          <p className={`feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`}>
            <strong>{correct ? "Correct." : "Needs another try."}</strong>{" "}
            {exercise.explanation}
          </p>
          {!correct && allowRetry && onRetry ? (
            <div className="hero-actions">
              <button type="button" className="button button-quiet" onClick={onRetry}>
                Retry this item
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
