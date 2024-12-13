import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { AlgorithmAssistant } from "./components/algorithm/AlgorithmAssistant";
import { AlgorithmEditor } from "./components/algorithm/editor/AlgorithmEditor";
import { ComputingEditor } from "./components/coding/computing/ComputingEditor";

import { ComputingListPage } from './pages/computing/ComputingListPage';
import { AlgorithmListPage } from './pages/algorithm/AlgorithmListPage';
import { NewAnalysisPage } from './pages/analysis/NewAnalysisPage';
import { PlanningPage } from './pages/planning/PlanningPage';
import { ExperimentEditorPage } from './pages/experiment/ExperimentEditorPage';
import { FundEditorPage } from './pages/fund/FundEditorPage';
import { PlanningEditorPage } from './pages/planning/PlanningEditorPage';

function AppLayout() {
  const location = useLocation();
  
  const editorPaths = [
    '/tools/coding/computing/editor',
    '/tools/algorithm/editor',
    '/writing',
    '/analysis/editor',
    '/experiment',
    '/fund',
    '/planning'
  ];

  const isEditorPage = editorPaths.some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {!isEditorPage && <Sidebar />}
      <div className="flex-1 flex flex-col min-w-0">
        {!isEditorPage && <Header />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/activities" element={<ActivityList />} />
          <Route path="/resources/datasets" element={<DatasetList />} />
          <Route path="/resources/papers" element={<PaperLibrary />} />
          <Route path="/resources/datasets/:id" element={<DatasetDetail />} />
          <Route path="/tools/writing" element={<WritingAssistant />} />
          <Route path="/writing/:id" element={<WritingPage />} />
          <Route path="/literature" element={<LiteratureAIPage />} />
          <Route path="/tools/coding" element={<ComputingListPage />} />
          <Route path="/tools/coding/computing" element={<CodingAssistant />} />
          {/* <Route path="/tools/coding" element={<CodingAssistant />} /> */}
          <Route
            path="/tools/coding/computing/editor"
            element={<ComputingEditor />}
          />
          <Route path="/tools/experiment" element={<ExperimentAssistant />} />
          <Route path="/tools/patent" element={<PatentAssistant />} />
          <Route path="/tools/funding" element={<FundAssistant />} />
          {/* <Route path="/tools/algorithm" element={<AlgorithmAssistant />} /> */}
          <Route path="/experiment/:id" element={<ExperimentEditorPage />} />
          <Route path="/fund/:id" element={<FundEditorPage />} />
          <Route path="/tools/algorithm" element={<AlgorithmListPage />} />
          <Route path="/tools/algorithm/assistant" element={<AlgorithmAssistant />} />
          <Route path="/tools/algorithm/editor" element={<AlgorithmEditor />} />
          <Route path="/analysis" element={<DataAnalysisPage />} />
          <Route path="/analysis/new" element={<NewAnalysisPage />} />
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
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/planning/:id" element={<PlanningEditorPage />} />
        </Routes>
      </div>
    </div>
  );
}

// 主 App 组件
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
