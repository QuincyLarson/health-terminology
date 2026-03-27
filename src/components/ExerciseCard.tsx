import type { Exercise } from "../types/content";

interface ExerciseCardProps {
  exercise: Exercise;
  selectedChoice: string | null;
  onSelect: (choice: string) => void;
}

export function ExerciseCard({
  exercise,
  selectedChoice,
  onSelect,
}: ExerciseCardProps) {
  const answered = selectedChoice !== null;
  const correct = selectedChoice === exercise.answer;

  return (
    <article className="card exercise-card">
      <p className="exercise-type">{exercise.type.replaceAll("_", " ")}</p>
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
        <p className={`feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`}>
          {exercise.explanation}
        </p>
      ) : null}
    </article>
  );
}
