import {
  createDefaultProgressState,
  createProgressExport,
  migrateProgressState,
  parseImportedProgress,
} from "../src/lib/progress/storage";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

const currentState = createDefaultProgressState();
const exported = createProgressExport(currentState);
const roundTrip = parseImportedProgress(JSON.stringify(exported));

assert(roundTrip.version === currentState.version, "Round-trip version mismatch.");
assert(
  roundTrip.user.currentLessonId === currentState.user.currentLessonId,
  "Round-trip current lesson mismatch.",
);

const legacyState = migrateProgressState({
  version: 0,
  user: {
    currentUnitId: "unit-1",
    currentLessonId: "lesson-unit1-common-suffixes",
  },
  lessons: {},
  terms: {},
  settings: {
    audioEnabled: false,
  },
});

assert(legacyState.version === currentState.version, "Legacy state did not migrate to current version.");
assert(legacyState.settings.audioEnabled === false, "Legacy audio setting was not preserved.");
assert(
  legacyState.settings.reducedMotion === false,
  "Missing reducedMotion should fall back to the default.",
);
assert(
  legacyState.settings.themePreference === "system",
  "Missing themePreference should fall back to the default.",
);
assert(
  legacyState.settings.themePreference === "system",
  "Missing themePreference should fall back to the default.",
);
assert(
  legacyState.settings.themePreference === "system",
  "Missing themePreference should fall back to the default.",
);

const invalidPayloads = ["[]", "{\"settings\":{}}"];

for (const payload of invalidPayloads) {
  let failed = false;
  try {
    parseImportedProgress(payload);
  } catch {
    failed = true;
  }
  assert(failed, `Invalid payload should fail: ${payload}`);
}

console.log("Progress migration checks passed.");
