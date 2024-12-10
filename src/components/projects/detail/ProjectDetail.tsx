import React from 'react';
import { ProjectHeader } from './ProjectHeader';
import { ProjectTabs } from './ProjectTabs';
import { ProjectOverview } from './sections/ProjectOverview';
import { TaskList } from './sections/tasks/TaskList';

export function ProjectDetail() {
  const project = {
    title: "Climate Data Analysis",
    description: "Analysis of global temperature patterns and climate change trends using satellite data and advanced statistical modeling techniques",
    type: "数据分析",
    status: 'active' as const,
    members: {
      count: 8,
      avatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
      ]
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <ProjectHeader {...project} />
      <ProjectTabs />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-8">
            <ProjectOverview />
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
}