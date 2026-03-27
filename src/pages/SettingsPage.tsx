import { useState } from "react";
import { useAppState } from "../app/AppState";

export function SettingsPage() {
  const { exportProgress, importProgress, progress, resetProgress, setSetting } =
    useAppState();
  const [message, setMessage] = useState<string>("");

  function handleExport(): void {
    const blob = new Blob([exportProgress()], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "healthterms-progress.json";
    anchor.click();
    window.URL.revokeObjectURL(url);
    setMessage("Exported current progress as JSON.");
  }

  async function handleImport(file: File): Promise<void> {
    const text = await file.text();
    try {
      importProgress(text);
      setMessage("Imported progress successfully.");
    } catch {
      setMessage("Import failed. Please use a valid JSON export from this app.");
    }
  }

  function handleReset(): void {
    const confirmed = window.confirm("Reset all local progress for HealthTerms.com?");
    if (!confirmed) {
      return;
    }
    resetProgress();
    setMessage("Reset local progress.");
  }

  return (
    <div className="stack">
      <section className="card stack">
        <p className="eyebrow">Settings</p>
        <h2>Local-only progress</h2>
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
      </section>

      <section className="card stack">
        <h3>Import and export</h3>
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
