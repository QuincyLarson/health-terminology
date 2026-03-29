import type { Exercise } from "../types/content";

interface ExerciseCardProps {
  exercise: Exercise;
  indexLabel?: string;
  selectedChoice: string | null;
  showCelebration?: boolean;
  showRetryNotice?: boolean;
  onSelect: (choice: string) => void;
}

export function ExerciseCard({
  exercise,
  indexLabel,
  selectedChoice,
  showCelebration = false,
  showRetryNotice = false,
  onSelect,
}: ExerciseCardProps) {
  const answered = selectedChoice !== null;
  const correct = selectedChoice === exercise.answer;

  return (
    <article className="card exercise-card">
      {showCelebration && correct ? (
        <p className="success-burst" aria-live="assertive">
          Correct!
        </p>
      ) : null}
      {indexLabel ? <p className="exercise-type">{indexLabel}</p> : null}
      <h3 className="exercise-prompt">{exercise.prompt}</h3>
      <div className="choice-list">
        {exercise.choices.map((choice) => (
          <button
            key={choice}
            type="button"
            className={`choice-button${
              answered
                ? correct
                  ? choice === exercise.answer
                    ? " choice-correct"
                    : ""
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
      {showRetryNotice ? <p className="feedback feedback-incorrect">Try again in a bit.</p> : null}
    </article>
  );
}
