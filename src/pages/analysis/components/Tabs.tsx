import React from 'react';
import { Database, Code2, PieChart } from 'lucide-react';

interface TabsProps {
  activeTab: 'data' | 'code' | 'results';
  onTabChange: (tab: 'data' | 'code' | 'results') => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = [
    { id: 'data', label: '数据', icon: <Database size={18} /> },
    { id: 'code', label: '代码', icon: <Code2 size={18} /> },
    { id: 'results', label: '结果', icon: <PieChart size={18} /> }
  ] as const;

  return (
    <div className="border-b">
      <div className="flex space-x-1 px-4">
        {tabs.map((tab) => (
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
          </button>
        ))}
      </div>
    </div>
  );
}