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
  },
  {
    id: "abbr-hr",
    shortForm: "HR",
    expandedForm: "heart rate",
    category: "clinical",
    meaning: "number of heartbeats per minute",
    ambiguous: false,
  },
  {
    id: "abbr-rr",
    shortForm: "RR",
    expandedForm: "respiratory rate",
    category: "clinical",
    meaning: "number of breaths per minute",
    ambiguous: false,
  },
  {
    id: "abbr-iv",
    shortForm: "IV",
    expandedForm: "intravenous",
    category: "route",
    meaning: "delivered into a vein",
    ambiguous: false,
  },
  {
    id: "abbr-po",
    shortForm: "PO",
    expandedForm: "by mouth",
    category: "route",
    meaning: "taken orally",
    ambiguous: false,
  },
  {
    id: "abbr-ml",
    shortForm: "mL",
    expandedForm: "milliliter",
    category: "measurement",
    meaning: "metric unit of liquid volume",
    ambiguous: false,
  }
];
