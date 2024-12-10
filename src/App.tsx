import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { Dashboard } from "./pages/Dashboard";
import { ProjectList } from "./components/projects/list/ProjectList";
import { ProjectDetail } from "./components/projects/detail/ProjectDetail";
import { ActivityList } from "./pages/ActivityList";
import { DatasetList } from "./pages/datasets/DatasetList";
import { DatasetDetail } from "./pages/datasets/DatasetDetail";
import { WritingAssistant } from "./components/writing/WritingAssistant";
import { WritingPage } from "./pages/WritingPage";
import { LiteratureAIPage } from "./pages/LiteratureAIPage";
import { CodingAssistant } from "./components/coding/CodingAssistant";
import { ExperimentAssistant } from "./components/experiment/ExperimentAssistant";
import { PatentAssistant } from "./components/patent/PatentAssistant";
import { FundAssistant } from "./components/fund/FundAssistant";
import { DataAnalysisPage } from "./pages/analysis/DataAnalysisPage";
import { AnalysisEditorPage } from "./pages/analysis/AnalysisEditorPage";
import { SettingsLayout } from "./pages/settings/SettingsLayout";
import { ProfileSettings } from "./pages/settings/ProfileSettings";
import { NotificationSettings } from "./pages/settings/NotificationSettings";
import { PrivacySettings } from "./pages/settings/PrivacySettings";
import { APISettings } from "./pages/settings/APISettings";
import { AppearanceSettings } from "./pages/settings/AppearanceSettings";
import { LanguageSettings } from "./pages/settings/LanguageSettings";
import { StorageSettings } from "./pages/settings/StorageSettings";
import { PaperLibrary } from "./pages/resources/papers/PaperLibrary";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/activities" element={<ActivityList />} />
            <Route path="/resources/datasets" element={<DatasetList />} />
            <Route path="/resources/datasets/:id" element={<DatasetDetail />} />
            <Route path="/resources/papers" element={<PaperLibrary />} />
            <Route path="/tools/writing" element={<WritingAssistant />} />
            <Route path="/writing/:id" element={<WritingPage />} />
            <Route path="/literature" element={<LiteratureAIPage />} />
            <Route path="/tools/coding" element={<CodingAssistant />} />
            <Route path="/tools/experiment" element={<ExperimentAssistant />} />
            <Route path="/tools/patent" element={<PatentAssistant />} />
            <Route path="/tools/funding" element={<FundAssistant />} />
            <Route path="/analysis" element={<DataAnalysisPage />} />
            <Route path="/analysis/editor" element={<AnalysisEditorPage />} />
            <Route path="/settings" element={<SettingsLayout />}>
              <Route path="profile" element={<ProfileSettings />} />
              <Route path="notifications" element={<NotificationSettings />} />
              <Route path="privacy" element={<PrivacySettings />} />
              <Route path="api" element={<APISettings />} />
              <Route path="appearance" element={<AppearanceSettings />} />
              <Route path="language" element={<LanguageSettings />} />
              <Route path="storage" element={<StorageSettings />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
