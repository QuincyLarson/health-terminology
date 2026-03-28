export function AboutPage() {
  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Methodology</p>
        <h2>Decode, do not memorize blindly.</h2>
        <p>
          HealthTerminology.com teaches medical language as a system of reusable
          parts and patterns. The goal is fast inference, not encyclopedic
          coverage or clinical advice.
        </p>
        <p>
          This seed app is static, text-first, mobile-first, and local-only.
          Progress lives in localStorage and can be exported or imported as JSON.
        </p>
      </section>

      <section className="card stack">
        <h3>Who this is for</h3>
        <p>
          Curious adults, patients, support staff, and early learners who want
          to understand common medical language without needing certification
          prep or clinical training.
        </p>
        <h3>What the product optimizes for</h3>
        <p>
          High-yield roots, affixes, combining forms, and recurring patterns.
          The curriculum aims to make unfamiliar terms more readable, not to
          replace anatomy, pathology, or treatment knowledge.
        </p>
      </section>

      <section className="card stack">
        <h3>Non-goals and limits</h3>
        <p>
          This is not a medical encyclopedia, diagnosis tool, charting
          reference, or substitute for professional training.
        </p>
        <p>
          Definitions are intentionally plain-English and teaching-oriented.
          Some terms are taught compositionally even when real-world usage is
          broader or more nuanced.
        </p>
      </section>
    </div>
  );
}
