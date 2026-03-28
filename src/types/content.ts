export type PartType = "root" | "prefix" | "suffix" | "combining_form";
export type Compositionality = "full" | "partial" | "opaque";
export type SourceType = "show_like" | "lay_exposure" | "pedagogic";
export type ContentStatus =
  | "planned"
  | "drafted"
  | "validated"
  | "lesson-linked"
  | "review-ready"
  | "shipped";
export type ExerciseType =
  | "root_match"
  | "split_term"
  | "infer_meaning"
  | "cloze"
  | "flashcard";

export interface Part {
  id: string;
  text: string;
  type: PartType;
  plainMeaning: string;
  altMeanings: string[];
  pronunciationText: string;
  examples: string[];
  prerequisiteIds: string[];
  unitId: string;
  frequencyRank: number;
}

export interface TermPartLink {
  partId: string;
  text: string;
  meaning: string;
}

export interface Term {
  id: string;
  term: string;
  normalizedTerm: string;
  pronunciationText: string;
  plainMeaning: string;
  shortDefinition: string;
  bodySystem: string;
  difficulty: 1 | 2 | 3;
  frequencyBand: "core" | "common" | "extended";
  sourceType: SourceType;
  compositionality: Compositionality;
  parts: TermPartLink[];
  prerequisiteIds: string[];
  prerequisiteLessonIds: string[];
  lessonIds: string[];
  tags: string[];
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  choices: string[];
  answer: string;
  explanation: string;
  linkedTermIds: string[];
  linkedPartIds: string[];
  linkedAbbreviationIds?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  unitId: string;
  objective: string;
  whyItMatters: string;
  prerequisiteLessonIds: string[];
  introducesPartIds: string[];
  introducesTermIds: string[];
  introducesAbbreviationIds?: string[];
  reinforcesTermIds: string[];
  reinforcesAbbreviationIds?: string[];
  exerciseSetIds: string[];
  estimatedMinutes: number;
  status: ContentStatus;
}

export interface Unit {
  id: string;
  title: string;
  summary: string;
  lessonIds: string[];
  prerequisiteUnitIds: string[];
  status: ContentStatus;
}

export interface Abbreviation {
  id: string;
  shortForm: string;
  expandedForm: string;
  category: "clinical" | "document" | "measurement" | "route";
  meaning: string;
  ambiguous: boolean;
}
