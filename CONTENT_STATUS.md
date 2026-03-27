# CONTENT_STATUS

## Current Repository State
- Repository currently contains the product docs only.
- No application scaffold, content schemas, validators, or curriculum data files exist yet.
- The immediate implementation target is a static Vite + TypeScript app with deterministic content files and localStorage persistence.

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

### Current Content Coverage
- `PRD v1` defines the full content strategy, but no authored curriculum assets exist yet.
- Unit 0 through Unit 6 are defined at the product level only.
- No term batches have been generated.
- No abbreviation/acronym inventory has been authored.

## Staged Expansion Plan

### Stage 0: Repository Setup
- Scaffold the app, routing, and global styles.
- Add content directories and the supporting documentation files.
- Establish the build and deployment baseline for GitHub Pages.

### Stage 1: Core Data and Persistence
- Define schemas for curriculum content and learner progress.
- Add validators and migration logic.
- Implement localStorage persistence plus import/export/reset.

### Stage 2: Lesson Engine
- Build lesson rendering and exercise components.
- Add mastery tracking and audio playback helpers.
- Make lesson completion resumable.

### Stage 3: Seed Curriculum
- Author Unit 0 and the first high-yield building-block modules.
- Add the first body-system lessons and a first abbreviation module.
- Reach roughly 1,000 validated terms before broadening coverage.

### Stage 4: Endless Mode and SRS
- Add due, new, and mixed queues.
- Build flashcards and lightweight stats.
- Wire eligibility rules to prerequisite completion.

### Stage 5: Scale-Out Content Generation
- Expand the term bank in batches of 200 to 500 terms.
- Validate each batch before merging.
- Grow the curriculum across remaining units until the 10,000-term target is reached.

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
- No content batches have been authored yet.
- The first planned batch should cover Unit 0 foundations plus the first high-yield root and suffix families.
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
