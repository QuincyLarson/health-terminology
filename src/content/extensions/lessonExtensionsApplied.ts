export const lessonExpansionApplied: Partial<
  Record<string, { introducesTermIds?: string[]; reinforcesTermIds?: string[] }>
> = {
  "lesson-unit2-upper-airway-and-throat-language": {
    introducesTermIds: [
      "term-expansion-tracheitis",
      "term-expansion-stridor",
      "term-expansion-hoarseness",
    ],
    reinforcesTermIds: [
      "term-batch-fluid-epistaxis",
      "term-rhinitis",
      "term-rhinorrhea",
      "term-sinusitis",
      "term-pharyngitis",
      "term-laryngitis",
    ],
  },
  "lesson-unit2-respiratory-breathing-status": {
    introducesTermIds: [
      "term-expansion-cough",
      "term-expansion-sputum",
      "term-expansion-wheezing",
      "term-expansion-shortness-of-breath",
      "term-expansion-respiratory-distress",
      "term-expansion-apnea",
      "term-expansion-oxygen-saturation",
    ],
    reinforcesTermIds: [
      "term-dyspnea",
      "term-hypoxia",
      "term-tachypnea",
      "term-bradypnea",
      "term-bronchitis",
    ],
  },
  "lesson-unit2-pleural-and-chest-language": {
    introducesTermIds: [
      "term-expansion-pleural-effusion",
      "term-expansion-pneumothorax",
      "term-expansion-hemothorax",
      "term-expansion-chest-tube",
    ],
    reinforcesTermIds: [
      "term-pleuritis",
      "term-thoracentesis",
      "term-thoracotomy",
      "term-thoracic",
      "term-dyspnea",
    ],
  },
  "lesson-unit2-gastrointestinal-procedures": {
    introducesTermIds: [
      "term-expansion-esophagoscopy",
      "term-expansion-enteroscopy",
      "term-expansion-sigmoidoscopy",
    ],
    reinforcesTermIds: [
      "term-batch-laparoscopy",
      "term-colonoscopy",
      "term-cholecystectomy",
      "term-gastrotomy",
      "term-appendectomy",
    ],
  },
  "lesson-unit2-renal-urinary-language": {
    introducesTermIds: [
      "term-expansion-urinary-retention",
      "term-expansion-catheterization",
      "term-expansion-bladder-scan",
      "term-expansion-cystogram",
    ],
    reinforcesTermIds: [
      "term-batch-fluid-anuria",
      "term-batch-fluid-nocturia",
      "term-nephrology",
      "term-hematuria",
      "term-dysuria",
      "term-cystoscopy",
      "term-urinalysis",
    ],
  },
  "lesson-unit3-results-and-interpretation-language": {
    introducesTermIds: [
      "term-expansion-pending",
      "term-expansion-preliminary",
      "term-expansion-final",
      "term-expansion-critical",
      "term-expansion-unchanged",
      "term-expansion-worsening",
    ],
    reinforcesTermIds: [
      "term-positive",
      "term-negative",
      "term-unremarkable",
      "term-findings",
      "term-impression",
    ],
  },
  "lesson-unit3-report-comparison-language": {
    introducesTermIds: [
      "term-expansion-consistent-with",
      "term-expansion-compatible-with",
      "term-expansion-suggestive-of",
      "term-expansion-cannot-exclude",
    ],
    reinforcesTermIds: [
      "term-abnormal",
      "term-indeterminate",
      "term-interval-change",
      "term-positive",
      "term-negative",
    ],
  },
  "lesson-unit4-scheduling-and-followup": {
    introducesTermIds: [
      "term-expansion-appointment",
      "term-expansion-cancellation",
      "term-expansion-waitlist",
      "term-expansion-confirmation",
    ],
    reinforcesTermIds: [
      "term-follow-up",
      "term-reschedule",
      "term-appointment-reminder",
      "term-arrival-time",
      "term-pre-registration",
    ],
  },
  "lesson-unit4-records-orders-and-authorization": {
    introducesTermIds: [
      "term-expansion-authorization",
      "term-expansion-release-of-information",
      "term-expansion-order-status",
    ],
    reinforcesTermIds: [
      "term-records-request",
      "term-prior-authorization-notice",
      "term-documentation",
      "term-discharge-instructions",
      "term-referral",
    ],
  },
  "lesson-unit4-coverage-and-billing-language": {
    introducesTermIds: [
      "term-expansion-premium",
      "term-expansion-member-id",
      "term-expansion-out-of-pocket-maximum",
      "term-expansion-benefit",
    ],
    reinforcesTermIds: [
      "term-coverage",
      "term-claim",
      "term-copay",
      "term-deductible",
      "term-denial",
    ],
  },
  "lesson-unit4-portal-results-and-reminders": {
    introducesTermIds: [
      "term-expansion-notification",
      "term-expansion-message",
      "term-expansion-result-note",
      "term-expansion-posted-result",
    ],
    reinforcesTermIds: [
      "term-patient-portal",
      "term-test-results",
      "term-after-visit-summary",
      "term-refill-request",
    ],
  },
  "lesson-unit4-admin-passage-decoding": {
    reinforcesTermIds: [
      "term-expansion-appointment",
      "term-expansion-cancellation",
      "term-expansion-confirmation",
      "term-expansion-waitlist",
      "term-expansion-notification",
      "term-expansion-message",
      "term-expansion-result-note",
      "term-expansion-posted-result",
      "term-records-request",
      "term-reschedule",
      "term-prior-authorization-notice",
    ],
  },
};
