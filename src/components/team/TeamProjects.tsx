import React from 'react';
import { ProjectCard } from '../dashboard/projects/ProjectCard';
import { Plus, Filter } from 'lucide-react';

export function TeamProjects() {
  const projects = [
    {
      title: "Climate Data Analysis",
      description: "Analysis of global temperature patterns",
      date: "2024/3/12",
      members: {
        count: 4,
        avatars: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'active' as const,
      progress: 65,
      tags: ['数据分析', '气候研究']
    },
    // More projects...
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">团队项目</h3>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Filter size={18} />
            <span>筛选</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
            <Plus size={18} />
            <span>新建项目</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}