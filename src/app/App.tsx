import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./AppState";
import { Shell } from "../components/Shell";
import { HomePage } from "../pages/HomePage";

const BrowsePage = lazy(async () => {
  const module = await import("../pages/BrowsePage");
  return { default: module.BrowsePage };
});

const CurriculumPage = lazy(async () => {
  const module = await import("../pages/CurriculumPage");
  return { default: module.CurriculumPage };
});

const LessonPage = lazy(async () => {
  const module = await import("../pages/LessonPage");
  return { default: module.LessonPage };
});

const ReviewPage = lazy(async () => {
  const module = await import("../pages/ReviewPage");
  return { default: module.ReviewPage };
});

const EndlessPage = lazy(async () => {
  const module = await import("../pages/EndlessPage");
  return { default: module.EndlessPage };
});

const ProgressPage = lazy(async () => {
  const module = await import("../pages/ProgressPage");
  return { default: module.ProgressPage };
});

const AbbreviationsPage = lazy(async () => {
  const module = await import("../pages/AbbreviationsPage");
  return { default: module.AbbreviationsPage };
});

const SettingsPage = lazy(async () => {
  const module = await import("../pages/SettingsPage");
  return { default: module.SettingsPage };
});

const AboutPage = lazy(async () => {
  const module = await import("../pages/AboutPage");
  return { default: module.AboutPage };
});

function RouteFallback() {
  return (
    <section className="card" aria-live="polite">
      <p className="meta-copy">Loading page content...</p>
    </section>
  );
}

export function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Shell>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/endless" element={<EndlessPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/abbreviations" element={<AbbreviationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Shell>
      </HashRouter>
    </AppStateProvider>
  );
}
