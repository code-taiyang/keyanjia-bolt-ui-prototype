import React from 'react';
import { ProjectListHeader } from './ProjectListHeader';
import { ProjectListTabs } from './ProjectListTabs';
import { ProjectCard } from './ProjectCard';

export function ProjectList() {
  const projects = [
    {
      id: "climate-analysis",
      title: "Climate Data Analysis",
      description: "Analysis of global temperature patterns and climate change trends using satellite data and advanced statistical modeling techniques",
      type: 'analysis' as const,
      date: "2024/3/12",
      members: {
        count: 4,
        avatars: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'active' as const,
      progress: 65,
      isFavorite: true,
      tags: ['数据分析', '气候研究']
    },
    {
      id: "neural-network",
      title: "Neural Network Research",
      description: "Deep learning model development for predictive analytics in healthcare using state-of-the-art neural network architectures",
      type: 'research' as const,
      date: "2024/3/11",
      members: {
        count: 3,
        avatars: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'pending' as const,
      progress: 25,
      tags: ['深度学习', '医疗']
    },
    {
      id: "research-paper",
      title: "Research Paper Writing",
      description: "Collaborative paper writing project on the impact of artificial intelligence in modern scientific research methodologies",
      type: 'document' as const,
      date: "2024/3/10",
      members: {
        count: 2,
        avatars: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'completed' as const,
      progress: 100,
      tags: ['论文写作', 'AI研究']
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <ProjectListHeader />
      <ProjectListTabs />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}