import React from 'react';
import { FileText, Star, Clock, Archive } from 'lucide-react';

interface TabProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  active?: boolean;
}

export function TabNav() {
  const tabs: TabProps[] = [
    { icon: <FileText size={18} />, label: "所有项目", count: 12, active: true },
    { icon: <Star size={18} />, label: "收藏", count: 3 },
    { icon: <Clock size={18} />, label: "最近", count: 5 },
    { icon: <Archive size={18} />, label: "归档", count: 2 }
  ];

  return (
    <nav className="border-b">
      <div className="flex space-x-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium
              ${tab.active 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-900'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`
                text-xs rounded-full px-2 py-0.5
                ${tab.active ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}
              `}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}