# AGENTS.md

## Mission

Build HealthTerms.com, a static, text-first, mobile-first medical terminology learning site.

## Product Rules

- Accuracy over flair.
- No hype, mascot voice, or gamified nonsense.
- This is a serious free learning product for curious adults.
- Teach systematic decoding of medical language.
- Keep UI simple, fast, and readable.
- `localStorage` only. No backend.
- Export/import progress as JSON.
- Build for GitHub Pages deployment.

## Work Rules

- Read this file before starting work.
- Do not ask for confirmation after every step.
- Continue autonomously until the current stage is complete.
- Only stop when blocked by a real issue: missing secrets, failing build you cannot resolve, contradictory repository instructions, or unclear medical content that validation rules cannot settle.
- Make Git commits after each completed milestone and each stable content batch.
- Update `README.md`, `CONTENT_STATUS.md`, and `CURRICULUM_MAP.md` as you go.
- Run build/lint/tests/validators before every commit when applicable.
- Prefer small, reviewable commits.

## Content-Generation Rules

- Never try to write the full 10,000-term bank in one pass.
- Expand content in batches of 200-500 terms.
- Validate every batch for schema correctness, duplicate IDs, missing prerequisites, and broken references.
- Prefer high-yield roots and affixes first.
- Use plain-English definitions.
- Keep examples purpose-built and simple.
- Distinguish compositional, partial, and opaque terms.
- Put abbreviations and acronyms in a dedicated section.

## Technical Rules

- Use Vite + TypeScript.
- Favor simple components and deterministic content files.
- Keep bundle size low.
- Optimize mobile-first.
- Use semantic HTML and accessible controls.
- Store all user progress in `localStorage`.
- Support JSON export/import/reset.

## Quality Bar

- The site should feel rigorous, calm, and trustworthy.
- A physician should not find the terminology obviously sloppy.
- A curious general learner should be able to start immediately without onboarding friction.

## Primary Reference

The staged product spec lives in [`docs/prd.md`](docs/prd.md). Follow that document for the intended product shape, curriculum strategy, and staged implementation plan.
