import React from 'react';
import { FileText, Code } from 'lucide-react';

interface AlgorithmTabsProps {
  activeTab: 'upload' | 'select';
  onTabChange: (tab: 'upload' | 'select') => void;
}

export function AlgorithmTabs({ activeTab, onTabChange }: AlgorithmTabsProps) {
  const tabs = [
    {
      id: 'upload' as const,
      label: '上传论文',
      icon: <FileText size={18} />,
 
    },
    {
      id: 'select' as const,
      label: '选择算法',
      icon: <Code size={18} />,
     
    }
  ];

  return (
    <div className="border-b">
      <div className="flex space-x-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 py-4 border-b-2 font-medium text-sm transition-colors
              ${activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <span className={`
                ml-2 px-2 py-0.5 text-xs rounded-full
                ${activeTab === tab.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'}
              `}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}