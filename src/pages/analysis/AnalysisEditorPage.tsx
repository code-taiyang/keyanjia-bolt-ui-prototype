import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ChatPanel } from './components/ChatPanel';
import { DataPanel } from './components/DataPanel';
import { CodePanel } from './components/CodePanel';
import { ResultsPanel } from './components/ResultsPanel';
import { sampleAnalysisResults } from '../../utils/sampleAnalysisData';
import { AnalysisResult } from '../../types/analysis';
import { Download, FileText, FileImage, ChevronRight } from 'lucide-react';

interface LocationState {
  title: string;
  objective: string;
  files: Array<{
    id: string;
    name: string;
    size: string;
    uploadTime: string;
  }>;
}

export function AnalysisEditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  // Redirect if no state
  if (!state) {
    navigate('/analysis');
    return null;
  }

  const [title, setTitle] = useState(state.title || '未命名分析');
  const [isSaved, setIsSaved] = useState(true);
  const [activeTab, setActiveTab] = useState<'data' | 'code' | 'results'>('data');
  const [results, setResults] = useState<AnalysisResult | null>(sampleAnalysisResults);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setIsSaved(false);
    // Auto save after 1 second
    setTimeout(() => setIsSaved(true), 1000);
  };

  const handleExport = (format: 'pdf' | 'word') => {
    // Implement export logic here
    console.log(`Exporting as ${format}...`);
    setShowExportMenu(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header 
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <ChatPanel />
        
        <div className="flex-1 flex flex-col">
          <div className="border-b bg-white">
            <div className="flex items-center justify-between px-4">
              <div className="flex space-x-1">
                {[
                  { id: 'data', label: '数据' },
                  { id: 'code', label: '代码' },
                  { id: 'results', label: '结果' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`
                      flex items-center gap-2 px-4 py-3 text-sm font-medium
                      ${activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {activeTab === 'results' && results && (
                <div className="relative">
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <Download size={18} />
                    <span className="text-sm">导出报告</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>

                  {showExportMenu && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                      <button
                        onClick={() => handleExport('pdf')}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                      >
                        <FileText size={16} className="text-red-500" />
                        <span>导出为 PDF</span>
                      </button>
                      <button
                        onClick={() => handleExport('word')}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                      >
                        <FileImage size={16} className="text-blue-500" />
                        <span>导出为 Word</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {activeTab === 'data' && <DataPanel files={state.files} />}
            {activeTab === 'code' && (
              <CodePanel 
                config={{ 
                  objective: state.objective,
                  files: state.files 
                }} 
              />
            )}
            {activeTab === 'results' && (
              <ResultsPanel 
                results={results}
                isAnalyzing={isAnalyzing}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}