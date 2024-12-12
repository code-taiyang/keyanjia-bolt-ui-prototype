import React from 'react';
import { ExperimentHeader } from './header/ExperimentHeader';
import { ExperimentTabs } from './navigation/ExperimentTabs';
import { RecentExperiments } from './recent/RecentExperiments';
import { ExperimentPlanning } from './planning/ExperimentPlanning';
import { ExperimentAnalysis } from './analysis/ExperimentAnalysis';
import { ExperimentOptimization } from './optimization/ExperimentOptimization';

export function ExperimentAssistant() {
  const [activeTab, setActiveTab] = React.useState('planning');

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <ExperimentHeader />
        <ExperimentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="space-y-8">
          <RecentExperiments />
          
          {activeTab === 'planning' && <ExperimentPlanning />}
          {activeTab === 'analysis' && <ExperimentAnalysis />}
          {activeTab === 'optimization' && <ExperimentOptimization />}
        </div>
      </div>
    </div>
  );
}