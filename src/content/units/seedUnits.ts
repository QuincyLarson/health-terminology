import type { Unit } from "../../types/content";

export const units: Unit[] = [
  {
    id: "unit-0",
    title: "How Medical Terms Work",
    summary: "Foundational lessons on roots, suffixes, combining vowels, plural patterns, and pronunciation.",
    lessonIds: [
      "lesson-unit0-word-parts",
      "lesson-unit0-combining-vowels",
      "lesson-unit0-plural-patterns",
      "lesson-unit0-pronunciation-basics"
    ],
    prerequisiteUnitIds: [],
    status: "shipped",
  },
  {
    id: "unit-1",
    title: "Highest-Yield Roots and Affixes",
    summary: "The first high-frequency prefixes, suffixes, roots, and procedure terms that recur across systems.",
    lessonIds: [
      "lesson-unit1-common-suffixes",
      "lesson-unit1-core-body-roots",
      "lesson-unit1-condition-suffixes",
      "lesson-unit1-common-prefixes",
      "lesson-unit1-rate-prefixes",
      "lesson-unit1-procedure-language"
    ],
    prerequisiteUnitIds: ["unit-0"],
    status: "shipped",
  },
  {
    id: "unit-2",
    title: "Body Systems",
    summary: "Cardiovascular, respiratory, gastrointestinal, and other systems in descending practical yield.",
    lessonIds: [
      "lesson-unit2-cardiovascular-starter",
      "lesson-unit2-respiratory-airway-language",
      "lesson-unit2-respiratory-breathing-status",
      "lesson-unit2-gastrointestinal-inflammation",
      "lesson-unit2-gastrointestinal-procedures",
      "lesson-unit2-musculoskeletal-pain-and-repair",
      "lesson-unit2-renal-urinary-language",
      "lesson-unit2-nervous-system-disorder-language",
      "lesson-unit2-endocrine-and-glycemic-language",
      "lesson-unit2-reproductive-language-starter",
      "lesson-unit2-immune-and-lymphatic-language",
      "lesson-unit2-integumentary-language",
      "lesson-unit2-eye-ear-and-hearing-language",
      "lesson-unit2-oncology-and-tumor-language",
      "lesson-unit2-blood-and-clotting-language",
      "lesson-unit2-urinary-output-and-testing-language"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1"],
    status: "lesson-linked",
  },
  {
    id: "unit-3",
    title: "Clinical Language Patterns",
    summary: "Cross-cutting symptom, status, and procedure-family language that appears across specialties.",
    lessonIds: [
      "lesson-unit3-symptoms-signs-status-language",
      "lesson-unit3-clinical-procedure-families",
      "lesson-unit3-chart-style-phrasing",
      "lesson-unit3-admissions-discharge-and-workflow",
      "lesson-unit3-diagnostic-and-imaging-language",
      "lesson-unit3-medication-and-administration-basics",
      "lesson-unit3-condition-and-disease-state-language",
      "lesson-unit3-chart-passage-decoding"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1", "unit-2"],
    status: "lesson-linked",
  },
  {
    id: "unit-4",
    title: "Administrative and Document Language",
    summary: "Practical scheduling, follow-up, record, and authorization vocabulary for real medical paperwork and workflow.",
    lessonIds: [
      "lesson-unit4-scheduling-and-followup",
      "lesson-unit4-records-orders-and-authorization",
      "lesson-unit4-intake-form-language",
      "lesson-unit4-coverage-and-billing-language",
      "lesson-unit4-portal-results-and-reminders",
      "lesson-unit4-admin-passage-decoding"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1", "unit-2", "unit-3"],
    status: "lesson-linked",
  },
  {
    id: "unit-5",
    title: "Abbreviations and Acronyms",
    summary: "Recognition-first coverage of high-frequency clinical, document, measurement, and route abbreviations.",
    lessonIds: [
      "lesson-unit5-core-clinical-abbreviations",
      "lesson-unit5-document-and-workflow-abbreviations",
      "lesson-unit5-measurement-and-route-abbreviations",
      "lesson-unit5-chart-and-note-abbreviations",
      "lesson-unit5-history-and-status-abbreviations",
      "lesson-unit5-frequency-and-lab-abbreviations",
      "lesson-unit5-imaging-and-urgency-abbreviations"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1", "unit-2", "unit-3", "unit-4"],
    status: "lesson-linked",
  },
  {
    id: "unit-6",
    title: "Final Synthesis",
    summary: "Mixed recognition and passage decoding that combines roots, terms, abbreviations, and administrative language.",
    lessonIds: [
      "lesson-unit6-mixed-review-recognition",
      "lesson-unit6-clinical-passage-decoding",
      "lesson-unit6-admin-passage-decoding",
      "lesson-unit6-rapid-parsing-drills",
      "lesson-unit6-results-and-discharge-synthesis",
      "lesson-unit6-urgent-and-imaging-synthesis",
      "lesson-unit6-renal-and-lab-synthesis",
      "lesson-unit6-blood-and-count-synthesis"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1", "unit-2", "unit-3", "unit-4", "unit-5"],
    status: "lesson-linked",
  }
];
