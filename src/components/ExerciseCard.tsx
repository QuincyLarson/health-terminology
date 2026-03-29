import { useMemo } from "react";
import type { Exercise } from "../types/content";

interface ExerciseCardProps {
  exercise: Exercise;
  selectedChoice: string | null;
  showCelebration?: boolean;
  showRetryNotice?: boolean;
  onSelect: (choice: string) => void;
}

function hashText(value: string): number {
  let hash = 0;

  for (const character of value) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return hash;
}

function shuffleChoices(choices: string[], seed: string): string[] {
  const shuffled = [...choices];
  let state = hashText(seed);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function ExerciseCard({
  exercise,
  selectedChoice,
  showCelebration = false,
  showRetryNotice = false,
  onSelect,
}: ExerciseCardProps) {
  const answered = selectedChoice !== null;
  const correct = selectedChoice === exercise.answer;
  const shuffledChoices = useMemo(
    () => shuffleChoices(exercise.choices, exercise.id),
    [exercise.choices, exercise.id],
  );

  return (
    <article className="card exercise-card">
      {showCelebration && correct ? (
        <p className="success-burst" aria-live="assertive">
          Correct!
        </p>
      ) : null}
      <h3 className="exercise-prompt">{exercise.prompt}</h3>
      <div className="choice-list">
        {shuffledChoices.map((choice) => (
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
