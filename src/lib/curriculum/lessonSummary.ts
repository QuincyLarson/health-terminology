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

function sentence(text: string): string {
  return text ? `${text}.` : "";
}

function simplifyCommonText(text: string): string {
  const replacements: Array<[RegExp, string]> = [
    [/\bhighest-yield\b/gi, "most common"],
    [/\bhigh-yield\b/gi, "common"],
    [/\bhigh-frequency\b/gi, "common"],
    [/\breusable\b/gi, "useful"],
    [/\bsuffixes\b/gi, "endings"],
    [/\bsuffix\b/gi, "ending"],
    [/\breusing\b/gi, "using"],
    [/\bmedical language\b/gi, "medical words"],
    [/\bclinical documentation\b/gi, "medical notes"],
    [/\bworkflow phrasing\b/gi, "workflow words"],
    [/\bworkflow language\b/gi, "office words"],
    [/\bworkflow words\b/gi, "office words"],
    [/\bworkflow short forms\b/gi, "office short forms"],
    [/\bbody-system\b/gi, "body system"],
    [/\bdecodable terms\b/gi, "terms you can read"],
    [/\bdecodable\b/gi, "easy to read"],
    [/\bminimal friction\b/gi, "less trouble"],
    [/\bwithout forcing fake decomposition\b/gi, "without forcing a fake split"],
    [/\bwithout requiring specialist knowledge\b/gi, "without needing expert knowledge"],
    [
      /\bwithout overfocusing on any one jargon item\b/gi,
      "without getting stuck on one hard word",
    ],
    [/\bwithout getting lost in section labels or workflow phrasing\b/gi, "without getting lost in labels or office words"],
    [/\broot families\b/gi, "root groups"],
    [/\bclinician\b/gi, "care team"],
    [/\blearners\b/gi, "you"],
    [/\bcompress\b/gi, "pack in"],
    [/\bshorthand\b/gi, "short forms"],
    [/\bclinical summary\b/gi, "medical summary"],
    [/\bpaperwork language\b/gi, "paperwork words"],
    [/\breal chart text\b/gi, "real notes"],
    [/\bsection headings\b/gi, "headings"],
    [/\bcompact format\b/gi, "short format"],
    [/\bunderstandable forms\b/gi, "terms you can read"],
    [/\bkeeps generating new\b/gi, "keeps making new"],
    [/\bunlocks many\b/gi, "helps you read many"],
    [/\breal notes mixes\b/gi, "real notes mix"],
  ];

  let result = normalizeSentence(text);
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }

  return result.replace(/\s+/g, " ").trim();
}

function simplifyObjective(text: string): string {
  let result = simplifyCommonText(text);
  const starterReplacements: Array<[RegExp, string]> = [
    [/^Let's learn\s+/i, "Learn "],
    [/^Recognize\s+/i, "Learn "],
    [/^Decode\s+/i, "Learn "],
    [/^Practice seeing\s+/i, "See how "],
  ];

  for (const [pattern, replacement] of starterReplacements) {
    result = result.replace(pattern, replacement);
  }

  return result;
}

function simplifyWhy(text: string): string {
  let result = simplifyCommonText(text);

  result = result.replace(/^This is the inverted-pyramid approach in practice:\s*/i, "");
  result = result.replace(/^This is the kind of [^:]+ that\s*/i, "");
  result = result.replace(/^This is more valuable than [^:]+ because\s*/i, "");

  if (/\sbecause\s/i.test(result)) {
    const parts = result.split(/\sbecause\s/i);
    result = parts.slice(1).join(" because ");
  }

  if (!result) {
    return "";
  }

  if (/^This\b/i.test(result)) {
    return result;
  }

  return `This helps because ${lowerFirst(result)}`;
}

export function getLessonSummary(
  lesson: Pick<Lesson, "objective" | "whyItMatters">,
): string {
  const objective = simplifyObjective(lesson.objective);
  const whyItMatters = simplifyWhy(lesson.whyItMatters);

  if (!objective) {
    return sentence(whyItMatters);
  }

  if (!whyItMatters) {
    return sentence(objective);
  }

  return `${sentence(objective)} ${sentence(whyItMatters)}`.trim();
}
