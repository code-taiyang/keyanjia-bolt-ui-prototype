import React from 'react';
import { Search, BarChart2, FileText, Clock } from 'lucide-react';

interface FundTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FundTabs({ activeTab, onTabChange }: FundTabsProps) {
  const tabs = [
    {
      id: 'search',
      label: '基金检索',
      icon: <Search size={18} />,
      count: 5
    },
    {
      id: 'analysis',
      label: '选题分析',
      icon: <BarChart2 size={18} />,
      count: 3
    },
    {
      id: 'writing',
      label: '申请撰写',
      icon: <FileText size={18} />,
      count: 2
    },
    {
      id: 'progress',
      label: '进度管理',
      icon: <Clock size={18} />,
      count: 4
    }
  ];

  return (
    <div className="border-b">
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