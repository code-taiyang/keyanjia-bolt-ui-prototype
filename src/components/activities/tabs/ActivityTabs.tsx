import React from 'react';
import { Users, User, Layout } from 'lucide-react';
import { ActivityScope } from '../types';

interface ActivityTabsProps {
  activeTab: ActivityScope;
  onTabChange: (tab: ActivityScope) => void;
  counts: {
    all: number;
    personal: number;
    team: number;
  };
}

export function ActivityTabs({ activeTab, onTabChange, counts }: ActivityTabsProps) {
  const tabs = [
    {
      id: 'all' as const,
      label: '全部活动',
      icon: <Layout size={18} />,
      count: counts.all
    },
    {
      id: 'personal' as const,
      label: '个人活动',
      icon: <User size={18} />,
      count: counts.personal
    },
    {
      id: 'team' as const,
      label: '团队活动',
      icon: <Users size={18} />,
      count: counts.team
    }
  ];

  return (
    <div className="border-b mb-6">
      <div className="flex space-x-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium
              ${activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'}
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
      </div>
    </div>
  );
}