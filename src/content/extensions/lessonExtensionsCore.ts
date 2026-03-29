export const lessonExpansionCore: Partial<
  Record<string, { introducesTermIds?: string[]; reinforcesTermIds?: string[] }>
> = {
  "lesson-unit0-word-parts": {
    introducesTermIds: ["term-osteology"],
    reinforcesTermIds: ["term-cardiology", "term-neurology"],
  },
  "lesson-unit0-combining-vowels": {
    reinforcesTermIds: ["term-osteology"],
  },
  "lesson-unit1-common-suffixes": {
    introducesTermIds: ["term-osteitis", "term-carditis"],
    reinforcesTermIds: ["term-gastritis", "term-arthritis", "term-osteology"],
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
    reinforcesTermIds: ["term-tachycardia", "term-bradycardia", "term-hypertension", "term-hypotension"],
  },
};
