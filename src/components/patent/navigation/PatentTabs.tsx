import React from 'react';
import { FileText, Search, CheckCircle, Globe } from 'lucide-react';

interface PatentTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PatentTabs({ activeTab, onTabChange }: PatentTabsProps) {
  const tabs = [
    {
      id: 'writing',
      label: '专利撰写',
      icon: <FileText size={18} />,
      count: 5
    },
    {
      id: 'search',
      label: '专利检索',
      icon: <Globe size={18} />,
      count: 2
    },
    {
      id: 'analysis',
      label: '专利分析',
      icon: <Search size={18} />,
      count: 3
    },
    {
      id: 'check',
      label: '合规检查',
      icon: <CheckCircle size={18} />,
      count: 2
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