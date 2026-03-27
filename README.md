# HealthTerms.com

HealthTerms.com is a free, static, text-first medical terminology course for curious adults. The product teaches how medical language works so learners can decode unfamiliar terms in dialogue, documents, and workplace text without needing a clinical background.

This is not a medical encyclopedia, certification prep tool, or clinical decision aid. The core idea is systematic decoding: learn a small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions, then use them to understand a much larger term bank.

## Current Status

The repository now has a working Vite + React seed app. The product direction, curriculum strategy, and implementation rules are defined in `docs/prd.md`, `docs/agents.md`, and the root `AGENTS.md`, and the first curriculum slice is implemented in `src/content`.

The current app includes a curriculum map, lesson page, review page, dedicated endless mode, abbreviations page, progress/stats page, and settings page for local-only persistence.

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

1. Expand Unit 0 and Unit 1 with additional high-yield lessons and term families.
2. Build out Unit 2 cardiovascular coverage before moving to the other body systems.
3. Add more validated parts, terms, and exercises in 200-500 term batches.
4. Grow body-system coverage and the abbreviation inventory.
5. Tighten spaced repetition, due-session tuning, and mixed-session filtering.
6. Keep `CONTENT_STATUS.md` and `CURRICULUM_MAP.md` current as implementation and content batches land.

## Working Notes

The content strategy is intentionally staged. The term bank should grow in validated batches, not as a single giant dump. Accuracy matters more than flair, and the site should remain simple, fast, and readable throughout.
