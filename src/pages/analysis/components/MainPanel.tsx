import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { DataPanel } from './DataPanel';
import { CodePanel } from './CodePanel';
import { ResultsPanel } from './ResultsPanel';

interface MainPanelProps {
  config: any;
  files: any[];
  results: any[];
  isAnalyzing: boolean;
}

export function MainPanel({ config, files, results, isAnalyzing }: MainPanelProps) {
  const [activeTab, setActiveTab] = useState<'data' | 'code' | 'results'>('data');

  return (
    <div className="flex-1 flex flex-col bg-white">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 overflow-hidden">
        {activeTab === 'data' && (
          <DataPanel files={files} />
        )}
        {activeTab === 'code' && (
          <CodePanel config={config} />
        )}
        {activeTab === 'results' && (
          <ResultsPanel results={results} isAnalyzing={isAnalyzing} />
        )}
      </div>
    </div>
  );
}