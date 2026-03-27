import { content } from "../src/content";

const summary = {
  units: content.units.map((unit) => ({
    id: unit.id,
    title: unit.title,
    lessons: unit.lessonIds.length,
  })),
  totals: {
    units: content.units.length,
    lessons: content.lessons.length,
    parts: content.parts.length,
    terms: content.terms.length,
    abbreviations: content.abbreviations.length,
  },
};

console.log(JSON.stringify(summary, null, 2));
