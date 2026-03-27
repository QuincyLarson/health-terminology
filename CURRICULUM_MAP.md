# CURRICULUM_MAP

## Purpose
This map converts the PRD curriculum into an actionable build order. It is organized by priority, unit, representative modules, and the intended lesson focus so content can be authored in small validated batches. The first seed slice is already implemented in `src/content`.

## Metadata To Track As Authoring Starts
Each future unit and module entry should accumulate:
- prerequisites
- introduced parts
- reinforced terms
- exercise mix
- estimated minutes
- current status
- downstream units supported

## Priority Order
1. Unit 0: How medical terms work.
2. Unit 1: Highest-yield roots and affixes.
3. Unit 2: Core body systems in practical order.
4. Unit 3: Clinical language patterns.
5. Unit 5: Abbreviations and acronyms.
6. Unit 4: Administrative and document language.
7. Unit 6: Final synthesis and mixed review.

## Seeded Coverage
- Unit 0 is partially authored and playable, including plural and pronunciation lessons.
- Unit 1 now covers suffixes, roots, prefixes, rate prefixes, and procedure language.
- Unit 2 now includes starter lessons for cardiovascular, respiratory, and gastrointestinal language.
- The app currently exposes 14 lessons, 40 terms, 35 parts, and 7 abbreviations.
- Browse mode is implemented as a separate surface for search and future-term preview.
- Review flow now uses due, new, and mixed queues with caps and filter controls.
- Endless mode is implemented as a separate surface and only shows eligible terms.
- Abbreviations are implemented as a dedicated recognition surface separate from the main lesson flow.
- Progress/stats is implemented as a separate surface with lesson and storage diagnostics.
- The minimum lovable release bar is now satisfied; remaining work is breadth, deeper SRS tuning, and continued curriculum scale-out.

## Unit 0 - How Medical Terms Work
### Module 0.1: Word Parts and Parsing
- Lesson goal: identify roots, prefixes, suffixes, and combining forms.
- Representative content: `cardi`, `hyper-`, `-itis`, `arthr/o`.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: this is the entry point for the curriculum.

### Module 0.2: Combining Vowels and Form Logic
- Lesson goal: understand how term parts join and why combining vowels exist.
- Representative content: `oste/o`, `neur/o`, `gastr/o`.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: best taken after Unit 0 word-parts parsing.

### Module 0.3: Singular and Plural Basics
- Lesson goal: recognize common singular/plural patterns in medical terms.
- Representative content: `vertebra/vertebrae`, `bacterium/bacteria`, `diagnosis/diagnoses`.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow Unit 0 word-parts parsing.

### Module 0.4: Pronunciation Basics
- Lesson goal: hear and recognize predictable pronunciation patterns.
- Representative content: stress patterns, vowel reduction, silent letters.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow combining-vowel and word-part basics.

## Unit 1 - Highest-Yield Roots and Affixes
### Module 1.1: Inflammation, Pain, and Condition Terms
- Lesson goal: decode common disease-state endings and symptom words.
- Representative content: `-itis`, `-algia`, `-osis`, `pain`, `swelling`.
- Priority: highest.
- Status: seeded as a suffix-first slice.
- Prerequisite guidance: should follow Unit 0 word-parts parsing.

### Module 1.2: Procedures and Interventions
- Lesson goal: identify common procedure-related parts.
- Representative content: `-ectomy`, `-otomy`, `-oscopy`, `-gram`.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 suffix and body-root lessons.

### Module 1.3: Core Body Parts
- Lesson goal: learn the highest-yield organ and tissue roots.
- Representative content: heart, blood, nerve, skin, muscle, bone, stomach, liver, kidney, lung.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 suffix and prefix lessons.

### Module 1.4: High-Frequency Prefixes
- Lesson goal: decode location, intensity, and time-related prefixes.
- Representative content: `hyper-`, `hypo-`, `tachy-`, `brady-`, `peri-`, `endo-`, `epi-`, `sub-`, `intra-`, `inter-`, `dys-`, `eu-`, `neo-`.
- Priority: highest.
- Status: seeded for `hyper-` and `hypo-`; remaining prefixes planned.
- Prerequisite guidance: follow suffix introduction and general parsing.

### Module 1.5: Rate Prefixes
- Lesson goal: decode fast-versus-slow contrasts in clinical language.
- Representative content: `tachy-`, `brady-`, `cardi/o`.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 common prefixes.

### Module 1.6: Procedure Language
- Lesson goal: recognize removal, incision, viewing, and record terms.
- Representative content: `appendic/o`, `col/o`, `-ectomy`, `-otomy`, `-scopy`, `-gram`.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow core body roots and suffixes.

## Unit 2 - Body Systems
### Module 2.1: Cardiovascular
- Lesson goal: recognize terms around the heart, vessels, pressure, and circulation.
- Representative content: `cardi/o`, `angi/o`, `arteri/o`, `ven/o`, `hemat/o`.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 cardiovascular-adjacent roots and procedure language.

### Module 2.2: Respiratory
- Lesson goal: understand airway, breathing, and lung terms.
- Representative content: `pneum/o`, `pulmon/o`, `bronch/o`, `trache/o`.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow Unit 2 cardiovascular starter plus Unit 1 procedure and rate-prefix lessons.

### Module 2.3: Gastrointestinal
- Lesson goal: decode digestive tract and abdominal terms.
- Representative content: `gastr/o`, `enter/o`, `hepat/o`, `col/o`, `cholecyst/o`.
- Priority: high.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 suffix, body-root, and procedure-language lessons.

### Module 2.4: Musculoskeletal
- Lesson goal: understand bones, joints, movement, and connective tissue.
- Representative content: `oste/o`, `arthr/o`, `my/o`, `-pathy`, `-plasty`.
- Priority: high.

### Module 2.5: Nervous System
- Lesson goal: parse terms involving nerves, brain, sensation, and function.
- Representative content: `neur/o`, `encephal/o`, `psych/o`, `phon/o`.
- Priority: high.

### Module 2.6: Endocrine
- Lesson goal: identify hormone, gland, and regulation terms.
- Representative content: `aden/o`, `gluc/o`, `glyc/o`, `thyroid` family terms.
- Priority: medium-high.

### Module 2.7: Urinary / Renal
- Lesson goal: recognize kidney, bladder, urine, and filtration terms.
- Representative content: `nephr/o`, `ren/o`, `cyst/o`, `ur/o`.
- Priority: medium-high.

### Module 2.8: Reproductive
- Lesson goal: decode anatomy and common reproductive-system terms.
- Representative content: `hyster/o`, `metr/o`, `ovari/o`, `orch/i`, `salping/o`.
- Priority: medium-high.

### Module 2.9: Integumentary
- Lesson goal: learn skin, hair, nail, and surface-related language.
- Representative content: `derm/o`, `cutane/o`, `trich/o`, `onych/o`.
- Priority: medium.

### Module 2.10: Hematologic / Immune / Lymphatic
- Lesson goal: recognize blood, immune, and lymph terms.
- Representative content: `hemat/o`, `immun/o`, `lymph/o`, `splen/o`.
- Priority: medium.

### Module 2.11: Sensory Systems
- Lesson goal: understand eye, ear, and sensory terminology.
- Representative content: `ophthalm/o`, `opt/o`, `ot/o`, `aur/o`.
- Priority: medium.

### Module 2.12: Oncology and Pathology Cross-Cutting Terms
- Lesson goal: decode mass, tumor, cancer, benign, malignant, and tissue-change terms.
- Representative content: `onc/o`, `carcin/o`, `-oma`, `-plasia`, `-malacia`.
- Priority: medium.

## Unit 3 - Clinical Language Patterns
### Module 3.1: Symptoms and Signs
- Lesson goal: distinguish what a patient reports from what is observed.
- Representative content: pain, fever, nausea, edema, dyspnea.
- Priority: high.

### Module 3.2: Conditions and Disease States
- Lesson goal: parse diagnosis-style phrasing and condition naming patterns.
- Representative content: chronic, acute, syndrome, disorder, deficiency, infection.
- Priority: high.

### Module 3.3: Procedures and Surgeries
- Lesson goal: recognize how common procedures are named and described.
- Representative content: biopsy, resection, repair, scope, drain, excision.
- Priority: high.

### Module 3.4: Diagnostics and Imaging
- Lesson goal: identify tests, imaging, and result-reporting language.
- Representative content: CBC, MRI, CT, X-ray, ultrasound, lab terms.
- Priority: medium-high.

### Module 3.5: Medications and Administration Basics
- Lesson goal: understand route, dose, frequency, and administration language.
- Representative content: oral, IV, IM, daily, PRN, contraindication.
- Priority: medium-high.

### Module 3.6: Chart-Style Phrasing
- Lesson goal: read short record-style sentences without overload.
- Representative content: assessment, plan, history, exam, follow-up.
- Priority: medium.

### Module 3.7: Admissions, Discharge, and Workflow
- Lesson goal: understand common workflow language used in clinical settings.
- Representative content: admit, discharge, transfer, consult, referral.
- Priority: medium.

## Unit 4 - Administrative and Document Language
### Module 4.1: Forms and Scheduling
- Lesson goal: understand common administrative vocabulary.
- Representative content: appointment, intake, insurance, authorization, reschedule.
- Priority: medium.

### Module 4.2: Records and Orders
- Lesson goal: decode record and order terminology.
- Representative content: chart, file, order, referral, note, documentation.
- Priority: medium.

### Module 4.3: Purpose-Built Passages
- Lesson goal: read short, realistic administrative passages for comprehension.
- Representative content: simplified intake forms, reminders, discharge instructions.
- Priority: medium.

## Unit 5 - Abbreviations and Acronyms
### Module 5.1: Clinical Abbreviations
- Lesson goal: recognize high-frequency chart abbreviations.
- Representative content: BP, HR, RR, SOB, NPO, PRN.
- Priority: high.

### Module 5.2: Document Abbreviations
- Lesson goal: recognize administrative and document abbreviations.
- Representative content: DOB, PCP, ROI, hx, f/u, w/ and w/o.
- Priority: medium-high.

### Module 5.3: Measurement and Route Abbreviations
- Lesson goal: recognize unit, dose, and administration shorthand.
- Representative content: mg, mL, qd, bid, tid, PO, IV, IM, SQ.
- Priority: high.

## Unit 6 - Final Synthesis
### Module 6.1: Mixed Review
- Lesson goal: combine roots, affixes, abbreviations, and context clues.
- Representative content: mixed term sets from all prior units.
- Priority: medium.

### Module 6.2: Passage Decoding
- Lesson goal: read longer passages with layered terminology.
- Representative content: chart fragments, discharge summaries, and workplace language.
- Priority: medium.

### Module 6.3: Rapid Parsing Drills
- Lesson goal: split unseen terms quickly and infer likely meaning.
- Representative content: random eligible terms from the validated bank.
- Priority: medium.

## Build Notes
- Start with Units 0 and 1 before expanding into body systems.
- Keep Unit 5 as a dedicated section rather than folding abbreviations into general lessons.
- Author lessons in small batches so each module can be validated against the term bank and prerequisite graph.
- Treat the curriculum map as an implementation checklist, not just a descriptive outline.
- Use lesson prerequisite metadata to gate later modules and to keep endless mode from surfacing terms too early.
- The current seed app demonstrates the curriculum path, progress persistence, a simple review queue, endless mode, abbreviations, and progress diagnostics, but it is still below the PRD's full-v1 content scale.
- The current seed app also includes browse-first term lookup, retry-friendly lesson completion, and recovery-aware import/reset behavior.
