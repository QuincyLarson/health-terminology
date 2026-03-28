import { exercises as bloodExercises, lessons as bloodLessons } from "./lessons/rootBatchBloodCounts";
import { exercises as rootImagingExercises, lessons as rootImagingLessons } from "./lessons/rootBatchImaging";
import {
  exercises as deficiencyExercises,
  lessons as deficiencyLessons,
} from "./lessons/rootBatchDeficiencyInflammation";
import {
  exercises as fluidExercises,
  lessons as fluidLessons,
} from "./lessons/rootBatchFluidExcretion";
import {
  exercises as growthMassExercises,
  lessons as growthMassLessons,
} from "./lessons/rootBatchGrowthMass";
import {
  exercises as inflammationExercises,
  lessons as inflammationLessons,
} from "./lessons/rootBatchInflammationStenosis";
import { exercises as unit6PassageExercisesA, lessons as unit6PassageLessonsA } from "./lessons/unit6PassageBatchA";
import { exercises as unit6PassageExercisesB, lessons as unit6PassageLessonsB } from "./lessons/unit6PassageBatchB";
import { exercises as unit6PassageExercisesC, lessons as unit6PassageLessonsC } from "./lessons/unit6PassageBatchC";
import {
  exercises as measurementExercises,
  lessons as measurementLessons,
} from "./lessons/rootBatchMeasurement";
import { parts as bloodParts } from "./parts/rootBatchBloodCounts";
import { parts as rootImagingParts } from "./parts/rootBatchImaging";
import { parts as deficiencyParts } from "./parts/rootBatchDeficiencyInflammation";
import { parts as fluidParts } from "./parts/rootBatchFluidExcretion";
import { parts as growthMassParts } from "./parts/rootBatchGrowthMass";
import { parts as inflammationParts } from "./parts/rootBatchInflammationStenosis";
import { parts as measurementParts } from "./parts/rootBatchMeasurement";
import { terms as bloodTerms } from "./terms/rootBatchBloodCounts";
import { terms as rootImagingTerms } from "./terms/rootBatchImaging";
import { terms as deficiencyTerms } from "./terms/rootBatchDeficiencyInflammation";
import { terms as fluidTerms } from "./terms/rootBatchFluidExcretion";
import { terms as growthMassTerms } from "./terms/rootBatchGrowthMass";
import { terms as inflammationTerms } from "./terms/rootBatchInflammationStenosis";
import { terms as measurementTerms } from "./terms/rootBatchMeasurement";
import type { Abbreviation, Exercise, Lesson, Part, Term, Unit } from "../types/content";

export const expansionAbbreviations: Abbreviation[] = [];
export const expansionExercises: Exercise[] = [
  ...bloodExercises,
  ...deficiencyExercises,
  ...rootImagingExercises,
  ...inflammationExercises,
  ...growthMassExercises,
  ...fluidExercises,
  ...measurementExercises,
  ...unit6PassageExercisesA,
  ...unit6PassageExercisesB,
  ...unit6PassageExercisesC,
];
export const expansionLessons: Lesson[] = [
  ...bloodLessons,
  ...deficiencyLessons,
  ...rootImagingLessons,
  ...inflammationLessons,
  ...growthMassLessons,
  ...fluidLessons,
  ...measurementLessons,
  ...unit6PassageLessonsA,
  ...unit6PassageLessonsB,
  ...unit6PassageLessonsC,
];
export const expansionParts: Part[] = [
  ...bloodParts,
  ...deficiencyParts,
  ...rootImagingParts,
  ...inflammationParts,
  ...growthMassParts,
  ...fluidParts,
  ...measurementParts,
];
export const expansionTerms: Term[] = [
  ...bloodTerms,
  ...deficiencyTerms,
  ...rootImagingTerms,
  ...inflammationTerms,
  ...growthMassTerms,
  ...fluidTerms,
  ...measurementTerms,
];
export const unitLessonExtensions: Partial<Record<Unit["id"], string[]>> = {
  "unit-1": [
    ...bloodLessons.map((lesson) => lesson.id),
    ...deficiencyLessons.map((lesson) => lesson.id),
    ...rootImagingLessons.map((lesson) => lesson.id),
    ...inflammationLessons.map((lesson) => lesson.id),
    ...growthMassLessons.map((lesson) => lesson.id),
    ...fluidLessons.map((lesson) => lesson.id),
    ...measurementLessons.map((lesson) => lesson.id),
  ],
  "unit-6": [
    ...unit6PassageLessonsA.map((lesson) => lesson.id),
    ...unit6PassageLessonsB.map((lesson) => lesson.id),
    ...unit6PassageLessonsC.map((lesson) => lesson.id),
  ],
};
