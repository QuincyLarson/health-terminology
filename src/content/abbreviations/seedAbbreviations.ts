import type { Abbreviation } from "../../types/content";

export const abbreviations: Abbreviation[] = [
  {
    id: "abbr-bp",
    shortForm: "BP",
    expandedForm: "blood pressure",
    category: "clinical",
    meaning: "measurement of arterial pressure",
    ambiguous: false,
  },
  {
    id: "abbr-prn",
    shortForm: "PRN",
    expandedForm: "as needed",
    category: "document",
    meaning: "used when something should happen only when needed",
    ambiguous: false,
  }
];
