import React from 'react';
import { PatentHeader } from './header/PatentHeader';
import { PatentTabs } from './navigation/PatentTabs';
import { RecentPatents } from './recent/RecentPatents';
import { PatentWriting } from './writing/PatentWriting';
import { PatentSearch } from './search/PatentSearch';
import { PatentAnalysis } from './analysis/PatentAnalysis';
import { PatentCheck } from './check/PatentCheck';

export function PatentAssistant() {
  const [activeTab, setActiveTab] = React.useState('writing');

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <PatentHeader />
        <PatentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="space-y-8">
          {activeTab === 'writing' && (
            <>
              <RecentPatents />
              <PatentWriting />
            </>
          )}
          {activeTab === 'search' && <PatentSearch />}
          {activeTab === 'analysis' && <PatentAnalysis />}
          {activeTab === 'check' && <PatentCheck />}
        </div>
      </div>
    </div>
  );
}