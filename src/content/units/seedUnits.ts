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
      "lesson-unit2-renal-urinary-language"
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
      "lesson-unit3-clinical-procedure-families"
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
      "lesson-unit4-records-orders-and-authorization"
    ],
    prerequisiteUnitIds: ["unit-0", "unit-1", "unit-2", "unit-3"],
    status: "lesson-linked",
  }
];
