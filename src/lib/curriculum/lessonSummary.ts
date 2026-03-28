import type { Lesson } from "../../types/content";

function normalizeSentence(text: string): string {
  return text.trim().replace(/\s+/g, " ").replace(/[.?!]+$/, "");
}

function lowerFirst(text: string): string {
  if (!text) {
    return text;
  }

  return text.charAt(0).toLowerCase() + text.slice(1);
}

export function getLessonSummary(
  lesson: Pick<Lesson, "objective" | "whyItMatters">,
): string {
  const objective = normalizeSentence(lesson.objective);
  const whyItMatters = normalizeSentence(lesson.whyItMatters);

  if (!objective) {
    return whyItMatters ? `${whyItMatters}.` : "";
  }

  if (!whyItMatters) {
    return `${objective}.`;
  }

  return `${objective} because ${lowerFirst(whyItMatters)}.`;
}
