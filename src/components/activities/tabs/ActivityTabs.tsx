import React from 'react';
import { ScrollText, Brain, Calculator, Code2, TestTubes, Award, ClipboardList } from 'lucide-react';

interface ActivityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  counts: {
    writing: number;
    analysis: number;
    algorithm: number;
    computing: number;
    experiment: number;
    grant: number;
    planning: number;
  };
}

export function ActivityTabs({ activeTab, onTabChange, counts }: ActivityTabsProps) {
  const tabs = [
    {
      id: 'writing',
      label: '学术写作',
      icon: <ScrollText size={18} />,
      count: counts.writing
    },
    {
      id: 'analysis',
      label: '数据分析',
      icon: <Brain size={18} />,
      count: counts.analysis
    },
    {
      id: 'algorithm',
      label: '科研算法',
      icon: <Calculator size={18} />,
      count: counts.algorithm
    },
    {
      id: 'computing',
      label: '科研计算',
      icon: <Code2 size={18} />,
      count: counts.computing
    },
    {
      id: 'experiment',
      label: '实验研究',
      icon: <TestTubes size={18} />,
      count: counts.experiment
    },
    {
      id: 'grant',
      label: '基金申请',
      icon: <Award size={18} />,
      count: counts.grant
    },
    {
      id: 'planning',
      label: '研究规划',
      icon: <ClipboardList size={18} />,
      count: counts.planning
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
      </div>
    </div>
  );
}