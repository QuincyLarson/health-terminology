# CONTENT_STATUS

## Current Repository State
- Repository now contains a working Vite + React seed app plus the product docs.
- The app includes deterministic content files, content validation scripts, a migration test, localStorage persistence, JSON import/export/reset support, a browse-first term index, dedicated endless mode, and a progress/stats page.
- The runtime preserves unreadable local snapshots into a recovery backup, confirms destructive import/reset flows, and surfaces recovery messaging in settings.
- Lesson flow now uses first-attempt mastery scoring with retry support instead of requiring perfect recall on a single pass.
- Lessons can now reference abbreviations directly, so Unit 5 exists as real curriculum content without collapsing abbreviations into ordinary term aliases.
- Release plumbing now includes GitHub Pages workflow support, a deployment note, and a sample export artifact for import/export reference.
- The current implementation target is now scale-out content growth, deeper curriculum breadth, and SRS refinement rather than reaching a first playable release.

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
- Seed content exists for 7 units, 82 lessons, 89 parts, 217 terms, 256 exercises, and 44 abbreviations.
- Unit 0 now includes plural-pattern and pronunciation lessons in addition to word parts and combining vowels.
- Unit 1 now covers suffixes, core body roots, common prefixes, rate prefixes, procedure language, and condition-suffix decoding.
- Unit 2 now includes cardiovascular, respiratory, gastrointestinal, musculoskeletal, renal/urinary, nervous-system, endocrine, reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up starter lessons.
- Unit 3 now includes symptoms/status language, procedure families, chart-style phrasing, admissions or discharge workflow language, diagnostics or imaging language, medication-administration basics, condition-state language, chart-passage decoding, severity or progression language, results or interpretation language, and report-comparison language.
- Unit 4 now includes scheduling, follow-up, records, orders, authorization, intake forms, billing language, portal or reminder language, administrative passage decoding, verification or network language, preparation or instruction language, and billing-resolution language.
- Unit 5 now exists as a broader abbreviations unit with clinical, document, measurement, route, chart-shorthand, history or status, frequency or lab, imaging or urgency, schedule or form, and ambiguity-safety coverage.
- Unit 6 now exists as a broader synthesis unit with mixed recognition, passage-decoding, rapid-parsing, results or discharge synthesis, urgent-imaging synthesis, renal-lab synthesis, blood-count synthesis, abdominal-and-stone synthesis, referral-and-consult synthesis, handoff-and-reassessment synthesis, portal-and-authorization crossover, upper-airway or throat synthesis, respiratory recheck or escalation, pleural or chest synthesis, oncology or pathology synthesis, immune or node synthesis, reproductive follow-up synthesis, verification-prep crossover, ambiguity-results synthesis, and billing-report follow-through lessons.
- Browse mode is implemented as a separate surface and labels future terms as `not yet taught`.
- The abbreviations surface now also flags context-dependent items so learners can see when a short form should not be read as a single guaranteed expansion.
- Browse and abbreviation grids now page visible results so those surfaces stay usable as the content bank grows.
- The review flow is functional with due, new, and mixed queues, queue caps, and filter controls.
- Endless mode is implemented as a separate page with search, unit, body-system, and due-only filters.
- Curriculum now exposes clearer lesson states such as in-progress and review-recommended.
- Progress diagnostics now report storage key, schema version, recovery status, and snapshot size.
- The seed curriculum has now reached a broader starter footprint, but large term batches are still the next scale-out step.

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
- A dedicated export/import migration test now exercises round-trip parsing and partial legacy-state migration.
- Migration logic is still intentionally simple and will need further hardening as the schema grows.

### Stage 2: Lesson Engine
- Build lesson rendering and exercise components.
- Add mastery tracking and audio playback helpers.
- Make lesson completion resumable.

### Stage 2 Status
- A lesson page, exercise cards, audio playback helper, and completion flow exist.
- Lesson completion seeds introduced terms into review.
- Mastery tracking now favors first-attempt performance while still allowing retries inside lessons.
- Lesson content now carries prerequisite lesson guidance and reinforced-term links.
- Lesson visits now persist as in-progress state so resume flows are clearer.

### Stage 3: Seed Curriculum
- Author Unit 0 and the first high-yield building-block modules.
- Add the first body-system lessons and a first abbreviation module.
- Reach roughly 1,000 validated terms before broadening coverage.

### Stage 3 Status
- Unit 0 foundations now include plural and pronunciation coverage.
- Unit 1 is broader, with roots, prefixes, procedures, and condition-suffix language.
- Unit 2 now has coherent cardiovascular, respiratory, gastrointestinal, musculoskeletal, renal/urinary, nervous-system, endocrine, reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up starter slices.
- Unit 3 now has broader slices for clinical-language patterns, chart phrasing, care workflow, diagnostics, medication language, condition-state language, chart passages, severity or progression language, and results or interpretation language.
- Unit 4 now has broader starter slices for administrative, intake, billing, portal, reminder, and purpose-built passage language.
- Unit 4 now also has verification or network language plus preparation or instruction language and is broad enough to move into `shipped`.
- Unit 5 now also has schedule or form plus ambiguous-abbreviation safety lessons and is broad enough to move into `shipped`.
- Unit 5 now exists as a curriculum-linked abbreviations module rather than only a separate recognition page, and now includes chart-note, history or status, frequency or lab, and imaging or urgency shorthand.
- Unit 6 now has seeded mixed-recognition, passage-decoding, rapid-parsing, results or discharge synthesis, urgent-imaging synthesis, renal-lab synthesis, blood-count synthesis, abdominal-and-stone synthesis, referral-and-consult synthesis, handoff-and-reassessment synthesis, portal-and-authorization crossover, upper-airway or throat synthesis, respiratory recheck or escalation, pleural or chest synthesis, oncology or pathology synthesis, immune or node synthesis, and reproductive follow-up synthesis lessons.
- Unit 2, Unit 3, Unit 4, Unit 5, and Unit 6 are now marked `shipped` in the seeded curriculum rather than only `lesson-linked`.

### Stage 4: Endless Mode and SRS
- Add due, new, and mixed queues.
- Build flashcards and lightweight stats.
- Wire eligibility rules to prerequisite completion.

### Stage 4 Status
- A basic review page exists with due, new, and mixed modes, session caps, and content filters.
- Review cards are plain-English recognition prompts, and the queue respects the current seed curriculum.
- Spaced repetition exists as local progress state, and mixed review now favors due terms before filling with new items.
- Endless mode is separate from review and exposes eligible terms with filters instead of a single unbounded drill list.
- The minimum lovable release bar from the PRD is now met.
- Final synthesis lessons now exist, but they still need a larger passage bank and more content depth before they feel close to full-v1 scale.
- Remaining work is still meaningful, but it is now scale-out and refinement work rather than core release plumbing.

### Stage 5: Scale-Out Content Generation
- Expand the term bank in batches of 200 to 500 terms.
- Validate each batch before merging.
- Grow the curriculum across remaining units until the 10,000-term target is reached.

### Stage 5 Status
- The scale-out process is now underway through post-seed curriculum batches that keep extending Units 2, 5, and 6.
- Batch validators are present, but the bank is still a starter corpus rather than a true scale-out corpus.

### Stage 6: Polish and Release Hardening
- Run performance and accessibility passes.
- Tighten copy and consistency.
- Prepare deployment documentation and seed export examples.

### Stage 6 Status
- GitHub Pages deployment workflow support, deployment notes, and a sample export example now exist.
- Browse and abbreviation surfaces now page large result sets instead of trying to render every match at once.
- Remaining polish work is mostly manual QA, accessibility review, and larger-bank performance validation rather than missing release plumbing.

## Batch Strategy
- Generate content in small, reviewable batches only.
- Preferred batch size is 200 to 500 terms per commit.
- Each batch should be focused on a coherent theme such as a root family, body system, or abbreviation set.
- Keep authored lessons aligned to the batch so prerequisites remain understandable.

## Batch Ledger
- Seed batch authored: Unit 0 foundations, broader Unit 1 roots/prefixes/procedures plus condition suffixes, expanded Unit 2 body-system slices, broader Unit 3 and Unit 4 language coverage, and the first lesson-linked Units 5 and 6.
- Latest scale-out batches added Unit 2 integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up language, expanded Unit 5 chart-note plus history or status plus frequency or lab plus imaging or urgency abbreviations, and added Unit 6 rapid parsing plus results or discharge plus urgent-imaging plus renal-lab plus blood-count plus abdominal-and-stone plus referral-and-consult plus handoff-and-reassessment plus portal-and-authorization crossover plus upper-airway or throat plus respiratory recheck or escalation plus pleural or chest plus oncology or pathology plus immune or node plus reproductive follow-up synthesis drills.
- Current seed totals: 7 units, 82 lessons, 89 parts, 217 terms, 256 exercises, and 44 abbreviations.
- Current runtime surfaces: curriculum, lesson, browse, review, endless, abbreviations, progress, settings, and about.
- Current resilience features: versioned import/export, recovery snapshot preservation, destructive-action confirmation, and backup-before-replace/reset prompts.
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
