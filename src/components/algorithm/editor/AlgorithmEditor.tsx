import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { ChatPanel } from './chat/ChatPanel';
import { FileExplorer } from './FileExplorer';
import { CodeEditor } from './CodeEditor';
import { Terminal } from './Terminal';
import { ResultsPanel } from './ResultsPanel';

export function AlgorithmEditor() {
  const [projectName, setProjectName] = useState('未命名算法');
  const [isEditingName, setIsEditingName] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'results'>('code');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.algorithmId) {
      navigate('/tools/algorithm');
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const algorithmInfo = localStorage.getItem('algorithm_info');
    if (algorithmInfo) {
      try {
        const { description, algorithmId } = JSON.parse(algorithmInfo);
        if (description) {
          setProjectName(description.replace('正在分析论文: ', '').replace('.pdf', ''));
        }
      } catch (error) {
        console.error('Failed to parse algorithm info:', error);
      }
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header
        projectName={projectName}
        isEditingName={isEditingName}
        onEditName={setIsEditingName}
        onNameChange={setProjectName}
      />

      <div className="flex-1 flex overflow-hidden">
        <ChatPanel />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Controls */}
          <div className="bg-white border-b border-gray-200">
            <div className="flex items-center h-12">
              <div className="flex px-4 space-x-4">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors
                    ${activeTab === 'code'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  代码
                  {activeTab === 'code' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors
                    ${activeTab === 'results'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  运行结果
                  {activeTab === 'results' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {activeTab === 'code' ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 flex overflow-hidden">
                {/* Left Panel */}
                <div className="w-64 border-r border-gray-200 bg-gray-50">
                  <FileExplorer 
                    onSelect={setSelectedFile} 
                    selectedFile={selectedFile}
                  />
                </div>

                {/* Right Panel */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-hidden">
                    <CodeEditor 
                      selectedFile={selectedFile}
                      onShowResults={() => {
                        setShowResults(true);
                        setActiveTab('results');
                      }}
                    />
                  </div>
                  <Terminal />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-hidden">
              <ResultsPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}