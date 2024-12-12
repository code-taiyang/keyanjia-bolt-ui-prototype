import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { ProjectList } from './components/projects/list/ProjectList';
import { ProjectDetail } from './components/projects/detail/ProjectDetail';
import { ActivityList } from './pages/ActivityList';
import { DatasetList } from './pages/datasets/DatasetList';
import { DatasetDetail } from './pages/datasets/DatasetDetail';
import { WritingAssistant } from './components/writing/WritingAssistant';
import { WritingPage } from './pages/WritingPage';
import { LiteraturePage } from './pages/LiteraturePage';
import { ComputingListPage } from './pages/computing/ComputingListPage';
import { CodingAssistant } from './components/coding/CodingAssistant';
import { ComputingEditor } from './components/coding/computing/ComputingEditor';
import { ExperimentAssistant } from './components/experiment/ExperimentAssistant';
import { FundAssistant } from './components/fund/FundAssistant';
import { AlgorithmListPage } from './pages/algorithm/AlgorithmListPage';
import { AlgorithmAssistant } from './components/algorithm/AlgorithmAssistant';
import { AlgorithmEditor } from './components/algorithm/editor/AlgorithmEditor';
import { DataAnalysisPage } from './pages/analysis/DataAnalysisPage';
import { NewAnalysisPage } from './pages/analysis/NewAnalysisPage';
import { AnalysisEditorPage } from './pages/analysis/AnalysisEditorPage';
import { PlanningPage } from './pages/planning/PlanningPage';

function AppLayout() {
  const location = useLocation();
  
  const editorPaths = [
    '/tools/coding/computing/editor',
    '/tools/algorithm/editor',
    '/writing',
    '/analysis/editor'
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
          <Route path="/resources/datasets/:id" element={<DatasetDetail />} />
          <Route path="/tools/writing" element={<WritingAssistant />} />
          <Route path="/writing/:id" element={<WritingPage />} />
          <Route path="/literature" element={<LiteraturePage />} />
          <Route path="/tools/coding" element={<ComputingListPage />} />
          <Route path="/tools/coding/computing" element={<CodingAssistant />} />
          <Route path="/tools/coding/computing/editor" element={<ComputingEditor />} />
          <Route path="/tools/experiment" element={<ExperimentAssistant />} />
          <Route path="/tools/funding" element={<FundAssistant />} />
          <Route path="/tools/algorithm" element={<AlgorithmListPage />} />
          <Route path="/tools/algorithm/assistant" element={<AlgorithmAssistant />} />
          <Route path="/tools/algorithm/editor" element={<AlgorithmEditor />} />
          <Route path="/analysis" element={<DataAnalysisPage />} />
          <Route path="/analysis/new" element={<NewAnalysisPage />} />
          <Route path="/analysis/editor" element={<AnalysisEditorPage />} />
          <Route path="/planning" element={<PlanningPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}