import React, { useState } from 'react';
import { ProjectHeader } from './components/ProjectHeader';
import { ProjectTabs } from './components/ProjectTabs';
import { ProjectOverview } from './components/ProjectOverview';
import { ProjectTasks } from './components/ProjectTasks';
import { ProjectResources } from './components/ProjectResources';
import { ProjectTeam } from './components/ProjectTeam';
import { ProjectSettings } from './components/ProjectSettings';

export function ProjectPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const project = {
    id: '1',
    title: 'Climate Data Analysis',
    description: 'Analysis of global temperature patterns and climate change trends using satellite data and advanced statistical modeling techniques',
    type: '数据分析',
    status: 'active' as const,
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    members: {
      count: 8,
      list: [
        {
          id: '1',
          name: 'John Doe',
          role: '项目负责人',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
        },
        {
          id: '2',
          name: 'Jane Smith',
          role: '研究员',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
        }
      ]
    },
    tags: ['气候研究', '数据分析', '机器学习']
  };

  return (
    <div className="flex-1 overflow-auto">
      <ProjectHeader project={project} />
      <ProjectTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && <ProjectOverview project={project} />}
        {activeTab === 'tasks' && <ProjectTasks project={project} />}
        {activeTab === 'resources' && <ProjectResources project={project} />}
        {activeTab === 'team' && <ProjectTeam project={project} />}
        {activeTab === 'settings' && <ProjectSettings project={project} />}
      </div>
    </div>
  );
}