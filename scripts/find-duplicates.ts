import { content } from "../src/content";

const normalizedTerms = new Map<string, string>();
const duplicates: string[] = [];

for (const term of content.terms) {
  const existing = normalizedTerms.get(term.normalizedTerm);
  if (existing) {
    duplicates.push(`${term.normalizedTerm}: ${existing}, ${term.id}`);
    continue;
  }
  normalizedTerms.set(term.normalizedTerm, term.id);
}

if (duplicates.length > 0) {
  console.error("Duplicate normalized terms:");
  for (const duplicate of duplicates) {
    console.error(`- ${duplicate}`);
  }
  process.exit(1);
}

console.log("No duplicate normalized terms found.");
