import { useState } from "react";
import {
  getRecoverySnapshot,
  RECOVERY_STORAGE_KEY,
  STORAGE_KEY,
} from "../lib/progress/storage";
import { useAppState } from "../app/AppState";

export function SettingsPage() {
  const {
    exportProgress,
    hasRecoverySnapshot,
    importProgress,
    progress,
    recoveryNotice,
    resetProgress,
    setSetting,
    storageSnapshotSize,
  } = useAppState();
  const [message, setMessage] = useState<string>("");
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
      <section className="card stack">
        <p className="eyebrow">Settings</p>
        <h2>Local-only settings</h2>
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
          Storage key: {STORAGE_KEY} · Schema version: {progress.version}
        </p>
        <p className="meta-copy">
          Snapshot size: {storageSnapshotSize} bytes · Tracked lessons:{" "}
          {Object.keys(progress.lessons).length} · Tracked terms:{" "}
          {Object.keys(progress.terms).length}
        </p>
      </section>

      {recoveryNotice || hasRecoverySnapshot ? (
        <section className="card stack">
          <h3>Recovery notice</h3>
          {recoveryNotice ? <p>{recoveryNotice}</p> : null}
          <p className="meta-copy">Recovery storage key: {RECOVERY_STORAGE_KEY}</p>
          {recoverySnapshot ? (
            <div className="hero-actions">
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
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="card stack">
        <h3>Import and export</h3>
        <p className="meta-copy">
          Export before resetting or replacing progress. Imports require
          confirmation and replace the current local snapshot only after
          validation.
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
    </div>
  );
}
