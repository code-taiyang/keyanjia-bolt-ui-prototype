import React, { useState } from 'react';
import { AlgorithmUploader } from './uploader/AlgorithmUploader';
import { AlgorithmTabs } from './navigation/AlgorithmTabs';
import { AlgorithmSelector } from './selector/AlgorithmSelector';

export function AlgorithmAssistant() {
  const [activeTab, setActiveTab] = useState<'upload' | 'select'>('upload');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">算法助手</h1>
          <p className="text-gray-500 mt-1">智能分析和优化算法实现</p>
        </div>

        <AlgorithmTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === 'upload' ? (
            <AlgorithmUploader />
          ) : (
            <AlgorithmSelector 
              selectedAlgorithm={selectedAlgorithm}
              onSelect={setSelectedAlgorithm}
            />
          )}
        </div>
      </div>
    </div>
  );
}