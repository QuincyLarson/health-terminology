import { useDeferredValue, useMemo, useState } from "react";
import { useAppState } from "../app/AppState";
import { content } from "../content";

type TaughtFilter = "all" | "taught" | "not_taught";
const RESULT_PAGE_SIZE = 24;

export function BrowsePage() {
  const { isTermEligible } = useAppState();
  const [search, setSearch] = useState("");
  const [unitFilter, setUnitFilter] = useState("all");
  const [bodySystemFilter, setBodySystemFilter] = useState("all");
  const [partFilter, setPartFilter] = useState("all");
  const [taughtFilter, setTaughtFilter] = useState<TaughtFilter>("all");
  const [visibleCount, setVisibleCount] = useState(RESULT_PAGE_SIZE);
  const deferredSearch = useDeferredValue(search);
  const lessonMap = useMemo(
    () => new Map(content.lessons.map((lesson) => [lesson.id, lesson])),
    [],
  );

  const bodySystemOptions = useMemo(
    () => Array.from(new Set(content.terms.map((term) => term.bodySystem))).sort(),
    [],
  );
  const partOptions = useMemo(
    () =>
      Array.from(
        new Set(
          content.terms.flatMap((term) =>
            term.parts.map((part) => `${part.text} · ${part.meaning}`),
          ),
        ),
      ).sort(),
    [],
  );

  const filteredTerms = useMemo(
    () =>
      content.terms.filter((term) => {
        const eligible = isTermEligible(term.id);
        const matchesSearch =
          deferredSearch.length === 0 ||
          `${term.term} ${term.plainMeaning} ${term.shortDefinition}`
            .toLowerCase()
            .includes(deferredSearch.toLowerCase());
        const matchesUnit =
          unitFilter === "all" ||
          term.lessonIds.some((lessonId) => lessonMap.get(lessonId)?.unitId === unitFilter);
        const matchesBodySystem =
          bodySystemFilter === "all" || term.bodySystem === bodySystemFilter;
        const matchesPart =
          partFilter === "all" ||
          term.parts.some((part) => `${part.text} · ${part.meaning}` === partFilter);
        const matchesTaught =
          taughtFilter === "all" ||
          (taughtFilter === "taught" ? eligible : !eligible);

        return (
          matchesSearch &&
          matchesUnit &&
          matchesBodySystem &&
          matchesPart &&
          matchesTaught
        );
      }),
    [
      bodySystemFilter,
      deferredSearch,
      isTermEligible,
      lessonMap,
      partFilter,
      taughtFilter,
      unitFilter,
    ],
  );

  const visibleTerms = filteredTerms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTerms.length;

  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Browse</p>
        <h2>Browse the term bank without replacing the curriculum spine.</h2>
        <p>
          Search stays secondary here. Future terms remain visible, but anything
          not yet taught is labeled clearly and shown in a short preview form.
        </p>
        <div className="filter-grid">
          <label>
            <span>Search terms</span>
            <input
              className="text-input"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
              placeholder="dyspnea, stomach, -itis..."
            />
          </label>
          <label>
            <span>Unit</span>
            <select
              className="select-input"
              value={unitFilter}
              onChange={(event) => {
                setUnitFilter(event.target.value);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
            >
              <option value="all">All units</option>
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
                setVisibleCount(RESULT_PAGE_SIZE);
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
            <span>Word-part family</span>
            <select
              className="select-input"
              value={partFilter}
              onChange={(event) => {
                setPartFilter(event.target.value);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
            >
              <option value="all">All part families</option>
              {partOptions.map((partOption) => (
                <option key={partOption} value={partOption}>
                  {partOption}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Taught status</span>
            <select
              className="select-input"
              value={taughtFilter}
              onChange={(event) => {
                setTaughtFilter(event.target.value as TaughtFilter);
                setVisibleCount(RESULT_PAGE_SIZE);
              }}
            >
              <option value="all">All terms</option>
              <option value="taught">Taught or eligible</option>
              <option value="not_taught">Not yet taught</option>
            </select>
          </label>
        </div>
        <p className="meta-copy">
          Matching terms: {filteredTerms.length} · Eligible now:{" "}
          {filteredTerms.filter((term) => isTermEligible(term.id)).length}
        </p>
      </section>

      <section className="term-grid">
        {visibleTerms.map((term) => {
          const eligible = isTermEligible(term.id);
          const lessonTitles = term.lessonIds
            .map((lessonId) => lessonMap.get(lessonId)?.title)
            .filter((title): title is string => Boolean(title));
          const primaryLesson =
            term.lessonIds.length > 0 ? lessonMap.get(term.lessonIds[0]) : undefined;

          return (
            <article key={term.id} className="card stack">
              <div className="title-row">
                <div>
                  <p className="eyebrow">{primaryLesson?.unitId ?? "unit-?"}</p>
                  <h3>{term.term}</h3>
                </div>
                <span className={`status-pill ${eligible ? "" : "status-planned"}`}>
                  {eligible ? "taught" : "not yet taught"}
                </span>
              </div>
              <p className="meta-copy">
                {term.pronunciationText} · {term.bodySystem} · {term.compositionality}
              </p>
              <p>{term.plainMeaning}</p>
              <p className="meta-copy">{term.shortDefinition}</p>
              {eligible ? (
                <div className="tag-grid">
                  {term.parts.length > 0 ? (
                    term.parts.map((part) => (
                      <article key={`${term.id}-${part.partId}`} className="tag-card">
                        <strong>{part.text}</strong>
                        <p className="meta-copy">{part.meaning}</p>
                      </article>
                    ))
                  ) : (
                    <article className="tag-card">
                      <strong>Recognition-first</strong>
                      <p className="meta-copy">
                        This term is taught for recognition rather than a forced decomposition.
                      </p>
                    </article>
                  )}
                </div>
              ) : (
                <div className="completion-box">
                  <p className="meta-copy">
                    Not yet taught. This preview stays brief until the prerequisite
                    lessons are complete.
                  </p>
                </div>
              )}
              <p className="meta-copy">
                Source lessons: {lessonTitles.join(", ")}
              </p>
            </article>
          );
        })}
      </section>
      {hasMore ? (
        <section className="card stack pager-card">
          <p className="meta-copy">
            Showing {visibleTerms.length} of {filteredTerms.length} matching terms.
          </p>
          <button
            type="button"
            className="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + RESULT_PAGE_SIZE, filteredTerms.length),
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
