export function AboutPage() {
  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Methodology</p>
        <h2>Decode, do not memorize blindly.</h2>
        <p>
          HealthTerms.com teaches medical language as a system of reusable parts
          and patterns. The goal is fast inference, not encyclopedic coverage or
          clinical advice.
        </p>
        <p>
          This seed app is static, text-first, mobile-first, and local-only.
          Progress lives in localStorage and can be exported or imported as JSON.
        </p>
      </section>
    </div>
  );
}
