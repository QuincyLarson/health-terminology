import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./AppState";
import { Shell } from "../components/Shell";
import { AboutPage } from "../pages/AboutPage";
import { CurriculumPage } from "../pages/CurriculumPage";
import { HomePage } from "../pages/HomePage";
import { LessonPage } from "../pages/LessonPage";
import { ReviewPage } from "../pages/ReviewPage";
import { SettingsPage } from "../pages/SettingsPage";

export function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Shell>
      </HashRouter>
    </AppStateProvider>
  );
}
