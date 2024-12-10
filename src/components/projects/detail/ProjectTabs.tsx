import React from 'react';
import { 
  LayoutDashboard, 
  Code2, 
  Database, 
  BookOpen, 
  ScrollText, 
  MessageSquare, 
  Settings 
} from 'lucide-react';

interface Tab {
  icon: React.ReactNode;
  label: string;
  count?: number;
}

export function ProjectTabs() {
  const tabs: Tab[] = [
    { icon: <LayoutDashboard size={18} />, label: "概览" },
    { icon: <Code2 size={18} />, label: "代码", count: 12 },
    { icon: <Database size={18} />, label: "数据", count: 8 },
    { icon: <BookOpen size={18} />, label: "文献", count: 24 },
    { icon: <ScrollText size={18} />, label: "文档", count: 15 },
    { icon: <MessageSquare size={18} />, label: "讨论", count: 6 },
    { icon: <Settings size={18} />, label: "设置" }
  ];

  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex space-x-1">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium
                ${index === 0 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`
                  text-xs rounded-full px-2 py-0.5
                  ${index === 0 ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}
                `}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}