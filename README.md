# HealthTerms.com

HealthTerms.com is a free, static, text-first medical terminology course for curious adults. The product teaches how medical language works so learners can decode unfamiliar terms in dialogue, documents, and workplace text without needing a clinical background.

This is not a medical encyclopedia, certification prep tool, or clinical decision aid. The core idea is systematic decoding: learn a small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions, then use them to understand a much larger term bank.

## Current Status

The repository is at the documentation-first stage. The product direction, curriculum strategy, and implementation rules are defined in `docs/prd.md`, `docs/agents.md`, and the root `AGENTS.md`. The app scaffold and content system still need to be built.

## Planned Architecture

The intended stack is simple and static:

- Vite + TypeScript
- React for the UI layer
- Deterministic content files for lessons, terms, and curriculum structure
- Build-time validation for schema checks and reference integrity
- `localStorage` for all progress state
- JSON export/import/reset for user data
- Static deployment on GitHub Pages

The design target is a calm, rigorous, mobile-first learning experience with minimal chrome and fast initial load.

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

1. Scaffold the Vite + TypeScript app.
2. Add content schemas and validators.
3. Implement progress storage with JSON export/import/reset.
4. Build the lesson engine and core exercise types.
5. Add spaced repetition and endless mode.
6. Start the seed curriculum with Unit 0 and the highest-yield roots and affixes.
7. Expand the content system in validated batches.
8. Keep `CONTENT_STATUS.md` and `CURRICULUM_MAP.md` current as implementation and content batches land.

## Working Notes

The content strategy is intentionally staged. The term bank should grow in validated batches, not as a single giant dump. Accuracy matters more than flair, and the site should remain simple, fast, and readable throughout.
