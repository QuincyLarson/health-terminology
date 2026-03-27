import { abbreviations } from "./abbreviations/seedAbbreviations";
import { exercises, lessons } from "./lessons/seedLessons";
import { parts } from "./parts/seedParts";
import { terms } from "./terms/seedTerms";
import { units } from "./units/seedUnits";

export const content = {
  abbreviations,
  exercises,
  lessons,
  parts,
  terms,
  units,
};

export type ContentIndex = typeof content;
