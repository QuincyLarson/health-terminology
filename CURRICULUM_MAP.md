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
- Unit 1 now covers suffixes, roots, prefixes, rate prefixes, procedure language, condition-suffix decoding, location-prefix families, `-stomy` procedure families, common root recombinations, a dedicated vessel-root family, blood-count families, broader prefix-shift and dysfunction families, imaging or heart-tracing record families, inflammation or narrowing families, `-oma` and growth-language families, urine or discharge families, and measurement or recording families.
- Unit 2 now includes starter lessons for cardiovascular, respiratory, gastrointestinal, musculoskeletal, renal/urinary, nervous-system, endocrine, reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up language.
- Unit 3 now includes starter lessons for clinical language patterns, chart phrasing, workflow language, diagnostics, medication basics, condition-state language, chart passages, severity or progression language, results or interpretation language, and report-comparison language.
- Unit 4 now includes starter lessons for administrative, intake, billing, portal, reminder, purpose-built passage language, verification or network language, preparation or instruction language, and billing-resolution language.
- Unit 5 now exists as a broader abbreviations unit with chart-note, history or status, frequency or lab, imaging or urgency, schedule or form, and ambiguity-safety shorthand coverage.
- Unit 6 now exists as a broader final synthesis unit with rapid parsing, results or discharge synthesis, urgent-imaging drills, renal-lab synthesis, blood-count synthesis, abdominal-and-stone synthesis, referral-and-consult synthesis, handoff-and-reassessment synthesis, portal-and-authorization crossover drills, upper-airway or throat synthesis, respiratory recheck or escalation drills, pleural or chest synthesis drills, oncology or pathology synthesis drills, immune or node synthesis drills, reproductive follow-up synthesis drills, verification-prep crossover drills, ambiguity-results synthesis drills, billing-report follow-through drills, and additional long-form passages for results recheck, discharge or referral, coverage workflow, imaging impressions, medication reconciliation, consult or portal handoff reading, ED reassessment, lab-trend follow-through, operative-note specimen handoff, discharge medication planning, and refill or authorization imaging follow-up.
- The app currently exposes 123 lessons, 370 terms, 182 parts, 422 exercises, and 44 abbreviations.
- Browse mode is implemented as a separate surface for search and future-term preview.
- Drills now use due, new, and mixed queues with caps and filter controls.
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
- Status: seeded as a suffix-first slice with added condition-suffix coverage.
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
- Status: seeded for `hyper-`, `hypo-`, `peri-`, `endo-`, and `epi-`; remaining prefixes planned.
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

### Module 1.7: Location Prefix Families
- Lesson goal: use high-yield location prefixes to expand known root families into many more common terms.
- Representative content: `peri-`, `endo-`, `epi-`, pericarditis, endocarditis, endoscopy, epigastric.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow common prefixes, core body roots, and basic procedure language.

### Module 1.8: The `-stomy` Procedure Family
- Lesson goal: recognize the created-opening pattern across several common root families.
- Representative content: `-stomy`, tracheostomy, gastrostomy, colostomy, cystostomy, ileostomy, nephrostomy.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow procedure language and location-prefix basics.

### Module 1.9: Common Root Recombinations
- Lesson goal: practice the inverted-pyramid model by recombining a small set of roots and suffixes into many common higher-order terms.
- Representative content: cardiomyopathy, nephrectomy, nephropathy, gastroscopy, gastroenterology, enteropathy, otalgia.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow Unit 1 condition-suffix and procedure-family lessons.

### Module 1.10: The Vessel Root Family
- Lesson goal: expand one of the most common cardiovascular root families into everyday adjectives, procedure language, and disease terms.
- Representative content: vascular, vasculitis, endovascular, perivascular, arterial, venous, arteriosclerosis, atherosclerosis.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow location-prefix families and common root recombinations.

### Module 1.11: Blood Count and Deficiency Families
- Lesson goal: decode high-yield count, cell-line, and blood-record patterns before learners meet them as isolated lab words.
- Representative content: leukopenia, thrombocytopenia, thrombocytosis, pancytopenia, hemogram, hemolysis.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the current Unit 1 vessel-family lessons.

### Module 1.12: Prefix Shifts and Dysfunction Families
- Lesson goal: reuse compact prefixes and condition endings across medication, symptom, and disease-language families.
- Representative content: anti-, eu-, mal-, dys-, pathology, pathogenic, hemostasis, homeostasis, cholestasis.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow common prefixes and the Unit 1 blood-count batch.

### Module 1.13: Diagnostic Record and Tracing Families
- Lesson goal: decode the most common imaging and tracing words by focusing on recording endings instead of memorizing isolated tests.
- Representative content: radiograph, radiography, sonogram, mammogram, cardiograph, electrocardiogram, electrocardiography.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the Unit 1 blood-count and prefix-shift batches.

### Module 1.14: Inflammation, Narrowing, and Protrusion Families
- Lesson goal: reuse a small set of high-frequency endings across inflammation, narrowing, bleeding, and bulge words.
- Representative content: `-itis`, `sten/o`, `-stenosis`, `-ectasis`, `-rrhage`, `-rrhagia`, `-cele`.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the early suffix and body-root lessons plus the imaging-record batches.

### Module 1.15: Growth, Mass, and `-Oma` Families
- Lesson goal: decode common pathology and tumor words by learning the reusable growth and mass patterns first.
- Representative content: neoplastic, metaplastic, adenoma, melanoma, lipoma, myeloma, sarcoma, fibroadenoma.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the inflammation and tissue-change batches.

### Module 1.16: Urine, Bleeding, and Discharge Families
- Lesson goal: decode high-frequency output and discharge words rather than memorizing them as isolated symptom terms.
- Representative content: anuria, nocturia, pyuria, hematemesis, hemoptysis, diarrhea, galactorrhea, steatorrhea.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the inflammation, protrusion, and growth-language batches.

### Module 1.17: Measurement and Recording Families
- Lesson goal: distinguish instruments, measurements, records, and recording processes across common tests.
- Representative content: spirometer, spirometry, oximeter, thermometry, electroencephalogram, tomography, echocardiography.
- Priority: highest.
- Status: seeded.
- Prerequisite guidance: follow the earlier diagnostic-record families and the urine or discharge batches.

## Unit 2 - Body Systems
Unit 2 now has authored starter slices for cardiovascular, respiratory, gastrointestinal, musculoskeletal, renal/urinary, nervous-system, endocrine, reproductive, immune or lymphatic, integumentary, sensory, oncology or tumor, blood or clotting, deeper urinary-output or testing, hepatobiliary or stone, upper-airway or throat, pleural or chest, pathology or tissue-change, lymph-node or immune-condition, and reproductive symptoms or follow-up language.
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
- Representative content: `gastr/o`, `enter/o`, `hepat/o`, `col/o`, `cholecyst/o`, `-lithiasis`.
- Priority: high.
- Status: seeded with added hepatobiliary and stone depth.
- Prerequisite guidance: follow Unit 1 suffix, body-root, and procedure-language lessons.

### Module 2.4: Musculoskeletal
- Lesson goal: understand bones, joints, movement, and connective tissue.
- Representative content: `oste/o`, `arthr/o`, `my/o`, `-pathy`, `-plasty`.
- Priority: high.
- Status: seeded.

### Module 2.5: Nervous System
- Lesson goal: parse terms involving nerves, brain, sensation, and function.
- Representative content: `neur/o`, `encephal/o`, `psych/o`, `phon/o`.
- Priority: high.
- Status: seeded as a disorder-language slice.

### Module 2.6: Endocrine
- Lesson goal: identify hormone, gland, and regulation terms.
- Representative content: `aden/o`, `gluc/o`, `glyc/o`, `thyroid` family terms.
- Priority: medium-high.
- Status: seeded as a glycemic and thyroid slice.

### Module 2.7: Urinary / Renal
- Lesson goal: recognize kidney, bladder, urine, and filtration terms.
- Representative content: `nephr/o`, `cyst/o`, `-itis`, `-scopy`, `-uria`.
- Priority: medium-high.
- Status: seeded with added urine-output and urine-testing depth.

### Module 2.8: Reproductive
- Lesson goal: decode anatomy and common reproductive-system terms.
- Representative content: `hyster/o`, `metr/o`, `ovari/o`, `orch/i`, `salping/o`.
- Priority: medium-high.
- Status: seeded as a starter procedure and inflammation slice.

### Module 2.9: Integumentary
- Lesson goal: learn skin, hair, nail, and surface-related language.
- Representative content: `derm/o`, `cutane/o`, `trich/o`, `onych/o`.
- Priority: medium.
- Status: seeded as a skin-language starter slice.

### Module 2.10: Hematologic / Immune / Lymphatic
- Lesson goal: recognize blood, immune, and lymph terms.
- Representative content: `hemat/o`, `immun/o`, `lymph/o`, `splen/o`.
- Priority: medium.
- Status: seeded as immune, lymphatic, and blood-language starter slices.

### Module 2.11: Sensory Systems
- Lesson goal: understand eye, ear, and sensory terminology.
- Representative content: `ophthalm/o`, `opt/o`, `ot/o`, `aur/o`.
- Priority: medium.
- Status: seeded as an eye, ear, and hearing starter slice.

### Module 2.12: Oncology and Tumor Cross-Cutting Terms
- Lesson goal: decode mass, tumor, cancer, benign, malignant, and tissue-change terms.
- Representative content: `onc/o`, `carcin/o`, `-oma`, `-plasia`, `-malacia`.
- Priority: medium.
- Status: seeded as an oncology and tumor starter slice.

### Module 2.13: Upper Airway and Throat
- Lesson goal: decode common nose, sinus, throat, and voice-box terms using familiar inflammation and discharge patterns.
- Representative content: `rhin/o`, `sinus/o`, `pharyng/o`, `laryng/o`, `-rrhea`.
- Priority: medium-high.
- Status: seeded.

### Module 2.14: Pleural and Chest
- Lesson goal: decode chest, pleural, and chest-procedure terms using familiar inflammation and procedure patterns.
- Representative content: `pleur/o`, `thorac/o`, `-centesis`, `thoracotomy`, `thoracentesis`.
- Priority: medium-high.
- Status: seeded.

### Module 2.15: Pathology and Tissue Change
- Lesson goal: decode high-yield growth, development, softening, and spread terms that appear in oncology and pathology reports.
- Representative content: `-plasia`, `-malacia`, dysplasia, hyperplasia, metastasis.
- Priority: medium-high.
- Status: seeded.

### Module 2.16: Lymph-Node and Immune Conditions
- Lesson goal: decode high-yield lymph-node, immune-condition, and immune-cell terms that appear in consults, labs, and infection follow-up.
- Representative content: `aden/o`, lymphadenopathy, lymphadenitis, lymphocyte, immunodeficiency.
- Priority: medium-high.
- Status: seeded.

### Module 2.17: Reproductive Symptoms and Follow-Up
- Lesson goal: decode high-yield reproductive symptom, breast, and after-childbirth terms that appear in follow-up visits and portal messages.
- Representative content: `men/o`, `mast/o`, dysmenorrhea, amenorrhea, mastitis, postpartum.
- Priority: medium-high.
- Status: seeded.

## Unit 3 - Clinical Language Patterns
Unit 3 now has authored slices for symptoms/status language, procedure families, chart phrasing, workflow language, diagnostics, medication basics, chart passages, severity or progression language, results or interpretation language, and report-comparison language.
### Module 3.1: Symptoms and Signs
- Lesson goal: distinguish what a patient reports from what is observed.
- Representative content: pain, fever, nausea, edema, dyspnea.
- Priority: high.
- Status: seeded as a symptom or status slice.

### Module 3.2: Conditions and Disease States
- Lesson goal: parse diagnosis-style phrasing and condition naming patterns.
- Representative content: chronic, acute, syndrome, disorder, deficiency, infection.
- Priority: high.
- Status: seeded.

### Module 3.3: Procedures and Surgeries
- Lesson goal: recognize how common procedures are named and described.
- Representative content: biopsy, resection, repair, scope, drain, excision.
- Priority: high.
- Status: seeded as a cross-system procedure-family slice.

### Module 3.4: Diagnostics and Imaging
- Lesson goal: identify tests, imaging, and result-reporting language.
- Representative content: CBC, MRI, CT, X-ray, ultrasound, lab terms.
- Priority: medium-high.
- Status: seeded as a report-language and ultrasound slice.

### Module 3.5: Medications and Administration Basics
- Lesson goal: understand route, dose, frequency, and administration language.
- Representative content: oral, IV, IM, daily, PRN, contraindication.
- Priority: medium-high.
- Status: seeded as a route and dosage slice.

### Module 3.6: Chart-Style Phrasing
- Lesson goal: read short record-style sentences without overload.
- Representative content: assessment, plan, history, exam, follow-up.
- Priority: medium.
- Status: seeded.

### Module 3.7: Admissions, Discharge, and Workflow
- Lesson goal: understand common workflow language used in clinical settings.
- Representative content: admit, discharge, transfer, consult, referral.
- Priority: medium.
- Status: seeded.

### Module 3.8: Chart Passage Decoding
- Lesson goal: read short chart fragments that mix section labels, symptoms, and updates.
- Representative content: history of present illness, physical exam, progress note, reassessment.
- Priority: medium.
- Status: seeded.

### Module 3.9: Severity and Progression Language
- Lesson goal: recognize high-yield chart words for worsening, recurrence, persistence, and quieter periods.
- Representative content: exacerbation, remission, recurrent, persistent, progressive.
- Priority: medium.
- Status: seeded.

### Module 3.10: Results and Interpretation Language
- Lesson goal: understand the result-summary words that signal above-range, below-range, present, absent, or nothing notable.
- Representative content: elevated, decreased, positive, negative, unremarkable.
- Priority: medium.
- Status: seeded.

### Module 3.11: Report Comparison Language
- Lesson goal: understand the report words that mark uncertainty, secondary findings, and comparison over time.
- Representative content: abnormal, indeterminate, incidental finding, interval change, compare with prior.
- Priority: medium.
- Status: seeded.

## Unit 4 - Administrative and Document Language
Unit 4 now has authored slices for scheduling, follow-up, records, orders, authorization, intake, billing, portal, reminder, verification or network, preparation or instruction, and billing-resolution language.
### Module 4.1: Forms and Scheduling
- Lesson goal: understand common administrative vocabulary.
- Representative content: appointment, intake, insurance, authorization, reschedule.
- Priority: medium.
- Status: seeded as a scheduling and intake slice.

### Module 4.2: Records and Orders
- Lesson goal: decode record and order terminology.
- Representative content: chart, file, order, referral, note, documentation.
- Priority: medium.
- Status: seeded.

### Module 4.3: Coverage and Billing
- Lesson goal: recognize common insurance and payment language.
- Representative content: coverage, claim, copay, deductible, denial.
- Priority: medium.
- Status: seeded.

### Module 4.4: Portals, Results, and Reminders
- Lesson goal: read short portal and message-style administrative language.
- Representative content: patient portal, test results, after-visit summary, refill request, appointment reminder.
- Priority: medium.
- Status: seeded.

### Module 4.5: Purpose-Built Passages
- Lesson goal: read short, realistic administrative passages for comprehension.
- Representative content: simplified intake forms, reminders, discharge instructions.
- Priority: medium.
- Status: seeded.

### Module 4.6: Verification and Network Language
- Lesson goal: understand the terms used to confirm active coverage, plan participation, and policy ownership.
- Representative content: eligibility, verification, in-network, out-of-network, subscriber.
- Priority: medium.
- Status: seeded.

### Module 4.7: Preparation and Instruction Language
- Lesson goal: read the most common pre-visit, pre-procedure, and callback instruction phrases without confusion.
- Representative content: pre-registration, preparation instructions, fasting instructions, arrival time, callback request.
- Priority: medium.
- Status: seeded.

### Module 4.8: Billing Resolution Language
- Lesson goal: understand what happens after a bill or denial needs follow-through and review.
- Representative content: appeal, estimate, balance due, billing statement, itemized bill.
- Priority: medium.
- Status: seeded.

## Unit 5 - Abbreviations and Acronyms
Unit 5 now has authored slices for clinical, document, measurement, route, chart-note, history or status, frequency or lab, imaging or urgency, schedule or form, and ambiguity-safety abbreviations.
### Module 5.1: Clinical Abbreviations
- Lesson goal: recognize high-frequency chart abbreviations.
- Representative content: BP, HR, RR, SOB, NPO, PRN.
- Priority: high.
- Status: seeded.

### Module 5.2: Document Abbreviations
- Lesson goal: recognize administrative and document abbreviations.
- Representative content: DOB, PCP, ROI, hx, f/u, w/ and w/o.
- Priority: medium-high.
- Status: seeded as a workflow and chart-shorthand slice.

### Module 5.3: Measurement and Route Abbreviations
- Lesson goal: recognize unit, dose, and administration shorthand.
- Representative content: mg, mL, qd, bid, tid, PO, IV, IM, SQ.
- Priority: high.
- Status: seeded as a route and dose-unit slice.

### Module 5.4: Chart and Note Abbreviations
- Lesson goal: recognize compressed shorthand for normal findings and with or without phrasing.
- Representative content: WNL, w/, w/o, SQ in context.
- Priority: medium.
- Status: seeded.

### Module 5.5: History and Status Abbreviations
- Lesson goal: recognize shorthand for reported complaints, allergy status, and after-procedure charting.
- Representative content: c/o, NKDA, s/p.
- Priority: medium-high.
- Status: seeded.

### Module 5.6: Frequency and Lab Abbreviations
- Lesson goal: recognize medication-frequency shorthand and one of the most common lab abbreviations.
- Representative content: BID, TID, CBC.
- Priority: medium-high.
- Status: seeded.

### Module 5.7: Imaging and Urgency Abbreviations
- Lesson goal: recognize common imaging-study and urgent-action shorthand.
- Representative content: CT, MRI, UA, STAT.
- Priority: medium-high.
- Status: seeded.

### Module 5.8: Schedule and Form Abbreviations
- Lesson goal: recognize shorthand for daily timing, medication forms, and visit-summary paperwork.
- Representative content: qAM, qHS, QID, tab, cap, AVS, appt.
- Priority: medium-high.
- Status: seeded.

### Module 5.9: Ambiguous Abbreviations and Safer Reading
- Lesson goal: identify context-dependent abbreviations and practice reading them only with nearby clues.
- Representative content: PA, PT, MS, BS, CP.
- Priority: high.
- Status: seeded.

## Unit 6 - Final Synthesis
Unit 6 now has authored starter slices for mixed recognition, passage decoding, rapid parsing, results or discharge synthesis, urgent-imaging synthesis, renal-lab synthesis, blood-count synthesis, abdominal-and-stone synthesis, referral-and-consult synthesis, handoff-and-reassessment synthesis, portal-and-authorization crossover, upper-airway or throat synthesis, respiratory recheck or escalation, pleural or chest synthesis, oncology or pathology synthesis, immune or node synthesis, and reproductive follow-up synthesis.
### Module 6.1: Mixed Review
- Lesson goal: combine roots, affixes, abbreviations, and context clues.
- Representative content: mixed term sets from all prior units.
- Priority: medium.
- Status: seeded.

### Module 6.2: Passage Decoding
- Lesson goal: read longer passages with layered terminology.
- Representative content: chart fragments, discharge summaries, and workplace language.
- Priority: medium.
- Status: seeded across separate clinical and administrative passage lessons.

### Module 6.3: Rapid Parsing Drills
- Lesson goal: split unseen terms quickly and infer likely meaning.
- Representative content: random eligible terms from the validated bank.
- Priority: medium.
- Status: seeded.

### Module 6.4: Results and Discharge Synthesis
- Lesson goal: read short chart, result, and discharge lines that mix abbreviation families from earlier units.
- Representative content: CBC WNL, s/p procedure notes, c/o lines, frequency shorthand, follow-up instructions.
- Priority: medium.
- Status: seeded.

### Module 6.5: Urgent and Imaging Synthesis
- Lesson goal: read urgent-care and result snippets that mix imaging, urgency, reassessment, and follow-up shorthand.
- Representative content: CT STAT, MRI impression, UA WNL, urgent note follow-up language.
- Priority: medium.
- Status: seeded.

### Module 6.6: Renal and Lab Synthesis
- Lesson goal: read urine-test and urinary-symptom passages that mix lab shorthand, output terms, and follow-up language.
- Representative content: UA WNL, dysuria, hematuria, proteinuria, nephrology follow-up.
- Priority: medium.
- Status: seeded.

### Module 6.7: Blood and Count Synthesis
- Lesson goal: read blood-count and clotting passages that mix CBC shorthand, cell-count terms, and interpretation language.
- Representative content: CBC, leukocytosis, erythrocyte, thrombosis, monitoring or reassessment notes.
- Priority: medium.
- Status: seeded.

### Module 6.8: Abdominal and Stone Synthesis
- Lesson goal: read abdominal, hepatobiliary, and stone-related passages that mix imaging, symptom, and NPO language.
- Representative content: CT, UA, hematuria, cholelithiasis, pancreatitis, NPO.
- Priority: medium.
- Status: seeded.

### Module 6.9: Referral and Consult Synthesis
- Lesson goal: read referral, consult, and records-transfer passages that compress history, diagnosis, treatment, and follow-up language.
- Representative content: Hx, Dx, Tx, f/u, ROI, DOB, consult notes.
- Priority: medium.
- Status: seeded.

### Module 6.10: Handoff and Reassessment Synthesis
- Lesson goal: read handoff passages that contrast initial presentation, reassessment, and monitoring plans.
- Representative content: acute SOB, HR, RR, NKDA, PRN, WNL, transfer or monitoring notes.
- Priority: medium.
- Status: seeded.

### Module 6.11: Portal and Authorization Crossover
- Lesson goal: read portal, results, and authorization passages that mix patient instructions with imaging and lab shorthand.
- Representative content: MRI impression, CBC WNL, prior authorization, refill request, ROI, CT, PCP.
- Priority: medium.
- Status: seeded.

### Module 6.12: Upper Airway and Throat Synthesis
- Lesson goal: read upper-airway notes that mix nasal, sinus, throat, and voice-box terms with follow-up shorthand.
- Representative content: rhinitis, rhinorrhea, sinusitis, pharyngitis, laryngitis, PRN, f/u, PCP.
- Priority: medium.
- Status: seeded.

### Module 6.13: Respiratory Recheck and Escalation
- Lesson goal: read recheck passages that distinguish routine upper-airway symptoms from more urgent breathing or oxygen concerns.
- Representative content: dyspnea, hypoxia, bronchitis, pneumonia, SOB, WNL, reassessment.
- Priority: medium.
- Status: seeded.

### Module 6.14: Pleural and Chest Synthesis
- Lesson goal: read chest-pain and pleural-note passages that mix respiratory terms, imaging shorthand, procedures, and follow-up language.
- Representative content: thoracic, pleural, thoracentesis, pleuritis, CT, dyspnea, SOB.
- Priority: medium.
- Status: seeded.

### Module 6.15: Oncology and Pathology Synthesis
- Lesson goal: read pathology and imaging-result passages that mix growth-pattern, spread, biopsy, and follow-up language.
- Representative content: dysplasia, hyperplasia, hypoplasia, metastasis, biopsy, specimen, MRI, CT.
- Priority: medium.
- Status: seeded.

### Module 6.16: Immune and Node Synthesis
- Lesson goal: read immune and lymph-node passages that mix CBC, consult, infection, and follow-up language.
- Representative content: lymphadenopathy, lymphadenitis, lymphocyte, immunodeficiency, CBC, WNL, consult.
- Priority: medium.
- Status: seeded.

### Module 6.17: Reproductive Follow-Up Synthesis
- Lesson goal: read reproductive and postpartum follow-up passages that mix symptoms, imaging, portal, and PCP workflow language.
- Representative content: dysmenorrhea, amenorrhea, mastitis, mastalgia, postpartum, ultrasound, PCP, f/u.
- Priority: medium.
- Status: seeded.

### Module 6.18: Verification and Prep Crossover
- Lesson goal: read administrative passages that mix network status, authorization, subscriber details, and pre-visit instructions.
- Representative content: eligibility, in-network, out-of-network, subscriber, PA, AVS, appt, fasting instructions.
- Priority: medium.
- Status: seeded.

### Module 6.19: Ambiguity and Results Synthesis
- Lesson goal: read clinical notes where context decides the abbreviation meaning and result-status language decides the main interpretation.
- Representative content: PT, MS, BS, CP, elevated, negative, unremarkable, recurrent.
- Priority: medium.
- Status: seeded.

### Module 6.20: Billing and Report Follow-Through
- Lesson goal: read portal and office messages that mix report nuance, comparison wording, and post-visit billing language.
- Representative content: indeterminate, incidental finding, compare with prior, estimate, appeal, balance due.
- Priority: medium.
- Status: seeded.

## Build Notes
- Start with Units 0 and 1 before expanding into body systems.
- Keep Unit 5 as a dedicated section rather than folding abbreviations into general lessons.
- Author lessons in small batches so each module can be validated against the term bank and prerequisite graph.
- Treat the curriculum map as an implementation checklist, not just a descriptive outline.
- Use lesson prerequisite metadata to gate later modules and to keep endless mode from surfacing terms too early.
- The current seed app demonstrates the curriculum path, progress persistence, a simple review queue, endless mode, abbreviations, and progress diagnostics, but it is still below the PRD's full-v1 content scale.
- The current seed app also includes browse-first term lookup, retry-friendly lesson completion, and recovery-aware import/reset behavior.
