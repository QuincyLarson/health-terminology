import { content } from "../src/content";
import { validateContent } from "../src/lib/validation/content";

const result = validateContent(content);

if (result.warnings.length > 0) {
  console.warn("Content warnings:");
  for (const warning of result.warnings) {
    console.warn(`- ${warning}`);
  }
}

if (result.errors.length > 0) {
  console.error("Content validation failed:");
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${content.units.length} units, ${content.lessons.length} lessons, ${content.parts.length} parts, ${content.terms.length} terms, ${content.exercises.length} exercises, and ${content.abbreviations.length} abbreviations.`,
);
