import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../app/AppState";
import { contentMaps } from "../content";
import {
  getRecoverySnapshot,
  RECOVERY_STORAGE_KEY,
  STORAGE_KEY,
} from "../lib/progress/storage";

export function ProgressPage() {
  const {
    dueTerms,
    eligibleTerms,
    exportProgress,
    hasRecoverySnapshot,
    importProgress,
    newTerms,
    orderedLessons,
    progress,
    recoveryNotice,
    resetProgress,
    setSetting,
    stats,
    storageSnapshotSize,
    themePreference,
  } = useAppState();
  const [message, setMessage] = useState("");

  const currentLesson = progress.user.currentLessonId
    ? contentMaps.lessonMap.get(progress.user.currentLessonId)
    : undefined;
  const dueTermIds = useMemo(
    () => new Set(dueTerms.map((term) => term.id)),
    [dueTerms],
  );
  const recentLessons = useMemo(
    () =>
      Object.entries(progress.lessons)
        .sort(([, left], [, right]) =>
          right.lastVisitedAt.localeCompare(left.lastVisitedAt),
        )
        .slice(0, 5)
        .map(([lessonId, lessonProgress]) => ({
          title: contentMaps.lessonMap.get(lessonId)?.title ?? lessonId,
          lessonProgress,
        })),
    [progress.lessons],
  );
  const bodySystemStats = useMemo(() => {
    const statsBySystem = new Map<
      string,
      { bodySystem: string; due: number; eligible: number; seen: number }
    >();

    for (const term of eligibleTerms) {
      const entry = statsBySystem.get(term.bodySystem) ?? {
        bodySystem: term.bodySystem,
        due: 0,
        eligible: 0,
        seen: 0,
      };
      entry.eligible += 1;
      if ((progress.terms[term.id]?.seenCount ?? 0) > 0) {
        entry.seen += 1;
      }
      if (dueTermIds.has(term.id)) {
        entry.due += 1;
      }
      statsBySystem.set(term.bodySystem, entry);
    }

    return Array.from(statsBySystem.values()).sort((left, right) =>
      left.bodySystem.localeCompare(right.bodySystem),
    );
  }, [dueTermIds, eligibleTerms, progress.terms]);
  const recoverySnapshot = getRecoverySnapshot();
  const hasTrackedProgress =
    Object.keys(progress.lessons).length > 0 || Object.keys(progress.terms).length > 0;

  function downloadFile(contents: string, filename: string): void {
    const blob = new Blob([contents], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  function handleExport(): void {
    downloadFile(exportProgress(), "healthterminology-progress.json");
    setMessage("Exported current progress as JSON.");
  }

  async function handleImport(file: File): Promise<void> {
    const confirmed = window.confirm(
      "Importing will replace the current local progress after validation. Continue?",
    );
    if (!confirmed) {
      return;
    }

    if (
      hasTrackedProgress &&
      window.confirm("Download a backup of the current local progress before import?")
    ) {
      downloadFile(
        exportProgress(),
        `healthterminology-progress-backup-${new Date().toISOString()}.json`,
      );
    }

    const text = await file.text();
    try {
      importProgress(text);
      setMessage("Imported progress successfully.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? `Import failed: ${error.message}`
          : "Import failed. Please use a valid JSON export from this app.",
      );
    }
  }

  function handleReset(): void {
    const confirmed = window.confirm(
      "Reset all local progress for HealthTerminology.com?",
    );
    if (!confirmed) {
      return;
    }

    if (
      hasTrackedProgress &&
      window.confirm("Download a backup of the current local progress before reset?")
    ) {
      downloadFile(
        exportProgress(),
        `healthterminology-progress-backup-${new Date().toISOString()}.json`,
      );
    }

    resetProgress();
    setMessage("Reset local progress.");
  }

  return (
    <div className="stack">
      <section className="card">
        <p className="eyebrow">Profile</p>
        <h2>Local study record</h2>
        <p>
          Everything stays in your browser: lessons, drills, endless study, audio,
          motion, and theme preference.
        </p>
      </section>

      <section className="stats-grid">
        <article className="card stat-card">
          <p className="stat-label">Units complete</p>
          <p className="stat-value">
            {stats.completedUnits} / {stats.totalUnits}
          </p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Terms seen</p>
          <p className="stat-value">{stats.seenTerms}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Due now</p>
          <p className="stat-value">{stats.dueTerms}</p>
        </article>
        <article className="card stat-card">
          <p className="stat-label">Accuracy</p>
          <p className="stat-value">{Math.round(stats.accuracyRate * 100)}%</p>
        </article>
      </section>

      <section className="card stack">
        <h3>Current path</h3>
        <p>
          Current lesson: {currentLesson?.title ?? "None selected"} · New drill terms:{" "}
          {newTerms.length} · Eligible terms: {eligibleTerms.length}
        </p>
        <div className="hero-actions">
          <Link
            className="button button-primary"
            to={`/lesson/${currentLesson?.id ?? orderedLessons[0]?.id}`}
          >
            Resume lesson
          </Link>
          <Link className="button" to="/drills">
            Open drills
          </Link>
          <Link className="button" to="/endless">
            Endless study
          </Link>
        </div>
      </section>

      <section className="card stack">
        <h3>Local settings and backup</h3>
        <label className="toggle-row">
          <span>Audio enabled</span>
          <input
            type="checkbox"
            checked={progress.settings.audioEnabled}
            onChange={(event) => setSetting("audioEnabled", event.target.checked)}
          />
        </label>
        <label className="toggle-row">
          <span>Reduced motion</span>
          <input
            type="checkbox"
            checked={progress.settings.reducedMotion}
            onChange={(event) => setSetting("reducedMotion", event.target.checked)}
          />
        </label>
        <p className="meta-copy">
          Theme: {themePreference} · Storage key: {STORAGE_KEY} · Schema version:{" "}
          {progress.version}
        </p>
        <p className="meta-copy">
          Snapshot size: {storageSnapshotSize} bytes · Tracked lessons:{" "}
          {Object.keys(progress.lessons).length} · Tracked terms:{" "}
          {Object.keys(progress.terms).length}
        </p>
        <div className="hero-actions">
          <button type="button" className="button button-primary" onClick={handleExport}>
            Export progress
          </button>
          <label className="button file-button">
            Import progress
            <input
              type="file"
              accept="application/json"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  void handleImport(file);
                }
              }}
            />
          </label>
          <button type="button" className="button" onClick={handleReset}>
            Reset progress
          </button>
        </div>
        {message ? <p className="meta-copy">{message}</p> : null}
      </section>

      {recoveryNotice || hasRecoverySnapshot ? (
        <section className="card stack">
          <h3>Recovery snapshot</h3>
          {recoveryNotice ? <p>{recoveryNotice}</p> : null}
          <p className="meta-copy">Recovery storage key: {RECOVERY_STORAGE_KEY}</p>
          {recoverySnapshot ? (
            <button
              type="button"
              className="button"
              onClick={() =>
                downloadFile(
                  recoverySnapshot,
                  `healthterminology-recovery-${new Date().toISOString()}.json`,
                )
              }
            >
              Download preserved raw snapshot
            </button>
          ) : null}
        </section>
      ) : null}

      <section className="card stack">
        <h3>Recent lessons</h3>
        {recentLessons.length > 0 ? (
          <ul className="lesson-list">
            {recentLessons.map((entry) => (
              <li key={entry.title} className="lesson-row">
                <div>
                  <h4>{entry.title}</h4>
                  <p className="meta-copy">
                    {Math.round(entry.lessonProgress.mastery * 100)}% mastery ·
                    {` ${new Date(entry.lessonProgress.lastVisitedAt).toLocaleString()}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="meta-copy">No lesson activity yet.</p>
        )}
      </section>

      <section className="card stack">
        <h3>Coverage by system</h3>
        <div className="breakdown-grid">
          {bodySystemStats.map((entry) => (
            <article key={entry.bodySystem} className="tag-card">
              <strong>{entry.bodySystem}</strong>
              <p className="meta-copy">
                eligible {entry.eligible} · seen {entry.seen} · due {entry.due}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
