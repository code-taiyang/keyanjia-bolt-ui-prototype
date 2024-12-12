import React, { useState } from 'react';
import { CodingEnvironments } from './environments/CodingEnvironments';
import { ParallelComputing } from './computing/ParallelComputing';
import { GPUComputing } from './computing/GPUComputing';
import { CodingHeader } from './header/CodingHeader';
import { CodingTabs } from './navigation/CodingTabs';
import { RecentProjects } from './projects/RecentProjects';

export function CodingAssistant() {
  const [activeTab, setActiveTab] = useState('environments');

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <CodingHeader />
        <CodingTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="space-y-8">
          <RecentProjects />
          
          {activeTab === 'environments' && <CodingEnvironments />}
          {activeTab === 'parallel' && <ParallelComputing />}
          {activeTab === 'gpu' && <GPUComputing />}
        </div>
      </div>
    </div>
  );
}