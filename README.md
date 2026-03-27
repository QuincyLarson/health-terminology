# HealthTerms.com

HealthTerms.com is a free, static, text-first medical terminology course for curious adults. The product teaches how medical language works so learners can decode unfamiliar terms in dialogue, documents, and workplace text without needing a clinical background.

This is not a medical encyclopedia, certification prep tool, or clinical decision aid. The core idea is systematic decoding: learn a small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions, then use them to understand a much larger term bank.

## Current Status

The repository now has a working Vite + React seed app. The product direction, curriculum strategy, and implementation rules are defined in `docs/prd.md`, `docs/agents.md`, and the root `AGENTS.md`, and the first curriculum slice is implemented in `src/content`.

The current app includes a curriculum map, lesson page, review page, dedicated endless mode, abbreviations page, progress/stats page, and settings page for local-only persistence. The seeded curriculum now covers 3 units, 14 lessons, 35 parts, 40 terms, 26 exercises, and 7 abbreviations, with Unit 2 extended through cardiovascular, respiratory, and gastrointestinal starter modules.

## Planned Architecture

The intended stack is simple and static:

- Vite + TypeScript
- React for the UI layer
- Deterministic content files for lessons, terms, and curriculum structure
- Build-time validation for schema checks and reference integrity
- `localStorage` for all progress state
- JSON export/import/reset for user data
- Static deployment on GitHub Pages

The design target is a calm, rigorous, mobile-first learning experience with minimal chrome and fast initial load. The current build uses a hash router, a lesson page, a curriculum map, a review page, an endless mode page, an abbreviations page, a progress/stats page, and settings for local progress management.

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

1. Finish the minimum lovable release runtime gaps from the PRD, especially resume guidance, safer import/reset flows, and clearer empty-state routing.
2. Continue Unit 2 into musculoskeletal and nervous-system starter batches.
3. Add Unit 3 clinical-language starter lessons and the first passage-style decoding content.
4. Grow validated terms, parts, and exercises in 200-500 term batches.
5. Tighten spaced repetition, missed-term handling, and mixed-session tuning as the term bank grows.
6. Keep `CONTENT_STATUS.md` and `CURRICULUM_MAP.md` current as implementation and content batches land.

## Working Notes

The content strategy is intentionally staged. The term bank should grow in validated batches, not as a single giant dump. Accuracy matters more than flair, and the site should remain simple, fast, and readable throughout.
