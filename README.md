# HealthTerms.com

HealthTerms.com is a free, static, text-first medical terminology course for curious adults. The product teaches how medical language works so learners can decode unfamiliar terms in dialogue, documents, and workplace text without needing a clinical background.

This is not a medical encyclopedia, certification prep tool, or clinical decision aid. The core idea is systematic decoding: learn a small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions, then use them to understand a much larger term bank.

## Current Status

The repository now has a working Vite + React seed app. The product direction, curriculum strategy, and implementation rules are defined in `docs/prd.md`, `docs/agents.md`, and the root `AGENTS.md`, and the first curriculum slice is implemented in `src/content`.

The current app includes a curriculum map, a browse-first term index, lesson page, review page, dedicated endless mode, abbreviations page, progress/stats page, and settings page for local-only persistence. The seeded curriculum now covers 7 units, 65 lessons, 84 parts, 172 terms, 189 exercises, and 32 abbreviations. Unit 1 includes condition-suffix coverage, Unit 2 now extends through reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, and pleural or chest slices, Unit 3 includes condition-state and chart-passage lessons, Unit 4 includes administrative passage decoding, Unit 5 now includes chart-note, history or status, frequency or lab, and imaging or urgency abbreviation lessons, and Unit 6 now includes rapid parsing, results or discharge synthesis, urgent-imaging synthesis, renal-lab synthesis, blood-count synthesis, abdominal-and-stone synthesis, referral-and-consult synthesis, handoff-and-reassessment synthesis, portal-and-authorization crossover, upper-airway or throat synthesis, respiratory recheck or escalation, and pleural or chest synthesis lessons on top of mixed-recognition and passage-decoding lessons.

The current implementation now exceeds the PRD's minimum lovable release bar and has a full seeded path through Units 0 to 6. Review and endless study work, lesson retry or first-attempt mastery tracking exists, JSON export/import/reset works, recovery-aware local progress handling is in place, and abbreviation lessons now exist as first-class curriculum content rather than only as a separate browse surface. Route pages now load lazily and the build is split into smaller content-focused chunks so the initial bundle stays narrow as the authored corpus grows. The remaining work is full-v1 breadth, especially larger content scale-out inside the seeded units, broader abbreviation inventory and ambiguity handling, a larger Unit 6 passage bank, and stronger review tuning.

## Planned Architecture

The intended stack is simple and static:

- Vite + TypeScript
- React for the UI layer
- Deterministic content files for lessons, terms, and curriculum structure
- Build-time validation for schema checks and reference integrity
- `localStorage` for all progress state
- JSON export/import/reset for user data
- Static deployment on GitHub Pages

The design target is a calm, rigorous, mobile-first learning experience with minimal chrome and fast initial load. The current build uses a hash router, a lesson page, a curriculum map, a browse page, a review page, an endless mode page, an abbreviations page, a progress/stats page, and settings for local progress management.

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

The settings page includes JSON export/import/reset, snapshot size diagnostics, and validation of imported progress payloads.
Unreadable local snapshots are preserved into a recovery backup key and surfaced back to the learner with a visible warning and download path.
Import and reset flows now require explicit confirmation and can offer a backup download before replacing local progress. Lessons support retries while still scoring mastery on first attempts, and browse mode provides a search-and-filter layer that stays secondary to the curriculum.

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

1. Deepen the seeded Unit 2 systems with larger validated batches across respiratory, gastrointestinal, hepatobiliary, hematologic, renal, and remaining lower-airway or imaging-adjacent language.
2. Expand Unit 5 with more abbreviation coverage, explicit ambiguity handling, and denser imaging, lab, and workflow shorthand.
3. Grow Unit 6 passage volume with more urgent-care, referral, results, discharge, administrative, handoff, portal crossover, pleural, and respiratory recheck snippets.
4. Grow validated terms, parts, exercises, and abbreviations in 200-500 item batches.
5. Tighten spaced repetition, mixed-session tuning, and browse or ranking behavior as the content bank grows.
6. Keep `CONTENT_STATUS.md` and `CURRICULUM_MAP.md` current as implementation and content batches land.

## Working Notes

The content strategy is intentionally staged. The term bank should grow in validated batches, not as a single giant dump. Accuracy matters more than flair, and the site should remain simple, fast, and readable throughout.
