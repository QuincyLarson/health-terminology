import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./AppState";
import { Shell } from "../components/Shell";
import { AbbreviationsPage } from "../pages/AbbreviationsPage";
import { AboutPage } from "../pages/AboutPage";
import { BrowsePage } from "../pages/BrowsePage";
import { CurriculumPage } from "../pages/CurriculumPage";
import { EndlessPage } from "../pages/EndlessPage";
import { HomePage } from "../pages/HomePage";
import { LessonPage } from "../pages/LessonPage";
import { ProgressPage } from "../pages/ProgressPage";
import { ReviewPage } from "../pages/ReviewPage";
import { SettingsPage } from "../pages/SettingsPage";

export function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Shell>
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
        </Shell>
      </HashRouter>
    </AppStateProvider>
  );
}
