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
    lessonIds: ["lesson-unit2-cardiovascular-starter"],
    prerequisiteUnitIds: ["unit-0", "unit-1"],
    status: "lesson-linked",
  }
];
