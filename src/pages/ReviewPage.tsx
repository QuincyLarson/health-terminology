import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content } from "../content";
import type { Term } from "../types/content";

type ReviewMode = "due" | "new" | "mixed";

function buildChoices(term: Term): string[] {
  const distractors = content.terms
    .filter((candidate) => candidate.id !== term.id)
    .slice(0, 3)
    .map((candidate) => candidate.plainMeaning);

  return [...distractors, term.plainMeaning].sort();
}

export function ReviewPage() {
  const { dueTerms, newTerms, recordReviewResult } = useAppState();
  const defaultMode: ReviewMode = dueTerms.length > 0 ? "due" : "new";
  const [mode, setMode] = useState<ReviewMode>(defaultMode);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const queue =
    mode === "due"
      ? dueTerms
      : mode === "new"
        ? newTerms.slice(0, 10)
        : [...dueTerms, ...newTerms].filter(
            (term, queueIndex, merged) =>
              merged.findIndex((item) => item.id === term.id) === queueIndex,
          );

  const current = queue[index];
  const choices = current ? buildChoices(current) : [];

  function advance(correct: boolean): void {
    if (!current) {
      return;
    }
    recordReviewResult(current.id, correct);
    setSelected(null);
    setIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">Review</p>
        <h2>Due, new, or mixed</h2>
        <div className="hero-actions">
          {(["due", "new", "mixed"] as ReviewMode[]).map((candidate) => (
            <button
              key={candidate}
              type="button"
              className={candidate === mode ? "button button-primary" : "button"}
              onClick={() => {
                setMode(candidate);
                setIndex(0);
                setSelected(null);
              }}
            >
              {candidate}
            </button>
          ))}
        </div>
        <p className="meta-copy">
          Due: {dueTerms.length} · New: {newTerms.length}
        </p>
      </section>

      {!current ? (
        <section className="card">
          <h3>No terms in this queue yet.</h3>
          <p>
            Finish a lesson to seed review, or switch queues if you want to see
            available items.
          </p>
          <Link className="text-link" to="/curriculum">
            Return to curriculum
          </Link>
        </section>
      ) : (
        <section className="card stack">
          <div className="title-row">
            <div>
              <p className="eyebrow">
                {mode} · {index + 1} / {queue.length}
              </p>
              <h3>{current.term}</h3>
            </div>
            <span className="status-pill">{current.bodySystem}</span>
          </div>
          <p className="meta-copy">{current.pronunciationText}</p>
          <p>Select the best plain-English meaning.</p>
          <div className="choice-list">
            {choices.map((choice) => (
              <button
                key={choice}
                type="button"
                className={`choice-button${
                  selected
                    ? choice === current.plainMeaning
                      ? " choice-correct"
                      : choice === selected
                        ? " choice-incorrect"
                        : ""
                    : ""
                }`}
                disabled={selected !== null}
                onClick={() => setSelected(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          {selected ? (
            <div className="completion-box">
              <p>{current.shortDefinition}</p>
              <button
                type="button"
                className="button button-primary"
                onClick={() => advance(selected === current.plainMeaning)}
              >
                Next card
              </button>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}
