# HealthTerminology.com PRD

## Product name
HealthTerms.com

## Version
PRD v1

## Product summary
HealthTerms.com is a free, fast, text-first medical terminology course for curious general learners. It teaches the structure of medical language so users can follow realistic dialogue, documents, and workplace language without needing a clinical background.

The product is not a medical encyclopedia, certification prep tool, or clinical decision aid. It is a decoding system: learn a relatively small set of high-yield roots, prefixes, suffixes, combining forms, and common exceptions; use them to understand thousands of medical terms.

## Why this PRD is staged for Codex
This PRD is designed for Codex-style implementation rather than a single giant prompt. Official OpenAI docs say Codex can read, change, and run code locally, reads `AGENTS.md` before doing work, supports subagent workflows, and is suited to long-horizon work by iterating through a plan → edit → run tools → repair → repeat loop. OpenAI also recommends using Git checkpoints around tasks. See official docs: https://developers.openai.com/codex/ , https://developers.openai.com/codex/cli/ , https://developers.openai.com/codex/guides/agents-md/ , https://developers.openai.com/codex/subagents/ , https://developers.openai.com/blog/run-long-horizon-tasks-with-codex/ , https://developers.openai.com/codex/quickstart/

## Target learner
Primary learner:
- Curious native English-speaking adults in North America
- Strong intrinsic motivation
- Wants to understand medical language in TV shows, articles, conversations, and common documents
- Wants to “sound smart” but also genuinely learn the system
- Is not looking for credentials

Secondary learner:
- Adjacent professionals (healthcare managers, salespeople, MBA students, operations staff)
- Learners who later open a formal medical terminology textbook and recognize substantial overlap

## Core promise
Learn the system behind medical language so you can hear or read an unfamiliar term, break it apart, and infer what it probably means.

## Positioning
Serious, rigorous, matter-of-fact, and fully free.

The product should feel:
- Consumer-accessible
- Sophisticated in its simplicity
- Non-hype
- Fast to load and easy to resume
- Accurate enough that a physician would shrug and say it is basically fine

## Product principles
1. Accuracy over flair.
2. Systematic decoding over rote memorization.
3. Frequency and usefulness before taxonomic completeness.
4. Text-first, mobile-first, static-first.
5. Learners should start immediately; no account required.
6. Contrived examples are acceptable when they isolate the taught concept.
7. The course is linear, but review is always available.
8. Nothing is locked; endless mode can see all terms, but curriculum order should strongly guide learners.

## Goals
1. Teach 100–150 high-yield building blocks that unlock broad comprehension.
2. Build a canonical bank of 10,000 medical terms with metadata.
3. Deliver a full end-to-end curriculum, not just a glossary or toy MVP.
4. Provide interactive drills that emphasize recognition and decoding.
5. Include a separate, explicit module for abbreviations and acronyms.
6. Support pronunciation playback for terms and examples.
7. Keep all progress in localStorage with JSON export/import.
8. Deploy as a static site suitable for GitHub Pages.

## Non-goals
- No credentialing or certificates
- No enterprise features
- No instructor dashboard
- No adaptive AI tutoring in v1
- No freeform user text grading
- No diagnosis, medical advice, or clinical recommendations
- No heavy media or video
- No accounts or backend in v1
- No reference-dictionary mode as a primary product surface

## Learning outcome
By the end of the course, a learner should be able to:
- Recognize common medical roots, affixes, and combining forms
- Parse unfamiliar terms into meaningful parts
- Infer approximate meanings of new words
- Follow simplified but realistic dialogue, chart-like text, and admin/clinical passages
- Recognize many common abbreviations and acronyms
- Be familiar with thousands of term forms even when not all were explicitly taught one-by-one

## Curriculum philosophy
Use an inverted pyramid:
1. Highest-frequency roots and affixes first
2. Highest-yield body systems and term families next
3. Large term exposure through drills and examples
4. Exceptions, abbreviations, and non-compositional items as a separate layer

The curriculum should explicitly distinguish:
- Compositional terms (built from learnable parts)
- Semi-compositional terms (partly inferable)
- Opaque/common whole terms (recognize as a whole)
- Abbreviations and acronyms
- Eponyms (low emphasis in v1 unless high-frequency)

## Content strategy for 10,000 terms
The 10,000-term goal is a term-bank goal, not a “10,000 individually narrated lessons” goal.

Use three layers:

### Layer A: Explicitly taught building blocks
- ~100–150 roots / combining forms
- ~40–60 prefixes
- ~40–60 suffixes
- ~20 pronunciation rules / conventions
- ~200–400 very common whole terms

### Layer B: Guided derivation terms
- Several thousand terms assembled from taught parts
- Introduced inside drills, flashcards, examples, and later lessons
- Shown with parsing help early and less help later

### Layer C: Recognition-only inventory
- Remaining terms in the 10,000-term bank
- Used in endless mode, flashcards, and reading snippets
- Tagged to prerequisites so they appear only after sufficient groundwork

## Corpus policy
Use a weighted mix of:
- Terms likely to show up in medical TV dialogue
- Terms laypeople commonly encounter in real life
- Terms that are pedagogically useful because they reinforce taught roots

Do not over-optimize for “authentic corpus purity.”
This is a teaching product, so it is acceptable to include terms because they are structurally useful, even if not all are extremely common in entertainment dialogue.

## Tone and writing rules
- Serious and concise
- No cutesy jokes
- No gamified mascot voice
- No exaggerated encouragement
- Praise only when helpful and understated
- Definitions should be plain English first, then term logic second
- Avoid unnecessary clinical complexity

## Information architecture
Main surfaces:
1. Home / landing
2. Curriculum map
3. Lesson page
4. Review page
5. Endless mode
6. Progress / stats
7. Settings / export / import / reset
8. About / methodology

## User flows and navigation model
First-session flow:
1. Land on Home
2. See product summary, seriousness of scope, and a clear `Start Unit 0` call to action
3. Complete the first lesson in Unit 0
4. See a short end-of-lesson choice: continue to the next lesson or review newly introduced terms

Returning-user flow:
1. Home shows a dominant `Resume` action if there is an in-progress lesson
2. If no lesson is in progress, Home shows the next recommended lesson and a quieter `Review due terms` action
3. Due review should be visible whenever it exists, but it should not replace the curriculum as the main product path

Navigation rules:
- Curriculum remains the primary spine of the product
- Review and Endless mode are always reachable without leaving the learner stranded
- Lesson pages must provide a clear path back to the current unit and overall curriculum map
- No screen should require more than one back action to return to a stable navigation surface
- Mobile navigation should keep primary destinations to at most 4 top-level actions

## Screen-level requirements
### Home
- product summary above the fold
- `Start` or `Resume` primary action
- understated progress snapshot
- preview of curriculum structure
- link to methodology and scope boundaries

### Curriculum map
- show units in order with visible completion state
- show lesson states: not started, in progress, completed, review recommended
- surface prerequisites without making the screen visually noisy
- allow browsing future units even when they are not yet recommended

### Lesson page
- concise lesson header with unit, lesson title, and estimated minutes
- progress indication should be present but visually quiet
- exercises, examples, and audio controls should sit in the main reading flow
- completion state should clearly lead to the next recommended action

### Review page
- show due counts, new counts, and mixed-session option
- explain briefly what kind of review session the learner is starting
- keep setup lightweight so review can begin in one tap

### Endless mode
- support filter setup without overwhelming the learner
- show why a term is eligible when helpful
- provide lightweight post-answer feedback and easy exit back to curriculum

### Progress and settings
- surface storage state, export/import controls, and reset controls clearly
- accessibility preferences should be easy to find and preserve locally
- destructive actions must require confirmation

### About / methodology
- explain who the product is for
- explain the decoding-first philosophy
- state non-goals and limitations clearly

## Search and browse policy
- v1 should be browse-first, not search-first
- Term lookup may exist as a secondary convenience surface, but it must not replace curriculum guidance
- Search results may reveal future terms, but they should be labeled as `not yet taught` when prerequisites are unmet
- Future terms should show a concise educational summary rather than a full lesson-like explanation
- Browse paths should include unit, body system, word-part family, and abbreviation category

## Curriculum structure
Recommended macro-structure:

### Unit 0 — How medical terms work
- word parts
- combining vowels
- singular/plural basics
- pronunciation basics
- how to parse a term

### Unit 1 — Highest-yield roots and affixes
- inflammation, incision, removal, viewing, pain, blood, heart, nerve, skin, muscle, bone, stomach, liver, kidney, lung, etc.
- very common prefixes (hyper-, hypo-, tachy-, brady-, peri-, endo-, epi-, sub-, intra-, inter-, dys-, eu-, neo-)
- very common suffixes (-itis, -ectomy, -otomy, -algia, -emia, -osis, -pathy, -logy, -gram, -scopy, -oma)

### Unit 2 — Body systems, in descending practical yield
Suggested order:
1. Cardiovascular
2. Respiratory
3. Gastrointestinal
4. Musculoskeletal
5. Nervous system
6. Endocrine
7. Urinary / renal
8. Reproductive
9. Integumentary
10. Hematologic / immune / lymphatic
11. Sensory systems
12. Oncology / pathology cross-cutting terms

### Unit 3 — Clinical language patterns
- symptoms and signs
- conditions and disease states
- procedures and surgeries
- diagnostics and imaging
- medications / administration basics
- chart-style phrasing
- admissions / discharge / workflow basics

### Unit 4 — Administrative and document language
- common words from forms, scheduling, admissions, insurance-adjacent text, orders, referrals, records
- simplified purpose-built passages only

### Unit 5 — Abbreviations and acronyms
- special section
- common clinical abbreviations
- common document abbreviations
- common measurement and route abbreviations
- recognition emphasis, not production emphasis

### Unit 6 — Final synthesis
- long mixed review
- passage decoding
- rapid term parsing drills
- endless mode recommendation

## Lesson template
Each lesson should follow a consistent structure:
1. Title
2. Why this matters
3. Introduce 1–5 word parts or a small term family
4. Show 5–15 example terms
5. Term parsing drill
6. Meaning inference drill
7. Cloze or short passage drill
8. Review summary
9. Mark lesson complete

Lesson length target:
- 5 to 12 minutes on mobile

## Lesson interaction specification
- Each lesson should contain a short teaching section plus 3 to 8 graded interactions
- At least one graded interaction should test each primary learning objective
- Feedback should be immediate by default, with 1 to 3 short sentences of explanation
- Correctness must be communicated with text and iconography, not color alone
- Learners may retry missed items; lesson completion should not depend on a perfect score
- Lesson mastery should consider first-attempt performance, total retries, and coverage of introduced items
- Completed lessons remain freely revisitable, and revisits may improve mastery

## Content display and term-explanation format
For taught parts and terms, the default display should include:
- canonical text
- pronunciation text
- plain-English meaning
- short decoding explanation
- relevant unit or body-system tag

Rendering rules:
- Fully compositional terms should show segmented parts with part-by-part glosses
- Partial terms should show the safe decomposition plus a note that the mapping is incomplete
- Opaque terms should be labeled as recognition-first items rather than forced into fake decomposition
- Lesson mode may show more scaffolding than review mode
- Review and Endless mode should favor concise prompts and short explanations

## Reading passages and example-content rules
- Early lessons should use single-sentence examples or very short two-line exchanges
- Later lessons may use short passages of 40 to 120 words
- Purpose-built passages may include dialogue, chart-style text, referral snippets, intake text, or scheduling/admin language
- New passages should limit untaught terms and keep jargon density low enough that the taught concept remains the focus
- Hints should be reveal-on-tap or post-answer, not permanently cluttering the reading flow
- Passage exercises should test decoding, not clinical reasoning

## Exercise types
Primary exercise types only:
1. Root matching
2. Prefix/suffix meaning match
3. Build the term from parts
4. Split the term into parts
5. Infer the meaning of an unseen term
6. Choose the best plain-English paraphrase
7. Cloze sentence with one taught concept
8. Flashcard review
9. Endless mode recognition drills

Avoid:
- open-ended essays
- typing-heavy tasks as default
- domain knowledge not yet taught
- complex case studies
- diagnosis-style reasoning

## Pronunciation
Pronunciation matters, but recognition matters more than recall.

Requirements:
- Every taught term can be played aloud
- Every root/affix can optionally be played aloud if feasible
- No pronunciation scoring in v1
- Minimal visual pronunciation hints are acceptable
- Hearing the term a few times should be enough

Implementation preference:
- Use browser-native speech synthesis if available
- Degrade gracefully to text-only if unavailable

## Endless mode
Endless mode is a post-curriculum and anytime review mode.

Requirements:
- Never locked
- Pulls from the full 10,000-term bank
- Filters by learned prerequisites, unit, body system, exercise type, and due terms
- Supports flashcards and quick multiple-choice drills
- Designed for short sessions

## Review and SRS functional rules
- `Due now` contains eligible terms with `next_due_at` less than or equal to the current time
- `New` contains terms from completed or in-progress lessons whose prerequisites are satisfied and which have not yet entered review
- `Mixed` should favor due terms first and fill the remainder with new terms, with a default target of roughly 70% due and 30% new
- New-term intake should be capped per session so review does not swamp the curriculum; a default cap of 10 new terms per session is acceptable for v1
- Newly taught terms should enter review after the learner completes the lesson or demonstrates correct recognition during lesson flow
- Incorrect review answers should reduce interval, increase priority, and schedule the term for near-term reappearance
- Repeated failures on the same term should mark it for extra exposure or temporary suspension review logic after a small number of failed sessions
- Lesson examples may re-seed forgotten terms when they remain important to future units
- Review eligibility must respect prerequisites so recognition-only inventory does not appear too early

## Spaced repetition
Required in v1.

Behavior:
- Each term has review metadata
- Correct answers increase interval
- Incorrect answers reduce interval and raise priority
- Newly introduced terms enter a learning queue
- Endless mode can switch between “Due now”, “New”, and “Mixed”

Simple default SRS fields:
- seen_count
- correct_count
- incorrect_count
- last_seen_at
- next_due_at
- interval_days
- ease_factor
- suspended

## Progress and persistence
Use localStorage only.

Requirements:
- Resume exactly where the learner left off
- Store lesson completion, mastery, and SRS state
- Export to JSON
- Import from JSON
- Reset progress
- Handle schema migrations with versioning

Suggested export shape:
```json
{
  "version": 1,
  "exportedAt": "ISO_DATE",
  "user": {
    "currentUnit": "unit-2",
    "currentLesson": "cardio-03"
  },
  "lessons": {
    "lesson-id": {
      "completed": true,
      "mastery": 0.86,
      "lastVisitedAt": "ISO_DATE"
    }
  },
  "terms": {
    "term-id": {
      "seenCount": 7,
      "correctCount": 5,
      "incorrectCount": 2,
      "easeFactor": 2.3,
      "intervalDays": 4,
      "nextDueAt": "ISO_DATE",
      "lastSeenAt": "ISO_DATE"
    }
  },
  "settings": {
    "audioEnabled": true,
    "reducedMotion": false
  }
}
```

## Error states and data-safety UX
- If speech synthesis is unavailable, audio controls should degrade gracefully to a text-only experience
- If the due queue is empty, the product should direct the learner to the next curriculum step or a mixed recognition session
- Imports must validate structure and version before replacing local progress
- Import overwrite and full reset require explicit confirmation
- When possible, the product should offer a downloadable backup before destructive import or reset actions
- If local progress is corrupted or partially incompatible after a schema change, preserve the raw snapshot, attempt migration, and fail into a clear recovery message rather than silently discarding progress

## UX requirements
- Mobile-first layout
- Very fast initial load
- Keyboard-friendly on desktop
- Touch-friendly controls
- Minimal chrome
- Progress visible but understated
- Dark mode optional, not required for first pass
- No account wall, no paywall, no onboarding funnel

## Accessibility requirements
- Semantic HTML first
- Screen-reader friendly labels
- Sufficient contrast
- Focus states visible
- Do not rely on color alone to convey correctness
- Motion should be minimal and optional
- Audio controls must not autoplay

## Technical stack
Required:
- Vite
- TypeScript
- Static deploy
- localStorage persistence

Recommended:
- React
- JSON or TS data files for curriculum content
- Simple build-time validation scripts
- No backend
- No database
- No auth

## Performance budgets and delivery strategy
- Initial route JavaScript should target 200 KB gzip or less, excluding later-loaded content chunks
- The first lesson route should feel interactive within roughly 2 seconds on a mid-range mobile device under ordinary conditions
- No route should load the entire 10,000-term bank eagerly
- Curriculum, term-bank, and abbreviation data should be chunked by unit or logical slice, with module-sized data payloads kept modest
- Large review lists and browse surfaces should be paginated, virtualized, or otherwise windowed
- GitHub Pages deployment should rely on static assets only; no runtime server dependency is allowed
- Audio should default to browser-native synthesis so the initial bundle does not carry large media assets

## Data model
Create a canonical term bank with these minimum entities:

### Root / affix entity
- id
- text
- type (root | prefix | suffix | combining_form)
- plain_meaning
- alt_meanings
- pronunciation_text
- examples[]
- prerequisite_ids[]
- unit_id
- frequency_rank

### Term entity
- id
- term
- normalized_term
- pronunciation_text
- audio_key (optional)
- plain_meaning
- short_definition
- body_system
- difficulty
- frequency_band
- source_type (show_like | lay_exposure | pedagogic)
- compositionality (full | partial | opaque)
- parts[]
- prerequisite_ids[]
- lesson_ids[]
- tags[]

### Lesson entity
- id
- title
- unit_id
- objective
- introduces_part_ids[]
- introduces_term_ids[]
- exercise_set_ids[]
- estimated_minutes

### Exercise entity
- id
- type
- prompt
- choices[]
- answer
- explanation
- linked_term_ids[]
- linked_part_ids[]

## Term-bank rules
1. Every term must have a plain-English meaning.
2. If a term is decomposable, store the decomposition.
3. If decomposition is disputed or awkward, mark it partial or opaque.
4. Do not fake etymology beyond what is pedagogically safe.
5. Prefer simple, modern plain-English glosses.
6. The same root may appear in many systems; keep cross-links.
7. Terms should be tagged for when they become eligible in endless mode.

## Curriculum sequencing model
- Curriculum sequencing should operate at both the lesson level and the term level
- Every lesson should declare prerequisites in terms of prior lessons, introduced parts, or required mastery
- Content should move through three learner-facing states:
  - taught
  - eligible for review
  - recognition-only
- Endless mode may draw only from items that are review-eligible or explicitly marked safe for recognition exposure
- Abbreviations should generally appear only after their related full-form terms or body-system context has been introduced

## Unit and lesson production targets
Minimum production targets should keep units comparable and shippable:
- Each unit should define a target lesson count and a minimum viable subset that can ship first
- Each lesson should declare its introduced parts, reinforced terms, exercise mix, and estimated minutes
- Units should specify how many items are explicitly taught versus guided-derivation versus recognition-only
- Pilot units may ship with narrower coverage, but they should still model the final content format faithfully

## Content status taxonomy
All curriculum artifacts should use the same status model:
- planned
- drafted
- validated
- lesson-linked
- review-ready
- shipped

This taxonomy should apply to units, lessons, term batches, word parts, and abbreviation sets.

## Curriculum map metadata
Every unit and lesson should have enough metadata to support sequencing and planning:
- prerequisites
- learning objective
- parts introduced
- terms reinforced
- exercise mix
- estimated minutes
- downstream units supported
- current content status

## Content style and editorial rules
- Definitions should follow a plain-English-first pattern, then a short decoding explanation if useful
- Etymology should appear only when it helps the learner decode related terms
- Partial and opaque labels should be used honestly rather than forcing overconfident decomposition
- Example sentences should stay short, readable, and focused on the taught concept
- Abbreviations should be shown with explicit expansion and category labeling
- Avoid trivia, low-yield eponyms, and pathology detail that does not improve decoding skill

## Term eligibility and release rules
- Lesson examples may include taught terms and tightly controlled near-neighbor terms when context makes them safe
- Guided drills should use only taught items plus carefully introduced unseen combinations that are inferable from taught parts
- Endless mode should require prerequisite coverage before surfacing a term
- Flashcards may include recognition-only inventory only after prerequisite tags say the learner is ready
- Reading passages should cap untaught material so the learner is decoding, not guessing blindly

## Abbreviation governance
- Store abbreviations as a dedicated content class rather than ordinary term aliases
- Mark ambiguous abbreviations explicitly and, when necessary, keep them recognition-only
- Separate clinical abbreviations, document abbreviations, measurement abbreviations, and route abbreviations
- Permit multiple expansions only when the ambiguity is essential to real-world recognition
- Unsafe ambiguity should be explained with context tags rather than hidden

## Validation and QA policy
Automated checks must cover:
- duplicate IDs
- normalized term collisions
- missing prerequisite references
- missing lesson, part, or term backlinks
- invalid compositionality values
- abbreviation collisions
- unsupported unlock paths

Manual QA must cover:
- random medical sanity checks
- learner readability checks
- mobile rendering review for new lesson content
- spot review of decomposition confidence for partial and opaque terms

## Content batch workflow
Every 200 to 500 term batch should follow the same sequence:
1. choose scope by unit, body system, or content type
2. draft parts, terms, lessons, and abbreviations needed for that scope
3. run validators
4. resolve duplicates and broken references
5. spot-check medical accuracy and readability
6. update `CONTENT_STATUS.md` and `CURRICULUM_MAP.md`
7. commit the batch as a reviewable unit

Each batch should declare:
- covered units or modules
- new parts introduced
- term counts by compositionality
- abbreviation coverage
- blockers and deferred items

## Batch acceptance checklist
A content batch is ready to merge only when it is:
- schema-valid
- reference-complete
- deduplicated
- lesson-linked where intended
- reflected in status docs
- coherent as a learner path sample

## How to actually reach 10,000 terms without breaking Codex
Do not generate the entire curriculum or term bank in one shot.

Instead:
1. Build the content schema and validation scripts first.
2. Build the lesson engine second.
3. Create a seed curriculum with 3–5 modules.
4. Lock the content format.
5. Expand the term bank in batches of 200–500 terms.
6. Validate every batch automatically.
7. Expand lessons and exercises by unit.
8. Re-run build, lint, tests, and validators after every batch.

The 10,000-term bank should be generated through many commits, not one heroic prompt.

## Staged implementation plan

### Stage 0 — Repository setup
Deliverables:
- Vite + TypeScript app scaffold
- routing skeleton
- global styles
- content directory structure
- AGENTS.md
- README
- CONTENT_STATUS.md
- CURRICULUM_MAP.md
- GitHub Pages deploy config

Acceptance criteria:
- app runs locally
- builds successfully
- deploy preview works

### Stage 1 — Core data and persistence
Deliverables:
- JSON/TS schemas
- validators for terms, parts, lessons, exercises
- localStorage persistence layer
- import/export/reset flow
- schema versioning

Acceptance criteria:
- invalid content fails validation
- progress survives refresh
- export/import round-trip works

### Stage 2 — Lesson engine
Deliverables:
- lesson renderer
- progress tracker
- mastery calculation
- exercise components for all primary exercise types
- audio playback helper

Acceptance criteria:
- at least 5 lesson archetypes render correctly
- learner can complete lesson and resume later

### Stage 3 — Seed curriculum
Deliverables:
- Unit 0 complete
- first 2–3 body-system modules complete
- first abbreviation module draft
- at least 1,000 terms in bank

Acceptance criteria:
- coherent end-to-end learning flow
- endless mode can draw eligible terms

### Stage 4 — Endless mode + SRS
Deliverables:
- due queue
- new queue
- mixed queue
- flashcards
- lightweight stats dashboard

Acceptance criteria:
- due scheduling behaves predictably
- stats update correctly

### Stage 5 — Scale-out content generation
Deliverables:
- remaining units expanded in batches
- 10,000-term bank reached
- all terms tagged and validated
- all lessons cross-linked to term bank

Acceptance criteria:
- content validator passes
- no duplicate IDs
- no orphaned prerequisites
- no broken lesson references

### Stage 6 — Polish and release hardening
Deliverables:
- performance pass
- accessibility pass
- copy pass for consistency
- deployment docs
- seed export sample

Acceptance criteria:
- fast on mobile
- no major accessibility regressions
- successful GitHub Pages deployment


## Suggested repository structure
```text
/README.md
/AGENTS.md
/CONTENT_STATUS.md
/CURRICULUM_MAP.md
/src
  /app
  /components
  /pages
  /styles
  /lib
    progress/
    srs/
    audio/
    validation/
    curriculum/
  /content
    /parts
    /terms
    /lessons
    /units
    /abbreviations
  /types
  /hooks
/scripts
  validate-content.ts
  generate-indices.ts
  find-duplicates.ts
/public
```

## Validation scripts required
Create scripts for:
- schema validation
- duplicate detection
- missing prerequisite detection
- missing lesson/term/part reference detection
- term normalization checks
- export/import migration test

## Release slices and MVP boundaries
Define two release levels inside v1:

### Minimum lovable release
- static app scaffold is complete
- Unit 0 is complete
- Unit 1 high-yield roots and affixes are usable
- at least 2 body-system modules are coherent end-to-end
- review, progress persistence, and JSON export/import work
- a validated seed bank exists with enough terms to demonstrate the system

### Full v1 release
- full curriculum is navigable
- abbreviations module is present
- Endless mode and SRS are stable across the validated term bank
- documentation and content operations support continued scale-out to 10,000 terms

## Measurement policy
- v1 should not depend on invasive analytics or account-based tracking
- If analytics are added, they should be privacy-preserving and compatible with static deployment
- The key product questions are start rate, lesson completion, review return rate, export/import usage, and drop-off by unit

## Success metrics for v1
Primary:
- learner can progress through a complete curriculum
- site remains fast on mobile
- 10,000 tagged terms exist in validated term bank
- endless mode and SRS work reliably

Secondary:
- learners can export/import progress
- pronunciation playback exists for taught terms
- first-time user can begin learning within seconds

## Risks and mitigations
### Risk: 10,000 terms overwhelm the context window
Mitigation:
- batched content generation
- canonical schemas
- validators
- explicit progress docs

### Risk: medical definitions become inconsistent
Mitigation:
- style guide for plain-English definitions
- reusable templates
- validation + spot checks

### Risk: UI grows complicated
Mitigation:
- strict component limit
- text-first approach
- no unnecessary product surfaces

### Risk: endless mode becomes noisy
Mitigation:
- prerequisite tagging
- difficulty bands
- due/new/mixed filters

## First implementation order for Codex
1. Scaffold app and docs
2. Add schemas and validators
3. Add localStorage progress model + JSON export/import
4. Build lesson engine and core exercises
5. Build endless mode and SRS
6. Create Unit 0 + first high-yield root modules
7. Expand term bank in validated batches
8. Complete body systems
9. Add abbreviations/acronyms section
10. Polish and deploy

## Definition of done
HealthTerms.com is done when:
- the static site builds and deploys
- curriculum is navigable end-to-end
- endless mode works
- progress persists locally and exports/imports cleanly
- the validated term bank contains 10,000 terms
- documentation explains how content is organized and extended
