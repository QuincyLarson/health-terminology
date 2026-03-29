import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content, contentMaps } from "../content";
import type { Term, TermPartLink } from "../types/content";

type QueueMode = "due" | "new" | "mixed";
type DrillMode = "flashcard" | "root_drag_drop";

const SESSION_CAPS: Record<QueueMode, number> = {
  due: 12,
  mixed: 12,
  new: 10,
};

function isDrillReady(term: Term): boolean {
  return term.parts.length >= 2 && term.compositionality !== "opaque";
}

function assignmentIsCorrect(
  assignments: Array<string | null>,
  parts: TermPartLink[],
): boolean {
  return parts.every((part, index) => assignments[index] === part.partId);
}

export function DrillsPage() {
  const { dueTerms, mixedTerms, newTerms, progress, recommendedLesson, recordReviewResult } =
    useAppState();
  const defaultQueueMode: QueueMode = dueTerms.length > 0 ? "due" : "new";
  const [queueMode, setQueueMode] = useState<QueueMode>(defaultQueueMode);
  const [drillMode, setDrillMode] = useState<DrillMode>("flashcard");
  const [unitFilter, setUnitFilter] = useState("all");
  const [bodySystemFilter, setBodySystemFilter] = useState("all");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [flashcardResult, setFlashcardResult] = useState<"correct" | "incorrect" | null>(null);
  const [dragAssignments, setDragAssignments] = useState<Array<string | null>>([]);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [dragResult, setDragResult] = useState<"correct" | "incorrect" | null>(null);

  const lessonMap = contentMaps.lessonMap;
  const bodySystemOptions = useMemo(
    () => Array.from(new Set([...dueTerms, ...newTerms, ...mixedTerms].map((term) => term.bodySystem))).sort(),
    [dueTerms, mixedTerms, newTerms],
  );
  const queueDescriptions: Record<QueueMode, string> = {
    due: "Practice the terms due now.",
    mixed: "Start with due terms, then add a few new ones.",
    new: "Practice terms you just learned.",
  };
  const baseQueue = useMemo(
    () =>
      queueMode === "due" ? dueTerms : queueMode === "new" ? newTerms : mixedTerms,
    [dueTerms, mixedTerms, newTerms, queueMode],
  );
  const queue = useMemo(
    () =>
      baseQueue
        .filter((term) => {
          const matchesUnit =
            unitFilter === "all" ||
            (contentMaps.unitIdsByTermId.get(term.id) ?? []).includes(unitFilter);
          const matchesBodySystem =
            bodySystemFilter === "all" || term.bodySystem === bodySystemFilter;

          return matchesUnit && matchesBodySystem;
        })
        .slice(0, SESSION_CAPS[queueMode]),
    [baseQueue, bodySystemFilter, queueMode, unitFilter],
  );
  const rootQueue = useMemo(
    () => queue.filter((term) => isDrillReady(term)),
    [queue],
  );
  const current = drillMode === "flashcard" ? queue[index] : rootQueue[index];
  const dragParts = current?.parts ?? [];
  const availablePartIds = useMemo(() => {
    const assignedIds = new Set(dragAssignments.filter((assignment): assignment is string => Boolean(assignment)));
    return dragParts
      .map((part) => part.partId)
      .filter((partId) => !assignedIds.has(partId));
  }, [dragAssignments, dragParts]);

  useEffect(() => {
    setRevealed(false);
    setFlashcardResult(null);
    setSelectedPartId(null);
    setDragResult(null);
    setIndex(0);
  }, [bodySystemFilter, drillMode, queueMode, unitFilter]);

  useEffect(() => {
    if (!current || drillMode !== "root_drag_drop") {
      setDragAssignments([]);
      setSelectedPartId(null);
      setDragResult(null);
      return;
    }

    setDragAssignments(Array(current.parts.length).fill(null));
    setSelectedPartId(null);
    setDragResult(null);
  }, [current?.id, drillMode]);

  useEffect(() => {
    if (flashcardResult !== "correct" || !current) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setFlashcardResult(null);
      setRevealed(false);
      setSelectedPartId(null);
      setIndex((currentIndex) => currentIndex + 1);
    }, progress.settings.reducedMotion ? 250 : 1000);

    return () => window.clearTimeout(timeoutId);
  }, [current, flashcardResult, progress.settings.reducedMotion]);

  useEffect(() => {
    if (dragResult !== "correct" || !current) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setDragAssignments(Array(current.parts.length).fill(null));
      setSelectedPartId(null);
      setDragResult(null);
      setIndex((currentIndex) => currentIndex + 1);
    }, progress.settings.reducedMotion ? 250 : 1000);

    return () => window.clearTimeout(timeoutId);
  }, [current, dragResult, progress.settings.reducedMotion]);

  function advance(correct: boolean): void {
    if (!current) {
      return;
    }

    recordReviewResult(current.id, correct);
    setRevealed(false);
    setSelectedPartId(null);
    setDragResult(null);
    setIndex((currentIndex) => currentIndex + 1);
  }

  function assignPart(slotIndex: number, partId: string): void {
    setDragAssignments((currentAssignments) => {
      const nextAssignments = [...currentAssignments];
      const currentSlotIndex = nextAssignments.findIndex((value) => value === partId);

      if (currentSlotIndex !== -1) {
        nextAssignments[currentSlotIndex] = null;
      }

      nextAssignments[slotIndex] = partId;
      return nextAssignments;
    });
    setSelectedPartId(null);
    setDragResult(null);
  }

  function clearSlot(slotIndex: number): void {
    setDragAssignments((currentAssignments) => {
      const nextAssignments = [...currentAssignments];
      nextAssignments[slotIndex] = null;
      return nextAssignments;
    });
    setDragResult(null);
  }

  function checkDragAnswer(): void {
    if (!current) {
      return;
    }

    const correct = assignmentIsCorrect(dragAssignments, current.parts);
    setDragResult(correct ? "correct" : "incorrect");
    recordReviewResult(current.id, correct);
  }

  const queueLength = drillMode === "flashcard" ? queue.length : rootQueue.length;

  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Drills</p>
        <h2>Flashcards and root building</h2>
        <div className="hero-actions">
          {(["flashcard", "root_drag_drop"] as DrillMode[]).map((candidate) => (
            <button
              key={candidate}
              type="button"
              className={candidate === drillMode ? "button button-primary" : "button"}
              onClick={() => setDrillMode(candidate)}
            >
              {candidate === "flashcard" ? "Flashcards" : "Root drag/drop"}
            </button>
          ))}
        </div>
        <div className="hero-actions">
          {(["due", "new", "mixed"] as QueueMode[]).map((candidate) => (
            <button
              key={candidate}
              type="button"
              className={candidate === queueMode ? "button button-primary" : "button"}
              onClick={() => setQueueMode(candidate)}
            >
              {candidate}
            </button>
          ))}
        </div>
        <div className="filter-grid">
          <label>
            <span>Unit</span>
            <select
              className="select-input"
              value={unitFilter}
              onChange={(event) => setUnitFilter(event.target.value)}
            >
              <option value="all">All seeded units</option>
              {content.units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Body system</span>
            <select
              className="select-input"
              value={bodySystemFilter}
              onChange={(event) => setBodySystemFilter(event.target.value)}
            >
              <option value="all">All systems</option>
              {bodySystemOptions.map((bodySystem) => (
                <option key={bodySystem} value={bodySystem}>
                  {bodySystem}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="meta-copy">
          Due: {dueTerms.length} · New: {newTerms.length} · Queue cap: {SESSION_CAPS[queueMode]}
        </p>
        <p className="meta-copy">{queueDescriptions[queueMode]}</p>
      </section>

      {!current ? (
        <section className="card stack">
          <h3>No drills match this setup yet.</h3>
          <p>
            {drillMode === "root_drag_drop"
              ? "This drill needs terms with visible parts. Change the filters, change the queue, or finish more lessons first."
              : "Finish a lesson first, or switch queues to see other items."}
          </p>
          <div className="hero-actions">
            {recommendedLesson ? (
              <Link className="button button-primary" to={`/lesson/${recommendedLesson.id}`}>
                Continue to {recommendedLesson.title}
              </Link>
            ) : (
              <Link className="button button-primary" to="/">
                Return to curriculum
              </Link>
            )}
            <Link className="button" to="/endless">
              Endless study
            </Link>
          </div>
        </section>
      ) : drillMode === "flashcard" ? (
        <section className="card stack compact-drill-card">
          {flashcardResult === "correct" ? (
            <p className="success-burst" aria-live="assertive">
              Correct!
            </p>
          ) : null}
          <div className="title-row">
            <div>
              <p className="eyebrow">
                Flashcard · {index + 1} / {queueLength}
              </p>
              <h3>{current.term}</h3>
            </div>
            <span className="status-pill">{current.bodySystem}</span>
          </div>
          <p className="meta-copy">
            {current.pronunciationText} · {current.compositionality}
          </p>
          <p className="meta-copy">
            Source lessons:{" "}
            {current.lessonIds
              .map((lessonId) => lessonMap.get(lessonId)?.title)
              .filter((title): title is string => Boolean(title))
              .join(", ")}
          </p>
          {!revealed ? (
            <button
              type="button"
              className="button button-primary"
              onClick={() => setRevealed(true)}
            >
              Reveal answer
            </button>
          ) : (
            <div className="completion-box stack">
              <p>{current.plainMeaning}</p>
              <p className="meta-copy">{current.shortDefinition}</p>
              <p className="meta-copy">
                {current.parts.length > 0
                  ? current.parts
                      .map((part) => `${part.text} = ${part.meaning}`)
                      .join(" · ")
                  : "Learn this as a whole term."}
              </p>
              <div className="hero-actions">
                <button type="button" className="button" onClick={() => advance(false)}>
                  Needs work
                </button>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    recordReviewResult(current.id, true);
                    setFlashcardResult("correct");
                  }}
                >
                  I got it
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="card stack compact-drill-card">
          {dragResult === "correct" ? (
            <p className="success-burst" aria-live="assertive">
              Correct!
            </p>
          ) : null}
          <div className="title-row">
            <div>
              <p className="eyebrow">
                Root drag/drop · {index + 1} / {queueLength}
              </p>
              <h3>{current.term}</h3>
            </div>
            <span className="status-pill">{current.bodySystem}</span>
          </div>
          <p className="meta-copy">
            Match each term part to the meaning it contributes.
          </p>
          <div className="drag-bank" role="list" aria-label="Available roots and affixes">
            {availablePartIds.map((partId) => {
              const part = dragParts.find((entry) => entry.partId === partId);
              if (!part) {
                return null;
              }

              return (
                <button
                  key={part.partId}
                  type="button"
                  draggable
                  className={`drag-token${
                    selectedPartId === part.partId ? " drag-token-selected" : ""
                  }`}
                  onClick={() => setSelectedPartId(part.partId)}
                  onDragStart={(event) => event.dataTransfer.setData("text/plain", part.partId)}
                >
                  {part.text}
                </button>
              );
            })}
          </div>
          <div className="drag-slot-grid">
            {dragParts.map((part, slotIndex) => {
              const assignedPart = dragParts.find(
                (entry) => entry.partId === dragAssignments[slotIndex],
              );

              return (
                <button
                  key={`${part.partId}-${part.meaning}`}
                  type="button"
                  className={`drag-slot${
                    assignedPart ? " drag-slot-filled" : ""
                  }`}
                  onClick={() => {
                    if (assignedPart) {
                      clearSlot(slotIndex);
                      return;
                    }
                    if (selectedPartId) {
                      assignPart(slotIndex, selectedPartId);
                    }
                  }}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    const partId = event.dataTransfer.getData("text/plain");
                    if (partId) {
                      assignPart(slotIndex, partId);
                    }
                  }}
                >
                  <span className="drag-slot-label">{part.meaning}</span>
                  <span className="drag-slot-value">
                    {assignedPart ? assignedPart.text : "Drop part here"}
                  </span>
                </button>
              );
            })}
          </div>
          {dragAssignments.every(Boolean) ? (
            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={checkDragAnswer}
              >
                Check answer
              </button>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setDragAssignments(Array(dragParts.length).fill(null));
                  setSelectedPartId(null);
                  setDragResult(null);
                }}
              >
                Clear slots
              </button>
            </div>
          ) : null}
          {dragResult ? (
            <div className="completion-box stack">
              <p
                className={`feedback ${
                  dragResult === "correct" ? "feedback-correct" : "feedback-incorrect"
                }`}
              >
                <strong>{dragResult === "correct" ? "Correct." : "Not yet."}</strong>{" "}
                {current.parts.map((part) => `${part.text} = ${part.meaning}`).join(" · ")}
              </p>
              <div className="hero-actions">
                {dragResult === "incorrect" ? (
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      setDragAssignments(Array(dragParts.length).fill(null));
                      setSelectedPartId(null);
                      setDragResult(null);
                    }}
                  >
                    Retry this term
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}

export { DrillsPage as ReviewPage };
