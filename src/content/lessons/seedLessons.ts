import type { Exercise, Lesson } from "../../types/content";

export const exercises: Exercise[] = [
  {
    id: "exercise-word-parts-1",
    type: "root_match",
    prompt: "Which word part points to the heart?",
    choices: ["cardi", "gastr", "neur", "-itis"],
    answer: "cardi",
    explanation: "`cardi` points to the heart in words like `cardiology` and `cardiac`.",
    linkedTermIds: ["term-cardiology"],
    linkedPartIds: ["part-cardi-root"],
  },
  {
    id: "exercise-word-parts-2",
    type: "infer_meaning",
    prompt: "If `neur` means nerve and `-logy` means study of, what does `neurology` suggest?",
    choices: [
      "study of the nervous system",
      "inflammation of nerves",
      "pain in the head",
      "recording of muscles"
    ],
    answer: "study of the nervous system",
    explanation: "The parts point to a field of study centered on nerves and the nervous system.",
    linkedTermIds: ["term-neurology"],
    linkedPartIds: ["part-neur-root", "part-ology-suffix"],
  },
  {
    id: "exercise-combining-1",
    type: "split_term",
    prompt: "Why does `oste/o` include the `o`?",
    choices: [
      "It helps the word join smoothly to another part",
      "It marks a plural ending",
      "It means above normal",
      "It turns the root into a suffix"
    ],
    answer: "It helps the word join smoothly to another part",
    explanation: "The combining vowel keeps many medical terms pronounceable when parts are joined.",
    linkedTermIds: [],
    linkedPartIds: ["part-osteo-combining"],
  },
  {
    id: "exercise-combining-2",
    type: "cloze",
    prompt: "Complete the rule: a combining vowel usually makes a long medical term easier to ___.",
    choices: ["pronounce", "diagnose", "memorize", "prescribe"],
    answer: "pronounce",
    explanation: "Combining vowels primarily help the parts connect and sound smoother.",
    linkedTermIds: [],
    linkedPartIds: ["part-osteo-combining"],
  },
  {
    id: "exercise-plurals-1",
    type: "infer_meaning",
    prompt: "Which form names more than one vertebra?",
    choices: ["vertebra", "vertebrae", "diagnosis", "bacterium"],
    answer: "vertebrae",
    explanation: "`vertebrae` is the plural form, while `vertebra` refers to one spinal bone.",
    linkedTermIds: ["term-vertebra", "term-vertebrae"],
    linkedPartIds: [],
  },
  {
    id: "exercise-plurals-2",
    type: "root_match",
    prompt: "Which singular and plural pair is correct?",
    choices: [
      "diagnosis / diagnoses",
      "diagnosis / diagnosis",
      "bacterium / bacteriums",
      "vertebrae / vertebra"
    ],
    answer: "diagnosis / diagnoses",
    explanation: "Several medical terms keep classical plural endings such as `-is` to `-es`.",
    linkedTermIds: ["term-diagnosis", "term-diagnoses"],
    linkedPartIds: [],
  },
  {
    id: "exercise-pronunciation-1",
    type: "split_term",
    prompt: "In `cardiology`, which syllable usually carries the main stress?",
    choices: ["OL", "KAR", "jee", "dee"],
    answer: "OL",
    explanation: "Many longer medical terms place the strongest stress close to the end of the word.",
    linkedTermIds: ["term-cardiology"],
    linkedPartIds: [],
  },
  {
    id: "exercise-pronunciation-2",
    type: "root_match",
    prompt: "Which ending is usually pronounced like `EYE-tis`?",
    choices: ["-itis", "-logy", "-gram", "-scopy"],
    answer: "-itis",
    explanation: "The inflammation suffix `-itis` is commonly pronounced `EYE-tis`.",
    linkedTermIds: ["term-gastritis"],
    linkedPartIds: ["part-itis-suffix"],
  },
  {
    id: "exercise-suffixes-1",
    type: "infer_meaning",
    prompt: "If `gastr` means stomach and `-itis` means inflammation, what is `gastritis`?",
    choices: [
      "inflammation of the stomach",
      "study of the stomach",
      "stomach surgery",
      "pain in the stomach"
    ],
    answer: "inflammation of the stomach",
    explanation: "This is a straightforward root-plus-suffix combination.",
    linkedTermIds: ["term-gastritis"],
    linkedPartIds: ["part-gastr-root", "part-itis-suffix"],
  },
  {
    id: "exercise-body-roots-1",
    type: "infer_meaning",
    prompt: "If `derm/o` means skin and `-itis` means inflammation, what does `dermatitis` mean?",
    choices: [
      "inflammation of the skin",
      "study of the skin",
      "pain in the skin",
      "removal of the skin"
    ],
    answer: "inflammation of the skin",
    explanation: "The root and suffix point directly to inflammation in the skin.",
    linkedTermIds: ["term-dermatitis"],
    linkedPartIds: ["part-derm-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-body-roots-2",
    type: "root_match",
    prompt: "Which combining form points to the kidney?",
    choices: ["nephr/o", "hepat/o", "hemat/o", "arthr/o"],
    answer: "nephr/o",
    explanation: "`nephr/o` points to the kidney in words like `nephrology`.",
    linkedTermIds: ["term-nephrology"],
    linkedPartIds: ["part-nephr-combining"],
  },
  {
    id: "exercise-prefixes-1",
    type: "infer_meaning",
    prompt: "Which prefix points to a value above normal?",
    choices: ["hyper-", "hypo-", "-itis", "neur"],
    answer: "hyper-",
    explanation: "`hyper-` often signals something higher or greater than normal.",
    linkedTermIds: ["term-hypertension"],
    linkedPartIds: ["part-hyper-prefix"],
  },
  {
    id: "exercise-rate-prefixes-1",
    type: "root_match",
    prompt: "Which prefix suggests a rate that is too fast?",
    choices: ["tachy-", "brady-", "hypo-", "hyper-"],
    answer: "tachy-",
    explanation: "`tachy-` points to speed or a fast rate.",
    linkedTermIds: ["term-tachycardia"],
    linkedPartIds: ["part-tachy-prefix"],
  },
  {
    id: "exercise-rate-prefixes-2",
    type: "infer_meaning",
    prompt: "What does `bradycardia` suggest?",
    choices: [
      "a heart rate that is too slow",
      "a heart rate that is too fast",
      "inflammation of the heart",
      "study of the heart"
    ],
    answer: "a heart rate that is too slow",
    explanation: "`brady-` points to slow, and `cardi` points to the heart.",
    linkedTermIds: ["term-bradycardia"],
    linkedPartIds: ["part-brady-prefix", "part-cardi-root"],
  },
  {
    id: "exercise-procedures-1",
    type: "infer_meaning",
    prompt: "What does `appendectomy` suggest?",
    choices: [
      "surgical removal of the appendix",
      "inflammation of the appendix",
      "viewing the appendix with a scope",
      "record of the appendix"
    ],
    answer: "surgical removal of the appendix",
    explanation: "`appendic/o` points to the appendix and `-ectomy` means surgical removal.",
    linkedTermIds: ["term-appendectomy"],
    linkedPartIds: ["part-appendic-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-procedures-2",
    type: "root_match",
    prompt: "Which suffix signals viewing with a scope?",
    choices: ["-scopy", "-otomy", "-ectomy", "-gram"],
    answer: "-scopy",
    explanation: "`-scopy` points to a visual examination with a scope.",
    linkedTermIds: ["term-colonoscopy"],
    linkedPartIds: ["part-scopy-suffix"],
  },
  {
    id: "exercise-cardio-1",
    type: "infer_meaning",
    prompt: "If `angi/o` means vessel and `-gram` means record or image, what is an `angiogram`?",
    choices: [
      "a vessel image or record",
      "inflammation of a vessel",
      "surgical removal of a vessel",
      "study of a vessel"
    ],
    answer: "a vessel image or record",
    explanation: "The combining form and suffix together point to an imaging record of vessels.",
    linkedTermIds: ["term-angiogram"],
    linkedPartIds: ["part-angi-combining", "part-gram-suffix"],
  },
  {
    id: "exercise-cardio-2",
    type: "infer_meaning",
    prompt: "What does `arteritis` suggest?",
    choices: [
      "inflammation of an artery",
      "study of an artery",
      "image of an artery",
      "slow artery flow"
    ],
    answer: "inflammation of an artery",
    explanation: "`arteri/o` points to an artery and `-itis` points to inflammation.",
    linkedTermIds: ["term-arteritis"],
    linkedPartIds: ["part-arteri-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-respiratory-airway-1",
    type: "root_match",
    prompt: "Which combining form points to a bronchial tube or airway branch?",
    choices: ["bronch/o", "trache/o", "pneum/o", "pulmon/o"],
    answer: "bronch/o",
    explanation: "`bronch/o` points to the branching airways inside the lungs.",
    linkedTermIds: ["term-bronchitis", "term-bronchoscopy"],
    linkedPartIds: ["part-bronch-combining"],
  },
  {
    id: "exercise-respiratory-airway-2",
    type: "infer_meaning",
    prompt: "If `bronch/o` means bronchial tube and `-itis` means inflammation, what does `bronchitis` suggest?",
    choices: [
      "inflammation of the bronchial tubes",
      "viewing the bronchial tubes with a scope",
      "a cut into the windpipe",
      "a condition related to the lungs"
    ],
    answer: "inflammation of the bronchial tubes",
    explanation: "This follows the same root-plus-inflammation pattern used in other `-itis` terms.",
    linkedTermIds: ["term-bronchitis"],
    linkedPartIds: ["part-bronch-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-respiratory-airway-3",
    type: "infer_meaning",
    prompt: "What does `tracheotomy` suggest?",
    choices: [
      "an incision into the trachea",
      "inflammation of the trachea",
      "viewing the trachea with a scope",
      "a record of the trachea"
    ],
    answer: "an incision into the trachea",
    explanation: "`trache/o` points to the windpipe and `-otomy` points to an incision.",
    linkedTermIds: ["term-tracheotomy"],
    linkedPartIds: ["part-trache-combining", "part-otomy-suffix"],
  },
  {
    id: "exercise-respiratory-status-1",
    type: "root_match",
    prompt: "Which suffix points to breathing?",
    choices: ["-pnea", "-oxia", "-gram", "-scopy"],
    answer: "-pnea",
    explanation: "`-pnea` shows up in breathing-rate and breathing-difficulty terms.",
    linkedTermIds: ["term-tachypnea", "term-dyspnea"],
    linkedPartIds: ["part-pnea-suffix"],
  },
  {
    id: "exercise-respiratory-status-2",
    type: "infer_meaning",
    prompt: "What does `dyspnea` suggest in plain English?",
    choices: [
      "difficult breathing or shortness of breath",
      "slow breathing",
      "fast breathing",
      "low oxygen"
    ],
    answer: "difficult breathing or shortness of breath",
    explanation: "`dys-` points to difficulty or abnormal function and `-pnea` points to breathing.",
    linkedTermIds: ["term-dyspnea"],
    linkedPartIds: ["part-dys-prefix", "part-pnea-suffix"],
  },
  {
    id: "exercise-gastro-inflammation-1",
    type: "infer_meaning",
    prompt: "If `enter/o` means intestine and `-itis` means inflammation, what does `enteritis` suggest?",
    choices: [
      "inflammation of the intestine",
      "a scope exam of the intestine",
      "surgical removal of the intestine",
      "a record of the intestine"
    ],
    answer: "inflammation of the intestine",
    explanation: "This is another direct combining-form plus suffix term.",
    linkedTermIds: ["term-enteritis"],
    linkedPartIds: ["part-enter-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-gastro-inflammation-2",
    type: "infer_meaning",
    prompt: "What does `gastroenteritis` suggest?",
    choices: [
      "inflammation involving the stomach and intestines",
      "surgical removal of the stomach",
      "viewing the stomach and intestines with a scope",
      "pain in the stomach and intestines"
    ],
    answer: "inflammation involving the stomach and intestines",
    explanation: "The term combines `gastr` for stomach, `enter/o` for intestine, and `-itis` for inflammation.",
    linkedTermIds: ["term-gastroenteritis"],
    linkedPartIds: ["part-gastr-root", "part-enter-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-gastro-procedures-1",
    type: "infer_meaning",
    prompt: "What does `cholecystectomy` suggest?",
    choices: [
      "surgical removal of the gallbladder",
      "inflammation of the gallbladder",
      "a scoped look at the gallbladder",
      "an incision into the gallbladder"
    ],
    answer: "surgical removal of the gallbladder",
    explanation: "`cholecyst/o` points to the gallbladder and `-ectomy` points to removal.",
    linkedTermIds: ["term-cholecystectomy"],
    linkedPartIds: ["part-cholecyst-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-musculoskeletal-1",
    type: "root_match",
    prompt: "Which suffix points to a disease or disorder?",
    choices: ["-pathy", "-plasty", "-algia", "-uria"],
    answer: "-pathy",
    explanation: "`-pathy` points to disease or disorder in terms like `myopathy` and `arthropathy`.",
    linkedTermIds: ["term-myopathy", "term-arthropathy"],
    linkedPartIds: ["part-pathy-suffix"],
  },
  {
    id: "exercise-musculoskeletal-2",
    type: "infer_meaning",
    prompt: "If `my/o` means muscle and `-algia` means pain, what does `myalgia` suggest?",
    choices: [
      "muscle pain",
      "muscle repair",
      "joint disease",
      "blood in the urine"
    ],
    answer: "muscle pain",
    explanation: "The combining form points to muscle and the suffix points to pain.",
    linkedTermIds: ["term-myalgia"],
    linkedPartIds: ["part-my-combining", "part-algia-suffix"],
  },
  {
    id: "exercise-musculoskeletal-3",
    type: "infer_meaning",
    prompt: "What does `arthroplasty` suggest?",
    choices: [
      "surgical repair or reconstruction of a joint",
      "inflammation of a joint",
      "joint pain",
      "an image of a joint"
    ],
    answer: "surgical repair or reconstruction of a joint",
    explanation: "`arthr/o` points to a joint and `-plasty` points to repair or reconstruction.",
    linkedTermIds: ["term-arthroplasty"],
    linkedPartIds: ["part-arthr-combining", "part-plasty-suffix"],
  },
  {
    id: "exercise-renal-1",
    type: "infer_meaning",
    prompt: "If `cyst/o` means bladder and `-itis` means inflammation, what does `cystitis` suggest?",
    choices: [
      "inflammation of the bladder",
      "viewing the bladder with a scope",
      "blood in the urine",
      "the study of the bladder"
    ],
    answer: "inflammation of the bladder",
    explanation: "This follows the same inflammation pattern used in earlier body-system lessons.",
    linkedTermIds: ["term-cystitis"],
    linkedPartIds: ["part-cyst-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-renal-2",
    type: "infer_meaning",
    prompt: "What does `hematuria` suggest?",
    choices: [
      "blood in the urine",
      "kidney inflammation",
      "bladder viewing with a scope",
      "slow urination"
    ],
    answer: "blood in the urine",
    explanation: "`hemat/o` points to blood and `-uria` points to a urine condition or urination finding.",
    linkedTermIds: ["term-hematuria"],
    linkedPartIds: ["part-hemat-combining", "part-uria-suffix"],
  },
  {
    id: "exercise-renal-3",
    type: "infer_meaning",
    prompt: "What does `cystoscopy` suggest?",
    choices: [
      "viewing the bladder with a scope",
      "surgical removal of the bladder",
      "inflammation of the bladder",
      "blood in the urine"
    ],
    answer: "viewing the bladder with a scope",
    explanation: "`cyst/o` points to the bladder and `-scopy` points to viewing with a scope.",
    linkedTermIds: ["term-cystoscopy"],
    linkedPartIds: ["part-cyst-combining", "part-scopy-suffix"],
  },
  {
    id: "exercise-unit3-status-1",
    type: "root_match",
    prompt: "Which suffix points to enlargement?",
    choices: ["-megaly", "-emia", "-uria", "-pathy"],
    answer: "-megaly",
    explanation: "`-megaly` signals enlargement in terms like `cardiomegaly` and `hepatomegaly`.",
    linkedTermIds: ["term-cardiomegaly", "term-hepatomegaly"],
    linkedPartIds: ["part-megaly-suffix"],
  },
  {
    id: "exercise-unit3-status-2",
    type: "infer_meaning",
    prompt: "If `cardi` means heart and `-megaly` means enlargement, what does `cardiomegaly` suggest?",
    choices: [
      "enlargement of the heart",
      "pain in the heart",
      "imaging of the heart",
      "a fast heart rate"
    ],
    answer: "enlargement of the heart",
    explanation: "The root and suffix together point to an enlarged heart.",
    linkedTermIds: ["term-cardiomegaly"],
    linkedPartIds: ["part-cardi-root", "part-megaly-suffix"],
  },
  {
    id: "exercise-unit3-status-3",
    type: "infer_meaning",
    prompt: "Which term best matches swelling from extra fluid?",
    choices: ["edema", "anemia", "dyspnea", "neuralgia"],
    answer: "edema",
    explanation: "`edema` is a high-frequency clinical status word for swelling caused by extra fluid.",
    linkedTermIds: ["term-edema"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-procedures-1",
    type: "root_match",
    prompt: "Which suffix points to the process of recording or imaging?",
    choices: ["-graphy", "-gram", "-scopy", "-otomy"],
    answer: "-graphy",
    explanation: "`-graphy` points to the process of imaging or recording rather than the final image itself.",
    linkedTermIds: ["term-angiography", "term-cardiography"],
    linkedPartIds: ["part-graphy-suffix"],
  },
  {
    id: "exercise-unit3-procedures-2",
    type: "infer_meaning",
    prompt: "What does `angioplasty` suggest?",
    choices: [
      "surgical repair or widening of a vessel",
      "an image of a vessel",
      "viewing a vessel with a scope",
      "inflammation of a vessel"
    ],
    answer: "surgical repair or widening of a vessel",
    explanation: "`angi/o` points to a vessel and `-plasty` points to repair or reshaping.",
    linkedTermIds: ["term-angioplasty"],
    linkedPartIds: ["part-angi-combining", "part-plasty-suffix"],
  },
  {
    id: "exercise-unit3-procedures-3",
    type: "infer_meaning",
    prompt: "If `arthr/o` means joint and `-scopy` means viewing with a scope, what does `arthroscopy` mean?",
    choices: [
      "viewing a joint with a scope",
      "repairing a joint",
      "cutting into bone",
      "recording heart activity"
    ],
    answer: "viewing a joint with a scope",
    explanation: "This is the same procedure-family pattern used in other scope terms across systems.",
    linkedTermIds: ["term-arthroscopy"],
    linkedPartIds: ["part-arthr-combining", "part-scopy-suffix"],
  },
  {
    id: "exercise-unit4-scheduling-1",
    type: "root_match",
    prompt: "Which prefix points to before?",
    choices: ["pre-", "post-", "contra-", "hypo-"],
    answer: "pre-",
    explanation: "`pre-` points to something happening before an operation or other event.",
    linkedTermIds: ["term-preoperative"],
    linkedPartIds: ["part-pre-prefix"],
  },
  {
    id: "exercise-unit4-scheduling-2",
    type: "infer_meaning",
    prompt: "What does `postoperative` suggest?",
    choices: [
      "after an operation",
      "before an operation",
      "care without hospital admission",
      "approval needed before care"
    ],
    answer: "after an operation",
    explanation: "`post-` points to after, so `postoperative` refers to the period after surgery.",
    linkedTermIds: ["term-postoperative"],
    linkedPartIds: ["part-post-prefix"],
  },
  {
    id: "exercise-unit4-scheduling-3",
    type: "infer_meaning",
    prompt: "Which phrase best matches care without hospital admission?",
    choices: ["outpatient", "inpatient", "follow-up", "preoperative"],
    answer: "outpatient",
    explanation: "`outpatient` refers to care that does not require staying in the hospital.",
    linkedTermIds: ["term-outpatient"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-records-1",
    type: "infer_meaning",
    prompt: "Which phrase means approval is needed before some care is covered?",
    choices: [
      "prior authorization",
      "referral",
      "documentation",
      "discharge instructions"
    ],
    answer: "prior authorization",
    explanation: "`prior authorization` means approval is needed before certain services or medications are covered.",
    linkedTermIds: ["term-prior-authorization"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-records-2",
    type: "infer_meaning",
    prompt: "If `contra-` means against, what does `contraindication` suggest?",
    choices: [
      "a reason not to use a treatment or medication",
      "a record of treatment",
      "permission to proceed with treatment",
      "instructions after discharge"
    ],
    answer: "a reason not to use a treatment or medication",
    explanation: "`contra-` points to something that argues against an intervention.",
    linkedTermIds: ["term-contraindication"],
    linkedPartIds: ["part-contra-prefix"],
  },
  {
    id: "exercise-unit4-records-3",
    type: "infer_meaning",
    prompt: "Which document should a learner read after leaving the hospital or clinic?",
    choices: [
      "discharge instructions",
      "referral",
      "documentation",
      "prior authorization"
    ],
    answer: "discharge instructions",
    explanation: "`discharge instructions` are the take-home directions given after care.",
    linkedTermIds: ["term-discharge-instructions"],
    linkedPartIds: [],
  },
  {
    id: "exercise-nervous-1",
    type: "root_match",
    prompt: "Which suffix points to paralysis?",
    choices: ["-plegia", "-pathy", "-megaly", "-uria"],
    answer: "-plegia",
    explanation: "`-plegia` points to paralysis in terms like `hemiplegia` and `paraplegia`.",
    linkedTermIds: ["term-hemiplegia"],
    linkedPartIds: ["part-plegia-suffix"],
  },
  {
    id: "exercise-nervous-2",
    type: "infer_meaning",
    prompt: "If `neur` means nerve and `-pathy` means disease or disorder, what does `neuropathy` suggest?",
    choices: [
      "nerve disease or nerve damage",
      "inflammation of the brain",
      "one-sided paralysis",
      "swelling in brain tissue"
    ],
    answer: "nerve disease or nerve damage",
    explanation: "`neuropathy` is a direct combination of the nerve root and a disorder suffix.",
    linkedTermIds: ["term-neuropathy"],
    linkedPartIds: ["part-neur-root", "part-pathy-suffix"],
  },
  {
    id: "exercise-nervous-3",
    type: "infer_meaning",
    prompt: "What does `hemiplegia` suggest?",
    choices: [
      "paralysis affecting one side of the body",
      "inflammation of one side of the brain",
      "pain in half the body",
      "a disease of the spinal cord"
    ],
    answer: "paralysis affecting one side of the body",
    explanation: "`hemi-` points to one side and `-plegia` points to paralysis.",
    linkedTermIds: ["term-hemiplegia"],
    linkedPartIds: ["part-hemi-prefix", "part-plegia-suffix"],
  },
  {
    id: "exercise-unit3-chart-1",
    type: "infer_meaning",
    prompt: "Which note section usually states the clinician's impression of what is going on?",
    choices: ["assessment", "plan", "monitoring", "stable"],
    answer: "assessment",
    explanation: "`assessment` is the section where the clinician summarizes the evaluation or impression.",
    linkedTermIds: ["term-assessment"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-chart-2",
    type: "infer_meaning",
    prompt: "What does `plan` usually suggest in chart language?",
    choices: [
      "the next treatment or follow-up steps",
      "the patient's main symptom",
      "a final billing decision",
      "movement to another unit"
    ],
    answer: "the next treatment or follow-up steps",
    explanation: "A chart `plan` usually covers orders, treatment decisions, or follow-up actions.",
    linkedTermIds: ["term-plan"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-chart-3",
    type: "infer_meaning",
    prompt: "If a patient is described as `stable`, what does that usually suggest?",
    choices: [
      "the condition is steady and not currently worsening",
      "the patient is ready for surgery right away",
      "the patient has been discharged",
      "the patient needs an insurance claim"
    ],
    answer: "the condition is steady and not currently worsening",
    explanation: "`stable` usually signals that the condition is holding steady for now.",
    linkedTermIds: ["term-stable"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-workflow-1",
    type: "infer_meaning",
    prompt: "What does `admission` suggest in hospital workflow?",
    choices: [
      "formally entering the hospital for care",
      "leaving the hospital with instructions",
      "requesting payment from an insurer",
      "watching a patient over time"
    ],
    answer: "formally entering the hospital for care",
    explanation: "`admission` refers to being taken into the hospital for ongoing treatment or observation.",
    linkedTermIds: ["term-admission"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-workflow-2",
    type: "infer_meaning",
    prompt: "What does `consult` suggest?",
    choices: [
      "a request for another clinician's opinion",
      "a transfer to another room",
      "the main reason for the visit",
      "approval before coverage"
    ],
    answer: "a request for another clinician's opinion",
    explanation: "`consult` usually means another clinician or service is asked to evaluate the patient or provide input.",
    linkedTermIds: ["term-consult"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-workflow-3",
    type: "infer_meaning",
    prompt: "Which term best matches moving a patient from one unit or facility to another?",
    choices: ["transfer", "discharge", "assessment", "monitoring"],
    answer: "transfer",
    explanation: "`transfer` refers to movement between locations, services, or facilities within the care process.",
    linkedTermIds: ["term-transfer"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-intake-1",
    type: "infer_meaning",
    prompt: "Which intake phrase usually means the main reason for today's visit?",
    choices: ["chief complaint", "medical history", "consent form", "coverage"],
    answer: "chief complaint",
    explanation: "`chief complaint` is the standard label for the patient's main concern or reason for the visit.",
    linkedTermIds: ["term-chief-complaint"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-intake-2",
    type: "infer_meaning",
    prompt: "Why does a clinic ask for a `medication list`?",
    choices: [
      "to know which medicines the patient is currently taking",
      "to decide whether insurance will approve the visit",
      "to record the clinician's final impression",
      "to measure breathing difficulty"
    ],
    answer: "to know which medicines the patient is currently taking",
    explanation: "A medication list helps the care team avoid errors, duplications, and harmful interactions.",
    linkedTermIds: ["term-medication-list"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-intake-3",
    type: "infer_meaning",
    prompt: "Which intake item asks about drug, food, or environmental reactions that matter for safe care?",
    choices: ["allergies", "copay", "claim", "transfer"],
    answer: "allergies",
    explanation: "`allergies` alerts the care team to reactions or sensitivities that can affect safe treatment.",
    linkedTermIds: ["term-allergies"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-billing-1",
    type: "infer_meaning",
    prompt: "What does `copay` mean?",
    choices: [
      "a fixed amount the patient pays at the time of care",
      "the full yearly insurance premium",
      "a request sent to a specialist",
      "a note about past medical problems"
    ],
    answer: "a fixed amount the patient pays at the time of care",
    explanation: "`copay` is the set amount a patient pays for a visit, prescription, or other covered service.",
    linkedTermIds: ["term-copay"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-billing-2",
    type: "infer_meaning",
    prompt: "What does `deductible` suggest?",
    choices: [
      "the amount paid before some insurance coverage starts",
      "a second opinion request from another doctor",
      "a document signed before a procedure",
      "the main symptom written on intake paperwork"
    ],
    answer: "the amount paid before some insurance coverage starts",
    explanation: "`deductible` refers to what the patient usually pays before the plan starts covering more costs.",
    linkedTermIds: ["term-deductible"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-billing-3",
    type: "infer_meaning",
    prompt: "Which word best matches an insurer refusing payment or requested coverage?",
    choices: ["denial", "coverage", "assessment", "allergies"],
    answer: "denial",
    explanation: "`denial` is the insurer's refusal to approve or pay for the requested item or service.",
    linkedTermIds: ["term-denial"],
    linkedPartIds: [],
  },
  {
    id: "exercise-endocrine-1",
    type: "root_match",
    prompt: "Which combining form points to sugar or glucose?",
    choices: ["glyc/o", "thyroid/o", "cyst/o", "bronch/o"],
    answer: "glyc/o",
    explanation: "`glyc/o` points to sugar or glucose in words like `hyperglycemia` and `hypoglycemia`.",
    linkedTermIds: ["term-hyperglycemia", "term-hypoglycemia"],
    linkedPartIds: ["part-glyc-combining"],
  },
  {
    id: "exercise-endocrine-2",
    type: "infer_meaning",
    prompt: "What does `hyperglycemia` suggest?",
    choices: [
      "high blood sugar",
      "low blood sugar",
      "inflammation of the thyroid gland",
      "removal of the thyroid gland"
    ],
    answer: "high blood sugar",
    explanation: "`hyper-` points to above normal and `glyc/o` points to sugar or glucose.",
    linkedTermIds: ["term-hyperglycemia"],
    linkedPartIds: ["part-hyper-prefix", "part-glyc-combining"],
  },
  {
    id: "exercise-endocrine-3",
    type: "infer_meaning",
    prompt: "If `thyroid/o` means thyroid gland and `-ectomy` means surgical removal, what does `thyroidectomy` suggest?",
    choices: [
      "surgical removal of the thyroid gland",
      "inflammation of the thyroid gland",
      "high blood sugar",
      "a hormone made by the thyroid gland"
    ],
    answer: "surgical removal of the thyroid gland",
    explanation: "This follows the same organ-plus-procedure pattern used in other `-ectomy` terms.",
    linkedTermIds: ["term-thyroidectomy"],
    linkedPartIds: ["part-thyroid-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-unit3-diagnostics-1",
    type: "infer_meaning",
    prompt: "What does `biopsy` suggest?",
    choices: [
      "removal of a small tissue sample for examination",
      "an imaging test that uses sound waves",
      "the final summary at the end of a report",
      "medicine given by mouth"
    ],
    answer: "removal of a small tissue sample for examination",
    explanation: "`biopsy` refers to taking a small sample so it can be studied more closely.",
    linkedTermIds: ["term-biopsy"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-diagnostics-2",
    type: "infer_meaning",
    prompt: "In report language, what are `findings`?",
    choices: [
      "the observations or results seen on an exam, image, or test",
      "the amount and schedule of a medicine",
      "an online account for patient messages",
      "a request for another specialist's opinion"
    ],
    answer: "the observations or results seen on an exam, image, or test",
    explanation: "`findings` names what the clinician or report actually observed.",
    linkedTermIds: ["term-findings"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-diagnostics-3",
    type: "infer_meaning",
    prompt: "Which report section usually gives the short summary interpretation at the end?",
    choices: ["impression", "specimen", "ultrasound", "dosage"],
    answer: "impression",
    explanation: "`impression` is commonly used for the brief take-home interpretation or summary.",
    linkedTermIds: ["term-impression"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-medications-1",
    type: "infer_meaning",
    prompt: "What does `oral` usually mean for a medication?",
    choices: [
      "taken by mouth",
      "given into a vein",
      "applied on the skin",
      "administered as a scan"
    ],
    answer: "taken by mouth",
    explanation: "`oral` describes medication that goes through the mouth rather than by needle or skin application.",
    linkedTermIds: ["term-oral"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-medications-2",
    type: "infer_meaning",
    prompt: "If `intra-` means within and `ven/o` points to a vein, what does `intravenous` suggest?",
    choices: [
      "given into a vein",
      "applied on the skin",
      "taken under the tongue",
      "used after discharge only"
    ],
    answer: "given into a vein",
    explanation: "`intravenous` literally points to something delivered within a vein.",
    linkedTermIds: ["term-intravenous"],
    linkedPartIds: ["part-intra-prefix", "part-ven-combining"],
  },
  {
    id: "exercise-unit3-medications-3",
    type: "infer_meaning",
    prompt: "What does `dosage` refer to?",
    choices: [
      "the amount and schedule of a medicine",
      "the sample sent to the lab",
      "the summary line at the end of a report",
      "the process of entering the hospital"
    ],
    answer: "the amount and schedule of a medicine",
    explanation: "`dosage` covers how much medicine is used and how often it should be taken or given.",
    linkedTermIds: ["term-dosage"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-portal-1",
    type: "infer_meaning",
    prompt: "Portal notice: `Your test results are ready to review.` What does `test results` refer to here?",
    choices: [
      "the reported outcome of a completed test",
      "a request for more medication",
      "a reminder about an upcoming appointment",
      "a summary of the insurance deductible"
    ],
    answer: "the reported outcome of a completed test",
    explanation: "`test results` names the information returned after a lab, imaging study, or other test is completed.",
    linkedTermIds: ["term-test-results"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-portal-2",
    type: "infer_meaning",
    prompt: "Message header: `After-visit summary available.` What is the `after-visit summary`?",
    choices: [
      "the take-home summary of the visit and next steps",
      "a request for a specialist opinion",
      "a billing claim sent to insurance",
      "a tissue sample sent for testing"
    ],
    answer: "the take-home summary of the visit and next steps",
    explanation: "An `after-visit summary` is the short review of what happened during the visit and what should happen next.",
    linkedTermIds: ["term-after-visit-summary"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-portal-3",
    type: "infer_meaning",
    prompt: "Portal action: `Send refill request.` What does `refill request` mean?",
    choices: [
      "ask for more of an existing prescription",
      "reschedule the appointment",
      "upload a new insurance card",
      "read a radiology impression"
    ],
    answer: "ask for more of an existing prescription",
    explanation: "`refill request` means asking for another supply of a medicine that is already prescribed.",
    linkedTermIds: ["term-refill-request"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit1-condition-1",
    type: "root_match",
    prompt: "Which suffix often points to an abnormal condition or disease state?",
    choices: ["-osis", "-oma", "-itis", "-gram"],
    answer: "-osis",
    explanation: "`-osis` often signals an abnormal condition or disease pattern.",
    linkedTermIds: ["term-nephrosis", "term-osteosis"],
    linkedPartIds: ["part-osis-suffix"],
  },
  {
    id: "exercise-unit1-condition-2",
    type: "infer_meaning",
    prompt: "If `hemat/o` means blood and `-oma` means mass or swelling, what does `hematoma` suggest?",
    choices: [
      "a blood collection causing swelling",
      "blood inflammation",
      "the study of blood",
      "blood in the urine"
    ],
    answer: "a blood collection causing swelling",
    explanation: "`hematoma` points to a blood-related swelling or pooled collection.",
    linkedTermIds: ["term-hematoma"],
    linkedPartIds: ["part-hemat-combining", "part-oma-suffix"],
  },
  {
    id: "exercise-unit1-condition-3",
    type: "infer_meaning",
    prompt: "What does `neuroma` suggest?",
    choices: [
      "a nerve-related mass or tumor",
      "an inflamed nerve",
      "the study of nerves",
      "pain coming from a nerve"
    ],
    answer: "a nerve-related mass or tumor",
    explanation: "`neur` points to nerve and `-oma` points to a mass or tumor.",
    linkedTermIds: ["term-neuroma"],
    linkedPartIds: ["part-neur-root", "part-oma-suffix"],
  },
  {
    id: "exercise-unit2-reproductive-1",
    type: "root_match",
    prompt: "Which combining form points to the fallopian tube?",
    choices: ["salping/o", "hyster/o", "ovari/o", "cyst/o"],
    answer: "salping/o",
    explanation: "`salping/o` points to the fallopian tube in terms like `salpingitis` and `salpingectomy`.",
    linkedTermIds: ["term-salpingitis", "term-salpingectomy"],
    linkedPartIds: ["part-salping-combining"],
  },
  {
    id: "exercise-unit2-reproductive-2",
    type: "infer_meaning",
    prompt: "What does `hysterectomy` suggest?",
    choices: [
      "surgical removal of the uterus",
      "viewing the uterus with a scope",
      "inflammation of the uterus",
      "surgical removal of an ovary"
    ],
    answer: "surgical removal of the uterus",
    explanation: "`hyster/o` points to the uterus and `-ectomy` points to surgical removal.",
    linkedTermIds: ["term-hysterectomy"],
    linkedPartIds: ["part-hyster-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-unit2-reproductive-3",
    type: "infer_meaning",
    prompt: "If `salping/o` means fallopian tube and `-ectomy` means surgical removal, what does `salpingectomy` suggest?",
    choices: [
      "surgical removal of a fallopian tube",
      "inflammation of a fallopian tube",
      "viewing the uterus with a scope",
      "surgical removal of an ovary"
    ],
    answer: "surgical removal of a fallopian tube",
    explanation: "This follows the same organ-plus-procedure pattern used in other `-ectomy` terms.",
    linkedTermIds: ["term-salpingectomy"],
    linkedPartIds: ["part-salping-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-unit2-immune-1",
    type: "root_match",
    prompt: "Which combining form points to lymphatic tissue?",
    choices: ["lymph/o", "splen/o", "immun/o", "hemat/o"],
    answer: "lymph/o",
    explanation: "`lymph/o` points to lymphatic tissue in words like `lymphoma`.",
    linkedTermIds: ["term-lymphoma"],
    linkedPartIds: ["part-lymph-combining"],
  },
  {
    id: "exercise-unit2-immune-2",
    type: "infer_meaning",
    prompt: "If `lymph/o` means lymphatic tissue and `-oma` means mass or tumor, what does `lymphoma` suggest?",
    choices: [
      "a tumor involving lymphatic tissue",
      "the study of the immune system",
      "surgical removal of the spleen",
      "enlargement of the spleen"
    ],
    answer: "a tumor involving lymphatic tissue",
    explanation: "`lymphoma` follows the tissue-plus-mass naming pattern.",
    linkedTermIds: ["term-lymphoma"],
    linkedPartIds: ["part-lymph-combining", "part-oma-suffix"],
  },
  {
    id: "exercise-unit2-immune-3",
    type: "infer_meaning",
    prompt: "Which term best matches enlargement of the spleen?",
    choices: ["splenomegaly", "splenectomy", "immunology", "lymphoma"],
    answer: "splenomegaly",
    explanation: "`splen/o` points to the spleen and `-megaly` points to enlargement.",
    linkedTermIds: ["term-splenomegaly"],
    linkedPartIds: ["part-splen-combining", "part-megaly-suffix"],
  },
  {
    id: "exercise-unit3-condition-1",
    type: "infer_meaning",
    prompt: "What does `acute` usually suggest?",
    choices: [
      "sudden or short in duration",
      "long-lasting over time",
      "a group of related findings",
      "not enough of a needed substance"
    ],
    answer: "sudden or short in duration",
    explanation: "`acute` usually points to a rapid onset or short course.",
    linkedTermIds: ["term-acute"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-condition-2",
    type: "infer_meaning",
    prompt: "What does `chronic` usually suggest?",
    choices: [
      "long-lasting or recurring over time",
      "sudden and brief",
      "caused by surgery",
      "limited to one office visit"
    ],
    answer: "long-lasting or recurring over time",
    explanation: "`chronic` usually describes a condition that persists or returns over time.",
    linkedTermIds: ["term-chronic"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-condition-3",
    type: "infer_meaning",
    prompt: "Which word best matches a recognizable group of signs and symptoms?",
    choices: ["syndrome", "infection", "deficiency", "acute"],
    answer: "syndrome",
    explanation: "`syndrome` refers to a set of findings that tend to occur together as a pattern.",
    linkedTermIds: ["term-syndrome"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-chart-passage-1",
    type: "infer_meaning",
    prompt: "Chart note: `History of present illness: cough and dyspnea for 3 days. Physical exam: mild wheeze. Reassessment after treatment shows easier breathing.` Which phrase names the section that tells the current symptom story?",
    choices: [
      "history of present illness",
      "physical exam",
      "reassessment",
      "progress note"
    ],
    answer: "history of present illness",
    explanation: "`history of present illness` is the chart section that explains how the current problem started and changed.",
    linkedTermIds: ["term-history-of-present-illness"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-chart-passage-2",
    type: "infer_meaning",
    prompt: "In chart language, what does `reassessment` suggest?",
    choices: [
      "checking the patient again after an initial evaluation or treatment",
      "the first description of the current illness",
      "the final billing statement",
      "a request for old records"
    ],
    answer: "checking the patient again after an initial evaluation or treatment",
    explanation: "`reassessment` means the clinician looked again to see whether the condition changed.",
    linkedTermIds: ["term-reassessment"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-chart-passage-3",
    type: "infer_meaning",
    prompt: "Which phrase best matches the section that reports what the clinician directly found on examination?",
    choices: [
      "physical exam",
      "history of present illness",
      "progress note",
      "follow-up"
    ],
    answer: "physical exam",
    explanation: "`physical exam` reports what the clinician observed directly during the exam.",
    linkedTermIds: ["term-physical-exam"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-admin-passage-1",
    type: "infer_meaning",
    prompt: "Portal reminder: `Please complete check-in online and bring your insurance card.` What does `check-in` mean here?",
    choices: [
      "the arrival and registration step before the visit",
      "the medical summary after the visit",
      "a request to share old records",
      "approval from insurance before care"
    ],
    answer: "the arrival and registration step before the visit",
    explanation: "`check-in` is the arrival and confirmation step before being seen.",
    linkedTermIds: ["term-check-in"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-admin-passage-2",
    type: "infer_meaning",
    prompt: "Message: `If you cannot attend tomorrow, please reschedule through the patient portal.` What does `reschedule` mean?",
    choices: [
      "move the appointment to a different time",
      "send the chart to another office",
      "request more medication",
      "pay the copay in advance"
    ],
    answer: "move the appointment to a different time",
    explanation: "`reschedule` means to change the appointment time or date.",
    linkedTermIds: ["term-reschedule"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-admin-passage-3",
    type: "infer_meaning",
    prompt: "Office notice: `Submit a records request if you want your chart sent to another clinic.` Which phrase refers to asking for copies or release of chart documents?",
    choices: [
      "records request",
      "insurance card",
      "check-in",
      "after-visit summary"
    ],
    answer: "records request",
    explanation: "`records request` means asking that medical records be sent or released.",
    linkedTermIds: ["term-records-request"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit5-clinical-1",
    type: "infer_meaning",
    prompt: "Which expansion best matches `SOB`?",
    choices: ["shortness of breath", "surgical office booking", "stable oxygen baseline", "signs of bleeding"],
    answer: "shortness of breath",
    explanation: "`SOB` is a very common clinical abbreviation for shortness of breath.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sob"],
  },
  {
    id: "exercise-unit5-clinical-2",
    type: "infer_meaning",
    prompt: "Pre-op instruction: `NPO after midnight.` What does `NPO` mean here?",
    choices: [
      "nothing by mouth",
      "take only pain medicine",
      "new patient orientation",
      "normal physical observation"
    ],
    answer: "nothing by mouth",
    explanation: "`NPO` means the patient should not eat or drink anything by mouth.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-npo"],
  },
  {
    id: "exercise-unit5-clinical-3",
    type: "infer_meaning",
    prompt: "Vitals line: `BP 128/76, HR 84, RR 24.` Which abbreviation is the breathing-related measure?",
    choices: ["RR", "HR", "BP", "NPO"],
    answer: "RR",
    explanation: "`RR` stands for respiratory rate, the number of breaths per minute.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-rr", "abbr-hr", "abbr-bp"],
  },
  {
    id: "exercise-unit5-document-1",
    type: "infer_meaning",
    prompt: "Which abbreviation best matches `history`?",
    choices: ["Hx", "Dx", "Tx", "ROI"],
    answer: "Hx",
    explanation: "`Hx` is a common chart abbreviation for history.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-hx"],
  },
  {
    id: "exercise-unit5-document-2",
    type: "infer_meaning",
    prompt: "Instruction: `f/u with PCP in 2 weeks.` What does this usually suggest?",
    choices: [
      "return for follow-up with the primary care provider",
      "file an insurance claim in 2 weeks",
      "fast until the next appointment",
      "request records from another clinic"
    ],
    answer: "return for follow-up with the primary care provider",
    explanation: "`f/u` means follow-up and `PCP` means primary care provider.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit5-document-3",
    type: "infer_meaning",
    prompt: "Which abbreviation refers to paperwork that allows records to be shared?",
    choices: ["ROI", "DOB", "Dx", "Tx"],
    answer: "ROI",
    explanation: "`ROI` stands for release of information.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-roi"],
  },
  {
    id: "exercise-unit5-route-1",
    type: "infer_meaning",
    prompt: "Which abbreviation means a medicine is given into a vein?",
    choices: ["IV", "PO", "IM", "mL"],
    answer: "IV",
    explanation: "`IV` stands for intravenous, meaning into a vein.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-iv"],
  },
  {
    id: "exercise-unit5-route-2",
    type: "infer_meaning",
    prompt: "Which abbreviation is a dose amount rather than a liquid volume?",
    choices: ["mg", "mL", "PO", "IM"],
    answer: "mg",
    explanation: "`mg` is a mass unit for medicine doses, while `mL` is a volume unit.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-mg", "abbr-ml"],
  },
  {
    id: "exercise-unit5-route-3",
    type: "infer_meaning",
    prompt: "Medication instruction: `Take one tablet PRN for pain.` What does `PRN` mean here?",
    choices: [
      "use it as needed",
      "take it only before meals",
      "give it into a muscle",
      "measure it in milliliters"
    ],
    answer: "use it as needed",
    explanation: "`PRN` means something should be used or given as needed.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-prn"],
  },
  {
    id: "exercise-unit6-mixed-1",
    type: "infer_meaning",
    prompt: "If `splen/o` means spleen and `-megaly` means enlargement, what does `splenomegaly` suggest?",
    choices: [
      "enlargement of the spleen",
      "surgical removal of the spleen",
      "a tumor involving lymphatic tissue",
      "an inflamed fallopian tube"
    ],
    answer: "enlargement of the spleen",
    explanation: "This is a direct root-plus-suffix decoding pattern from earlier lessons.",
    linkedTermIds: ["term-splenomegaly"],
    linkedPartIds: ["part-splen-combining", "part-megaly-suffix"],
  },
  {
    id: "exercise-unit6-mixed-2",
    type: "infer_meaning",
    prompt: "Discharge line: `f/u with PCP after visit summary review.` What does `f/u` mean?",
    choices: [
      "follow-up",
      "fluid unit",
      "findings unknown",
      "full use"
    ],
    answer: "follow-up",
    explanation: "`f/u` is a common document abbreviation for follow-up.",
    linkedTermIds: ["term-after-visit-summary"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-mixed-3",
    type: "infer_meaning",
    prompt: "Which plain-English paraphrase best matches `thyroidectomy`?",
    choices: [
      "surgical removal of the thyroid gland",
      "inflammation of the thyroid gland",
      "high blood sugar",
      "a message about prior authorization"
    ],
    answer: "surgical removal of the thyroid gland",
    explanation: "The thyroid root and `-ectomy` suffix point to surgical removal.",
    linkedTermIds: ["term-thyroidectomy"],
    linkedPartIds: ["part-thyroid-combining", "part-ectomy-suffix"],
  },
  {
    id: "exercise-unit6-clinical-1",
    type: "infer_meaning",
    prompt: "Clinical note: `BP and HR stable. RR elevated with mild SOB. Patient kept NPO before biopsy. Impression: acute respiratory complaint improving with monitoring.` Which paraphrase best matches the note?",
    choices: [
      "Breathing symptoms were present, but the patient was improving while waiting for a procedure",
      "The patient had a normal breathing rate and was cleared to eat",
      "The note is mainly about insurance billing",
      "The patient was discharged after chronic symptoms resolved"
    ],
    answer: "Breathing symptoms were present, but the patient was improving while waiting for a procedure",
    explanation: "The note combines abbreviations, status words, and procedure language from several earlier units.",
    linkedTermIds: ["term-biopsy", "term-impression", "term-acute", "term-monitoring"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-bp", "abbr-hr", "abbr-rr", "abbr-sob", "abbr-npo"],
  },
  {
    id: "exercise-unit6-clinical-2",
    type: "cloze",
    prompt: "In the note above, `NPO` means the patient should ___ before the biopsy.",
    choices: ["have nothing by mouth", "receive medicine as needed", "return in two weeks", "sign a release form"],
    answer: "have nothing by mouth",
    explanation: "`NPO` is standard shorthand for nothing by mouth.",
    linkedTermIds: ["term-biopsy"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-npo"],
  },
  {
    id: "exercise-unit6-clinical-3",
    type: "infer_meaning",
    prompt: "Which word labels the short summary interpretation at the end of many reports or notes?",
    choices: ["impression", "specimen", "dosage", "check-in"],
    answer: "impression",
    explanation: "`impression` is commonly the short take-home interpretation at the end of a report.",
    linkedTermIds: ["term-impression"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit6-admin-1",
    type: "infer_meaning",
    prompt: "Portal message: `DOB mismatch on file. Submit ROI if you want your records sent to your PCP. Refill request pending.` What does `ROI` mean here?",
    choices: [
      "release of information",
      "respiratory observation index",
      "return office instruction",
      "route of injection"
    ],
    answer: "release of information",
    explanation: "`ROI` is the permission form or process used to share records.",
    linkedTermIds: ["term-refill-request", "term-patient-portal"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-dob", "abbr-roi", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-admin-2",
    type: "infer_meaning",
    prompt: "Appointment reminder: `Bring your insurance card to check-in and call to reschedule if needed.` Which phrase means move the visit to a different time?",
    choices: ["reschedule", "check-in", "insurance card", "records request"],
    answer: "reschedule",
    explanation: "`reschedule` means to change the appointment time or date.",
    linkedTermIds: ["term-reschedule", "term-check-in", "term-insurance-card"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit6-admin-3",
    type: "infer_meaning",
    prompt: "Coverage message: `Prior authorization notice: coverage delayed pending review.` What does this suggest?",
    choices: [
      "extra approval is needed before coverage proceeds",
      "the patient should eat before the visit",
      "the clinician needs a new physical exam",
      "the after-visit summary is ready"
    ],
    answer: "extra approval is needed before coverage proceeds",
    explanation: "A prior authorization notice usually means additional approval is needed before a service or medicine is covered.",
    linkedTermIds: ["term-prior-authorization-notice", "term-coverage"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit2-integumentary-1",
    type: "infer_meaning",
    prompt: "If `sub-` means under and `cutane/o` points to skin, what does `subcutaneous` suggest?",
    choices: [
      "under the skin",
      "inflammation of the skin",
      "study of the skin",
      "ear examination"
    ],
    answer: "under the skin",
    explanation: "The prefix and skin word part together point to something below or under the skin.",
    linkedTermIds: ["term-subcutaneous"],
    linkedPartIds: ["part-sub-prefix", "part-cutane-combining"],
  },
  {
    id: "exercise-unit2-integumentary-2",
    type: "root_match",
    prompt: "Which combining form points to skin in `cutaneous` language?",
    choices: ["cutane/o", "ophthalm/o", "onc/o", "ot/o"],
    answer: "cutane/o",
    explanation: "`cutane/o` points to skin in terms like `cutaneous` and `subcutaneous`.",
    linkedTermIds: ["term-cutaneous", "term-subcutaneous"],
    linkedPartIds: ["part-cutane-combining"],
  },
  {
    id: "exercise-unit2-integumentary-3",
    type: "infer_meaning",
    prompt: "What does `dermatosis` suggest?",
    choices: [
      "an abnormal skin condition",
      "study of the skin",
      "removal of skin tissue",
      "ear inflammation"
    ],
    answer: "an abnormal skin condition",
    explanation: "`derm/o` points to skin and `-osis` often points to an abnormal condition.",
    linkedTermIds: ["term-dermatosis"],
    linkedPartIds: ["part-derm-combining", "part-osis-suffix"],
  },
  {
    id: "exercise-unit2-sensory-1",
    type: "infer_meaning",
    prompt: "If `ophthalm/o` means eye and `-logy` means study of, what does `ophthalmology` suggest?",
    choices: [
      "study and treatment of the eye",
      "inflammation of the ear",
      "viewing the ear with a scope",
      "hearing loss caused by a tumor"
    ],
    answer: "study and treatment of the eye",
    explanation: "The eye combining form plus `-logy` points to the field that focuses on eye care.",
    linkedTermIds: ["term-ophthalmology"],
    linkedPartIds: ["part-ophthalm-combining", "part-ology-suffix"],
  },
  {
    id: "exercise-unit2-sensory-2",
    type: "infer_meaning",
    prompt: "What does `otitis` suggest?",
    choices: [
      "inflammation of the ear",
      "study of hearing",
      "viewing the eye with a scope",
      "under the skin"
    ],
    answer: "inflammation of the ear",
    explanation: "`ot/o` points to the ear and `-itis` points to inflammation.",
    linkedTermIds: ["term-otitis"],
    linkedPartIds: ["part-ot-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-sensory-3",
    type: "split_term",
    prompt: "Which suffix in `otoscopy` signals viewing with a scope?",
    choices: ["-scopy", "-logy", "-itis", "-oma"],
    answer: "-scopy",
    explanation: "`-scopy` marks an examination or viewing procedure with a scope or similar instrument.",
    linkedTermIds: ["term-otoscopy"],
    linkedPartIds: ["part-scopy-suffix"],
  },
  {
    id: "exercise-unit2-oncology-1",
    type: "infer_meaning",
    prompt: "If `onc/o` means tumor or cancer and `-logy` means study of, what does `oncology` suggest?",
    choices: [
      "study and treatment of tumors or cancer",
      "a noncancerous growth",
      "an abnormal skin condition",
      "an ear examination"
    ],
    answer: "study and treatment of tumors or cancer",
    explanation: "`onc/o` plus `-logy` points to the medical field centered on cancer care.",
    linkedTermIds: ["term-oncology"],
    linkedPartIds: ["part-onc-combining", "part-ology-suffix"],
  },
  {
    id: "exercise-unit2-oncology-2",
    type: "infer_meaning",
    prompt: "What does `carcinoma` suggest?",
    choices: [
      "a cancerous tumor",
      "the study of hearing",
      "ear inflammation",
      "skin under the surface"
    ],
    answer: "a cancerous tumor",
    explanation: "`carcin/o` points to cancer and `-oma` points to a mass or tumor.",
    linkedTermIds: ["term-carcinoma"],
    linkedPartIds: ["part-carcin-combining", "part-oma-suffix"],
  },
  {
    id: "exercise-unit2-oncology-3",
    type: "cloze",
    prompt: "Complete the contrast: `benign` means not cancerous, while `malignant` means ___.",
    choices: [
      "cancerous or likely to spread",
      "under the skin",
      "within normal limits",
      "study of the eye"
    ],
    answer: "cancerous or likely to spread",
    explanation: "`benign` and `malignant` are high-yield opposites in tumor language.",
    linkedTermIds: ["term-benign", "term-malignant"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit5-chart-1",
    type: "infer_meaning",
    prompt: "Exam line: `Otoscopy WNL.` What does `WNL` mean here?",
    choices: [
      "within normal limits",
      "without new lesions",
      "will need labs",
      "watch next level"
    ],
    answer: "within normal limits",
    explanation: "`WNL` is chart shorthand meaning the finding is in the expected normal range.",
    linkedTermIds: ["term-otoscopy"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-wnl"],
  },
  {
    id: "exercise-unit5-chart-2",
    type: "infer_meaning",
    prompt: "Medication note: `Give insulin SQ.` What does `SQ` mean?",
    choices: [
      "subcutaneous",
      "as needed",
      "by mouth",
      "within normal limits"
    ],
    answer: "subcutaneous",
    explanation: "`SQ` means the medicine is given under the skin.",
    linkedTermIds: ["term-subcutaneous"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sq"],
  },
  {
    id: "exercise-unit5-chart-3",
    type: "infer_meaning",
    prompt: "Chart phrase: `cough w/o fever, improved w/ rest.` Which paraphrase best matches?",
    choices: [
      "cough without fever, improved with rest",
      "cough with fever, improved without rest",
      "cough with oxygen, improved while resting in the office",
      "cough without oxygen, improved with fluids only"
    ],
    answer: "cough without fever, improved with rest",
    explanation: "`w/` means with and `w/o` means without in shorthand note language.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-w-with", "abbr-wo"],
  },
  {
    id: "exercise-unit6-rapid-1",
    type: "infer_meaning",
    prompt: "Progress note: `SQ injection given w/o complication; site WNL.` Which paraphrase fits best?",
    choices: [
      "An under-the-skin injection was given and the site looked normal afterward",
      "The patient was told to avoid injections because the site looked infected",
      "A vein injection caused complications and urgent reassessment",
      "No medicine was given because the patient had to remain NPO"
    ],
    answer: "An under-the-skin injection was given and the site looked normal afterward",
    explanation: "This line combines route shorthand, note shorthand, and a normal-finding abbreviation in one compact sentence.",
    linkedTermIds: ["term-subcutaneous", "term-injection", "term-progress-note"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sq", "abbr-wo", "abbr-wnl"],
  },
  {
    id: "exercise-unit6-rapid-2",
    type: "infer_meaning",
    prompt: "If `carcin/o` means cancer and `-oma` means mass or tumor, what does `carcinoma` suggest?",
    choices: [
      "a cancerous tumor",
      "a harmless skin rash",
      "viewing the ear with a scope",
      "study of the eye"
    ],
    answer: "a cancerous tumor",
    explanation: "This is a direct tumor-language decoding pattern that reinforces the new oncology lesson.",
    linkedTermIds: ["term-carcinoma"],
    linkedPartIds: ["part-carcin-combining", "part-oma-suffix"],
  },
  {
    id: "exercise-unit6-rapid-3",
    type: "infer_meaning",
    prompt: "Referral note: `f/u w/ ophthalmology; otoscopy WNL.` Which paraphrase best matches?",
    choices: [
      "Return for follow-up with the eye specialist; the ear exam looked normal",
      "Follow-up is complete and the eye exam found a malignant tumor",
      "The patient needs surgery on the ear and should avoid all food",
      "The patient should request records before the eye exam can happen"
    ],
    answer: "Return for follow-up with the eye specialist; the ear exam looked normal",
    explanation: "This short line mixes workflow shorthand, a specialty term, a procedure term, and a normal-finding abbreviation.",
    linkedTermIds: ["term-ophthalmology", "term-otoscopy"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-w-with", "abbr-wnl"],
  },
  {
    id: "exercise-unit5-history-1",
    type: "infer_meaning",
    prompt: "Chart line: `c/o cough and dyspnea.` What does `c/o` mean here?",
    choices: [
      "complains of",
      "cleared for observation",
      "chronic onset",
      "continue orally"
    ],
    answer: "complains of",
    explanation: "`c/o` introduces what the patient says they are experiencing.",
    linkedTermIds: ["term-dyspnea", "term-chief-complaint"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co"],
  },
  {
    id: "exercise-unit5-history-2",
    type: "infer_meaning",
    prompt: "Allergy line: `NKDA.` What does this mean?",
    choices: [
      "no known drug allergies",
      "new known diagnosis added",
      "needs kidney disease assessment",
      "no key discharge advice"
    ],
    answer: "no known drug allergies",
    explanation: "`NKDA` records that no medication allergies are known.",
    linkedTermIds: ["term-allergies"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-nkda"],
  },
  {
    id: "exercise-unit5-history-3",
    type: "infer_meaning",
    prompt: "Progress note: `s/p appendectomy, pain improving.` What does `s/p` suggest?",
    choices: [
      "after the appendectomy",
      "scheduled for appendectomy",
      "skin pain pattern",
      "scope procedure pending"
    ],
    answer: "after the appendectomy",
    explanation: "`s/p` means status post, or after a listed event or procedure.",
    linkedTermIds: ["term-appendectomy", "term-progress-note"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sp"],
  },
  {
    id: "exercise-unit5-frequency-1",
    type: "infer_meaning",
    prompt: "Medication instruction: `Take one tablet BID.` What does `BID` mean?",
    choices: [
      "twice daily",
      "three times daily",
      "as needed",
      "by mouth"
    ],
    answer: "twice daily",
    explanation: "`BID` is common shorthand for two times each day.",
    linkedTermIds: ["term-dosage"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-bid"],
  },
  {
    id: "exercise-unit5-frequency-2",
    type: "root_match",
    prompt: "Which abbreviation means `three times daily`?",
    choices: ["TID", "BID", "CBC", "PRN"],
    answer: "TID",
    explanation: "`TID` means three times daily, while `BID` means twice daily.",
    linkedTermIds: ["term-dosage"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-tid", "abbr-bid"],
  },
  {
    id: "exercise-unit5-frequency-3",
    type: "infer_meaning",
    prompt: "Lab order: `CBC this morning.` What does `CBC` stand for?",
    choices: [
      "complete blood count",
      "chronic breathing complaint",
      "covered billing claim",
      "cardiac biopsy check"
    ],
    answer: "complete blood count",
    explanation: "`CBC` names a common blood-cell lab test.",
    linkedTermIds: ["term-hematology", "term-anemia"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cbc"],
  },
  {
    id: "exercise-unit6-results-1",
    type: "infer_meaning",
    prompt: "Triage note: `c/o cough, NKDA, start inhaler BID.` Which paraphrase fits best?",
    choices: [
      "The patient reports cough, has no known drug allergies, and should use the inhaler twice a day",
      "The patient has chronic cough, known allergies, and should use the inhaler only as needed",
      "The patient is ready for discharge after a normal blood test",
      "The patient needs surgery before any breathing treatment"
    ],
    answer: "The patient reports cough, has no known drug allergies, and should use the inhaler twice a day",
    explanation: "This line mixes complaint shorthand, allergy shorthand, and medication-frequency shorthand.",
    linkedTermIds: ["term-chief-complaint", "term-allergies", "term-dosage"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co", "abbr-nkda", "abbr-bid"],
  },
  {
    id: "exercise-unit6-results-2",
    type: "infer_meaning",
    prompt: "Discharge line: `s/p appendectomy; take antibiotic TID and f/u with PCP.` Which paraphrase best matches?",
    choices: [
      "After the appendix removal, take the antibiotic three times daily and follow up with the main clinician",
      "Before the appendix removal, take the antibiotic twice daily and request records",
      "After the eye exam, use the antibiotic only as needed and return to billing",
      "The patient should not eat or drink until after the clinic closes"
    ],
    answer: "After the appendix removal, take the antibiotic three times daily and follow up with the main clinician",
    explanation: "This line combines procedure status, medication frequency, and workflow shorthand.",
    linkedTermIds: ["term-appendectomy", "term-discharge-instructions", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sp", "abbr-tid", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-results-3",
    type: "infer_meaning",
    prompt: "Lab update: `CBC WNL.` What does this suggest?",
    choices: [
      "The blood count test was within the expected range",
      "The patient needs three medicines a day",
      "The patient has no known drug allergies",
      "The patient should return for eye follow-up"
    ],
    answer: "The blood count test was within the expected range",
    explanation: "`CBC` names the blood-count test and `WNL` says the result was within normal limits.",
    linkedTermIds: ["term-monitoring", "term-findings"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cbc", "abbr-wnl"],
  },
  {
    id: "exercise-unit2-blood-1",
    type: "root_match",
    prompt: "Which combining form points to a cell?",
    choices: ["cyt/o", "thromb/o", "leuk/o", "erythr/o"],
    answer: "cyt/o",
    explanation: "`cyt/o` points to a cell in terms like `erythrocyte` and `leukocyte`.",
    linkedTermIds: ["term-erythrocyte", "term-leukocyte"],
    linkedPartIds: ["part-cyt-combining"],
  },
  {
    id: "exercise-unit2-blood-2",
    type: "infer_meaning",
    prompt: "If `erythr/o` means red and `cyt/o` means cell, what does `erythrocyte` suggest?",
    choices: [
      "red blood cell",
      "white blood cell",
      "blood clotting condition",
      "blood test image"
    ],
    answer: "red blood cell",
    explanation: "The parts point to a red-colored cell, which is the red blood cell.",
    linkedTermIds: ["term-erythrocyte"],
    linkedPartIds: ["part-erythr-combining", "part-cyt-combining"],
  },
  {
    id: "exercise-unit2-blood-3",
    type: "infer_meaning",
    prompt: "If `leuk/o` means white and `cyt/o` means cell, what does `leukocyte` suggest?",
    choices: [
      "white blood cell",
      "red blood cell",
      "blood clot",
      "blood imaging study"
    ],
    answer: "white blood cell",
    explanation: "`leuk/o` plus `cyt/o` points to the white blood cell.",
    linkedTermIds: ["term-leukocyte"],
    linkedPartIds: ["part-leuk-combining", "part-cyt-combining"],
  },
  {
    id: "exercise-unit2-blood-4",
    type: "infer_meaning",
    prompt: "What does `thrombosis` suggest?",
    choices: [
      "formation of a blood clot in a vessel",
      "low red blood cell count",
      "study of blood cells",
      "a normal urine test"
    ],
    answer: "formation of a blood clot in a vessel",
    explanation: "`thromb/o` points to clot and `-osis` points to an abnormal condition or process.",
    linkedTermIds: ["term-thrombosis"],
    linkedPartIds: ["part-thromb-combining", "part-osis-suffix"],
  },
  {
    id: "exercise-unit5-imaging-1",
    type: "infer_meaning",
    prompt: "Order line: `CT head today.` What does `CT` stand for?",
    choices: [
      "computed tomography",
      "chronic treatment",
      "cardiac tracing",
      "cell test"
    ],
    answer: "computed tomography",
    explanation: "`CT` is a common imaging abbreviation for computed tomography.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ct"],
  },
  {
    id: "exercise-unit5-imaging-2",
    type: "infer_meaning",
    prompt: "Results note: `MRI pending.` What does `MRI` stand for?",
    choices: [
      "magnetic resonance imaging",
      "medical records intake",
      "monitoring reassessment instruction",
      "muscle repair injection"
    ],
    answer: "magnetic resonance imaging",
    explanation: "`MRI` names an imaging study that uses magnetic fields and radio waves.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-mri"],
  },
  {
    id: "exercise-unit5-imaging-3",
    type: "infer_meaning",
    prompt: "Lab request: `UA before follow-up.` What does `UA` mean?",
    choices: [
      "urinalysis",
      "urgent assessment",
      "upper airway",
      "ultrasound appointment"
    ],
    answer: "urinalysis",
    explanation: "`UA` is a common shorthand for a urine test.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ua"],
  },
  {
    id: "exercise-unit5-imaging-4",
    type: "infer_meaning",
    prompt: "Instruction: `Send patient to CT STAT.` What does `STAT` mean here?",
    choices: [
      "immediately",
      "after the visit",
      "three times daily",
      "within normal limits"
    ],
    answer: "immediately",
    explanation: "`STAT` means the action should happen without delay.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-stat", "abbr-ct"],
  },
  {
    id: "exercise-unit6-urgent-imaging-1",
    type: "infer_meaning",
    prompt: "Urgent note: `Pt c/o acute headache and nausea. HR 108, RR 22, NKDA. Send for CT STAT. Reassessment after fluids shows stable exam, but symptoms persist. Plan: f/u with PCP if imaging is WNL.` Which paraphrase best matches?",
    choices: [
      "The patient reports sudden headache and nausea, a rapid CT is ordered, and follow-up with the main clinician depends on a normal scan",
      "The patient has no symptoms and only needs routine blood work before discharge",
      "The patient already has a malignant tumor and must go straight to surgery",
      "The patient should take antibiotics three times a day for ear pain"
    ],
    answer: "The patient reports sudden headache and nausea, a rapid CT is ordered, and follow-up with the main clinician depends on a normal scan",
    explanation: "This note mixes complaint, allergy, vital-sign, urgency, reassessment, and follow-up shorthand in one short passage.",
    linkedTermIds: ["term-acute", "term-reassessment", "term-stable", "term-plan", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: [
      "abbr-co",
      "abbr-hr",
      "abbr-rr",
      "abbr-nkda",
      "abbr-ct",
      "abbr-stat",
      "abbr-fu",
      "abbr-pcp",
      "abbr-wnl"
    ],
  },
  {
    id: "exercise-unit6-urgent-imaging-2",
    type: "infer_meaning",
    prompt: "Results message: `MRI impression: benign lesion. UA WNL. Continue monitoring and keep nephrology follow-up if flank pain returns.` Which paraphrase fits best?",
    choices: [
      "The MRI found a noncancerous lesion, the urine test looked normal, and kidney follow-up should continue if symptoms come back",
      "The MRI confirmed a malignant tumor and urgent surgery is required",
      "The urine test showed severe infection and the patient should remain NPO",
      "The message is mainly about insurance denial and billing review"
    ],
    answer: "The MRI found a noncancerous lesion, the urine test looked normal, and kidney follow-up should continue if symptoms come back",
    explanation: "This line combines imaging, result-summary, benign or malignant contrast, urine testing, and follow-up planning.",
    linkedTermIds: ["term-impression", "term-benign", "term-monitoring", "term-nephrology", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-mri", "abbr-ua", "abbr-wnl"],
  },
  {
    id: "exercise-unit6-urgent-imaging-3",
    type: "cloze",
    prompt: "In the urgent note above, `STAT` means the CT should happen ___.",
    choices: ["immediately", "at the next annual visit", "three times daily", "only if symptoms fully resolve"],
    answer: "immediately",
    explanation: "`STAT` signals urgency and means the test or action should happen right away.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-stat", "abbr-ct"],
  },
  {
    id: "exercise-unit2-urinary-output-1",
    type: "root_match",
    prompt: "Which prefix suggests many or much, as in `polyuria`?",
    choices: ["poly-", "olig-", "dys-", "sub-"],
    answer: "poly-",
    explanation: "`poly-` signals many or much in terms such as `polyuria`.",
    linkedTermIds: ["term-polyuria"],
    linkedPartIds: ["part-poly-prefix"],
  },
  {
    id: "exercise-unit2-urinary-output-2",
    type: "infer_meaning",
    prompt: "If `dys-` means difficult or abnormal and `-uria` points to a urine condition, what does `dysuria` suggest?",
    choices: [
      "painful or difficult urination",
      "too much urination",
      "low urine output",
      "a blood clot in a vessel"
    ],
    answer: "painful or difficult urination",
    explanation: "`dysuria` points to abnormal or uncomfortable urination.",
    linkedTermIds: ["term-dysuria"],
    linkedPartIds: ["part-dys-prefix", "part-uria-suffix"],
  },
  {
    id: "exercise-unit2-urinary-output-3",
    type: "infer_meaning",
    prompt: "What does `polyuria` suggest?",
    choices: [
      "excessive urination",
      "painful urination",
      "urine testing in the lab",
      "too little urine output"
    ],
    answer: "excessive urination",
    explanation: "`poly-` plus `-uria` points to too much urine output.",
    linkedTermIds: ["term-polyuria"],
    linkedPartIds: ["part-poly-prefix", "part-uria-suffix"],
  },
  {
    id: "exercise-unit2-urinary-output-4",
    type: "infer_meaning",
    prompt: "What does `oliguria` suggest?",
    choices: [
      "abnormally low urine output",
      "protein in the urine",
      "blood in the urine",
      "painful urination"
    ],
    answer: "abnormally low urine output",
    explanation: "`olig-` points to scanty or too little, and `-uria` points to urine output.",
    linkedTermIds: ["term-oliguria"],
    linkedPartIds: ["part-olig-prefix", "part-uria-suffix"],
  },
  {
    id: "exercise-unit2-urinary-output-5",
    type: "infer_meaning",
    prompt: "Which phrase best matches `proteinuria`?",
    choices: [
      "protein present in the urine",
      "too many red blood cells",
      "a normal urine test",
      "urination that is painful"
    ],
    answer: "protein present in the urine",
    explanation: "The safe decomposition comes from `-uria`, which signals a urine finding or urine-related condition.",
    linkedTermIds: ["term-proteinuria"],
    linkedPartIds: ["part-uria-suffix"],
  },
  {
    id: "exercise-unit6-renal-synth-1",
    type: "infer_meaning",
    prompt: "Portal message: `UA WNL, but dysuria persists. Increase fluids and schedule f/u with PCP if hematuria returns or urine output falls.` Which paraphrase fits best?",
    choices: [
      "The urine test looked normal, but painful urination is still present, and follow-up is needed if blood in the urine returns or output drops",
      "The urine test confirmed a kidney tumor and urgent surgery is required",
      "The patient should stop all fluids because urine output is too high",
      "The message is mainly about billing and insurance paperwork"
    ],
    answer: "The urine test looked normal, but painful urination is still present, and follow-up is needed if blood in the urine returns or output drops",
    explanation: "This message mixes urine-test shorthand, urinary symptoms, and follow-up language in one short passage.",
    linkedTermIds: ["term-dysuria", "term-hematuria", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ua", "abbr-wnl", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-renal-synth-2",
    type: "infer_meaning",
    prompt: "Results note: `Urinalysis shows proteinuria without hematuria. Plan: nephrology follow-up if symptoms continue.` Which paraphrase best matches?",
    choices: [
      "The urine test found protein but not blood, and kidney follow-up is advised if problems continue",
      "The urine test was fully normal and no follow-up is needed",
      "The note confirms a blood clot in the leg",
      "The patient should take antibiotics three times daily after surgery"
    ],
    answer: "The urine test found protein but not blood, and kidney follow-up is advised if problems continue",
    explanation: "This line combines a full urine-test term, a partial urine finding, and kidney-specialty follow-up language.",
    linkedTermIds: ["term-urinalysis", "term-proteinuria", "term-hematuria", "term-nephrology", "term-follow-up"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit6-renal-synth-3",
    type: "infer_meaning",
    prompt: "Follow-up note: `Patient reports polyuria this week; reassessment planned overnight if oliguria develops.` Which contrast best matches the note?",
    choices: [
      "too much urine now, with watchfulness for too little urine later",
      "painful urination now, with watchfulness for blood in the urine later",
      "normal urine test now, with watchfulness for kidney stones later",
      "low blood count now, with watchfulness for infection later"
    ],
    answer: "too much urine now, with watchfulness for too little urine later",
    explanation: "`polyuria` and `oliguria` create a useful high-versus-low urine-output contrast.",
    linkedTermIds: ["term-polyuria", "term-oliguria", "term-reassessment"],
    linkedPartIds: ["part-poly-prefix", "part-olig-prefix", "part-uria-suffix"],
  },
  {
    id: "exercise-unit6-blood-synth-1",
    type: "infer_meaning",
    prompt: "CBC update: `Leukocytosis present with stable erythrocyte count. Assessment: likely infection; continue monitoring and reassessment if fever worsens.` Which paraphrase fits best?",
    choices: [
      "The white blood cell count is elevated while red blood cells are stable, so the note leans toward infection and continued observation",
      "Both red and white blood cells are dangerously low and immediate surgery is required",
      "The blood count is within normal limits and no follow-up is needed",
      "The message is about a normal urine test rather than blood counts"
    ],
    answer: "The white blood cell count is elevated while red blood cells are stable, so the note leans toward infection and continued observation",
    explanation: "This passage combines CBC language with blood-cell terms and common assessment or monitoring phrasing.",
    linkedTermIds: [
      "term-leukocytosis",
      "term-erythrocyte",
      "term-infection",
      "term-monitoring",
      "term-reassessment"
    ],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cbc"],
  },
  {
    id: "exercise-unit6-blood-synth-2",
    type: "infer_meaning",
    prompt: "Imaging impression: `No thrombosis seen. Leg swelling improving; continue routine follow-up.` What does this suggest?",
    choices: [
      "No blood clot was found, and the swelling is getting better",
      "A malignant tumor was found and urgent treatment is required",
      "The urine test found protein and blood",
      "The patient should remain NPO before biopsy"
    ],
    answer: "No blood clot was found, and the swelling is getting better",
    explanation: "`thrombosis` points to a clotting process, so the note is reassuring that no clot was seen.",
    linkedTermIds: ["term-thrombosis", "term-impression", "term-follow-up"],
    linkedPartIds: ["part-thromb-combining", "part-osis-suffix"],
  },
  {
    id: "exercise-unit6-blood-synth-3",
    type: "infer_meaning",
    prompt: "Which phrase best matches `leukocytosis`?",
    choices: [
      "an abnormally increased white blood cell count",
      "a normal red blood cell count",
      "protein found in the urine",
      "painful urination"
    ],
    answer: "an abnormally increased white blood cell count",
    explanation: "`leuk/o` points to white, `cyt/o` points to cell, and `-osis` marks an abnormal condition.",
    linkedTermIds: ["term-leukocytosis"],
    linkedPartIds: ["part-leuk-combining", "part-cyt-combining", "part-osis-suffix"],
  },
  {
    id: "exercise-unit2-hepatobiliary-1",
    type: "root_match",
    prompt: "Which suffix points to a stone condition or the presence of stones?",
    choices: ["-lithiasis", "-itis", "-megaly", "-gram"],
    answer: "-lithiasis",
    explanation: "`-lithiasis` points to a condition involving stones, such as kidney stones or gallstones.",
    linkedTermIds: ["term-cholelithiasis", "term-nephrolithiasis"],
    linkedPartIds: ["part-lithiasis-suffix"],
  },
  {
    id: "exercise-unit2-hepatobiliary-2",
    type: "infer_meaning",
    prompt: "If `pancreat/o` means pancreas and `-itis` means inflammation, what does `pancreatitis` suggest?",
    choices: [
      "inflammation of the pancreas",
      "stone condition of the pancreas",
      "study of the pancreas",
      "enlargement of the liver"
    ],
    answer: "inflammation of the pancreas",
    explanation: "`pancreatitis` follows the familiar organ-plus-inflammation pattern.",
    linkedTermIds: ["term-pancreatitis"],
    linkedPartIds: ["part-pancreat-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-hepatobiliary-3",
    type: "infer_meaning",
    prompt: "What does `cholecystitis` suggest?",
    choices: [
      "inflammation of the gallbladder",
      "surgical removal of the gallbladder",
      "presence of kidney stones",
      "inflammation of the pancreas"
    ],
    answer: "inflammation of the gallbladder",
    explanation: "`cholecyst/o` points to the gallbladder and `-itis` points to inflammation.",
    linkedTermIds: ["term-cholecystitis"],
    linkedPartIds: ["part-cholecyst-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-hepatobiliary-4",
    type: "infer_meaning",
    prompt: "Which phrase best matches `cholelithiasis`?",
    choices: [
      "a gallstone condition",
      "inflammation of the liver",
      "blood in the urine",
      "study of the kidney"
    ],
    answer: "a gallstone condition",
    explanation: "`chol/e` points to bile or gall and `-lithiasis` points to stones.",
    linkedTermIds: ["term-cholelithiasis"],
    linkedPartIds: ["part-chole-combining", "part-lithiasis-suffix"],
  },
  {
    id: "exercise-unit2-hepatobiliary-5",
    type: "infer_meaning",
    prompt: "What does `nephrolithiasis` suggest?",
    choices: [
      "kidney stone condition",
      "painful urination",
      "inflammation of the kidney",
      "gallbladder inflammation"
    ],
    answer: "kidney stone condition",
    explanation: "`nephr/o` points to the kidney and `-lithiasis` points to stones.",
    linkedTermIds: ["term-nephrolithiasis"],
    linkedPartIds: ["part-nephr-combining", "part-lithiasis-suffix"],
  },
  {
    id: "exercise-unit6-abdominal-synth-1",
    type: "infer_meaning",
    prompt: "ED note: `CT shows nephrolithiasis and UA shows hematuria. Pain improved after fluids. f/u with PCP if symptoms return.` Which paraphrase best matches?",
    choices: [
      "The scan found kidney stones, the urine showed blood, and follow-up is needed if the problem comes back",
      "The scan found a gallbladder infection and the urine test was normal",
      "The patient must remain NPO because the pancreas is inflamed",
      "The message is mainly about prior authorization paperwork"
    ],
    answer: "The scan found kidney stones, the urine showed blood, and follow-up is needed if the problem comes back",
    explanation: "This passage mixes imaging, urine-test shorthand, kidney-stone language, and follow-up instructions.",
    linkedTermIds: ["term-nephrolithiasis", "term-hematuria", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ct", "abbr-ua", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-abdominal-synth-2",
    type: "infer_meaning",
    prompt: "Ultrasound impression: `cholelithiasis with probable cholecystitis. Patient kept NPO and monitoring continues.` Which paraphrase fits best?",
    choices: [
      "Gallstones are present with likely gallbladder inflammation, so the patient is not eating or drinking while observation continues",
      "Kidney stones were excluded and the patient can go home immediately",
      "The pancreas is normal but the urine test shows protein",
      "The note mainly describes a routine vaccination visit"
    ],
    answer: "Gallstones are present with likely gallbladder inflammation, so the patient is not eating or drinking while observation continues",
    explanation: "This line combines an imaging interpretation with stone language, inflammation language, and the `NPO` instruction.",
    linkedTermIds: ["term-ultrasound", "term-impression", "term-cholelithiasis", "term-cholecystitis", "term-monitoring"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-npo"],
  },
  {
    id: "exercise-unit6-abdominal-synth-3",
    type: "infer_meaning",
    prompt: "Assessment: `Pancreatitis likely. Continue monitoring and return if abdominal pain worsens.` Which plain-English meaning best matches `pancreatitis`?",
    choices: [
      "inflammation of the pancreas",
      "presence of kidney stones",
      "enlargement of the liver",
      "blood in the urine"
    ],
    answer: "inflammation of the pancreas",
    explanation: "`pancreatitis` follows the same organ-plus-inflammation pattern used in other `-itis` terms.",
    linkedTermIds: ["term-pancreatitis", "term-monitoring"],
    linkedPartIds: ["part-pancreat-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit6-referral-1",
    type: "infer_meaning",
    prompt: "Referral note: `Hx of chronic dyspnea. Dx unclear. Tx started PRN. f/u with PCP after consult.` Which paraphrase best matches?",
    choices: [
      "The patient has a history of ongoing breathing trouble, the diagnosis is still uncertain, treatment was started as needed, and follow-up with the main clinician comes after the specialist discussion",
      "The patient has a new injury, a final diagnosis is complete, and no further care is needed",
      "The note is mainly about insurance billing and copay collection",
      "The patient should remain NPO until the consult office opens"
    ],
    answer: "The patient has a history of ongoing breathing trouble, the diagnosis is still uncertain, treatment was started as needed, and follow-up with the main clinician comes after the specialist discussion",
    explanation: "This note compresses history, diagnosis, treatment, and follow-up shorthand into one referral line.",
    linkedTermIds: ["term-chronic", "term-dyspnea", "term-consult", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-hx", "abbr-dx", "abbr-tx", "abbr-prn", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-referral-2",
    type: "infer_meaning",
    prompt: "Records message: `ROI and DOB required before records request is sent to the consulting office.` What is the learner being told?",
    choices: [
      "Permission and date-of-birth details are needed before records can be sent",
      "The office needs a urine test before scheduling the consult",
      "The diagnosis is final and treatment should stop",
      "The patient should bring food before the visit"
    ],
    answer: "Permission and date-of-birth details are needed before records can be sent",
    explanation: "`ROI` is the release of information process and `DOB` is the patient's date of birth.",
    linkedTermIds: ["term-records-request", "term-consult"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-roi", "abbr-dob"],
  },
  {
    id: "exercise-unit6-referral-3",
    type: "infer_meaning",
    prompt: "In a consult summary, which pair best matches `Dx` and `Tx`?",
    choices: [
      "diagnosis and treatment",
      "date of birth and transfer",
      "difficulty breathing and test results",
      "discharge and triage"
    ],
    answer: "diagnosis and treatment",
    explanation: "`Dx` is shorthand for diagnosis and `Tx` is shorthand for treatment.",
    linkedTermIds: ["term-consult"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-dx", "abbr-tx"],
  },
  {
    id: "exercise-unit6-handoff-1",
    type: "infer_meaning",
    prompt: "Handoff note: `Patient c/o acute SOB on admission. HR 110, RR 24, NKDA. Reassessment after PRN treatment: breathing easier, exam otherwise WNL. Transfer to floor for monitoring.` Which paraphrase best matches?",
    choices: [
      "The patient came in with sudden shortness of breath, improved after as-needed treatment, and is moving for continued observation",
      "The patient had no breathing problem and is being discharged immediately",
      "The note is mainly about records transfer to another clinic",
      "The patient has chronic kidney stones and needs a urine test"
    ],
    answer: "The patient came in with sudden shortness of breath, improved after as-needed treatment, and is moving for continued observation",
    explanation: "This handoff combines complaint, vital-sign, allergy, reassessment, and transfer language in one compact note.",
    linkedTermIds: ["term-acute", "term-admission", "term-reassessment", "term-transfer", "term-monitoring"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co", "abbr-sob", "abbr-hr", "abbr-rr", "abbr-nkda", "abbr-prn", "abbr-wnl"],
  },
  {
    id: "exercise-unit6-handoff-2",
    type: "infer_meaning",
    prompt: "In the handoff note above, what changed after reassessment?",
    choices: [
      "Breathing improved after treatment",
      "The diagnosis changed to kidney stones",
      "The patient developed a drug allergy",
      "The office canceled the transfer"
    ],
    answer: "Breathing improved after treatment",
    explanation: "The reassessment line says breathing was easier after the PRN treatment.",
    linkedTermIds: ["term-reassessment"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-prn"],
  },
  {
    id: "exercise-unit6-handoff-3",
    type: "infer_meaning",
    prompt: "Which phrase in the handoff most clearly signals a sudden current problem rather than a long-running one?",
    choices: ["acute SOB", "WNL exam", "transfer to floor", "NKDA"],
    answer: "acute SOB",
    explanation: "`acute` points to a current or sudden problem rather than a chronic one.",
    linkedTermIds: ["term-acute", "term-chronic"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sob", "abbr-nkda", "abbr-wnl"],
  },
  {
    id: "exercise-unit6-portal-1",
    type: "infer_meaning",
    prompt: "Portal update: `MRI impression available. CBC WNL. Prior authorization notice still pending for follow-up imaging.` Which paraphrase best matches?",
    choices: [
      "The MRI summary is ready, the blood count looked normal, and approval is still pending for the next scan",
      "The MRI found a dangerous clot and emergency surgery is scheduled",
      "The urine test is abnormal and follow-up has been canceled",
      "The patient should complete check-in before any results are released"
    ],
    answer: "The MRI summary is ready, the blood count looked normal, and approval is still pending for the next scan",
    explanation: "This message mixes result-availability language, a normal blood count, and authorization workflow language.",
    linkedTermIds: ["term-impression", "term-prior-authorization-notice"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-mri", "abbr-cbc", "abbr-wnl"],
  },
  {
    id: "exercise-unit6-portal-2",
    type: "infer_meaning",
    prompt: "Portal message: `Complete check-in, bring insurance card, and submit ROI if PCP needs CT results.` What is the learner being told to do?",
    choices: [
      "Finish registration, bring coverage information, and authorize records sharing if the main clinician needs the scan results",
      "Start treatment immediately and skip the appointment",
      "Avoid all food and drink before the office visit",
      "Repeat the blood count test three times daily"
    ],
    answer: "Finish registration, bring coverage information, and authorize records sharing if the main clinician needs the scan results",
    explanation: "This message mixes front-desk workflow, insurance, record-release, and imaging-result language.",
    linkedTermIds: ["term-check-in", "term-insurance-card", "term-test-results"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-roi", "abbr-pcp", "abbr-ct"],
  },
  {
    id: "exercise-unit6-portal-3",
    type: "infer_meaning",
    prompt: "Portal note: `Refill request received. f/u with PCP after test results if symptoms continue.` Which next step is implied?",
    choices: [
      "Wait for the results and then follow up with the main clinician if the problem continues",
      "Go to the emergency department immediately for surgery",
      "Send a release form before taking the medicine",
      "Repeat the blood count test before every dose"
    ],
    answer: "Wait for the results and then follow up with the main clinician if the problem continues",
    explanation: "The message links the refill workflow to result review and later follow-up.",
    linkedTermIds: ["term-refill-request", "term-test-results", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit2-upper-airway-1",
    type: "root_match",
    prompt: "Which combining form points to the pharynx or throat?",
    choices: ["pharyng/o", "laryng/o", "rhin/o", "bronch/o"],
    answer: "pharyng/o",
    explanation: "`pharyng/o` points to the pharynx, which is the throat area behind the mouth and nose.",
    linkedTermIds: ["term-pharyngitis"],
    linkedPartIds: ["part-pharyng-combining"],
  },
  {
    id: "exercise-unit2-upper-airway-2",
    type: "infer_meaning",
    prompt: "If `rhin/o` means nose and `-itis` means inflammation, what does `rhinitis` suggest?",
    choices: [
      "inflammation of the nose",
      "inflammation of the throat",
      "nasal discharge",
      "difficulty breathing"
    ],
    answer: "inflammation of the nose",
    explanation: "`rhinitis` follows the familiar organ-plus-inflammation pattern.",
    linkedTermIds: ["term-rhinitis"],
    linkedPartIds: ["part-rhin-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-upper-airway-3",
    type: "infer_meaning",
    prompt: "If `-rrhea` means discharge or flow, what does `rhinorrhea` suggest?",
    choices: [
      "nasal discharge or a runny nose",
      "inflammation of the sinuses",
      "voice-box inflammation",
      "a lung infection"
    ],
    answer: "nasal discharge or a runny nose",
    explanation: "`rhin/o` points to the nose and `-rrhea` points to discharge or flow.",
    linkedTermIds: ["term-rhinorrhea"],
    linkedPartIds: ["part-rhin-combining", "part-rrhea-suffix"],
  },
  {
    id: "exercise-unit2-upper-airway-4",
    type: "split_term",
    prompt: "Split `sinusitis` into the organ word part and the inflammation suffix.",
    choices: [
      "sinus/o + -itis",
      "rhin/o + -rrhea",
      "pharyng/o + -itis",
      "laryng/o + -itis"
    ],
    answer: "sinus/o + -itis",
    explanation: "`sinusitis` combines the sinus word part with the inflammation suffix.",
    linkedTermIds: ["term-sinusitis"],
    linkedPartIds: ["part-sinus-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-upper-airway-5",
    type: "cloze",
    prompt: "`laryngitis` means inflammation of the ___.",
    choices: ["voice box", "nose", "sinus cavity", "bronchial tube"],
    answer: "voice box",
    explanation: "`laryng/o` points to the larynx, also called the voice box.",
    linkedTermIds: ["term-laryngitis"],
    linkedPartIds: ["part-laryng-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit6-upper-airway-1",
    type: "infer_meaning",
    prompt: "Urgent care note: `Patient c/o rhinorrhea and sore throat for 3 days. HR 88, RR 18, no acute SOB. Assessment: rhinitis with probable pharyngitis. PRN treatment and f/u with PCP if symptoms worsen.` Which paraphrase best matches?",
    choices: [
      "The patient has nasal discharge and likely nose and throat inflammation, with as-needed treatment and follow-up if things get worse",
      "The patient has a lung infection and needs emergency surgery now",
      "The note is mainly about records release and insurance billing",
      "The patient has kidney stones and should remain NPO"
    ],
    answer: "The patient has nasal discharge and likely nose and throat inflammation, with as-needed treatment and follow-up if things get worse",
    explanation: "This passage mixes upper-airway terms with complaint, vital-sign, treatment, and follow-up shorthand.",
    linkedTermIds: ["term-rhinorrhea", "term-rhinitis", "term-pharyngitis", "term-acute", "term-assessment", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co", "abbr-hr", "abbr-rr", "abbr-sob", "abbr-prn", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-upper-airway-2",
    type: "infer_meaning",
    prompt: "Portal message: `Sinusitis suspected. Continue PRN medication, hydrate, and f/u with PCP if facial pressure or fever persists.` What is the main message?",
    choices: [
      "A sinus problem is suspected, supportive treatment should continue as needed, and follow-up is needed if symptoms keep going",
      "A blood clot was confirmed and hospital transfer is required",
      "The patient must complete a release-of-information form before treatment",
      "A urine test came back normal and no further care is needed"
    ],
    answer: "A sinus problem is suspected, supportive treatment should continue as needed, and follow-up is needed if symptoms keep going",
    explanation: "The message centers on sinus inflammation and routine follow-up rather than a more serious lower-airway emergency.",
    linkedTermIds: ["term-sinusitis", "term-follow-up", "term-patient-portal"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-prn", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-upper-airway-3",
    type: "infer_meaning",
    prompt: "Return-call note: `Hoarseness continues, but no SOB. Assessment now favors laryngitis rather than pneumonia.` Which contrast is the note making?",
    choices: [
      "Voice-box inflammation is more likely than a lung infection",
      "Low oxygen is more likely than sinus inflammation",
      "Kidney stones are more likely than throat inflammation",
      "The patient needs records transfer instead of treatment"
    ],
    answer: "Voice-box inflammation is more likely than a lung infection",
    explanation: "`laryngitis` points to the voice box, while `pneumonia` points to a lung infection.",
    linkedTermIds: ["term-laryngitis", "term-pneumonia", "term-assessment"],
    linkedPartIds: ["part-laryng-combining", "part-itis-suffix", "part-pneum-combining"],
    linkedAbbreviationIds: ["abbr-sob"],
  },
  {
    id: "exercise-unit6-respiratory-recheck-1",
    type: "infer_meaning",
    prompt: "Recheck note: `Rhinitis improving, but patient now c/o dyspnea with HR 108 and RR 24. PCP requested same-day evaluation.` Which change matters most?",
    choices: [
      "The problem has shifted from simple nasal irritation to a breathing concern",
      "The patient no longer needs any follow-up",
      "The note is mainly about portal paperwork",
      "The patient has developed a urinary infection"
    ],
    answer: "The problem has shifted from simple nasal irritation to a breathing concern",
    explanation: "`rhinitis` is upper-airway inflammation, while `dyspnea` signals harder breathing and a more urgent respiratory concern.",
    linkedTermIds: ["term-rhinitis", "term-dyspnea"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co", "abbr-hr", "abbr-rr", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-respiratory-recheck-2",
    type: "infer_meaning",
    prompt: "After reassessment: `No hypoxia, lungs WNL, likely bronchitis rather than pneumonia. Continue PRN care and f/u if SOB worsens.` Which paraphrase best matches?",
    choices: [
      "Low oxygen was not found, the lungs look okay overall, and bronchitis is more likely than pneumonia for now",
      "The patient has severe low oxygen and needs emergency surgery",
      "The message is about prior authorization for imaging",
      "The patient should stop all treatment because the diagnosis is final"
    ],
    answer: "Low oxygen was not found, the lungs look okay overall, and bronchitis is more likely than pneumonia for now",
    explanation: "This line contrasts oxygen status, normal-range shorthand, and two common respiratory diagnoses while giving follow-up guidance.",
    linkedTermIds: ["term-reassessment", "term-hypoxia", "term-bronchitis", "term-pneumonia", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-wnl", "abbr-prn", "abbr-fu", "abbr-sob"],
  },
  {
    id: "exercise-unit6-respiratory-recheck-3",
    type: "infer_meaning",
    prompt: "Message: `Sinusitis and rhinorrhea continue, but return sooner if acute SOB develops.` What is the warning?",
    choices: [
      "Come back sooner if sudden breathing trouble appears",
      "Expect normal blood-count results without recheck",
      "Send a records-release form before symptoms improve",
      "Stop eating and drinking until the next appointment"
    ],
    answer: "Come back sooner if sudden breathing trouble appears",
    explanation: "The message contrasts ongoing upper-airway symptoms with the more urgent warning sign of acute shortness of breath.",
    linkedTermIds: ["term-sinusitis", "term-rhinorrhea", "term-acute"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-sob"],
  },
  {
    id: "exercise-unit2-pleural-1",
    type: "root_match",
    prompt: "Which combining form points to the chest?",
    choices: ["thorac/o", "pleur/o", "laryng/o", "rhin/o"],
    answer: "thorac/o",
    explanation: "`thorac/o` points to the chest area.",
    linkedTermIds: ["term-thoracic", "term-thoracotomy"],
    linkedPartIds: ["part-thorac-combining"],
  },
  {
    id: "exercise-unit2-pleural-2",
    type: "infer_meaning",
    prompt: "If `pleur/o` points to the lining around the lungs and `-itis` means inflammation, what does `pleuritis` suggest?",
    choices: [
      "inflammation of the lining around the lungs",
      "a puncture into the chest",
      "related to the throat",
      "an infection limited to the nose"
    ],
    answer: "inflammation of the lining around the lungs",
    explanation: "`pleuritis` follows the same structure as many other inflammation terms in the course.",
    linkedTermIds: ["term-pleuritis"],
    linkedPartIds: ["part-pleur-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-pleural-3",
    type: "infer_meaning",
    prompt: "What does `thoracic` suggest?",
    choices: [
      "related to the chest",
      "related to the nose",
      "inflammation of the throat",
      "related to the gallbladder"
    ],
    answer: "related to the chest",
    explanation: "`thorac/o` points to the chest, so `thoracic` describes that area.",
    linkedTermIds: ["term-thoracic"],
    linkedPartIds: ["part-thorac-combining"],
  },
  {
    id: "exercise-unit2-pleural-4",
    type: "infer_meaning",
    prompt: "If `thorac/o` means chest and `-otomy` means incision into, what does `thoracotomy` suggest?",
    choices: [
      "an incision into the chest",
      "a chest scan",
      "a puncture into the nose",
      "inflammation of the pleura"
    ],
    answer: "an incision into the chest",
    explanation: "`thoracotomy` follows the taught procedure pattern of organ plus `-otomy`.",
    linkedTermIds: ["term-thoracotomy"],
    linkedPartIds: ["part-thorac-combining", "part-otomy-suffix"],
  },
  {
    id: "exercise-unit2-pleural-5",
    type: "infer_meaning",
    prompt: "Which phrase best matches `thoracentesis`?",
    choices: [
      "a puncture into the chest to remove fluid or air",
      "inflammation of the chest lining",
      "a surgical removal of the chest wall",
      "difficulty breathing with low oxygen"
    ],
    answer: "a puncture into the chest to remove fluid or air",
    explanation: "`-centesis` points to a surgical puncture, often to remove fluid or air.",
    linkedTermIds: ["term-thoracentesis"],
    linkedPartIds: ["part-thorac-combining", "part-centesis-suffix"],
  },
  {
    id: "exercise-unit6-pleural-synth-1",
    type: "infer_meaning",
    prompt: "ED note: `Patient c/o thoracic pain and dyspnea. CT suggests pleural fluid. Thoracentesis planned; f/u with PCP after discharge.` Which paraphrase best matches?",
    choices: [
      "The patient has chest pain and breathing difficulty, fluid around the lungs is suspected, and a chest-drainage procedure is planned with later follow-up",
      "The patient has only nasal congestion and can ignore the symptoms",
      "The note is mainly about insurance denial and records transfer",
      "The patient has kidney stones and needs a urine test"
    ],
    answer: "The patient has chest pain and breathing difficulty, fluid around the lungs is suspected, and a chest-drainage procedure is planned with later follow-up",
    explanation: "This passage mixes chest-language terms, imaging shorthand, a respiratory symptom term, and discharge follow-up.",
    linkedTermIds: ["term-thoracic", "term-dyspnea", "term-pleural", "term-thoracentesis", "term-follow-up", "term-discharge"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-co", "abbr-ct", "abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-pleural-synth-2",
    type: "infer_meaning",
    prompt: "Reassessment: `No hypoxia, lungs WNL, likely pleuritis rather than pneumonia. Continue PRN care and return if SOB worsens.` Which paraphrase best matches?",
    choices: [
      "Low oxygen was not found, the lungs look stable overall, and inflammation of the chest lining is more likely than a lung infection",
      "The patient has severe pneumonia and should skip all follow-up",
      "The message is about a portal password reset",
      "A gallbladder procedure is now planned"
    ],
    answer: "Low oxygen was not found, the lungs look stable overall, and inflammation of the chest lining is more likely than a lung infection",
    explanation: "This line contrasts oxygen status, normal-range shorthand, pleural inflammation, and pneumonia.",
    linkedTermIds: ["term-reassessment", "term-hypoxia", "term-pleuritis", "term-pneumonia"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-wnl", "abbr-prn", "abbr-sob"],
  },
  {
    id: "exercise-unit6-pleural-synth-3",
    type: "infer_meaning",
    prompt: "Procedure update: `Thoracentesis completed, dyspnea improved, and repeat assessment remains thoracic but stable.` What does `thoracentesis` most likely mean here?",
    choices: [
      "a puncture into the chest to remove fluid or air",
      "a lung infection that spreads quickly",
      "nasal discharge from the upper airway",
      "a routine blood-count test"
    ],
    answer: "a puncture into the chest to remove fluid or air",
    explanation: "The procedure name combines the chest root with the puncture suffix and fits the chest-fluid context.",
    linkedTermIds: ["term-thoracentesis", "term-dyspnea", "term-assessment", "term-thoracic", "term-stable"],
    linkedPartIds: ["part-thorac-combining", "part-centesis-suffix"],
  },
  {
    id: "exercise-unit2-pathology-1",
    type: "root_match",
    prompt: "Which suffix points to growth, formation, or development?",
    choices: ["-plasia", "-malacia", "-ectomy", "-algia"],
    answer: "-plasia",
    explanation: "`-plasia` points to the pattern or amount of growth or development.",
    linkedTermIds: ["term-dysplasia", "term-hyperplasia", "term-hypoplasia"],
    linkedPartIds: ["part-plasia-suffix"],
  },
  {
    id: "exercise-unit2-pathology-2",
    type: "infer_meaning",
    prompt: "If `dys-` means abnormal and `-plasia` means growth or development, what does `dysplasia` suggest?",
    choices: [
      "abnormal growth or development",
      "softening of bone",
      "spread of cancer to another site",
      "surgical removal of a growth"
    ],
    answer: "abnormal growth or development",
    explanation: "`dysplasia` follows a direct abnormal-plus-growth pattern.",
    linkedTermIds: ["term-dysplasia"],
    linkedPartIds: ["part-dys-prefix", "part-plasia-suffix"],
  },
  {
    id: "exercise-unit2-pathology-3",
    type: "infer_meaning",
    prompt: "What contrast do `hyperplasia` and `hypoplasia` show?",
    choices: [
      "too much growth versus too little growth",
      "infection versus inflammation",
      "chest procedure versus abdominal procedure",
      "benign versus malignant spread"
    ],
    answer: "too much growth versus too little growth",
    explanation: "`hyper-` signals excess and `hypo-` signals too little.",
    linkedTermIds: ["term-hyperplasia", "term-hypoplasia"],
    linkedPartIds: ["part-hyper-prefix", "part-hypo-prefix", "part-plasia-suffix"],
  },
  {
    id: "exercise-unit2-pathology-4",
    type: "infer_meaning",
    prompt: "If `oste/o` means bone and `-malacia` means softening, what does `osteomalacia` suggest?",
    choices: [
      "softening of bone",
      "bone inflammation",
      "abnormal bone growth",
      "a scoped look at the bone"
    ],
    answer: "softening of bone",
    explanation: "`osteomalacia` uses the bone word part plus the softening suffix.",
    linkedTermIds: ["term-osteomalacia"],
    linkedPartIds: ["part-osteo-combining", "part-malacia-suffix"],
  },
  {
    id: "exercise-unit2-pathology-5",
    type: "infer_meaning",
    prompt: "Which plain-English meaning best matches `metastasis`?",
    choices: [
      "spread of disease to another body site",
      "normal tissue development",
      "needle removal of chest fluid",
      "irritation of the nasal passages"
    ],
    answer: "spread of disease to another body site",
    explanation: "`metastasis` is taught as a recognition-first pathology term rather than a forced decomposition.",
    linkedTermIds: ["term-metastasis"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit6-pathology-synth-1",
    type: "infer_meaning",
    prompt: "Pathology update: `Biopsy specimen shows dysplasia but no metastatic disease. f/u imaging with PCP recommended.` Which paraphrase best matches?",
    choices: [
      "The sample shows abnormal tissue development, but no spread to another site was found, and more follow-up imaging is advised",
      "The sample shows normal tissue and no follow-up is needed",
      "The note is mainly about chest drainage after pleural fluid",
      "The patient has a urinary infection and needs urinalysis"
    ],
    answer: "The sample shows abnormal tissue development, but no spread to another site was found, and more follow-up imaging is advised",
    explanation: "This note mixes pathology-result terms with follow-up and imaging workflow language.",
    linkedTermIds: ["term-biopsy", "term-specimen", "term-dysplasia", "term-metastasis", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-pcp"],
  },
  {
    id: "exercise-unit6-pathology-synth-2",
    type: "infer_meaning",
    prompt: "Impression: `Benign-appearing lesion with hyperplasia. Continue monitoring; no malignant features on current MRI.` What is the main message?",
    choices: [
      "Extra tissue growth is present, but the current scan does not suggest a cancerous pattern",
      "A malignant cancer with spread is already confirmed",
      "The lungs show pleural inflammation and chest fluid",
      "The patient should remain NPO for urgent surgery"
    ],
    answer: "Extra tissue growth is present, but the current scan does not suggest a cancerous pattern",
    explanation: "This passage contrasts benign versus malignant language and uses `hyperplasia` as a growth-pattern term.",
    linkedTermIds: ["term-impression", "term-benign", "term-hyperplasia", "term-malignant", "term-monitoring"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-mri"],
  },
  {
    id: "exercise-unit6-pathology-synth-3",
    type: "infer_meaning",
    prompt: "Consult note: `Dx remains uncertain. Hypoplasia is favored over malignancy, and repeat CT will guide next steps.` Which contrast is the note making?",
    choices: [
      "Underdevelopment is being considered instead of a cancer diagnosis",
      "A chest procedure is being chosen instead of a urine test",
      "The patient has moved from sinus trouble to breathing failure",
      "The office needs a release form before sending records"
    ],
    answer: "Underdevelopment is being considered instead of a cancer diagnosis",
    explanation: "`hypoplasia` points to too little development, while malignancy points to a cancer concern.",
    linkedTermIds: ["term-hypoplasia", "term-malignant", "term-consult"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-dx", "abbr-ct"],
  },
  {
    id: "exercise-unit2-immune-node-1",
    type: "root_match",
    prompt: "Which combining form points to a gland or node?",
    choices: ["aden/o", "splen/o", "lymph/o", "immun/o"],
    answer: "aden/o",
    explanation: "`aden/o` points to a gland or node and helps decode several lymph-node terms.",
    linkedTermIds: ["term-adenopathy", "term-lymphadenopathy"],
    linkedPartIds: ["part-aden-combining"],
  },
  {
    id: "exercise-unit2-immune-node-2",
    type: "infer_meaning",
    prompt: "If `lymph/o` points to lymphatic tissue, `aden/o` points to a node, and `-itis` means inflammation, what does `lymphadenitis` suggest?",
    choices: [
      "inflammation of a lymph node",
      "abnormal bone softening",
      "a cancer that has spread",
      "surgical removal of the spleen"
    ],
    answer: "inflammation of a lymph node",
    explanation: "`lymphadenitis` combines lymphatic tissue, node, and inflammation language.",
    linkedTermIds: ["term-lymphadenitis"],
    linkedPartIds: ["part-lymph-combining", "part-aden-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-immune-node-3",
    type: "infer_meaning",
    prompt: "Which phrase best matches `lymphadenopathy`?",
    choices: [
      "abnormal condition involving lymph nodes",
      "normal immune protection",
      "needle removal of chest fluid",
      "surgical viewing of the bladder"
    ],
    answer: "abnormal condition involving lymph nodes",
    explanation: "`-pathy` points to a disorder or abnormal condition, and the rest of the term points to lymph nodes.",
    linkedTermIds: ["term-lymphadenopathy"],
    linkedPartIds: ["part-lymph-combining", "part-aden-combining", "part-pathy-suffix"],
  },
  {
    id: "exercise-unit2-immune-node-4",
    type: "infer_meaning",
    prompt: "If `cyt/o` means cell, what does `lymphocyte` suggest?",
    choices: [
      "a lymph-related cell",
      "an inflamed lymph node",
      "an enlarged spleen",
      "a gland removal procedure"
    ],
    answer: "a lymph-related cell",
    explanation: "`lymphocyte` combines lymphatic tissue language with the cell word part.",
    linkedTermIds: ["term-lymphocyte"],
    linkedPartIds: ["part-lymph-combining", "part-cyt-combining"],
  },
  {
    id: "exercise-unit2-immune-node-5",
    type: "infer_meaning",
    prompt: "What does `immunodeficiency` suggest in plain English?",
    choices: [
      "too little immune protection",
      "a procedure to remove a lymph node",
      "abnormal bone growth",
      "inflammation of the gallbladder"
    ],
    answer: "too little immune protection",
    explanation: "This is a recognition-first immune term for reduced immune-system function.",
    linkedTermIds: ["term-immunodeficiency"],
    linkedPartIds: ["part-immun-combining"],
  },
  {
    id: "exercise-unit6-immune-synth-1",
    type: "infer_meaning",
    prompt: "Consult note: `Persistent lymphadenopathy with recurrent infection. CBC reviewed; immunology f/u recommended.` Which paraphrase best matches?",
    choices: [
      "Ongoing abnormal lymph-node findings and repeated infection led to a recommendation for immune follow-up",
      "The patient has a normal chart and needs no further care",
      "The note is mainly about chest drainage after pleural fluid",
      "The message confirms a routine urinary result"
    ],
    answer: "Ongoing abnormal lymph-node findings and repeated infection led to a recommendation for immune follow-up",
    explanation: "This note mixes lymph-node pathology, infection language, lab shorthand, and specialist follow-up.",
    linkedTermIds: ["term-lymphadenopathy", "term-infection", "term-immunology", "term-follow-up", "term-consult"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cbc", "abbr-fu"],
  },
  {
    id: "exercise-unit6-immune-synth-2",
    type: "infer_meaning",
    prompt: "Reassessment: `Lymphadenitis improving, but immunodeficiency remains on the problem list. PCP to review CBC and plan next steps.` What is the main message?",
    choices: [
      "The inflamed lymph nodes are improving, but a weakened immune issue is still being tracked",
      "The patient has worsening pleural disease and needs thoracentesis",
      "The chart now favors benign hyperplasia over malignancy",
      "The office only needs a release-of-information form"
    ],
    answer: "The inflamed lymph nodes are improving, but a weakened immune issue is still being tracked",
    explanation: "This passage contrasts improvement in one lymph-node problem with an ongoing immune-deficiency concern.",
    linkedTermIds: ["term-lymphadenitis", "term-immunodeficiency", "term-reassessment", "term-plan"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pcp", "abbr-cbc"],
  },
  {
    id: "exercise-unit6-immune-synth-3",
    type: "infer_meaning",
    prompt: "Lab follow-up: `Lymphocyte pattern is under review. WNL vitals, but recurrent infection keeps consult active.` Which contrast is the note making?",
    choices: [
      "Current vital signs look normal, but immune-related concerns still justify specialist review",
      "The patient has sudden shortness of breath and needs emergency imaging",
      "A cancer spread finding has already been ruled in",
      "The main issue is insurance authorization for MRI"
    ],
    answer: "Current vital signs look normal, but immune-related concerns still justify specialist review",
    explanation: "This line contrasts normal-range shorthand with persistent immune concerns based on lab and infection language.",
    linkedTermIds: ["term-lymphocyte", "term-infection", "term-consult"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-wnl"],
  },
  {
    id: "exercise-unit2-reproductive-followup-1",
    type: "root_match",
    prompt: "Which combining form points to menstruation or monthly flow?",
    choices: ["men/o", "mast/o", "hyster/o", "ovari/o"],
    answer: "men/o",
    explanation: "`men/o` points to menstruation and helps decode common cycle-related terms.",
    linkedTermIds: ["term-dysmenorrhea", "term-amenorrhea"],
    linkedPartIds: ["part-men-combining"],
  },
  {
    id: "exercise-unit2-reproductive-followup-2",
    type: "infer_meaning",
    prompt: "If `dys-` means difficult or painful, `men/o` points to menstruation, and `-rrhea` points to flow, what does `dysmenorrhea` suggest?",
    choices: [
      "painful or difficult menstrual flow",
      "absence of menstrual flow",
      "inflammation of the breast",
      "surgical viewing of the uterus"
    ],
    answer: "painful or difficult menstrual flow",
    explanation: "`dysmenorrhea` combines difficulty language with menstruation and flow language.",
    linkedTermIds: ["term-dysmenorrhea"],
    linkedPartIds: ["part-dys-prefix", "part-men-combining", "part-rrhea-suffix"],
  },
  {
    id: "exercise-unit2-reproductive-followup-3",
    type: "infer_meaning",
    prompt: "Which phrase best matches `amenorrhea`?",
    choices: [
      "absence of menstrual flow",
      "painful breast inflammation",
      "after childbirth",
      "surgical removal of an ovary"
    ],
    answer: "absence of menstrual flow",
    explanation: "`amenorrhea` is taught as a recognition-first term for missing or absent menstrual flow.",
    linkedTermIds: ["term-amenorrhea"],
    linkedPartIds: ["part-men-combining", "part-rrhea-suffix"],
  },
  {
    id: "exercise-unit2-reproductive-followup-4",
    type: "infer_meaning",
    prompt: "What does `mastitis` suggest?",
    choices: [
      "inflammation of the breast",
      "breast pain without inflammation",
      "after childbirth",
      "difficult menstrual flow"
    ],
    answer: "inflammation of the breast",
    explanation: "`mast/o` points to the breast and `-itis` points to inflammation.",
    linkedTermIds: ["term-mastitis"],
    linkedPartIds: ["part-mast-combining", "part-itis-suffix"],
  },
  {
    id: "exercise-unit2-reproductive-followup-5",
    type: "infer_meaning",
    prompt: "If `mast/o` means breast and `-algia` means pain, what does `mastalgia` suggest?",
    choices: [
      "breast pain",
      "breast inflammation",
      "absence of menstruation",
      "after childbirth"
    ],
    answer: "breast pain",
    explanation: "`mastalgia` follows the familiar body-part-plus-pain pattern.",
    linkedTermIds: ["term-mastalgia"],
    linkedPartIds: ["part-mast-combining", "part-algia-suffix"],
  },
  {
    id: "exercise-unit6-reproductive-synth-1",
    type: "infer_meaning",
    prompt: "Portal message: `Postpartum visit scheduled. f/u requested for persistent mastitis symptoms despite PRN pain control.` Which paraphrase best matches?",
    choices: [
      "A follow-up visit after childbirth is being arranged because breast inflammation symptoms are still continuing",
      "A chest procedure is planned because pleural fluid has returned",
      "The patient has normal menstrual flow and does not need care",
      "The main issue is records release for imaging"
    ],
    answer: "A follow-up visit after childbirth is being arranged because breast inflammation symptoms are still continuing",
    explanation: "This message mixes after-childbirth timing, breast inflammation, and follow-up workflow language.",
    linkedTermIds: ["term-postpartum", "term-mastitis", "term-follow-up", "term-patient-portal"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-fu", "abbr-prn"],
  },
  {
    id: "exercise-unit6-reproductive-synth-2",
    type: "infer_meaning",
    prompt: "Clinic note: `Other symptoms were not discussed today, but dysmenorrhea and amenorrhea remain in the assessment. PCP requested ultrasound follow-up.` Which contrast is the note making?",
    choices: [
      "Painful menstrual flow and absent menstrual flow are both still active concerns",
      "Breast inflammation is improving after delivery",
      "The chart now favors lymph-node disease over reproductive issues",
      "The patient no longer needs imaging or follow-up"
    ],
    answer: "Painful menstrual flow and absent menstrual flow are both still active concerns",
    explanation: "This note centers on two different menstrual-pattern problems and a planned imaging follow-up.",
    linkedTermIds: ["term-dysmenorrhea", "term-amenorrhea", "term-assessment", "term-ultrasound", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pcp"],
  },
  {
    id: "exercise-unit6-reproductive-synth-3",
    type: "infer_meaning",
    prompt: "Follow-up note: `Mastalgia improved, but postpartum monitoring continues and PCP review remains planned.` What is the main message?",
    choices: [
      "Breast pain is getting better, but after-childbirth follow-up is still ongoing",
      "A malignant cancer with spread is now the main concern",
      "The patient developed sudden chest pain and low oxygen",
      "A urine infection was confirmed on recent testing"
    ],
    answer: "Breast pain is getting better, but after-childbirth follow-up is still ongoing",
    explanation: "This line combines symptom improvement with ongoing postpartum follow-up language.",
    linkedTermIds: ["term-mastalgia", "term-postpartum", "term-monitoring", "term-follow-up"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pcp"],
  },
  {
    id: "exercise-unit3-severity-1",
    type: "infer_meaning",
    prompt: "What does `exacerbation` usually suggest in a note?",
    choices: [
      "a worsening episode or flare",
      "a normal result",
      "a planned discharge summary",
      "a test that found nothing"
    ],
    answer: "a worsening episode or flare",
    explanation: "`Exacerbation` is a common chart word for a period when symptoms or disease activity get worse.",
    linkedTermIds: ["term-exacerbation"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-severity-2",
    type: "infer_meaning",
    prompt: "Which phrase best matches `remission`?",
    choices: [
      "a period when disease activity is reduced",
      "a sudden worsening of pain",
      "a positive test result",
      "a transfer to another facility"
    ],
    answer: "a period when disease activity is reduced",
    explanation: "`Remission` points to a quieter period rather than a worsening flare.",
    linkedTermIds: ["term-remission"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-severity-3",
    type: "cloze",
    prompt: "Complete the sentence: if a symptom keeps coming back after improving, it is often described as ___.",
    choices: ["recurrent", "negative", "stable", "discharged"],
    answer: "recurrent",
    explanation: "`Recurrent` means returning again after it seemed to improve or stop.",
    linkedTermIds: ["term-recurrent"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-severity-4",
    type: "infer_meaning",
    prompt: "Assessment line: `Persistent cough with progressive dyspnea.` What combination is being described?",
    choices: [
      "a cough that keeps going and breathing trouble that is getting worse",
      "a cough that resolved and breathing that is normal",
      "a lab result that is lower than expected",
      "a portal request for records release"
    ],
    answer: "a cough that keeps going and breathing trouble that is getting worse",
    explanation: "`Persistent` points to something ongoing, while `progressive` points to something advancing or worsening.",
    linkedTermIds: ["term-persistent", "term-progressive", "term-dyspnea"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-results-1",
    type: "infer_meaning",
    prompt: "If a lab value is described as `elevated`, what does that suggest?",
    choices: [
      "it is higher than expected",
      "it is absent",
      "it has not been checked",
      "it is part of the discharge plan"
    ],
    answer: "it is higher than expected",
    explanation: "`Elevated` is a common results word for a value above the expected range.",
    linkedTermIds: ["term-elevated"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-results-2",
    type: "infer_meaning",
    prompt: "Which plain-English idea matches `decreased` in a result summary?",
    choices: [
      "lower than before or lower than expected",
      "worsening rapidly",
      "requiring surgery",
      "returning for follow-up"
    ],
    answer: "lower than before or lower than expected",
    explanation: "`Decreased` is used to show a drop in amount, level, or intensity.",
    linkedTermIds: ["term-decreased"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-results-3",
    type: "infer_meaning",
    prompt: "Test note: `Influenza test negative.` What is the note saying?",
    choices: [
      "the test did not show influenza",
      "the test clearly confirmed influenza",
      "the sample was not collected",
      "the patient needs emergency surgery"
    ],
    answer: "the test did not show influenza",
    explanation: "In this context, `negative` means the targeted finding was not detected.",
    linkedTermIds: ["term-negative"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit3-results-4",
    type: "infer_meaning",
    prompt: "Imaging impression: `Chest CT unremarkable.` Which paraphrase fits best?",
    choices: [
      "the scan did not show an important abnormal finding",
      "the scan found a growing mass",
      "the scan was urgently repeated because symptoms worsened",
      "the scan confirmed a positive infection test"
    ],
    answer: "the scan did not show an important abnormal finding",
    explanation: "`Unremarkable` is report language for no notable abnormal finding.",
    linkedTermIds: ["term-unremarkable", "term-impression"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ct"],
  },
  {
    id: "exercise-unit4-verification-1",
    type: "infer_meaning",
    prompt: "What does `eligibility verification` usually mean in scheduling or billing messages?",
    choices: [
      "checking whether coverage details are active and correct",
      "starting emergency treatment right away",
      "reviewing a pathology specimen",
      "measuring the patient's heart rate"
    ],
    answer: "checking whether coverage details are active and correct",
    explanation: "This phrase points to confirming that insurance or registration details are valid for the visit.",
    linkedTermIds: ["term-eligibility", "term-verification"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-verification-2",
    type: "infer_meaning",
    prompt: "Which plain-English idea matches `in-network`?",
    choices: [
      "the clinician or service is inside the plan's approved group",
      "the visit is happening inside the hospital",
      "the test result is normal",
      "the records request was denied"
    ],
    answer: "the clinician or service is inside the plan's approved group",
    explanation: "`In-network` refers to plan participation, not physical location.",
    linkedTermIds: ["term-in-network"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-verification-3",
    type: "infer_meaning",
    prompt: "Insurance note: `Service may be out-of-network.` What is the main warning?",
    choices: [
      "the service may fall outside the plan's approved provider group",
      "the service must happen after midnight",
      "the result was not yet reviewed by the PCP",
      "the patient should stop all medication"
    ],
    answer: "the service may fall outside the plan's approved provider group",
    explanation: "`Out-of-network` warns that coverage or cost may differ because the provider is outside the plan arrangement.",
    linkedTermIds: ["term-out-of-network"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-verification-4",
    type: "infer_meaning",
    prompt: "On many forms, who is the `subscriber`?",
    choices: [
      "the person who holds the insurance policy",
      "the person who reads the imaging report",
      "the clinician who ordered the CT",
      "the front-desk staff member"
    ],
    answer: "the person who holds the insurance policy",
    explanation: "The subscriber is the plan holder tied to the coverage, even if that person is not the patient.",
    linkedTermIds: ["term-subscriber"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-prep-1",
    type: "infer_meaning",
    prompt: "What does `pre-registration` usually mean?",
    choices: [
      "registration completed before the visit date",
      "registration rejected after the visit",
      "a repeat imaging study",
      "a request to transfer records"
    ],
    answer: "registration completed before the visit date",
    explanation: "The `pre-` cue helps here: it means registration happens ahead of time.",
    linkedTermIds: ["term-pre-registration"],
    linkedPartIds: ["part-pre-prefix"],
  },
  {
    id: "exercise-unit4-prep-2",
    type: "infer_meaning",
    prompt: "Portal notice: `Review preparation instructions before arrival.` What is the notice asking the patient to do?",
    choices: [
      "read the directions that must be followed before the visit",
      "appeal an insurance denial",
      "send pathology slides to another office",
      "schedule a chest CT"
    ],
    answer: "read the directions that must be followed before the visit",
    explanation: "Preparation instructions tell the patient what to do before arriving or before a procedure.",
    linkedTermIds: ["term-preparation-instructions", "term-arrival-time"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-prep-3",
    type: "infer_meaning",
    prompt: "If a message includes `fasting instructions`, what is usually being discussed?",
    choices: [
      "when to stop eating or drinking before care",
      "how to refill a medication",
      "where to send a records release form",
      "whether a service is in-network"
    ],
    answer: "when to stop eating or drinking before care",
    explanation: "Fasting instructions are a specific kind of preparation guidance before testing or procedures.",
    linkedTermIds: ["term-fasting-instructions"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit4-prep-4",
    type: "infer_meaning",
    prompt: "Message: `Callback request logged; arrival time remains 7:30 AM.` What has happened?",
    choices: [
      "the office noted a request to call back and kept the planned arrival time",
      "the office canceled the visit and denied coverage",
      "the office found a positive imaging result",
      "the office confirmed the patient is out-of-network"
    ],
    answer: "the office noted a request to call back and kept the planned arrival time",
    explanation: "This note mixes telephone workflow language with visit-arrival instructions.",
    linkedTermIds: ["term-callback-request", "term-arrival-time"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit5-schedule-1",
    type: "infer_meaning",
    prompt: "If a medication label says `qAM`, when should it usually be taken?",
    choices: [
      "every morning",
      "every night at bedtime",
      "four times daily",
      "as needed only"
    ],
    answer: "every morning",
    explanation: "`qAM` is recognition-first shorthand for every morning.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-qam"],
  },
  {
    id: "exercise-unit5-schedule-2",
    type: "infer_meaning",
    prompt: "Which abbreviation points to a nightly bedtime schedule?",
    choices: ["qHS", "qAM", "QID", "PRN"],
    answer: "qHS",
    explanation: "`qHS` is used for every night at bedtime.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-qhs"],
  },
  {
    id: "exercise-unit5-schedule-3",
    type: "infer_meaning",
    prompt: "Prescription note: `1 tab QID.` What is the main schedule meaning?",
    choices: [
      "one tablet four times daily",
      "one capsule every morning",
      "one tablet only if needed",
      "one capsule at bedtime"
    ],
    answer: "one tablet four times daily",
    explanation: "`tab` means tablet and `QID` means four times daily.",
    linkedTermIds: ["term-dosage"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-tab", "abbr-qid"],
  },
  {
    id: "exercise-unit5-schedule-4",
    type: "infer_meaning",
    prompt: "Which abbreviation line best points to a capsule rather than a tablet?",
    choices: ["cap qHS", "tab qAM", "AVS sent", "appt confirmed"],
    answer: "cap qHS",
    explanation: "`cap` points to a capsule, while `tab` points to a tablet.",
    linkedTermIds: [],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cap", "abbr-qhs"],
  },
  {
    id: "exercise-unit5-schedule-5",
    type: "infer_meaning",
    prompt: "Portal note: `AVS available in portal; appt confirmed.` What is being communicated?",
    choices: [
      "the after-visit summary is available and the appointment is confirmed",
      "the imaging result was urgently abnormal",
      "the patient must stop eating before surgery",
      "a prior authorization was denied"
    ],
    answer: "the after-visit summary is available and the appointment is confirmed",
    explanation: "`AVS` points to the after-visit summary and `appt` points to the appointment.",
    linkedTermIds: ["term-after-visit-summary", "term-patient-portal"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-avs", "abbr-appt"],
  },
  {
    id: "exercise-unit5-ambiguity-1",
    type: "infer_meaning",
    prompt: "Result note: `PA still pending before MRI scheduling.` In this sentence, what does `PA` most likely mean?",
    choices: [
      "prior authorization",
      "physician assistant",
      "physical therapy",
      "patient"
    ],
    answer: "prior authorization",
    explanation: "Scheduling context points to insurance workflow, so `PA` most likely means prior authorization here.",
    linkedTermIds: ["term-prior-authorization"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pa", "abbr-mri"],
  },
  {
    id: "exercise-unit5-ambiguity-2",
    type: "infer_meaning",
    prompt: "Referral note: `PT ordered for gait and balance training.` In this sentence, what does `PT` most likely mean?",
    choices: [
      "physical therapy",
      "patient",
      "prior authorization",
      "platelet test"
    ],
    answer: "physical therapy",
    explanation: "Referral and training context point to a therapy service, not simply the patient.",
    linkedTermIds: ["term-referral"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pt"],
  },
  {
    id: "exercise-unit5-ambiguity-3",
    type: "infer_meaning",
    prompt: "History section: `MS diagnosed several years ago; no new weakness today.` What does `MS` most likely mean here?",
    choices: [
      "multiple sclerosis",
      "morphine sulfate",
      "medical summary",
      "muscle strain"
    ],
    answer: "multiple sclerosis",
    explanation: "Diagnosis-history context points to the neurologic condition rather than the medication.",
    linkedTermIds: ["term-medical-history"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ms"],
  },
  {
    id: "exercise-unit5-ambiguity-4",
    type: "infer_meaning",
    prompt: "Assessment line: `BS elevated after meal; continue monitoring.` What does `BS` most likely mean here?",
    choices: [
      "blood sugar",
      "bowel sounds",
      "blood specimen",
      "breath sounds"
    ],
    answer: "blood sugar",
    explanation: "The food and monitoring context point to glucose status rather than an exam finding like bowel sounds.",
    linkedTermIds: ["term-monitoring"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-bs"],
  },
  {
    id: "exercise-unit5-ambiguity-5",
    type: "infer_meaning",
    prompt: "Chart note: `Hx of CP since childhood; no active pain today.` Which reading best fits `CP` here?",
    choices: [
      "cerebral palsy",
      "chest pain",
      "capillary pressure",
      "care plan"
    ],
    answer: "cerebral palsy",
    explanation: "The history wording and `since childhood` cue point to a diagnosis, not a current symptom complaint.",
    linkedTermIds: ["term-medical-history"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cp", "abbr-hx"],
  },
  {
    id: "exercise-unit6-verification-synth-1",
    type: "infer_meaning",
    prompt: "Portal message: `Eligibility verification complete. Service remains in-network and PA was approved before appt scheduling.` What is the main message?",
    choices: [
      "coverage was checked, the service is inside the plan network, and prior authorization was approved before the appointment was booked",
      "the service is outside the network and must be canceled",
      "the patient has a positive infection test and needs urgent imaging",
      "the office needs a pathology specimen before discharge"
    ],
    answer: "coverage was checked, the service is inside the plan network, and prior authorization was approved before the appointment was booked",
    explanation: "This passage mixes verification, network, authorization, and appointment shorthand in one short workflow note.",
    linkedTermIds: ["term-eligibility", "term-verification", "term-in-network"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pa", "abbr-appt"],
  },
  {
    id: "exercise-unit6-verification-synth-2",
    type: "infer_meaning",
    prompt: "Check-in note: `Subscriber information updated during pre-registration. Review fasting instructions and arrival time in AVS.` Which paraphrase fits best?",
    choices: [
      "policy-holder details were updated before the visit, and the patient should review food restrictions and when to arrive in the after-visit summary",
      "the patient already finished the procedure and is ready for discharge",
      "a chest CT was normal and no follow-up is needed",
      "the office is requesting a neurology consult"
    ],
    answer: "policy-holder details were updated before the visit, and the patient should review food restrictions and when to arrive in the after-visit summary",
    explanation: "This line combines policy-holder language, advance registration, pre-visit instructions, and summary paperwork shorthand.",
    linkedTermIds: [
      "term-subscriber",
      "term-pre-registration",
      "term-fasting-instructions",
      "term-arrival-time"
    ],
    linkedPartIds: ["part-pre-prefix"],
    linkedAbbreviationIds: ["abbr-avs"],
  },
  {
    id: "exercise-unit6-verification-synth-3",
    type: "infer_meaning",
    prompt: "Office note: `Out-of-network warning reviewed. Callback request sent so benefits can be discussed before arrival.` What is happening?",
    choices: [
      "the office warned that coverage may differ and arranged a call back before the visit",
      "the office confirmed a negative test result and closed the chart",
      "the office documented recurrent chest pain after discharge",
      "the office switched the patient from tablets to capsules"
    ],
    answer: "the office warned that coverage may differ and arranged a call back before the visit",
    explanation: "This message links network-status language to follow-up phone workflow before the patient arrives.",
    linkedTermIds: ["term-out-of-network", "term-callback-request", "term-arrival-time"],
    linkedPartIds: [],
  },
  {
    id: "exercise-unit6-ambiguity-synth-1",
    type: "infer_meaning",
    prompt: "Progress note: `PT referral placed. BS remains elevated after meals, but imaging was otherwise unremarkable.` Which reading best fits the line?",
    choices: [
      "physical therapy was ordered, blood sugar is still high, and the scan showed nothing notable otherwise",
      "the patient was discharged, bowel sounds were absent, and the scan confirmed spread of cancer",
      "prior authorization was denied, breath sounds were normal, and surgery was scheduled",
      "the patient had chest pain, blood specimen was lost, and the scan was urgently repeated"
    ],
    answer: "physical therapy was ordered, blood sugar is still high, and the scan showed nothing notable otherwise",
    explanation: "Referral context points `PT` to physical therapy, meal context points `BS` to blood sugar, and `unremarkable` means no notable abnormal finding.",
    linkedTermIds: ["term-elevated", "term-unremarkable", "term-referral"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-pt", "abbr-bs"],
  },
  {
    id: "exercise-unit6-ambiguity-synth-2",
    type: "infer_meaning",
    prompt: "History update: `Hx of MS with recurrent weakness. MRI negative for new active findings.` What is the note mainly saying?",
    choices: [
      "the patient has a history of multiple sclerosis and the MRI did not show a new active problem",
      "the patient received morphine sulfate and the MRI was urgently canceled",
      "the patient has muscle strain and the MRI confirmed a positive fracture",
      "the patient needs pre-registration before the MRI can be ordered"
    ],
    answer: "the patient has a history of multiple sclerosis and the MRI did not show a new active problem",
    explanation: "History context points `MS` to multiple sclerosis, while `negative` points to a finding that was not detected.",
    linkedTermIds: ["term-medical-history", "term-recurrent", "term-negative"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-ms", "abbr-hx", "abbr-mri"],
  },
  {
    id: "exercise-unit6-ambiguity-synth-3",
    type: "infer_meaning",
    prompt: "Urgent note: `CP more persistent today, but flu test negative and O2 stable. Reassessment planned.` Which interpretation fits best?",
    choices: [
      "chest pain is still continuing, but the flu test did not show infection and the patient will be reassessed",
      "cerebral palsy was newly diagnosed and oxygen suddenly fell",
      "the capsule dose changed because imaging was abnormal",
      "the office only needed a call back about insurance coverage"
    ],
    answer: "chest pain is still continuing, but the flu test did not show infection and the patient will be reassessed",
    explanation: "Current urgent-symptom context points `CP` to chest pain here, while `negative` and `stable` guide the rest of the note.",
    linkedTermIds: ["term-persistent", "term-negative", "term-stable", "term-reassessment"],
    linkedPartIds: [],
    linkedAbbreviationIds: ["abbr-cp"],
  }
];

export const lessons: Lesson[] = [
  {
    id: "lesson-unit0-word-parts",
    title: "Word Parts That Carry Meaning",
    unitId: "unit-0",
    objective: "Identify roots and suffixes that make common terms decodable.",
    whyItMatters: "A small set of roots and suffixes unlocks much of basic medical language.",
    prerequisiteLessonIds: [],
    introducesPartIds: ["part-cardi-root", "part-gastr-root", "part-neur-root", "part-ology-suffix"],
    introducesTermIds: ["term-cardiology", "term-neurology"],
    reinforcesTermIds: [],
    exerciseSetIds: ["exercise-word-parts-1", "exercise-word-parts-2"],
    estimatedMinutes: 6,
    status: "shipped",
  },
  {
    id: "lesson-unit0-combining-vowels",
    title: "Combining Vowels and Smooth Joins",
    unitId: "unit-0",
    objective: "Explain why many medical terms use connecting vowels.",
    whyItMatters: "Learners decode faster when they understand why forms like `oste/o` appear.",
    prerequisiteLessonIds: ["lesson-unit0-word-parts"],
    introducesPartIds: ["part-osteo-combining"],
    introducesTermIds: [],
    reinforcesTermIds: ["term-cardiology", "term-neurology"],
    exerciseSetIds: ["exercise-combining-1", "exercise-combining-2"],
    estimatedMinutes: 5,
    status: "shipped",
  },
  {
    id: "lesson-unit0-plural-patterns",
    title: "Plural Patterns You Will Keep Seeing",
    unitId: "unit-0",
    objective: "Recognize high-frequency singular and plural shifts in medical language.",
    whyItMatters: "Medical writing often keeps older plural endings that can confuse new learners.",
    prerequisiteLessonIds: ["lesson-unit0-word-parts"],
    introducesPartIds: [],
    introducesTermIds: [
      "term-diagnosis",
      "term-diagnoses",
      "term-vertebra",
      "term-vertebrae",
      "term-bacterium",
      "term-bacteria"
    ],
    reinforcesTermIds: [],
    exerciseSetIds: ["exercise-plurals-1", "exercise-plurals-2"],
    estimatedMinutes: 6,
    status: "shipped",
  },
  {
    id: "lesson-unit0-pronunciation-basics",
    title: "Pronunciation Patterns Worth Recognizing",
    unitId: "unit-0",
    objective: "Notice stress and common endings so familiar terms are easier to hear.",
    whyItMatters: "Recognition improves when learners can hear the term shape as well as read it.",
    prerequisiteLessonIds: ["lesson-unit0-combining-vowels"],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: ["term-cardiology", "term-neurology", "term-gastritis"],
    exerciseSetIds: ["exercise-pronunciation-1", "exercise-pronunciation-2"],
    estimatedMinutes: 5,
    status: "shipped",
  },
  {
    id: "lesson-unit1-common-suffixes",
    title: "High-Yield Suffixes: -itis and -logy",
    unitId: "unit-1",
    objective: "Decode common suffixes that point to inflammation and fields of study.",
    whyItMatters: "Common suffixes appear in both everyday terms and specialty names.",
    prerequisiteLessonIds: ["lesson-unit0-word-parts"],
    introducesPartIds: ["part-itis-suffix", "part-ology-suffix"],
    introducesTermIds: ["term-gastritis", "term-arthritis"],
    reinforcesTermIds: ["term-cardiology", "term-neurology"],
    exerciseSetIds: ["exercise-suffixes-1"],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit1-core-body-roots",
    title: "Core Body Roots You Will See Everywhere",
    unitId: "unit-1",
    objective: "Recognize high-yield roots for joints, skin, liver, kidneys, blood, and nerve pain.",
    whyItMatters: "A small set of organ and tissue roots unlocks many later body-system terms.",
    prerequisiteLessonIds: ["lesson-unit1-common-suffixes"],
    introducesPartIds: [
      "part-arthr-combining",
      "part-hemat-combining",
      "part-derm-combining",
      "part-hepat-combining",
      "part-nephr-combining",
      "part-algia-suffix"
    ],
    introducesTermIds: [
      "term-arthritis",
      "term-dermatitis",
      "term-hepatitis",
      "term-nephrology",
      "term-hematology",
      "term-neuralgia"
    ],
    reinforcesTermIds: ["term-gastritis", "term-cardiology", "term-neurology"],
    exerciseSetIds: ["exercise-body-roots-1", "exercise-body-roots-2"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit1-common-prefixes",
    title: "Common Prefixes: Hyper- and Hypo-",
    unitId: "unit-1",
    objective: "Recognize common intensity prefixes that change meaning quickly.",
    whyItMatters: "A single prefix often flips whether a medical state is too much or too little.",
    prerequisiteLessonIds: ["lesson-unit1-common-suffixes"],
    introducesPartIds: ["part-hyper-prefix", "part-hypo-prefix"],
    introducesTermIds: ["term-hypertension", "term-hypotension"],
    reinforcesTermIds: ["term-gastritis", "term-arthritis"],
    exerciseSetIds: ["exercise-prefixes-1"],
    estimatedMinutes: 5,
    status: "shipped",
  },
  {
    id: "lesson-unit1-rate-prefixes",
    title: "Rate Prefixes: Tachy- and Brady-",
    unitId: "unit-1",
    objective: "Decode high-yield prefixes that signal faster or slower than normal.",
    whyItMatters: "Fast-versus-slow contrasts show up constantly in cardiovascular language.",
    prerequisiteLessonIds: ["lesson-unit1-common-prefixes"],
    introducesPartIds: ["part-tachy-prefix", "part-brady-prefix"],
    introducesTermIds: ["term-tachycardia", "term-bradycardia"],
    reinforcesTermIds: ["term-hypertension", "term-hypotension"],
    exerciseSetIds: ["exercise-rate-prefixes-1", "exercise-rate-prefixes-2"],
    estimatedMinutes: 6,
    status: "shipped",
  },
  {
    id: "lesson-unit1-procedure-language",
    title: "Procedure Language: Removal, Incision, Viewing, Record",
    unitId: "unit-1",
    objective: "Recognize procedure suffixes that describe what a clinician is doing.",
    whyItMatters: "Procedure language is one of the fastest ways to decode charts, consults, and specialty names.",
    prerequisiteLessonIds: ["lesson-unit1-core-body-roots"],
    introducesPartIds: [
      "part-appendic-combining",
      "part-col-combining",
      "part-ectomy-suffix",
      "part-otomy-suffix",
      "part-scopy-suffix",
      "part-gram-suffix"
    ],
    introducesTermIds: [
      "term-appendectomy",
      "term-colonoscopy",
      "term-gastrotomy",
      "term-cardiogram"
    ],
    reinforcesTermIds: ["term-gastritis", "term-cardiology"],
    exerciseSetIds: ["exercise-procedures-1", "exercise-procedures-2"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-cardiovascular-starter",
    title: "Cardiovascular Starter Terms",
    unitId: "unit-2",
    objective: "Recognize core vessel and artery terms in the first body-system module.",
    whyItMatters: "Cardiovascular language appears often and combines many high-yield roots already learned.",
    prerequisiteLessonIds: ["lesson-unit1-rate-prefixes", "lesson-unit1-procedure-language"],
    introducesPartIds: ["part-angi-combining", "part-arteri-combining", "part-ven-combining"],
    introducesTermIds: ["term-angiogram", "term-arteritis", "term-venogram"],
    reinforcesTermIds: [
      "term-hypertension",
      "term-hypotension",
      "term-tachycardia",
      "term-bradycardia",
      "term-cardiogram"
    ],
    exerciseSetIds: ["exercise-cardio-1", "exercise-cardio-2"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-respiratory-airway-language",
    title: "Respiratory Airway Language",
    unitId: "unit-2",
    objective: "Recognize the most common roots for airways and lungs.",
    whyItMatters: "Learners hear these terms in infections, imaging, and respiratory procedure talk.",
    prerequisiteLessonIds: ["lesson-unit2-cardiovascular-starter", "lesson-unit1-procedure-language"],
    introducesPartIds: [
      "part-bronch-combining",
      "part-trache-combining",
      "part-pneum-combining",
      "part-pulmon-combining"
    ],
    introducesTermIds: [
      "term-bronchitis",
      "term-bronchoscopy",
      "term-tracheotomy",
      "term-pulmonary",
      "term-pneumonia"
    ],
    reinforcesTermIds: ["term-gastrotomy", "term-colonoscopy", "term-gastritis"],
    exerciseSetIds: [
      "exercise-respiratory-airway-1",
      "exercise-respiratory-airway-2",
      "exercise-respiratory-airway-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-respiratory-breathing-status",
    title: "Breathing Status and Oxygen Language",
    unitId: "unit-2",
    objective: "Decode common breathing-rate and oxygen-status terms.",
    whyItMatters: "These words show up in triage, charting, and common respiratory complaints.",
    prerequisiteLessonIds: [
      "lesson-unit2-respiratory-airway-language",
      "lesson-unit1-rate-prefixes",
      "lesson-unit1-common-prefixes"
    ],
    introducesPartIds: ["part-pnea-suffix", "part-dys-prefix", "part-oxia-suffix"],
    introducesTermIds: [
      "term-tachypnea",
      "term-bradypnea",
      "term-dyspnea",
      "term-hypoxia"
    ],
    reinforcesTermIds: ["term-tachycardia", "term-bradycardia", "term-hypotension"],
    exerciseSetIds: ["exercise-respiratory-status-1", "exercise-respiratory-status-2"],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit2-gastrointestinal-inflammation",
    title: "Gastrointestinal Inflammation Terms",
    unitId: "unit-2",
    objective: "Recognize inflammation terms across stomach, intestine, colon, and esophagus language.",
    whyItMatters: "Digestive complaints are common, and many GI words reuse a small set of predictable building blocks.",
    prerequisiteLessonIds: ["lesson-unit1-common-suffixes", "lesson-unit1-core-body-roots"],
    introducesPartIds: ["part-enter-combining", "part-esophag-combining"],
    introducesTermIds: [
      "term-enteritis",
      "term-gastroenteritis",
      "term-esophagitis",
      "term-colitis"
    ],
    reinforcesTermIds: ["term-gastritis", "term-hepatitis"],
    exerciseSetIds: ["exercise-gastro-inflammation-1", "exercise-gastro-inflammation-2"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-gastrointestinal-procedures",
    title: "Gastrointestinal Procedure Language",
    unitId: "unit-2",
    objective: "Extend procedure decoding into gallbladder and digestive-system terms.",
    whyItMatters: "Procedure terms often sound intimidating, but they become readable once the organ root and action suffix are separated.",
    prerequisiteLessonIds: [
      "lesson-unit2-gastrointestinal-inflammation",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: ["part-cholecyst-combining"],
    introducesTermIds: ["term-cholecystectomy"],
    reinforcesTermIds: ["term-colonoscopy", "term-appendectomy", "term-gastrotomy"],
    exerciseSetIds: ["exercise-gastro-procedures-1"],
    estimatedMinutes: 6,
    status: "shipped",
  },
  {
    id: "lesson-unit2-musculoskeletal-pain-and-repair",
    title: "Musculoskeletal Pain and Repair Language",
    unitId: "unit-2",
    objective: "Recognize common muscle and joint terms for pain, disorder, and repair.",
    whyItMatters: "Bone, joint, and muscle language shows up often in imaging, surgery, rehab, and everyday injury talk.",
    prerequisiteLessonIds: [
      "lesson-unit2-gastrointestinal-procedures",
      "lesson-unit1-core-body-roots"
    ],
    introducesPartIds: [
      "part-my-combining",
      "part-pathy-suffix",
      "part-plasty-suffix"
    ],
    introducesTermIds: [
      "term-myalgia",
      "term-myopathy",
      "term-arthropathy",
      "term-arthroplasty"
    ],
    reinforcesTermIds: ["term-arthritis", "term-neuralgia"],
    exerciseSetIds: [
      "exercise-musculoskeletal-1",
      "exercise-musculoskeletal-2",
      "exercise-musculoskeletal-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-renal-urinary-language",
    title: "Renal and Urinary Language",
    unitId: "unit-2",
    objective: "Decode common kidney, bladder, urine, and urinary-procedure terms.",
    whyItMatters: "Urinary terms appear in urgent care, lab results, imaging notes, and procedure instructions.",
    prerequisiteLessonIds: [
      "lesson-unit2-musculoskeletal-pain-and-repair",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: ["part-cyst-combining", "part-uria-suffix"],
    introducesTermIds: [
      "term-nephritis",
      "term-cystitis",
      "term-cystoscopy",
      "term-hematuria"
    ],
    reinforcesTermIds: ["term-nephrology", "term-hematology", "term-colonoscopy"],
    exerciseSetIds: ["exercise-renal-1", "exercise-renal-2", "exercise-renal-3"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-symptoms-signs-status-language",
    title: "Symptoms, Signs, and Status Language",
    unitId: "unit-3",
    objective: "Decode common clinical status words that describe complaints and observed findings.",
    whyItMatters: "These words show up in triage notes, assessment sections, and discharge instructions.",
    prerequisiteLessonIds: [
      "lesson-unit2-renal-urinary-language",
      "lesson-unit1-core-body-roots",
      "lesson-unit1-common-prefixes"
    ],
    introducesPartIds: ["part-megaly-suffix", "part-emia-suffix"],
    introducesTermIds: [
      "term-cardiomegaly",
      "term-hepatomegaly",
      "term-anemia",
      "term-edema"
    ],
    reinforcesTermIds: ["term-dyspnea", "term-hypoxia", "term-neuralgia"],
    exerciseSetIds: [
      "exercise-unit3-status-1",
      "exercise-unit3-status-2",
      "exercise-unit3-status-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-clinical-procedure-families",
    title: "Clinical Procedure Families Across Systems",
    unitId: "unit-3",
    objective: "Recognize repeating procedure and imaging patterns even when the organ root changes.",
    whyItMatters: "Charts and referral notes reuse the same action suffixes across specialties.",
    prerequisiteLessonIds: [
      "lesson-unit3-symptoms-signs-status-language",
      "lesson-unit2-musculoskeletal-pain-and-repair",
      "lesson-unit2-gastrointestinal-procedures"
    ],
    introducesPartIds: ["part-graphy-suffix"],
    introducesTermIds: [
      "term-angioplasty",
      "term-angiography",
      "term-cardiography",
      "term-arthroscopy",
      "term-osteotomy"
    ],
    reinforcesTermIds: [
      "term-bronchoscopy",
      "term-colonoscopy",
      "term-tracheotomy",
      "term-cholecystectomy",
      "term-angiogram"
    ],
    exerciseSetIds: [
      "exercise-unit3-procedures-1",
      "exercise-unit3-procedures-2",
      "exercise-unit3-procedures-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit4-scheduling-and-followup",
    title: "Scheduling and Follow-Up Language",
    unitId: "unit-4",
    objective: "Recognize the most common appointment and care-transition phrases.",
    whyItMatters: "Learners see this language in portals, paperwork, referral messages, and discharge planning.",
    prerequisiteLessonIds: ["lesson-unit3-clinical-procedure-families"],
    introducesPartIds: ["part-pre-prefix", "part-post-prefix"],
    introducesTermIds: [
      "term-follow-up",
      "term-outpatient",
      "term-inpatient",
      "term-preoperative",
      "term-postoperative"
    ],
    reinforcesTermIds: [
      "term-appendectomy",
      "term-bronchoscopy",
      "term-cholecystectomy"
    ],
    exerciseSetIds: [
      "exercise-unit4-scheduling-1",
      "exercise-unit4-scheduling-2",
      "exercise-unit4-scheduling-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit4-records-orders-and-authorization",
    title: "Records, Orders, and Authorization Language",
    unitId: "unit-4",
    objective: "Decode common record, approval, and take-home document phrases without forcing fake decomposition.",
    whyItMatters: "This language appears in portals, insurer notices, chart summaries, and office communication.",
    prerequisiteLessonIds: ["lesson-unit4-scheduling-and-followup"],
    introducesPartIds: ["part-contra-prefix"],
    introducesTermIds: [
      "term-prior-authorization",
      "term-referral",
      "term-documentation",
      "term-contraindication",
      "term-discharge-instructions"
    ],
    reinforcesTermIds: ["term-dyspnea", "term-hypoxia", "term-bronchoscopy"],
    exerciseSetIds: [
      "exercise-unit4-records-1",
      "exercise-unit4-records-2",
      "exercise-unit4-records-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-nervous-system-disorder-language",
    title: "Nervous System Disorder Language",
    unitId: "unit-2",
    objective: "Decode common nerve and brain disorder terms that recur in neurology and general clinical notes.",
    whyItMatters: "Nervous-system vocabulary often looks dense, but a few roots and suffixes make many high-yield terms readable.",
    prerequisiteLessonIds: [
      "lesson-unit2-renal-urinary-language",
      "lesson-unit2-musculoskeletal-pain-and-repair",
      "lesson-unit1-core-body-roots"
    ],
    introducesPartIds: [
      "part-encephal-combining",
      "part-hemi-prefix",
      "part-plegia-suffix"
    ],
    introducesTermIds: [
      "term-neuropathy",
      "term-encephalitis",
      "term-encephalopathy",
      "term-hemiplegia"
    ],
    reinforcesTermIds: ["term-neuralgia", "term-myopathy", "term-dyspnea"],
    exerciseSetIds: ["exercise-nervous-1", "exercise-nervous-2", "exercise-nervous-3"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-chart-style-phrasing",
    title: "Chart-Style Phrasing",
    unitId: "unit-3",
    objective: "Recognize common note-section language and status phrasing that appear across clinical documentation.",
    whyItMatters: "Learners regularly meet note labels before they understand them, and these words are essential for reading real charts.",
    prerequisiteLessonIds: [
      "lesson-unit3-clinical-procedure-families",
      "lesson-unit2-nervous-system-disorder-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-assessment",
      "term-plan",
      "term-monitoring",
      "term-stable"
    ],
    reinforcesTermIds: ["term-edema", "term-dyspnea", "term-contraindication"],
    exerciseSetIds: [
      "exercise-unit3-chart-1",
      "exercise-unit3-chart-2",
      "exercise-unit3-chart-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit3-admissions-discharge-and-workflow",
    title: "Admissions, Discharge, and Workflow Language",
    unitId: "unit-3",
    objective: "Recognize the core workflow words that describe entering, moving through, and leaving care settings.",
    whyItMatters: "These words appear constantly in handoffs, discharge summaries, admission notes, and care transitions.",
    prerequisiteLessonIds: ["lesson-unit3-chart-style-phrasing"],
    introducesPartIds: [],
    introducesTermIds: [
      "term-admission",
      "term-discharge",
      "term-transfer",
      "term-consult"
    ],
    reinforcesTermIds: [
      "term-follow-up",
      "term-discharge-instructions",
      "term-outpatient",
      "term-inpatient"
    ],
    exerciseSetIds: [
      "exercise-unit3-workflow-1",
      "exercise-unit3-workflow-2",
      "exercise-unit3-workflow-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit4-intake-form-language",
    title: "Intake Form Language",
    unitId: "unit-4",
    objective: "Read the most common intake and registration form phrases without forcing fake decomposition.",
    whyItMatters: "Patients and learners see this paperwork early and often, so direct recognition matters.",
    prerequisiteLessonIds: [
      "lesson-unit4-records-orders-and-authorization",
      "lesson-unit3-admissions-discharge-and-workflow"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-chief-complaint",
      "term-medical-history",
      "term-medication-list",
      "term-allergies",
      "term-consent-form"
    ],
    reinforcesTermIds: ["term-documentation", "term-contraindication", "term-follow-up"],
    exerciseSetIds: [
      "exercise-unit4-intake-1",
      "exercise-unit4-intake-2",
      "exercise-unit4-intake-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit4-coverage-and-billing-language",
    title: "Coverage and Billing Language",
    unitId: "unit-4",
    objective: "Recognize the most common insurance and payment words that appear in portals, offices, and billing notices.",
    whyItMatters: "This language creates real friction for learners and patients, so the app should make it readable early.",
    prerequisiteLessonIds: ["lesson-unit4-intake-form-language"],
    introducesPartIds: [],
    introducesTermIds: [
      "term-coverage",
      "term-claim",
      "term-copay",
      "term-deductible",
      "term-denial"
    ],
    reinforcesTermIds: [
      "term-prior-authorization",
      "term-referral",
      "term-documentation"
    ],
    exerciseSetIds: [
      "exercise-unit4-billing-1",
      "exercise-unit4-billing-2",
      "exercise-unit4-billing-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-endocrine-and-glycemic-language",
    title: "Endocrine and Glycemic Language",
    unitId: "unit-2",
    objective: "Decode common thyroid and blood-sugar terms that show up in primary care, urgent care, and routine lab discussions.",
    whyItMatters: "Endocrine vocabulary becomes much easier once learners can separate sugar, thyroid, inflammation, and procedure patterns.",
    prerequisiteLessonIds: [
      "lesson-unit2-nervous-system-disorder-language",
      "lesson-unit1-common-prefixes",
      "lesson-unit1-common-suffixes",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: ["part-glyc-combining", "part-thyroid-combining"],
    introducesTermIds: [
      "term-hyperglycemia",
      "term-hypoglycemia",
      "term-thyroiditis",
      "term-thyroidectomy",
      "term-insulin"
    ],
    reinforcesTermIds: ["term-hypertension", "term-hypotension"],
    exerciseSetIds: ["exercise-endocrine-1", "exercise-endocrine-2", "exercise-endocrine-3"],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-diagnostic-and-imaging-language",
    title: "Diagnostic and Imaging Language",
    unitId: "unit-3",
    objective: "Recognize high-frequency report and testing language without requiring specialist knowledge.",
    whyItMatters: "Learners often read report summaries and test labels before they know what the report is actually saying.",
    prerequisiteLessonIds: [
      "lesson-unit3-chart-style-phrasing",
      "lesson-unit3-clinical-procedure-families"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-biopsy",
      "term-specimen",
      "term-ultrasound",
      "term-findings",
      "term-impression"
    ],
    reinforcesTermIds: ["term-angiography", "term-cardiography", "term-assessment"],
    exerciseSetIds: [
      "exercise-unit3-diagnostics-1",
      "exercise-unit3-diagnostics-2",
      "exercise-unit3-diagnostics-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit3-medication-and-administration-basics",
    title: "Medication and Administration Basics",
    unitId: "unit-3",
    objective: "Recognize the most common route and medication-use words that appear in instructions and charts.",
    whyItMatters: "Medication language is constant in healthcare text, and a small core set removes a lot of confusion fast.",
    prerequisiteLessonIds: [
      "lesson-unit3-diagnostic-and-imaging-language",
      "lesson-unit2-cardiovascular-starter"
    ],
    introducesPartIds: ["part-intra-prefix"],
    introducesTermIds: [
      "term-oral",
      "term-topical",
      "term-intravenous",
      "term-injection",
      "term-dosage"
    ],
    reinforcesTermIds: ["term-plan", "term-monitoring"],
    exerciseSetIds: [
      "exercise-unit3-medications-1",
      "exercise-unit3-medications-2",
      "exercise-unit3-medications-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit4-portal-results-and-reminders",
    title: "Portal, Results, and Reminder Language",
    unitId: "unit-4",
    objective: "Read common portal messages, result notices, and reminder language with minimal friction.",
    whyItMatters: "This is where patients and learners encounter administrative wording in the wild, often as short portal notifications or message headers.",
    prerequisiteLessonIds: [
      "lesson-unit4-coverage-and-billing-language",
      "lesson-unit3-diagnostic-and-imaging-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-patient-portal",
      "term-test-results",
      "term-after-visit-summary",
      "term-refill-request",
      "term-appointment-reminder"
    ],
    reinforcesTermIds: [
      "term-follow-up",
      "term-documentation",
      "term-discharge-instructions"
    ],
    exerciseSetIds: [
      "exercise-unit4-portal-1",
      "exercise-unit4-portal-2",
      "exercise-unit4-portal-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit1-condition-suffixes",
    title: "Condition Suffixes",
    unitId: "unit-1",
    objective: "Recognize high-yield suffixes that signal an abnormal condition, swelling, or tumor pattern.",
    whyItMatters: "A small set of condition suffixes makes many unfamiliar diagnosis-style words easier to decode safely.",
    prerequisiteLessonIds: [
      "lesson-unit1-common-suffixes",
      "lesson-unit1-core-body-roots"
    ],
    introducesPartIds: ["part-osis-suffix", "part-oma-suffix"],
    introducesTermIds: [
      "term-hematoma",
      "term-nephrosis",
      "term-neuroma",
      "term-osteosis"
    ],
    reinforcesTermIds: ["term-gastritis", "term-nephritis", "term-neuralgia"],
    exerciseSetIds: [
      "exercise-unit1-condition-1",
      "exercise-unit1-condition-2",
      "exercise-unit1-condition-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit2-reproductive-language-starter",
    title: "Reproductive System Starter",
    unitId: "unit-2",
    objective: "Decode a first set of common reproductive-system procedure and inflammation terms.",
    whyItMatters: "These terms appear in gynecology, surgery, fertility discussions, and hospital records.",
    prerequisiteLessonIds: [
      "lesson-unit2-endocrine-and-glycemic-language",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: [
      "part-hyster-combining",
      "part-ovari-combining",
      "part-salping-combining"
    ],
    introducesTermIds: [
      "term-hysterectomy",
      "term-ovariectomy",
      "term-salpingitis",
      "term-salpingectomy",
      "term-hysteroscopy"
    ],
    reinforcesTermIds: ["term-thyroidectomy", "term-colonoscopy", "term-appendectomy"],
    exerciseSetIds: [
      "exercise-unit2-reproductive-1",
      "exercise-unit2-reproductive-2",
      "exercise-unit2-reproductive-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-immune-and-lymphatic-language",
    title: "Immune and Lymphatic Language",
    unitId: "unit-2",
    objective: "Recognize core immune, lymphatic, and spleen terminology using familiar decoding patterns.",
    whyItMatters: "Immune and lymphatic language appears in oncology, infections, surgery, and general medical records.",
    prerequisiteLessonIds: [
      "lesson-unit2-reproductive-language-starter",
      "lesson-unit1-condition-suffixes",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: [
      "part-immun-combining",
      "part-lymph-combining",
      "part-splen-combining"
    ],
    introducesTermIds: [
      "term-immunology",
      "term-lymphoma",
      "term-splenectomy",
      "term-splenomegaly"
    ],
    reinforcesTermIds: ["term-hematology", "term-hematoma", "term-cardiomegaly"],
    exerciseSetIds: [
      "exercise-unit2-immune-1",
      "exercise-unit2-immune-2",
      "exercise-unit2-immune-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-condition-and-disease-state-language",
    title: "Condition and Disease-State Language",
    unitId: "unit-3",
    objective: "Recognize the highest-yield words used to describe how a condition behaves over time or presents as a named pattern.",
    whyItMatters: "These words appear constantly in assessments, diagnoses, problem lists, and result summaries.",
    prerequisiteLessonIds: [
      "lesson-unit3-symptoms-signs-status-language",
      "lesson-unit3-diagnostic-and-imaging-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-acute",
      "term-chronic",
      "term-syndrome",
      "term-deficiency",
      "term-infection"
    ],
    reinforcesTermIds: ["term-anemia", "term-edema", "term-assessment"],
    exerciseSetIds: [
      "exercise-unit3-condition-1",
      "exercise-unit3-condition-2",
      "exercise-unit3-condition-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit3-chart-passage-decoding",
    title: "Chart Passage Decoding",
    unitId: "unit-3",
    objective: "Read short chart-style passages without getting lost in section labels or workflow phrasing.",
    whyItMatters: "Real chart text mixes familiar words, section headings, and updates in a compact format that learners need practice reading.",
    prerequisiteLessonIds: [
      "lesson-unit3-chart-style-phrasing",
      "lesson-unit3-admissions-discharge-and-workflow",
      "lesson-unit3-diagnostic-and-imaging-language",
      "lesson-unit3-medication-and-administration-basics"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-history-of-present-illness",
      "term-physical-exam",
      "term-progress-note",
      "term-reassessment"
    ],
    reinforcesTermIds: ["term-dyspnea", "term-monitoring", "term-plan", "term-impression"],
    exerciseSetIds: [
      "exercise-unit3-chart-passage-1",
      "exercise-unit3-chart-passage-2",
      "exercise-unit3-chart-passage-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-severity-and-progression-language",
    title: "Severity and Progression Language",
    unitId: "unit-3",
    objective: "Recognize common chart words that describe worsening, persistence, recurrence, and quieter periods.",
    whyItMatters: "These words are central to understanding whether a condition is improving, returning, or moving in the wrong direction.",
    prerequisiteLessonIds: [
      "lesson-unit3-condition-and-disease-state-language",
      "lesson-unit3-chart-passage-decoding"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-exacerbation",
      "term-remission",
      "term-recurrent",
      "term-persistent",
      "term-progressive"
    ],
    reinforcesTermIds: [
      "term-acute",
      "term-chronic",
      "term-dyspnea",
      "term-monitoring",
      "term-reassessment"
    ],
    exerciseSetIds: [
      "exercise-unit3-severity-1",
      "exercise-unit3-severity-2",
      "exercise-unit3-severity-3",
      "exercise-unit3-severity-4"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit3-results-and-interpretation-language",
    title: "Results and Interpretation Language",
    unitId: "unit-3",
    objective: "Read the most common result-summary words that signal above-range, below-range, present, absent, or nothing notable.",
    whyItMatters: "Learners see these words constantly in labs, imaging impressions, portal results, and visit summaries.",
    prerequisiteLessonIds: [
      "lesson-unit3-diagnostic-and-imaging-language",
      "lesson-unit3-severity-and-progression-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-elevated",
      "term-decreased",
      "term-positive",
      "term-negative",
      "term-unremarkable"
    ],
    reinforcesTermIds: [
      "term-findings",
      "term-impression",
      "term-monitoring",
      "term-ultrasound",
      "term-hematology"
    ],
    reinforcesAbbreviationIds: ["abbr-cbc", "abbr-ct"],
    exerciseSetIds: [
      "exercise-unit3-results-1",
      "exercise-unit3-results-2",
      "exercise-unit3-results-3",
      "exercise-unit3-results-4"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit4-admin-passage-decoding",
    title: "Administrative Passage Decoding",
    unitId: "unit-4",
    objective: "Read short administrative messages and notices about scheduling, insurance, and records without guessing blindly.",
    whyItMatters: "Administrative friction often comes from small notices and portal messages, not just isolated vocabulary items.",
    prerequisiteLessonIds: [
      "lesson-unit4-records-orders-and-authorization",
      "lesson-unit4-coverage-and-billing-language",
      "lesson-unit4-portal-results-and-reminders"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-check-in",
      "term-insurance-card",
      "term-records-request",
      "term-reschedule",
      "term-prior-authorization-notice"
    ],
    reinforcesTermIds: ["term-patient-portal", "term-coverage", "term-refill-request"],
    exerciseSetIds: [
      "exercise-unit4-admin-passage-1",
      "exercise-unit4-admin-passage-2",
      "exercise-unit4-admin-passage-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit4-verification-and-network-language",
    title: "Verification and Network Language",
    unitId: "unit-4",
    objective: "Recognize the most common insurance-verification and network-status terms that appear before visits and in billing notices.",
    whyItMatters: "A lot of practical confusion comes from messages about active coverage, plan participation, and who the policy belongs to.",
    prerequisiteLessonIds: [
      "lesson-unit4-coverage-and-billing-language",
      "lesson-unit4-admin-passage-decoding"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-eligibility",
      "term-verification",
      "term-in-network",
      "term-out-of-network",
      "term-subscriber"
    ],
    reinforcesTermIds: [
      "term-coverage",
      "term-claim",
      "term-copay",
      "term-deductible",
      "term-prior-authorization"
    ],
    exerciseSetIds: [
      "exercise-unit4-verification-1",
      "exercise-unit4-verification-2",
      "exercise-unit4-verification-3",
      "exercise-unit4-verification-4"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit4-preparation-and-instruction-language",
    title: "Preparation and Instruction Language",
    unitId: "unit-4",
    objective: "Read common pre-visit, pre-procedure, and callback messages without getting lost in office workflow wording.",
    whyItMatters: "Preparation messages are where admin language directly affects whether a learner understands what to do next.",
    prerequisiteLessonIds: [
      "lesson-unit4-verification-and-network-language",
      "lesson-unit4-portal-results-and-reminders"
    ],
    introducesPartIds: [],
    introducesTermIds: [
      "term-pre-registration",
      "term-preparation-instructions",
      "term-fasting-instructions",
      "term-arrival-time",
      "term-callback-request"
    ],
    reinforcesTermIds: [
      "term-check-in",
      "term-appointment-reminder",
      "term-preoperative",
      "term-patient-portal",
      "term-discharge-instructions"
    ],
    exerciseSetIds: [
      "exercise-unit4-prep-1",
      "exercise-unit4-prep-2",
      "exercise-unit4-prep-3",
      "exercise-unit4-prep-4"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit5-core-clinical-abbreviations",
    title: "Core Clinical Abbreviations",
    unitId: "unit-5",
    objective: "Recognize the most common abbreviation set used in vital signs, breathing complaints, and pre-procedure instructions.",
    whyItMatters: "These abbreviations show up constantly in charts and instructions, and learners need recognition rather than memorized production.",
    prerequisiteLessonIds: ["lesson-unit4-admin-passage-decoding"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-bp",
      "abbr-hr",
      "abbr-rr",
      "abbr-sob",
      "abbr-npo"
    ],
    reinforcesTermIds: [
      "term-hypertension",
      "term-tachycardia",
      "term-tachypnea",
      "term-dyspnea",
      "term-preoperative"
    ],
    exerciseSetIds: [
      "exercise-unit5-clinical-1",
      "exercise-unit5-clinical-2",
      "exercise-unit5-clinical-3"
    ],
    estimatedMinutes: 6,
    status: "shipped",
  },
  {
    id: "lesson-unit5-document-and-workflow-abbreviations",
    title: "Document and Workflow Abbreviations",
    unitId: "unit-5",
    objective: "Recognize common shorthand used in chart headings, instructions, identity details, and records workflows.",
    whyItMatters: "These abbreviations compress everyday paperwork and chart communication in ways that can block comprehension fast.",
    prerequisiteLessonIds: ["lesson-unit5-core-clinical-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-hx",
      "abbr-dx",
      "abbr-tx",
      "abbr-fu",
      "abbr-pcp",
      "abbr-dob",
      "abbr-roi"
    ],
    reinforcesTermIds: [
      "term-follow-up",
      "term-documentation",
      "term-referral",
      "term-patient-portal"
    ],
    exerciseSetIds: [
      "exercise-unit5-document-1",
      "exercise-unit5-document-2",
      "exercise-unit5-document-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit5-measurement-and-route-abbreviations",
    title: "Measurement and Route Abbreviations",
    unitId: "unit-5",
    objective: "Recognize the most common route and dose-unit abbreviations used in medication instructions.",
    whyItMatters: "Medication shorthand is everywhere in healthcare text, and misunderstanding route or units creates unnecessary confusion.",
    prerequisiteLessonIds: ["lesson-unit5-document-and-workflow-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-iv",
      "abbr-po",
      "abbr-im",
      "abbr-ml",
      "abbr-mg",
      "abbr-prn"
    ],
    reinforcesTermIds: ["term-intravenous", "term-oral", "term-dosage", "term-injection"],
    exerciseSetIds: [
      "exercise-unit5-route-1",
      "exercise-unit5-route-2",
      "exercise-unit5-route-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit6-mixed-review-recognition",
    title: "Mixed Review Recognition",
    unitId: "unit-6",
    objective: "Combine roots, suffixes, administrative phrases, and abbreviations in one short mixed-recognition lesson.",
    whyItMatters: "Learners need to move from isolated facts to quick recognition across different parts of the curriculum.",
    prerequisiteLessonIds: ["lesson-unit5-measurement-and-route-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-splenomegaly",
      "term-hyperglycemia",
      "term-thyroidectomy",
      "term-ultrasound",
      "term-dosage",
      "term-coverage",
      "term-after-visit-summary"
    ],
    reinforcesAbbreviationIds: [
      "abbr-bp",
      "abbr-hr",
      "abbr-sob",
      "abbr-hx",
      "abbr-fu",
      "abbr-iv",
      "abbr-po"
    ],
    exerciseSetIds: [
      "exercise-unit6-mixed-1",
      "exercise-unit6-mixed-2",
      "exercise-unit6-mixed-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit6-clinical-passage-decoding",
    title: "Clinical Passage Decoding",
    unitId: "unit-6",
    objective: "Read a compact chart-style clinical passage and extract the main meaning without overfocusing on any one jargon item.",
    whyItMatters: "This is the bridge from isolated drills to realistic reading where several learned concepts appear together.",
    prerequisiteLessonIds: ["lesson-unit6-mixed-review-recognition"],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-assessment",
      "term-plan",
      "term-monitoring",
      "term-biopsy",
      "term-findings",
      "term-impression",
      "term-intravenous"
    ],
    reinforcesAbbreviationIds: [
      "abbr-bp",
      "abbr-hr",
      "abbr-rr",
      "abbr-sob",
      "abbr-npo",
      "abbr-prn"
    ],
    exerciseSetIds: [
      "exercise-unit6-clinical-1",
      "exercise-unit6-clinical-2",
      "exercise-unit6-clinical-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit6-admin-passage-decoding",
    title: "Administrative Passage Decoding",
    unitId: "unit-6",
    objective: "Read a short administrative passage that mixes portal, records, scheduling, and coverage language.",
    whyItMatters: "Administrative comprehension is a core product promise, and learners need a realistic final pass through that language.",
    prerequisiteLessonIds: ["lesson-unit6-clinical-passage-decoding"],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-prior-authorization",
      "term-refill-request",
      "term-patient-portal",
      "term-appointment-reminder",
      "term-discharge-instructions",
      "term-claim"
    ],
    reinforcesAbbreviationIds: ["abbr-dob", "abbr-roi", "abbr-pcp", "abbr-fu"],
    exerciseSetIds: [
      "exercise-unit6-admin-1",
      "exercise-unit6-admin-2",
      "exercise-unit6-admin-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-integumentary-language",
    title: "Integumentary and Skin Language",
    unitId: "unit-2",
    objective: "Decode a first set of skin-related terms that bridge body-system vocabulary and medication route language.",
    whyItMatters: "Skin language appears in dermatology, injections, wound care, and everyday chart descriptions.",
    prerequisiteLessonIds: [
      "lesson-unit2-immune-and-lymphatic-language",
      "lesson-unit1-condition-suffixes"
    ],
    introducesPartIds: ["part-cutane-combining", "part-sub-prefix"],
    introducesTermIds: [
      "term-dermatology",
      "term-cutaneous",
      "term-subcutaneous",
      "term-dermatosis"
    ],
    reinforcesTermIds: ["term-dermatitis", "term-topical", "term-injection"],
    exerciseSetIds: [
      "exercise-unit2-integumentary-1",
      "exercise-unit2-integumentary-2",
      "exercise-unit2-integumentary-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-eye-ear-and-hearing-language",
    title: "Eye, Ear, and Hearing Language",
    unitId: "unit-2",
    objective: "Decode a compact starter set of eye, ear, and hearing terms without relying on specialty background.",
    whyItMatters: "Sensory-system terminology shows up in referrals, urgent care notes, and exam documentation.",
    prerequisiteLessonIds: [
      "lesson-unit2-integumentary-language",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: [
      "part-ophthalm-combining",
      "part-ot-combining",
      "part-audi-combining"
    ],
    introducesTermIds: [
      "term-ophthalmology",
      "term-otitis",
      "term-otoscopy",
      "term-audiology"
    ],
    reinforcesTermIds: ["term-neurology", "term-bronchoscopy", "term-colonoscopy"],
    exerciseSetIds: [
      "exercise-unit2-sensory-1",
      "exercise-unit2-sensory-2",
      "exercise-unit2-sensory-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-oncology-and-tumor-language",
    title: "Oncology and Tumor Language",
    unitId: "unit-2",
    objective: "Recognize a first pass through cancer-field vocabulary and the basic contrast between benign and malignant growths.",
    whyItMatters: "Tumor language appears in pathology, referrals, imaging follow-up, and many general clinical conversations.",
    prerequisiteLessonIds: [
      "lesson-unit2-eye-ear-and-hearing-language",
      "lesson-unit1-condition-suffixes"
    ],
    introducesPartIds: ["part-onc-combining", "part-carcin-combining"],
    introducesTermIds: [
      "term-oncology",
      "term-carcinoma",
      "term-neoplasm",
      "term-benign",
      "term-malignant"
    ],
    reinforcesTermIds: ["term-lymphoma", "term-neuroma", "term-hematoma"],
    exerciseSetIds: [
      "exercise-unit2-oncology-1",
      "exercise-unit2-oncology-2",
      "exercise-unit2-oncology-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit5-chart-and-note-abbreviations",
    title: "Chart and Note Abbreviations",
    unitId: "unit-5",
    objective: "Recognize compact shorthand used in chart lines for normal findings, under-the-skin injections, and with or without phrasing.",
    whyItMatters: "These abbreviations compress real note language, and learners need to decode them quickly when reading short passages.",
    prerequisiteLessonIds: ["lesson-unit5-measurement-and-route-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-wnl",
      "abbr-sq",
      "abbr-w-with",
      "abbr-wo"
    ],
    reinforcesTermIds: [
      "term-subcutaneous",
      "term-progress-note",
      "term-physical-exam",
      "term-reassessment"
    ],
    exerciseSetIds: [
      "exercise-unit5-chart-1",
      "exercise-unit5-chart-2",
      "exercise-unit5-chart-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit5-history-and-status-abbreviations",
    title: "History and Status Abbreviations",
    unitId: "unit-5",
    objective: "Recognize common shorthand for patient complaints, allergy status, and after-procedure charting.",
    whyItMatters: "These abbreviations appear in triage notes, allergy sections, progress notes, and surgical follow-up language.",
    prerequisiteLessonIds: ["lesson-unit5-chart-and-note-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-co",
      "abbr-sp",
      "abbr-nkda"
    ],
    reinforcesTermIds: [
      "term-chief-complaint",
      "term-allergies",
      "term-progress-note",
      "term-appendectomy"
    ],
    exerciseSetIds: [
      "exercise-unit5-history-1",
      "exercise-unit5-history-2",
      "exercise-unit5-history-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit5-frequency-and-lab-abbreviations",
    title: "Frequency and Lab Abbreviations",
    unitId: "unit-5",
    objective: "Recognize high-frequency shorthand for medication timing and one of the most common lab orders.",
    whyItMatters: "Learners regularly encounter medication frequency and basic lab shorthand in visit summaries and chart instructions.",
    prerequisiteLessonIds: ["lesson-unit5-history-and-status-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-bid",
      "abbr-tid",
      "abbr-cbc"
    ],
    reinforcesTermIds: [
      "term-dosage",
      "term-monitoring",
      "term-findings",
      "term-hematology"
    ],
    exerciseSetIds: [
      "exercise-unit5-frequency-1",
      "exercise-unit5-frequency-2",
      "exercise-unit5-frequency-3"
    ],
    estimatedMinutes: 7,
    status: "shipped",
  },
  {
    id: "lesson-unit6-rapid-parsing-drills",
    title: "Rapid Parsing Drills",
    unitId: "unit-6",
    objective: "Practice quick meaning extraction from dense short lines that mix abbreviations, body-system terms, and workflow language.",
    whyItMatters: "The final step toward real reading is fast parsing without stopping on every unfamiliar-looking token.",
    prerequisiteLessonIds: [
      "lesson-unit6-admin-passage-decoding",
      "lesson-unit5-chart-and-note-abbreviations"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-subcutaneous",
      "term-ophthalmology",
      "term-otoscopy",
      "term-carcinoma",
      "term-benign",
      "term-malignant"
    ],
    reinforcesAbbreviationIds: [
      "abbr-sq",
      "abbr-wnl",
      "abbr-w-with",
      "abbr-wo",
      "abbr-fu"
    ],
    exerciseSetIds: [
      "exercise-unit6-rapid-1",
      "exercise-unit6-rapid-2",
      "exercise-unit6-rapid-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit6-results-and-discharge-synthesis",
    title: "Results and Discharge Synthesis",
    unitId: "unit-6",
    objective: "Parse compact notes that mix complaints, allergy status, medication frequency, lab results, and discharge follow-up.",
    whyItMatters: "Learners need realistic short-note practice where several common abbreviations appear together in one clinical thread.",
    prerequisiteLessonIds: [
      "lesson-unit6-rapid-parsing-drills",
      "lesson-unit5-frequency-and-lab-abbreviations"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-chief-complaint",
      "term-allergies",
      "term-discharge-instructions",
      "term-dosage",
      "term-monitoring",
      "term-findings"
    ],
    reinforcesAbbreviationIds: [
      "abbr-co",
      "abbr-nkda",
      "abbr-bid",
      "abbr-tid",
      "abbr-cbc",
      "abbr-sp",
      "abbr-fu",
      "abbr-pcp",
      "abbr-wnl"
    ],
    exerciseSetIds: [
      "exercise-unit6-results-1",
      "exercise-unit6-results-2",
      "exercise-unit6-results-3"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit2-blood-and-clotting-language",
    title: "Blood Cells and Clotting Language",
    unitId: "unit-2",
    objective: "Decode a first set of blood-cell and clotting terms using high-yield color, cell, and condition patterns.",
    whyItMatters: "Blood-count and clotting language appears in labs, emergency notes, inpatient care, and result summaries.",
    prerequisiteLessonIds: [
      "lesson-unit2-oncology-and-tumor-language",
      "lesson-unit1-condition-suffixes"
    ],
    introducesPartIds: [
      "part-erythr-combining",
      "part-leuk-combining",
      "part-cyt-combining",
      "part-thromb-combining"
    ],
    introducesTermIds: [
      "term-erythrocyte",
      "term-leukocyte",
      "term-leukocytosis",
      "term-thrombosis"
    ],
    reinforcesTermIds: ["term-hematology", "term-anemia", "term-hematoma"],
    exerciseSetIds: [
      "exercise-unit2-blood-1",
      "exercise-unit2-blood-2",
      "exercise-unit2-blood-3",
      "exercise-unit2-blood-4"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit5-imaging-and-urgency-abbreviations",
    title: "Imaging and Urgency Abbreviations",
    unitId: "unit-5",
    objective: "Recognize common imaging-study and urgent-action shorthand used in notes, orders, and result messages.",
    whyItMatters: "Imaging and urgency abbreviations are common in real patient instructions and chart communication.",
    prerequisiteLessonIds: ["lesson-unit5-frequency-and-lab-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-stat",
      "abbr-ct",
      "abbr-mri",
      "abbr-ua"
    ],
    reinforcesTermIds: [
      "term-test-results",
      "term-impression",
      "term-reassessment",
      "term-nephrology"
    ],
    exerciseSetIds: [
      "exercise-unit5-imaging-1",
      "exercise-unit5-imaging-2",
      "exercise-unit5-imaging-3",
      "exercise-unit5-imaging-4"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit5-schedule-and-form-abbreviations",
    title: "Schedule and Form Abbreviations",
    unitId: "unit-5",
    objective: "Recognize common shorthand for daily timing, medication forms, and visit-summary paperwork.",
    whyItMatters: "These abbreviations appear in instructions, labels, and portal messages where learners need quick recognition rather than production.",
    prerequisiteLessonIds: ["lesson-unit5-imaging-and-urgency-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-qam",
      "abbr-qhs",
      "abbr-qid",
      "abbr-tab",
      "abbr-cap",
      "abbr-avs",
      "abbr-appt"
    ],
    reinforcesTermIds: [
      "term-dosage",
      "term-after-visit-summary",
      "term-appointment-reminder",
      "term-patient-portal"
    ],
    exerciseSetIds: [
      "exercise-unit5-schedule-1",
      "exercise-unit5-schedule-2",
      "exercise-unit5-schedule-3",
      "exercise-unit5-schedule-4",
      "exercise-unit5-schedule-5"
    ],
    estimatedMinutes: 8,
    status: "shipped",
  },
  {
    id: "lesson-unit5-ambiguous-abbreviations-and-safer-reading",
    title: "Ambiguous Abbreviations and Safer Reading",
    unitId: "unit-5",
    objective: "Recognize high-risk context-dependent abbreviations and practice reading them only with nearby clues.",
    whyItMatters: "A serious terminology product should teach when not to assume an expansion, especially for abbreviations that can point to very different things.",
    prerequisiteLessonIds: ["lesson-unit5-schedule-and-form-abbreviations"],
    introducesPartIds: [],
    introducesTermIds: [],
    introducesAbbreviationIds: [
      "abbr-pa",
      "abbr-pt",
      "abbr-ms",
      "abbr-bs",
      "abbr-cp"
    ],
    reinforcesTermIds: [
      "term-prior-authorization",
      "term-referral",
      "term-medical-history",
      "term-monitoring"
    ],
    exerciseSetIds: [
      "exercise-unit5-ambiguity-1",
      "exercise-unit5-ambiguity-2",
      "exercise-unit5-ambiguity-3",
      "exercise-unit5-ambiguity-4",
      "exercise-unit5-ambiguity-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-urgent-and-imaging-synthesis",
    title: "Urgent and Imaging Synthesis",
    unitId: "unit-6",
    objective: "Read short urgent-care and results passages that mix complaint, urgency, imaging, and follow-up shorthand.",
    whyItMatters: "This is close to real chart reading, where timing, imaging, and follow-up details are compressed into short notes.",
    prerequisiteLessonIds: [
      "lesson-unit6-results-and-discharge-synthesis",
      "lesson-unit5-imaging-and-urgency-abbreviations"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-acute",
      "term-reassessment",
      "term-stable",
      "term-plan",
      "term-impression",
      "term-benign",
      "term-nephrology",
      "term-follow-up"
    ],
    reinforcesAbbreviationIds: [
      "abbr-co",
      "abbr-hr",
      "abbr-rr",
      "abbr-nkda",
      "abbr-ct",
      "abbr-stat",
      "abbr-fu",
      "abbr-pcp",
      "abbr-wnl",
      "abbr-mri",
      "abbr-ua"
    ],
    exerciseSetIds: [
      "exercise-unit6-urgent-imaging-1",
      "exercise-unit6-urgent-imaging-2",
      "exercise-unit6-urgent-imaging-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-urinary-output-and-testing-language",
    title: "Urinary Output and Testing Language",
    unitId: "unit-2",
    objective: "Decode high-yield urine-output and urine-testing terms that appear in clinic notes, triage, and lab follow-up.",
    whyItMatters: "Urinary symptom and testing language shows up often in patient portals, urgent care, nephrology notes, and result messages.",
    prerequisiteLessonIds: [
      "lesson-unit2-blood-and-clotting-language",
      "lesson-unit2-renal-urinary-language"
    ],
    introducesPartIds: ["part-poly-prefix", "part-olig-prefix"],
    introducesTermIds: [
      "term-dysuria",
      "term-polyuria",
      "term-oliguria",
      "term-proteinuria",
      "term-urinalysis"
    ],
    reinforcesTermIds: ["term-hematuria", "term-cystitis", "term-nephrology"],
    exerciseSetIds: [
      "exercise-unit2-urinary-output-1",
      "exercise-unit2-urinary-output-2",
      "exercise-unit2-urinary-output-3",
      "exercise-unit2-urinary-output-4",
      "exercise-unit2-urinary-output-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-renal-and-lab-synthesis",
    title: "Renal and Lab Synthesis",
    unitId: "unit-6",
    objective: "Read urine-test and urinary-symptom passages that mix result shorthand, kidney follow-up, and output language.",
    whyItMatters: "A lot of patient-facing kidney and urine text appears as short notes that combine symptoms, tests, and follow-up instructions.",
    prerequisiteLessonIds: [
      "lesson-unit6-urgent-and-imaging-synthesis",
      "lesson-unit2-urinary-output-and-testing-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-dysuria",
      "term-polyuria",
      "term-oliguria",
      "term-proteinuria",
      "term-urinalysis",
      "term-hematuria",
      "term-nephrology",
      "term-follow-up"
    ],
    reinforcesAbbreviationIds: ["abbr-ua", "abbr-wnl", "abbr-fu", "abbr-pcp"],
    exerciseSetIds: [
      "exercise-unit6-renal-synth-1",
      "exercise-unit6-renal-synth-2",
      "exercise-unit6-renal-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-blood-and-count-synthesis",
    title: "Blood and Count Synthesis",
    unitId: "unit-6",
    objective: "Read short blood-count and clotting passages that mix CBC shorthand, cell-count terms, and monitoring language.",
    whyItMatters: "Blood-count notes are dense but common, and they are a good final synthesis target because they combine results, cell terms, and interpretation.",
    prerequisiteLessonIds: [
      "lesson-unit6-renal-and-lab-synthesis",
      "lesson-unit2-blood-and-clotting-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-erythrocyte",
      "term-leukocyte",
      "term-leukocytosis",
      "term-thrombosis",
      "term-monitoring",
      "term-reassessment",
      "term-impression",
      "term-infection"
    ],
    reinforcesAbbreviationIds: ["abbr-cbc"],
    exerciseSetIds: [
      "exercise-unit6-blood-synth-1",
      "exercise-unit6-blood-synth-2",
      "exercise-unit6-blood-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-hepatobiliary-and-stone-language",
    title: "Hepatobiliary and Stone Language",
    unitId: "unit-2",
    objective: "Decode high-yield pancreas, gallbladder, gallstone, and kidney-stone terms that recur in imaging and abdominal-pain notes.",
    whyItMatters: "These terms show up often in urgent care, emergency notes, imaging reports, and surgical follow-up.",
    prerequisiteLessonIds: [
      "lesson-unit2-urinary-output-and-testing-language",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: [
      "part-pancreat-combining",
      "part-chole-combining",
      "part-lithiasis-suffix"
    ],
    introducesTermIds: [
      "term-pancreatitis",
      "term-cholecystitis",
      "term-cholelithiasis",
      "term-nephrolithiasis"
    ],
    reinforcesTermIds: [
      "term-hepatitis",
      "term-hepatomegaly",
      "term-cholecystectomy",
      "term-hematuria"
    ],
    exerciseSetIds: [
      "exercise-unit2-hepatobiliary-1",
      "exercise-unit2-hepatobiliary-2",
      "exercise-unit2-hepatobiliary-3",
      "exercise-unit2-hepatobiliary-4",
      "exercise-unit2-hepatobiliary-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-abdominal-and-stone-synthesis",
    title: "Abdominal and Stone Synthesis",
    unitId: "unit-6",
    objective: "Read abdominal-pain and imaging passages that mix stone language, inflammation terms, shorthand orders, and follow-up instructions.",
    whyItMatters: "Abdominal and stone workups generate compact result messages that are dense but highly pattern-driven once the learner knows the parts.",
    prerequisiteLessonIds: [
      "lesson-unit6-blood-and-count-synthesis",
      "lesson-unit2-hepatobiliary-and-stone-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-pancreatitis",
      "term-cholecystitis",
      "term-cholelithiasis",
      "term-nephrolithiasis",
      "term-hepatomegaly",
      "term-ultrasound",
      "term-impression",
      "term-follow-up",
      "term-hematuria",
      "term-monitoring"
    ],
    reinforcesAbbreviationIds: ["abbr-ct", "abbr-ua", "abbr-npo", "abbr-fu", "abbr-pcp"],
    exerciseSetIds: [
      "exercise-unit6-abdominal-synth-1",
      "exercise-unit6-abdominal-synth-2",
      "exercise-unit6-abdominal-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-referral-and-consult-synthesis",
    title: "Referral and Consult Synthesis",
    unitId: "unit-6",
    objective: "Read referral and consult passages that compress history, diagnosis, treatment, and records workflow shorthand.",
    whyItMatters: "Specialist referrals and consult notes are common real-world reading targets because they mix clinical summary and paperwork language.",
    prerequisiteLessonIds: [
      "lesson-unit6-abdominal-and-stone-synthesis",
      "lesson-unit5-history-and-status-abbreviations"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-referral",
      "term-consult",
      "term-dyspnea",
      "term-chronic",
      "term-follow-up",
      "term-records-request"
    ],
    reinforcesAbbreviationIds: [
      "abbr-hx",
      "abbr-dx",
      "abbr-tx",
      "abbr-prn",
      "abbr-fu",
      "abbr-pcp",
      "abbr-roi",
      "abbr-dob"
    ],
    exerciseSetIds: [
      "exercise-unit6-referral-1",
      "exercise-unit6-referral-2",
      "exercise-unit6-referral-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-handoff-and-reassessment-synthesis",
    title: "Handoff and Reassessment Synthesis",
    unitId: "unit-6",
    objective: "Read handoff notes that mix admission status, symptoms, reassessment, and transfer language.",
    whyItMatters: "Handoff notes are short but dense, and they force learners to track what changed over time instead of just decoding isolated words.",
    prerequisiteLessonIds: [
      "lesson-unit6-referral-and-consult-synthesis",
      "lesson-unit6-blood-and-count-synthesis"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-admission",
      "term-transfer",
      "term-reassessment",
      "term-monitoring",
      "term-stable",
      "term-acute",
      "term-chronic"
    ],
    reinforcesAbbreviationIds: [
      "abbr-co",
      "abbr-sob",
      "abbr-hr",
      "abbr-rr",
      "abbr-nkda",
      "abbr-prn",
      "abbr-wnl"
    ],
    exerciseSetIds: [
      "exercise-unit6-handoff-1",
      "exercise-unit6-handoff-2",
      "exercise-unit6-handoff-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-portal-and-authorization-crossover",
    title: "Portal and Authorization Crossover",
    unitId: "unit-6",
    objective: "Read portal and authorization messages that cross over between clinical results and administrative next steps.",
    whyItMatters: "A lot of real learner friction happens in short portal messages that mix results, approvals, records, and follow-up instructions.",
    prerequisiteLessonIds: [
      "lesson-unit6-handoff-and-reassessment-synthesis",
      "lesson-unit4-admin-passage-decoding"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-patient-portal",
      "term-test-results",
      "term-prior-authorization-notice",
      "term-refill-request",
      "term-check-in",
      "term-insurance-card",
      "term-impression"
    ],
    reinforcesAbbreviationIds: [
      "abbr-mri",
      "abbr-cbc",
      "abbr-wnl",
      "abbr-roi",
      "abbr-pcp",
      "abbr-ct",
      "abbr-fu"
    ],
    exerciseSetIds: [
      "exercise-unit6-portal-1",
      "exercise-unit6-portal-2",
      "exercise-unit6-portal-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-upper-airway-and-throat-language",
    title: "Upper Airway and Throat Language",
    unitId: "unit-2",
    objective: "Decode common nose, sinus, throat, and voice-box terms using familiar inflammation and discharge patterns.",
    whyItMatters: "Upper-airway terms show up constantly in urgent care, same-day visits, portal messages, and everyday health talk.",
    prerequisiteLessonIds: [
      "lesson-unit2-respiratory-breathing-status",
      "lesson-unit1-common-suffixes"
    ],
    introducesPartIds: [
      "part-rhin-combining",
      "part-sinus-combining",
      "part-pharyng-combining",
      "part-laryng-combining",
      "part-rrhea-suffix"
    ],
    introducesTermIds: [
      "term-rhinitis",
      "term-rhinorrhea",
      "term-sinusitis",
      "term-pharyngitis",
      "term-laryngitis"
    ],
    reinforcesTermIds: [
      "term-bronchitis",
      "term-pulmonary",
      "term-pneumonia",
      "term-dyspnea",
      "term-hypoxia"
    ],
    exerciseSetIds: [
      "exercise-unit2-upper-airway-1",
      "exercise-unit2-upper-airway-2",
      "exercise-unit2-upper-airway-3",
      "exercise-unit2-upper-airway-4",
      "exercise-unit2-upper-airway-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-upper-airway-and-throat-synthesis",
    title: "Upper Airway and Throat Synthesis",
    unitId: "unit-6",
    objective: "Read upper-airway visit and portal passages that mix nasal, sinus, throat, and voice-box terms with follow-up shorthand.",
    whyItMatters: "These complaints are common real-world reading targets, and learners need practice separating nuisance upper-airway language from more serious breathing concerns.",
    prerequisiteLessonIds: [
      "lesson-unit6-portal-and-authorization-crossover",
      "lesson-unit2-upper-airway-and-throat-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-rhinitis",
      "term-rhinorrhea",
      "term-sinusitis",
      "term-pharyngitis",
      "term-laryngitis",
      "term-pneumonia",
      "term-follow-up",
      "term-assessment"
    ],
    reinforcesAbbreviationIds: ["abbr-co", "abbr-hr", "abbr-rr", "abbr-sob", "abbr-prn", "abbr-fu", "abbr-pcp"],
    exerciseSetIds: [
      "exercise-unit6-upper-airway-1",
      "exercise-unit6-upper-airway-2",
      "exercise-unit6-upper-airway-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-respiratory-recheck-and-escalation",
    title: "Respiratory Recheck and Escalation",
    unitId: "unit-6",
    objective: "Read recheck passages that distinguish persistent upper-airway symptoms from more urgent breathing and oxygen concerns.",
    whyItMatters: "A major comprehension skill is noticing when a note shifts from routine nasal or throat language into signs that need faster respiratory follow-up.",
    prerequisiteLessonIds: [
      "lesson-unit6-upper-airway-and-throat-synthesis",
      "lesson-unit6-urgent-and-imaging-synthesis"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-rhinitis",
      "term-rhinorrhea",
      "term-sinusitis",
      "term-dyspnea",
      "term-hypoxia",
      "term-bronchitis",
      "term-pneumonia",
      "term-reassessment",
      "term-follow-up"
    ],
    reinforcesAbbreviationIds: ["abbr-co", "abbr-hr", "abbr-rr", "abbr-pcp", "abbr-wnl", "abbr-prn", "abbr-fu", "abbr-sob"],
    exerciseSetIds: [
      "exercise-unit6-respiratory-recheck-1",
      "exercise-unit6-respiratory-recheck-2",
      "exercise-unit6-respiratory-recheck-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-pleural-and-chest-language",
    title: "Pleural and Chest Language",
    unitId: "unit-2",
    objective: "Decode chest, pleural, and chest-procedure terms using familiar inflammation and procedure patterns.",
    whyItMatters: "These terms appear in imaging impressions, procedure notes, and chest-pain or breathing workups.",
    prerequisiteLessonIds: [
      "lesson-unit2-upper-airway-and-throat-language",
      "lesson-unit1-procedure-language"
    ],
    introducesPartIds: [
      "part-pleur-combining",
      "part-thorac-combining",
      "part-centesis-suffix"
    ],
    introducesTermIds: [
      "term-pleuritis",
      "term-pleural",
      "term-thoracic",
      "term-thoracotomy",
      "term-thoracentesis"
    ],
    reinforcesTermIds: [
      "term-dyspnea",
      "term-hypoxia",
      "term-pneumonia",
      "term-tracheotomy",
      "term-bronchoscopy"
    ],
    exerciseSetIds: [
      "exercise-unit2-pleural-1",
      "exercise-unit2-pleural-2",
      "exercise-unit2-pleural-3",
      "exercise-unit2-pleural-4",
      "exercise-unit2-pleural-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-pleural-and-chest-synthesis",
    title: "Pleural and Chest Synthesis",
    unitId: "unit-6",
    objective: "Read chest-pain and pleural-note passages that mix respiratory terms, imaging shorthand, procedures, and follow-up language.",
    whyItMatters: "Pleural and chest notes are dense but pattern-driven, making them strong synthesis drills once the learner knows the roots and procedure suffixes.",
    prerequisiteLessonIds: [
      "lesson-unit6-respiratory-recheck-and-escalation",
      "lesson-unit2-pleural-and-chest-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-thoracic",
      "term-dyspnea",
      "term-pleural",
      "term-thoracentesis",
      "term-pleuritis",
      "term-pneumonia",
      "term-follow-up",
      "term-discharge",
      "term-reassessment",
      "term-stable"
    ],
    reinforcesAbbreviationIds: ["abbr-co", "abbr-ct", "abbr-fu", "abbr-pcp", "abbr-wnl", "abbr-prn", "abbr-sob"],
    exerciseSetIds: [
      "exercise-unit6-pleural-synth-1",
      "exercise-unit6-pleural-synth-2",
      "exercise-unit6-pleural-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-pathology-and-tissue-change-language",
    title: "Pathology and Tissue-Change Language",
    unitId: "unit-2",
    objective: "Decode high-yield growth, development, softening, and spread terms that appear in oncology and pathology reports.",
    whyItMatters: "These words appear in biopsies, imaging impressions, specialist notes, and result discussions, and they are often central to understanding what is being watched or ruled out.",
    prerequisiteLessonIds: [
      "lesson-unit2-oncology-and-tumor-language",
      "lesson-unit1-condition-suffixes"
    ],
    introducesPartIds: ["part-plasia-suffix", "part-malacia-suffix"],
    introducesTermIds: [
      "term-dysplasia",
      "term-hyperplasia",
      "term-hypoplasia",
      "term-osteomalacia",
      "term-metastasis"
    ],
    reinforcesTermIds: [
      "term-neoplasm",
      "term-benign",
      "term-malignant",
      "term-biopsy",
      "term-specimen"
    ],
    exerciseSetIds: [
      "exercise-unit2-pathology-1",
      "exercise-unit2-pathology-2",
      "exercise-unit2-pathology-3",
      "exercise-unit2-pathology-4",
      "exercise-unit2-pathology-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-oncology-and-pathology-synthesis",
    title: "Oncology and Pathology Synthesis",
    unitId: "unit-6",
    objective: "Read pathology and imaging-result passages that mix growth-pattern, spread, biopsy, and follow-up language.",
    whyItMatters: "Report-style pathology language is one of the densest real-world reading targets, and learners need safe practice separating growth-pattern terms from confirmed spread or malignancy.",
    prerequisiteLessonIds: [
      "lesson-unit6-pleural-and-chest-synthesis",
      "lesson-unit2-pathology-and-tissue-change-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-biopsy",
      "term-specimen",
      "term-dysplasia",
      "term-hyperplasia",
      "term-hypoplasia",
      "term-metastasis",
      "term-benign",
      "term-malignant",
      "term-impression",
      "term-monitoring",
      "term-follow-up",
      "term-consult"
    ],
    reinforcesAbbreviationIds: ["abbr-fu", "abbr-pcp", "abbr-mri", "abbr-dx", "abbr-ct"],
    exerciseSetIds: [
      "exercise-unit6-pathology-synth-1",
      "exercise-unit6-pathology-synth-2",
      "exercise-unit6-pathology-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-lymph-node-and-immune-condition-language",
    title: "Lymph-Node and Immune-Condition Language",
    unitId: "unit-2",
    objective: "Decode high-yield lymph-node, immune-condition, and immune-cell terms that appear in consults, labs, and infection follow-up.",
    whyItMatters: "Immune and lymph-node language shows up in CBC review, specialist consults, infection workups, and oncology-adjacent notes.",
    prerequisiteLessonIds: [
      "lesson-unit2-immune-and-lymphatic-language",
      "lesson-unit2-blood-and-clotting-language"
    ],
    introducesPartIds: ["part-aden-combining"],
    introducesTermIds: [
      "term-adenopathy",
      "term-lymphadenopathy",
      "term-lymphadenitis",
      "term-lymphocyte",
      "term-immunodeficiency"
    ],
    reinforcesTermIds: [
      "term-immunology",
      "term-lymphoma",
      "term-splenomegaly",
      "term-leukocyte",
      "term-infection"
    ],
    exerciseSetIds: [
      "exercise-unit2-immune-node-1",
      "exercise-unit2-immune-node-2",
      "exercise-unit2-immune-node-3",
      "exercise-unit2-immune-node-4",
      "exercise-unit2-immune-node-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-immune-and-node-synthesis",
    title: "Immune and Node Synthesis",
    unitId: "unit-6",
    objective: "Read immune and lymph-node passages that mix CBC, consult, infection, and follow-up language.",
    whyItMatters: "A lot of immune-language reading difficulty comes from compact consult and follow-up notes that mix labs, nodes, infection, and specialist recommendations in one short passage.",
    prerequisiteLessonIds: [
      "lesson-unit6-oncology-and-pathology-synthesis",
      "lesson-unit2-lymph-node-and-immune-condition-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-lymphadenopathy",
      "term-lymphadenitis",
      "term-lymphocyte",
      "term-immunodeficiency",
      "term-immunology",
      "term-infection",
      "term-follow-up",
      "term-consult",
      "term-reassessment",
      "term-plan"
    ],
    reinforcesAbbreviationIds: ["abbr-cbc", "abbr-fu", "abbr-pcp", "abbr-wnl"],
    exerciseSetIds: [
      "exercise-unit6-immune-synth-1",
      "exercise-unit6-immune-synth-2",
      "exercise-unit6-immune-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit2-reproductive-symptoms-and-followup-language",
    title: "Reproductive Symptoms and Follow-Up Language",
    unitId: "unit-2",
    objective: "Decode high-yield reproductive symptom, breast, and after-childbirth terms that appear in follow-up visits and portal messages.",
    whyItMatters: "These terms show up in outpatient follow-up, imaging review, postpartum care, and common symptom documentation.",
    prerequisiteLessonIds: [
      "lesson-unit2-reproductive-language-starter",
      "lesson-unit4-scheduling-and-followup"
    ],
    introducesPartIds: ["part-men-combining", "part-mast-combining"],
    introducesTermIds: [
      "term-dysmenorrhea",
      "term-amenorrhea",
      "term-mastitis",
      "term-mastalgia",
      "term-postpartum"
    ],
    reinforcesTermIds: [
      "term-hysteroscopy",
      "term-ovariectomy",
      "term-salpingitis",
      "term-follow-up",
      "term-ultrasound"
    ],
    exerciseSetIds: [
      "exercise-unit2-reproductive-followup-1",
      "exercise-unit2-reproductive-followup-2",
      "exercise-unit2-reproductive-followup-3",
      "exercise-unit2-reproductive-followup-4",
      "exercise-unit2-reproductive-followup-5"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-reproductive-followup-synthesis",
    title: "Reproductive Follow-Up Synthesis",
    unitId: "unit-6",
    objective: "Read reproductive and postpartum follow-up passages that mix symptoms, imaging, portal, and PCP workflow language.",
    whyItMatters: "These notes are practical synthesis targets because they combine symptoms, timing, follow-up, and routine imaging or office communication in short real-world passages.",
    prerequisiteLessonIds: [
      "lesson-unit6-immune-and-node-synthesis",
      "lesson-unit2-reproductive-symptoms-and-followup-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-dysmenorrhea",
      "term-amenorrhea",
      "term-mastitis",
      "term-mastalgia",
      "term-postpartum",
      "term-follow-up",
      "term-patient-portal",
      "term-ultrasound",
      "term-monitoring",
      "term-assessment"
    ],
    reinforcesAbbreviationIds: ["abbr-fu", "abbr-prn", "abbr-pcp"],
    exerciseSetIds: [
      "exercise-unit6-reproductive-synth-1",
      "exercise-unit6-reproductive-synth-2",
      "exercise-unit6-reproductive-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-verification-and-prep-crossover",
    title: "Verification and Prep Crossover",
    unitId: "unit-6",
    objective: "Read realistic administrative passages that mix network status, authorization, subscriber details, and pre-visit instructions.",
    whyItMatters: "This is the kind of practical reading people actually face in portals and front-desk communication, where insurance and arrival instructions are compressed together.",
    prerequisiteLessonIds: [
      "lesson-unit6-reproductive-followup-synthesis",
      "lesson-unit4-preparation-and-instruction-language",
      "lesson-unit5-ambiguous-abbreviations-and-safer-reading"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-eligibility",
      "term-verification",
      "term-in-network",
      "term-out-of-network",
      "term-subscriber",
      "term-pre-registration",
      "term-fasting-instructions",
      "term-arrival-time",
      "term-callback-request"
    ],
    reinforcesAbbreviationIds: ["abbr-pa", "abbr-avs", "abbr-appt"],
    exerciseSetIds: [
      "exercise-unit6-verification-synth-1",
      "exercise-unit6-verification-synth-2",
      "exercise-unit6-verification-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  },
  {
    id: "lesson-unit6-ambiguity-and-results-synthesis",
    title: "Ambiguity and Results Synthesis",
    unitId: "unit-6",
    objective: "Practice reading short clinical notes where context decides the abbreviation meaning and results language decides the clinical message.",
    whyItMatters: "This is the safest capstone behavior for a terminology learner: do not guess blindly, use the nearby sentence clues, and separate result-status words from disease labels.",
    prerequisiteLessonIds: [
      "lesson-unit6-verification-and-prep-crossover",
      "lesson-unit3-results-and-interpretation-language"
    ],
    introducesPartIds: [],
    introducesTermIds: [],
    reinforcesTermIds: [
      "term-elevated",
      "term-negative",
      "term-unremarkable",
      "term-recurrent",
      "term-persistent",
      "term-stable",
      "term-reassessment",
      "term-referral"
    ],
    reinforcesAbbreviationIds: ["abbr-pt", "abbr-ms", "abbr-bs", "abbr-cp", "abbr-hx", "abbr-mri"],
    exerciseSetIds: [
      "exercise-unit6-ambiguity-synth-1",
      "exercise-unit6-ambiguity-synth-2",
      "exercise-unit6-ambiguity-synth-3"
    ],
    estimatedMinutes: 9,
    status: "shipped",
  }
];
