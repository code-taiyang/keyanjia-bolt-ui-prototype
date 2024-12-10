import React from 'react';
import { Code2, Network, Cpu, Braces, Database, Binary } from 'lucide-react';

interface CodingTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CodingTabs({ activeTab, onTabChange }: CodingTabsProps) {
  const tabs = [
    {
      id: 'environments',
      label: '开发环境',
      icon: <Code2 size={18} />,
      count: 8
    },
    {
      id: 'parallel',
      label: '并行计算',
      icon: <Network size={18} />,
      count: 4
    },
    {
      id: 'gpu',
      label: 'GPU计算',
      icon: <Cpu size={18} />,
      count: 6
    },
    {
      id: 'numerical',
      label: '数值计算',
      icon: <Binary size={18} />,
      count: 5
    },
    {
      id: 'data',
      label: '数据分析',
      icon: <Database size={18} />,
      count: 7
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