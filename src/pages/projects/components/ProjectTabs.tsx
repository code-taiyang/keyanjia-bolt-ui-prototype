import React from 'react';
import { LayoutDashboard, ListTodo, Database, Users, Settings } from 'lucide-react';

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProjectTabs({ activeTab, onTabChange }: ProjectTabsProps) {
  const tabs = [
    { id: 'overview', label: '概览', icon: <LayoutDashboard size={18} /> },
    { id: 'tasks', label: '任务', icon: <ListTodo size={18} />, count: 12 },
    { id: 'resources', label: '资源', icon: <Database size={18} />, count: 8 },
    { id: 'team', label: '团队', icon: <Users size={18} />, count: 8 },
    { id: 'settings', label: '设置', icon: <Settings size={18} /> }
  ];

  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex space-x-1">
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
              {tab.count !== undefined && (
                <span className={`
                  text-xs rounded-full px-2 py-0.5
                  ${activeTab === tab.id ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}
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