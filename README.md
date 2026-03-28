# HealthTerminology.com

HealthTerminology.com is a free, static, text-first medical terminology course for curious adults. The product teaches how medical language works so learners can decode unfamiliar terms in dialogue, documents, and workplace text without needing a clinical background.

This is not a medical encyclopedia, certification prep tool, or clinical decision aid. The core idea is systematic decoding: learn a small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions, then use them to understand a much larger term bank.

## Current Status

The repository now has a working Vite + React seed app. The product direction, curriculum strategy, and implementation rules are defined in `docs/prd.md`, `docs/agents.md`, and the root `AGENTS.md`, and the first curriculum slice is implemented in `src/content`.

The current app now centers the curriculum landing page, compact lesson flow, drills page, and profile page while keeping endless study plus secondary browse and abbreviation reference surfaces available behind the primary navigation. The seeded curriculum now covers 7 units, 123 lessons, 182 parts, 370 terms, 422 exercises, and 44 abbreviations. Unit 1 now also includes root-family expansion lessons for location prefixes, `-stomy` procedures, common recombinations such as `cardiomyopathy`, `nephrectomy`, and `gastroenterology`, a dedicated vessel-family lesson covering `vascular`, `endovascular`, `vasculitis`, `arteriosclerosis`, and `atherosclerosis`, new blood-count families for `-penia`, `-cyte`, `panc-`, `hem/o`, and `-lysis`, broader prefix-shift and dysfunction families around `anti-`, `eu-`, `mal-`, `dys-`, `path/o`, and `-stasis`, imaging or tracing record families for `radi/o`, `son/o`, `mamm/o`, `electr/o`, and `-graph`, broader inflammation and narrowing families, `-oma` and growth-language families, urine or discharge families, and measurement or recording families such as `-meter`, `-metry`, `tom/o`, and `echo-`. Unit 2 now extends through reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up slices. Unit 3 now also includes severity or progression language, results or interpretation language, and report-comparison language. Unit 4 now also includes verification or network language, preparation or instruction language, and billing-resolution language. Unit 5 now also includes schedule or form abbreviations plus ambiguous-abbreviation safety lessons, and Unit 6 now includes eleven additional long-form passage lessons for results recheck, discharge or referral, coverage workflow, imaging impressions, medication reconciliation, consult or portal handoff, ED reassessment, lab-trend follow-through, operative-note specimen handoff, discharge medication planning, and refill or authorization imaging follow-up.

The current implementation now exceeds the PRD's minimum lovable release bar and has a full seeded path through Units 0 to 6. Drills and endless study work, the lesson flow now auto-advances after correct answers with a compact single-challenge layout, JSON export/import/reset works, recovery-aware local progress handling is in place, and abbreviation lessons now exist as first-class curriculum content rather than only as a separate browse surface. Route pages now load lazily and the build is split into smaller content-focused chunks so the initial bundle stays narrow as the authored corpus grows. Browse and abbreviation discovery now page their result grids instead of trying to render every matching card at once. The content layer now ships richer static indices for lessons, terms, parts, exercises, search text, body-system options, and part-filter labels; the app-state layer now derives progress collections in a single pass instead of rescanning the term bank repeatedly; and the validator now catches duplicate wiring, orphan lessons or exercises, broken exercise links, stricter prerequisite failures, and unit or lesson prerequisite cycles. Within the current seeded curriculum, Unit 2, Unit 3, Unit 4, Unit 5, and Unit 6 are now marked `shipped` rather than only `lesson-linked`. The remaining work is full-v1 breadth, especially much larger root-family-led term-bank expansion and more long-form synthesis volume, plus stronger drill tuning.

## Planned Architecture

The intended stack is simple and static:

- Vite + TypeScript
- React for the UI layer
- Deterministic content files for lessons, terms, and curriculum structure
- Build-time validation for schema checks and reference integrity
- `localStorage` for all progress state
- JSON export/import/reset for user data
- Static deployment on GitHub Pages

The design target is a calm, rigorous, mobile-first learning experience with minimal chrome and fast initial load. The current build uses a hash router, a unified curriculum landing page, compact lesson challenges, a drills page, an endless mode page, a profile page with local-progress controls, and secondary browse plus abbreviations reference pages.

## Development

```bash
npm install
npm run dev
```

Useful checks:

- `npm run validate:content`
- `npm run test:migration`
- `npm run check`
- `npm run build`

The profile page includes JSON export/import/reset, snapshot size diagnostics, and validation of imported progress payloads.
Unreadable local snapshots are preserved into a recovery backup key and surfaced back to the learner with a visible warning and download path.
Import and reset flows now require explicit confirmation and can offer a backup download before replacing local progress. Lessons support retries while still scoring mastery on first attempts, and browse mode provides a search-and-filter layer that stays secondary to the curriculum.

Deployment notes live in `docs/deployment.md`.
A sample progress export lives at `public/sample-progress-export.json`.

## Repository Shape

Planned top-level structure:

```text
/src
  /app
  /components
  /pages
  /styles
  /lib
    /progress
    /srs
    /audio
    /validation
    /curriculum
  /content
    /parts
    /terms
    /lessons
    /units
    /abbreviations
  /types
  /hooks
/scripts
/public
```

## Immediate Next Steps

1. Keep growing the validated term bank in 200 to 500 term batches, with root-family density prioritized over thin body-system inventories.
2. Keep widening Unit 1 around the most reusable decoding families before spending effort on narrower specialty branches.
3. Keep adding Unit 6 long passages so synthesis feels denser than the current seed release.
4. Continue expanding Unit 5's abbreviation inventory in coherent workflow or specialty clusters while keeping ambiguity warnings explicit.
5. Tighten spaced repetition and larger-bank drill tuning as the content bank grows.

## Working Notes

The content strategy is intentionally staged. The term bank should grow in validated batches, not as a single giant dump. Accuracy matters more than flair, and the site should remain simple, fast, and readable throughout.
