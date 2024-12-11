import React from 'react';
import { Database, Users } from 'lucide-react';

interface DatasetTabsProps {
  activeTab: 'personal' | 'team';
  onTabChange: (tab: 'personal' | 'team') => void;
  counts: {
    personal: number;
    team: number;
  };
}

export function DatasetTabs({ activeTab, onTabChange, counts }: DatasetTabsProps) {
  const tabs = [
    {
      id: 'personal' as const,
      label: '个人数据集',
      icon: <Database size={18} />,
      count: counts.personal
    },
    {
      id: 'team' as const,
      label: '团队数据集',
      icon: <Users size={18} />,
      count: counts.team
    }
  ];

  return (
    <div className="border-b mb-6">
      <nav className="flex space-x-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium
              ${activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span className={`
              text-xs rounded-full px-2 py-0.5
              ${activeTab === tab.id ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}
            `}>
              {tab.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}