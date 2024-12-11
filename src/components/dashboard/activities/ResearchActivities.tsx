import React, { useState } from 'react';
import { PersonalActivities } from './PersonalActivities';
import { TeamActivities } from './TeamActivities';

export function ResearchActivities() {
  const [activeTab, setActiveTab] = useState<'personal' | 'team'>('personal');

  return (
    <div className="space-y-4">
      <div className="flex space-x-1 border-b">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'personal'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          个人活动
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'team'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          团队活动
        </button>
      </div>

      {activeTab === 'personal' ? <PersonalActivities /> : <TeamActivities />}
    </div>
  );
}