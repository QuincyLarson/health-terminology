import { exercises as bloodExercises, lessons as bloodLessons } from "./lessons/rootBatchBloodCounts";
import { exercises as rootImagingExercises, lessons as rootImagingLessons } from "./lessons/rootBatchImaging";
import {
  exercises as deficiencyExercises,
  lessons as deficiencyLessons,
} from "./lessons/rootBatchDeficiencyInflammation";
import { exercises as unit6PassageExercisesA, lessons as unit6PassageLessonsA } from "./lessons/unit6PassageBatchA";
import { exercises as unit6PassageExercisesB, lessons as unit6PassageLessonsB } from "./lessons/unit6PassageBatchB";
import { parts as bloodParts } from "./parts/rootBatchBloodCounts";
import { parts as rootImagingParts } from "./parts/rootBatchImaging";
import { parts as deficiencyParts } from "./parts/rootBatchDeficiencyInflammation";
import { terms as bloodTerms } from "./terms/rootBatchBloodCounts";
import { terms as rootImagingTerms } from "./terms/rootBatchImaging";
import { terms as deficiencyTerms } from "./terms/rootBatchDeficiencyInflammation";
import type { Abbreviation, Exercise, Lesson, Part, Term, Unit } from "../types/content";

export const expansionAbbreviations: Abbreviation[] = [];
export const expansionExercises: Exercise[] = [
  ...bloodExercises,
  ...deficiencyExercises,
  ...rootImagingExercises,
  ...unit6PassageExercisesA,
  ...unit6PassageExercisesB,
];
export const expansionLessons: Lesson[] = [
  ...bloodLessons,
  ...deficiencyLessons,
  ...rootImagingLessons,
  ...unit6PassageLessonsA,
  ...unit6PassageLessonsB,
];
export const expansionParts: Part[] = [
  ...bloodParts,
  ...deficiencyParts,
  ...rootImagingParts,
];
export const expansionTerms: Term[] = [
  ...bloodTerms,
  ...deficiencyTerms,
  ...rootImagingTerms,
];
export const unitLessonExtensions: Partial<Record<Unit["id"], string[]>> = {
  "unit-1": [
    ...bloodLessons.map((lesson) => lesson.id),
    ...deficiencyLessons.map((lesson) => lesson.id),
    ...rootImagingLessons.map((lesson) => lesson.id),
  ],
  "unit-6": [
    ...unit6PassageLessonsA.map((lesson) => lesson.id),
    ...unit6PassageLessonsB.map((lesson) => lesson.id),
  ],
};
