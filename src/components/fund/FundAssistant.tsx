import React from 'react';
import { FundHeader } from './header/FundHeader';
import { FundTabs } from './navigation/FundTabs';
import { RecentFunds } from './recent/RecentFunds';
import { FundSearch } from './search/FundSearch';
import { FundAnalysis } from './analysis/FundAnalysis';
import { FundWriting } from './writing/FundWriting';
import { FundProgress } from './progress/FundProgress';

export function FundAssistant() {
  const [activeTab, setActiveTab] = React.useState('search');

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <FundHeader />
        <FundTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="space-y-8">
          {activeTab === 'search' && (
            <>
              <RecentFunds />
              <FundSearch />
            </>
          )}
          {activeTab === 'analysis' && <FundAnalysis />}
          {activeTab === 'writing' && <FundWriting />}
          {activeTab === 'progress' && <FundProgress />}
        </div>
      </div>
    </div>
  );
}