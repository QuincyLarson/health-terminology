import { useState } from "react";
import { content } from "../content";

export function AbbreviationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const filteredAbbreviations = content.abbreviations.filter((abbreviation) => {
    const matchesSearch =
      search.length === 0 ||
      `${abbreviation.shortForm} ${abbreviation.expandedForm} ${abbreviation.meaning}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesCategory =
      category === "all" || abbreviation.category === category;
    return matchesSearch && matchesCategory;
  });

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
              onChange={(event) => setSearch(event.target.value)}
              placeholder="BP, IV, blood pressure..."
            />
          </label>
          <label>
            <span>Category</span>
            <select
              className="select-input"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">All categories</option>
              <option value="clinical">Clinical</option>
              <option value="document">Document</option>
              <option value="measurement">Measurement</option>
              <option value="route">Route</option>
            </select>
          </label>
        </div>
      </section>

      <section className="breakdown-grid">
        {filteredAbbreviations.map((abbreviation) => {
          const revealed = revealedIds[abbreviation.id] ?? false;
          return (
            <article key={abbreviation.id} className="card stack">
              <div className="title-row">
                <h3>{abbreviation.shortForm}</h3>
                <span className="status-pill">{abbreviation.category}</span>
              </div>
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
    </div>
  );
}
