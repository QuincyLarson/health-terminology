import type { Unit } from "../../types/content";

export const units: Unit[] = [
  {
    id: "unit-0",
    title: "How Medical Terms Work",
    summary: "Foundational lessons on roots, suffixes, and combining vowels.",
    lessonIds: ["lesson-unit0-word-parts", "lesson-unit0-combining-vowels"],
    prerequisiteUnitIds: [],
    status: "lesson-linked",
  },
  {
    id: "unit-1",
    title: "Highest-Yield Roots and Affixes",
    summary: "The first high-frequency prefixes and suffixes that recur across systems.",
    lessonIds: ["lesson-unit1-common-suffixes", "lesson-unit1-common-prefixes"],
    prerequisiteUnitIds: ["unit-0"],
    status: "drafted",
  },
  {
    id: "unit-2",
    title: "Body Systems",
    summary: "Cardiovascular, respiratory, gastrointestinal, and other systems in descending practical yield.",
    lessonIds: [],
    prerequisiteUnitIds: ["unit-0", "unit-1"],
    status: "planned",
  }
];
