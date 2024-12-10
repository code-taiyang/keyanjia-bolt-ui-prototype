import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatPanel } from './components/ChatPanel';
import { MainPanel } from './components/MainPanel';
import { Header } from './components/Header';
import { useAnalysisStore } from '../../stores/analysisStore';

export function AnalysisEditorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState(location.state?.title || '未命名分析');
  const { config, files, results, isAnalyzing } = useAnalysisStore();

  // Redirect if no state
  if (!location.state) {
    navigate('/analysis');
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header 
        title={title}
        onTitleChange={setTitle}
        isSaved={!isAnalyzing}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <ChatPanel />
        <MainPanel
          config={config}
          files={files}
          results={results}
          isAnalyzing={isAnalyzing}
        />
      </div>
    </div>
  );
}