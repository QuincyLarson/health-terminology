export const lessonExpansionCore: Partial<
  Record<string, { introducesTermIds?: string[]; reinforcesTermIds?: string[] }>
> = {
  "lesson-unit0-word-parts": {
    introducesTermIds: ["term-osteology"],
    reinforcesTermIds: ["term-cardiology", "term-neurology"],
  },
  "lesson-unit0-combining-vowels": {
    reinforcesTermIds: [
      "term-osteology",
      "term-nephrology",
      "term-gastroenterology",
      "term-arthralgia",
      "term-gastralgia",
    ],
  },
  "lesson-unit1-common-suffixes": {
    introducesTermIds: ["term-osteitis", "term-carditis"],
    reinforcesTermIds: [
      "term-gastritis",
      "term-arthritis",
      "term-osteology",
      "term-hepatitis",
      "term-dermatitis",
      "term-dermatology",
      "term-nephrology",
    ],
  },
  "lesson-unit1-common-prefixes": {
    reinforcesTermIds: [
      "term-hypertension",
      "term-hypotension",
      "term-hyperglycemia",
      "term-hypoglycemia",
      "term-hyperplasia",
      "term-hypoplasia",
      "term-hypoxia",
    ],
  },
  "lesson-unit1-core-body-roots": {
    introducesTermIds: ["term-arthralgia", "term-gastralgia", "term-hepatology"],
    reinforcesTermIds: ["term-osteitis", "term-carditis", "term-nephrology", "term-neuralgia"],
  },
  "lesson-unit1-condition-suffixes": {
    introducesTermIds: ["term-nephroma"],
    reinforcesTermIds: ["term-hematoma", "term-nephrosis", "term-osteosis"],
  },
  "lesson-unit1-procedure-language": {
    introducesTermIds: [
      "term-gastrectomy",
      "term-colectomy",
      "term-colotomy",
      "term-arthrotomy",
      "term-nephrotomy",
    ],
    reinforcesTermIds: ["term-appendectomy", "term-colonoscopy", "term-gastrotomy"],
  },
  "lesson-unit1-common-root-recombinations": {
    reinforcesTermIds: [
      "term-gastrectomy",
      "term-colectomy",
      "term-colotomy",
      "term-arthrotomy",
      "term-nephrotomy",
      "term-hepatology",
      "term-nephroma",
    ],
  },
  "lesson-unit1-rate-prefixes": {
    introducesTermIds: ["term-tachycardic", "term-bradycardic"],
    reinforcesTermIds: [
      "term-tachycardia",
      "term-bradycardia",
      "term-tachypnea",
      "term-bradypnea",
      "term-hypertension",
      "term-hypotension",
    ],
  },
  "lesson-unit2-gastrointestinal-procedures": {
    reinforcesTermIds: [
      "term-gastrectomy",
      "term-gastroscopy",
      "term-colectomy",
      "term-colotomy",
      "term-gastroenterology",
    ],
  },
};
