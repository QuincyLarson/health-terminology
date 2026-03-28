import { useDeferredValue, useMemo, useState } from "react";
import { content } from "../content";

const RESULT_PAGE_SIZE = 24;

export function AbbreviationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(RESULT_PAGE_SIZE);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const deferredSearch = useDeferredValue(search);

  const filteredAbbreviations = useMemo(
    () =>
      content.abbreviations.filter((abbreviation) => {
        const matchesSearch =
          deferredSearch.length === 0 ||
          `${abbreviation.shortForm} ${abbreviation.expandedForm} ${abbreviation.meaning}`
            .toLowerCase()
            .includes(deferredSearch.toLowerCase());
        const matchesCategory =
          category === "all" || abbreviation.category === category;
        return matchesSearch && matchesCategory;
      }),
    [category, deferredSearch],
  );
  const visibleAbbreviations = filteredAbbreviations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAbbreviations.length;

  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Abbreviations</p>
        <h2>Recognition-first abbreviation practice</h2>
        <p>
          This section stays explicit and separate from the main word-part
          curriculum. The goal is recognition, not production.
        </p>
        <div className="filter-grid">
          <label>
            <span>Search abbreviations</span>
            <input
              className="text-input"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
              placeholder="BP, IV, blood pressure..."
            />
          </label>
          <label>
            <span>Category</span>
            <select
              className="select-input"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
            >
              <option value="all">All categories</option>
              <option value="clinical">Clinical</option>
              <option value="document">Document</option>
              <option value="measurement">Measurement</option>
              <option value="route">Route</option>
            </select>
          </label>
        </div>
        <p className="meta-copy">
          Matching abbreviations: {filteredAbbreviations.length} · Showing: {visibleAbbreviations.length}
        </p>
      </section>

      <section className="breakdown-grid">
        {visibleAbbreviations.map((abbreviation) => {
          const revealed = revealedIds[abbreviation.id] ?? false;
          return (
            <article key={abbreviation.id} className="card stack">
              <div className="title-row">
                <h3>{abbreviation.shortForm}</h3>
                <span className="status-pill">{abbreviation.category}</span>
              </div>
              {abbreviation.ambiguous ? (
                <p className="meta-copy">
                  Context dependent. Check the sentence before assuming one expansion.
                </p>
              ) : null}
              {revealed ? (
                <>
                  <p>{abbreviation.expandedForm}</p>
                  <p className="meta-copy">{abbreviation.meaning}</p>
                </>
              ) : (
                <p className="meta-copy">Reveal to check the expansion and meaning.</p>
              )}
              <button
                type="button"
                className="button"
                onClick={() =>
                  setRevealedIds((current) => ({
                    ...current,
                    [abbreviation.id]: !revealed,
                  }))
                }
              >
                {revealed ? "Hide answer" : "Reveal answer"}
              </button>
            </article>
          );
        })}
      </section>

      {hasMore ? (
        <section className="card stack pager-card">
          <p className="meta-copy">
            Showing {visibleAbbreviations.length} of {filteredAbbreviations.length} matching abbreviations.
          </p>
          <button
            type="button"
            className="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + RESULT_PAGE_SIZE, filteredAbbreviations.length),
              )
            }
          >
            Load more
          </button>
        </section>
      ) : null}
    </div>
  );
}
