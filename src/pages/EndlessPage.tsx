import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { content } from "../content";
import type { Term } from "../types/content";

type EndlessMode = "multiple_choice" | "flashcard";

function buildChoices(term: Term, pool: Term[]): string[] {
  const distractors = pool
    .filter((candidate) => candidate.id !== term.id)
    .slice(0, 3)
    .map((candidate) => candidate.plainMeaning);

  return [...distractors, term.plainMeaning].sort();
}

function getTermUnitId(term: Term): string | null {
  const lesson = content.lessons.find((item) => term.lessonIds.includes(item.id));
  return lesson?.unitId ?? null;
}

export function EndlessPage() {
  const { dueTerms, eligibleTerms, progress, recordReviewResult } = useAppState();
  const [mode, setMode] = useState<EndlessMode>("multiple_choice");
  const [search, setSearch] = useState("");
  const [unitFilter, setUnitFilter] = useState("all");
  const [bodySystemFilter, setBodySystemFilter] = useState("all");
  const [dueOnly, setDueOnly] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const dueIds = new Set(dueTerms.map((term) => term.id));
  const bodySystemOptions = Array.from(
    new Set(eligibleTerms.map((term) => term.bodySystem)),
  ).sort();

  const filteredTerms = eligibleTerms.filter((term) => {
    const matchesSearch =
      search.length === 0 ||
      `${term.term} ${term.plainMeaning} ${term.shortDefinition}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesUnit =
      unitFilter === "all" || getTermUnitId(term) === unitFilter;
    const matchesBodySystem =
      bodySystemFilter === "all" || term.bodySystem === bodySystemFilter;
    const matchesDue = !dueOnly || dueIds.has(term.id);

    return matchesSearch && matchesUnit && matchesBodySystem && matchesDue;
  });

  const current = filteredTerms[index];
  const choices = current ? buildChoices(current, filteredTerms) : [];

  function resetSession(): void {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
  }

  function advance(correct: boolean): void {
    if (!current) {
      return;
    }
    recordReviewResult(current.id, correct);
    setSelected(null);
    setRevealed(false);
    setIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Endless mode</p>
        <h2>Study any eligible term without leaving the curriculum spine.</h2>
        <div className="filter-grid">
          <label>
            <span>Search terms</span>
            <input
              className="text-input"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                resetSession();
              }}
              placeholder="cardio, stomach, blood pressure..."
            />
          </label>
          <label>
            <span>Unit</span>
            <select
              className="select-input"
              value={unitFilter}
              onChange={(event) => {
                setUnitFilter(event.target.value);
                resetSession();
              }}
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
              onChange={(event) => {
                setBodySystemFilter(event.target.value);
                resetSession();
              }}
            >
              <option value="all">All systems</option>
              {bodySystemOptions.map((bodySystem) => (
                <option key={bodySystem} value={bodySystem}>
                  {bodySystem}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Study mode</span>
            <select
              className="select-input"
              value={mode}
              onChange={(event) => {
                setMode(event.target.value as EndlessMode);
                resetSession();
              }}
            >
              <option value="multiple_choice">Multiple choice</option>
              <option value="flashcard">Flashcard</option>
            </select>
          </label>
        </div>
        <label className="toggle-row">
          <span>Show only due terms</span>
          <input
            type="checkbox"
            checked={dueOnly}
            onChange={(event) => {
              setDueOnly(event.target.checked);
              resetSession();
            }}
          />
        </label>
        <p className="meta-copy">
          Eligible now: {eligibleTerms.length} · Matching filters: {filteredTerms.length} ·
          Due now: {dueTerms.length}
        </p>
      </section>

      {!current ? (
        <section className="card">
          <h3>No terms match these filters yet.</h3>
          <p>
            Adjust the filters or complete more lessons so additional terms
            become eligible.
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
                Endless · {index + 1} / {filteredTerms.length}
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
              .map((lessonId) => content.lessons.find((lesson) => lesson.id === lessonId)?.title)
              .filter((title): title is string => Boolean(title))
              .join(", ")}
          </p>

          {mode === "multiple_choice" ? (
            <>
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
                    Next term
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="stack">
              <button
                type="button"
                className="button button-primary"
                onClick={() => setRevealed((currentValue) => !currentValue)}
              >
                {revealed ? "Hide answer" : "Reveal answer"}
              </button>
              {revealed ? (
                <div className="completion-box stack">
                  <p>{current.plainMeaning}</p>
                  <p className="meta-copy">{current.shortDefinition}</p>
                  <div className="hero-actions">
                    <button
                      type="button"
                      className="button"
                      onClick={() => advance(false)}
                    >
                      I missed this
                    </button>
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => advance(true)}
                    >
                      I got it
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </section>
      )}

      <section className="card">
        <p className="eyebrow">Storage mode</p>
        <p>
          Endless mode uses the same local progress store as lessons and review.
          There is no account wall or server dependency.
        </p>
        <p className="meta-copy">
          Audio enabled: {progress.settings.audioEnabled ? "yes" : "no"} · Reduced
          motion: {progress.settings.reducedMotion ? "yes" : "no"}
        </p>
      </section>
    </div>
  );
}
