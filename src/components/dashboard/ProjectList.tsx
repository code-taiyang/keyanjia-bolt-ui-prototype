import React from 'react';
import { BarChart2, Brain, FileText, Star } from 'lucide-react';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectHeader } from './projects/ProjectHeader';

export function ProjectList() {
  const projects = [
    {
      title: "Climate Data Analysis",
      description: "Analysis of global temperature patterns and climate change trends using satellite data and advanced statistical modeling techniques",
      date: "2024/3/12",
      members: {
        count: 4,
        avatars: [
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'active' as const,
      progress: 65,
      icon: <BarChart2 className="text-blue-600" size={20} />,
      isFavorite: true,
      tags: ['数据分析', '气候研究']
    },
    {
      title: "Neural Network Research",
      description: "Deep learning model development for predictive analytics in healthcare using state-of-the-art neural network architectures",
      date: "2024/3/11",
      members: {
        count: 3,
        avatars: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'pending' as const,
      progress: 25,
      icon: <Brain className="text-purple-600" size={20} />,
      tags: ['深度学习', '医疗']
    },
    {
      title: "Statistical Analysis",
      description: "Advanced statistical modeling project for market research and forecasting using machine learning techniques",
      date: "2024/3/10",
      members: {
        count: 2,
        avatars: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face"
        ]
      },
      status: 'completed' as const,
      progress: 100,
      icon: <FileText className="text-green-600" size={20} />,
      tags: ['统计分析', '市场研究']
    }
  ];

  return (
    <div className="space-y-4">
      <ProjectHeader title="项目" />
      <div className="space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}