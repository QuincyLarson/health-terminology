# CONTENT_STATUS

## Current Repository State
- Repository now contains a working Vite + React seed app plus the product docs.
- The app includes deterministic content files, content validation scripts, localStorage persistence, JSON import/export/reset support, dedicated endless mode, and a progress/stats page.
- The current implementation target is to broaden the seed curriculum and review flow in validated batches.

## Content Status

### Status Taxonomy
- `planned`: scope exists in the PRD or curriculum map but no authored assets exist yet.
- `drafted`: content exists but has not passed validation.
- `validated`: content passes schema and reference checks.
- `lesson-linked`: validated content is wired into lesson flows.
- `review-ready`: content is eligible for SRS and endless mode exposure.
- `shipped`: content is in the main learner path of the published site.

### Established Product Rules
- Text-first, mobile-first, static-first learning product.
- Accuracy and plain-English definitions take priority over polish.
- No backend, no accounts, no adaptive AI tutoring in v1.
- Progress must be stored locally and support JSON export/import/reset.

### Content Model Still Needed
- Canonical term bank with typed entities for roots, prefixes, suffixes, combining forms, terms, lessons, and exercises.
- Validation rules for duplicate IDs, broken references, missing prerequisites, and schema correctness.
- Lesson and curriculum indices that can drive curriculum navigation and endless mode eligibility.
- Stronger lesson unlock metadata and broader review eligibility rules as the curriculum expands.

### Current Content Coverage
- Seed content exists for 3 units, 4 lessons, 8 parts, 6 terms, 6 exercises, and 7 abbreviations.
- Unit 0 is partially implemented with word-part and combining-vowel lessons.
- Unit 1 has an initial slice covering high-yield suffixes and prefixes.
- The review flow is functional with due, new, and mixed queues, queue caps, and filter controls.
- Endless mode is implemented as a separate page with search, unit, body-system, and due-only filters.
- Progress diagnostics now report storage key, schema version, and snapshot size.
- No large term batches have been generated yet.

## Staged Expansion Plan

### Stage 0: Repository Setup
- Scaffold the app, routing, and global styles.
- Add content directories and the supporting documentation files.
- Establish the build and deployment baseline for GitHub Pages.

### Stage 1: Core Data and Persistence
- Define schemas for curriculum content and learner progress.
- Add validators and migration logic.
- Implement localStorage persistence plus import/export/reset.

### Stage 1 Status
- Core data types, seed content, validation scripts, and localStorage persistence exist.
- Export/import/reset work against the current progress model.
- Import parsing now rejects malformed payloads earlier and records version-aware migrations.
- Migration logic is basic and still needs hardening as the schema grows.

### Stage 2: Lesson Engine
- Build lesson rendering and exercise components.
- Add mastery tracking and audio playback helpers.
- Make lesson completion resumable.

### Stage 2 Status
- A lesson page, exercise cards, audio playback helper, and completion flow exist.
- Lesson completion seeds introduced terms into review.
- Mastery tracking is present at a basic level.
- Lesson content now carries prerequisite lesson guidance and reinforced-term links.

### Stage 3: Seed Curriculum
- Author Unit 0 and the first high-yield building-block modules.
- Add the first body-system lessons and a first abbreviation module.
- Reach roughly 1,000 validated terms before broadening coverage.

### Stage 3 Status
- Unit 0 foundations and an initial Unit 1 slice are implemented.
- Body-system modules are still planned.
- The abbreviation section now has a dedicated recognition page and a larger starter set, but not yet a full module.

### Stage 4: Endless Mode and SRS
- Add due, new, and mixed queues.
- Build flashcards and lightweight stats.
- Wire eligibility rules to prerequisite completion.

### Stage 4 Status
- A basic review page exists with due, new, and mixed modes, session caps, and content filters.
- Review cards are plain-English recognition prompts, and the queue respects the current seed curriculum.
- Spaced repetition exists as local progress state, but full SRS tuning still needs work.
- Endless mode is separate from review and exposes eligible terms with filters instead of a single unbounded drill list.

### Stage 5: Scale-Out Content Generation
- Expand the term bank in batches of 200 to 500 terms.
- Validate each batch before merging.
- Grow the curriculum across remaining units until the 10,000-term target is reached.

### Stage 5 Status
- The scale-out process has not started.
- Batch validators are present, but the bank is still a seed set rather than a large corpus.

### Stage 6: Polish and Release Hardening
- Run performance and accessibility passes.
- Tighten copy and consistency.
- Prepare deployment documentation and seed export examples.

## Batch Strategy
- Generate content in small, reviewable batches only.
- Preferred batch size is 200 to 500 terms per commit.
- Each batch should be focused on a coherent theme such as a root family, body system, or abbreviation set.
- Keep authored lessons aligned to the batch so prerequisites remain understandable.

## Batch Ledger
- Seed batch authored: Unit 0 foundations plus the first high-yield root, suffix, and prefix families.
- Current seed totals: 3 units, 4 lessons, 8 parts, 6 terms, 6 exercises, and 7 abbreviations.
- Current runtime surfaces: curriculum, lesson, review, endless, abbreviations, progress, settings, and about.
- Each future entry should record scope, counts, validation state, blockers, and the commit that introduced it.

## Validation Expectations
- Every content batch must pass schema validation.
- Every content batch must be checked for duplicate IDs.
- Every content batch must be checked for missing prerequisites.
- Every content batch must be checked for broken references between lessons, terms, and parts.
- Every batch should preserve plain-English definitions and avoid speculative etymology.
- Validation should be run before each commit whenever applicable.

## Operating Notes
- Do not try to fill the full 10,000-term bank in a single pass.
- Prefer high-yield roots and affixes before lower-value inventory terms.
- Keep abbreviations and acronyms in a dedicated section.
- Use this file as the running status ledger as content is added and validated.
