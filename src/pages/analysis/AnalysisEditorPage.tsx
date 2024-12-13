import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ChatPanel } from './components/ChatPanel';
import { FileList } from './components/FileList';
import { ContentPanel } from './components/ContentPanel';
import { ResultsPanel } from './components/ResultsPanel';
import { Terminal } from './components/Terminal';
import { useAnalysisStore } from '../../stores/analysisStore';
import { Tabs } from './components/Tabs';

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

interface File {
  id: string;
  name: string;
  type: 'code' | 'data';
  content: string;
  language?: string;
  size?: string;
  uploadTime?: string;
}

export function AnalysisEditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const { results, isAnalyzing, startAnalysis } = useAnalysisStore();

  // 状态管理
  const [title, setTitle] = useState(state?.title || '未命名分析');
  const [isSaved, setIsSaved] = useState(true);
  const [activeTab, setActiveTab] = useState<'files' | 'results'>('files');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  // 如果没有state，重定向回分析列表页面
  useEffect(() => {
    if (!state) {
      navigate('/analysis');
      return;
    }
  }, [state, navigate]);

  // 示例文件数据
  const sampleFiles: File[] = [
    {
      id: 'analysis',
      name: 'analysis.py',
      type: 'code',
      content: `import pandas as pd
import numpy as np
from scipy import stats

def analyze_data(df):
    """
    Perform statistical analysis on the dataset
    """
    # Basic statistics
    stats = df.describe()
    
    # Correlation analysis
    corr = df.corr()
    
    return {
        'basic_stats': stats,
        'correlation': corr
    }`,
      language: 'python'
    },
    {
      id: 'visualization',
      name: 'visualization.py',
      type: 'code',
      content: `import matplotlib.pyplot as plt
import seaborn as sns

def create_visualizations(df):
    """
    Create data visualizations
    """
    # Distribution plots
    plt.figure(figsize=(10, 6))
    sns.histplot(data=df)
    plt.title('Data Distribution')
    
    # Correlation heatmap
    plt.figure(figsize=(8, 8))
    sns.heatmap(df.corr(), annot=True)
    plt.title('Correlation Matrix')`,
      language: 'python'
    },
    {
      id: 'data1',
      name: 'dataset.csv',
      type: 'data',
      content: '',
      size: '2.3 MB',
      uploadTime: '2024-03-15 14:30'
    }
  ];

  // 处理函数
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setIsSaved(false);
    // 自动保存
    setTimeout(() => {
      setIsSaved(true);
    }, 1000);
  };

  const handleTabChange = (tab: 'files' | 'results') => {
    setActiveTab(tab);
  };

  const handleShare = () => {
    console.log('Share analysis results');
  };

  const handleExport = (format: 'pdf' | 'word') => {
    console.log(`Exporting as ${format}...`);
    setShowExportMenu(false);
  };

  if (!state) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header 
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* 左侧聊天面板 */}
        <ChatPanel />
        
        {activeTab === 'files' ? (
          <>
            {/* 文件列表面板 */}
            <div className="w-80 bg-white border-r flex flex-col">
              <Tabs 
                activeTab={activeTab} 
                onTabChange={handleTabChange}
                showActions={false}
              />
              <FileList 
                files={sampleFiles}
                selectedFileId={selectedFile?.id}
                onFileSelect={setSelectedFile}
              />
            </div>

            {/* 右侧内容区域 */}
            <div className="flex-1 flex flex-col">
              {/* 文件预览面板 */}
              <div className="flex-1 bg-white overflow-hidden">
                <ContentPanel file={selectedFile} />
              </div>

              {/* Terminal面板 */}
              <Terminal 
                isMinimized={isTerminalMinimized}
                onToggleMinimize={() => setIsTerminalMinimized(!isTerminalMinimized)}
              />
            </div>
          </>
        ) : (
          <>
            {/* 结果面板 - 占据除聊天面板外的全部空间 */}
            <div className="flex-1 flex flex-col bg-white">
              <Tabs 
                activeTab={activeTab} 
                onTabChange={handleTabChange}
                onShare={handleShare}
                onExport={() => setShowExportMenu(!showExportMenu)}
                showExportMenu={showExportMenu}
                setShowExportMenu={setShowExportMenu}
                handleExport={handleExport}
                showActions={true}
              />

              <div className="flex-1 overflow-auto">
                <div className="h-full">
                  <ResultsPanel 
                    results={results}
                    isAnalyzing={isAnalyzing}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}