import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./AppState";
import { Shell } from "../components/Shell";

const HomePage = lazy(async () => {
  const module = await import("../pages/HomePage");
  return { default: module.HomePage };
});

const BrowsePage = lazy(async () => {
  const module = await import("../pages/BrowsePage");
  return { default: module.BrowsePage };
});

const LessonPage = lazy(async () => {
  const module = await import("../pages/LessonPage");
  return { default: module.LessonPage };
});

const DrillsPage = lazy(async () => {
  const module = await import("../pages/ReviewPage");
  return { default: module.DrillsPage };
});

const EndlessPage = lazy(async () => {
  const module = await import("../pages/EndlessPage");
  return { default: module.EndlessPage };
});

const ProfilePage = lazy(async () => {
  const module = await import("../pages/ProgressPage");
  return { default: module.ProgressPage };
});

const AbbreviationsPage = lazy(async () => {
  const module = await import("../pages/AbbreviationsPage");
  return { default: module.AbbreviationsPage };
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
              <Route path="/curriculum" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/drills" element={<DrillsPage />} />
              <Route path="/review" element={<Navigate to="/drills" replace />} />
              <Route path="/endless" element={<EndlessPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/progress" element={<Navigate to="/profile" replace />} />
              <Route path="/abbreviations" element={<AbbreviationsPage />} />
              <Route path="/settings" element={<Navigate to="/profile" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Shell>
      </HashRouter>
    </AppStateProvider>
  );
}
