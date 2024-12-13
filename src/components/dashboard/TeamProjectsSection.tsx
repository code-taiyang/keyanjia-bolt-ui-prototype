import React from 'react';
import { Users, Star, Clock } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

interface TeamProject {
  id: string;
  name: string;
  description: string;
  team: {
    name: string;
    avatar: string;
  };
  members: {
    count: number;
    avatars: string[];
  };
  status: 'active' | 'completed' | 'pending';
  progress: number;
  lastActive: string;
}

export function TeamProjectsSection() {
  const teamProjects: TeamProject[] = [
    {
      id: '1',
      name: '气候变化研究',
      description: '全球气候变化趋势分析与预测模型研究',
      team: {
        name: '气候研究组',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      members: {
        count: 5,
        avatars: [
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
        ]
      },
      status: 'active',
      progress: 75,
      lastActive: '10分钟前'
    },
    {
      id: '2',
      name: '神经网络优化',
      description: '深度学习模型性能优化与应用研究',
      team: {
        name: '人工智能实验室',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      members: {
        count: 4,
        avatars: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
        ]
      },
      status: 'active',
      progress: 45,
      lastActive: '2小时前'
    }
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">团队研究课题</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">查看全部</button>
        </div>
      </div>

      <div className="grid gap-4">
        {teamProjects.map(project => (
          <Card key={project.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <Avatar src={project.team.avatar} alt={project.team.name} size="md" />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                  </div>
                  <Badge variant={
                    project.status === 'completed' ? 'default' :
                    project.status === 'active' ? 'success' : 'warning'
                  }>
                    {project.status === 'completed' ? '已完成' :
                     project.status === 'active' ? '进行中' : '待开始'}
                  </Badge>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{project.team.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{project.lastActive}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              project.progress > 80 ? 'bg-green-500' :
                              project.progress > 30 ? 'bg-blue-500' :
                              'bg-yellow-500'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{project.progress}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.members.avatars.map((avatar, index) => (
                          <Avatar key={index} src={avatar} alt={`Member ${index + 1}`} size="sm" />
                        ))}
                      </div>
                      {project.members.avatars.length < project.members.count && (
                        <span className="text-xs text-gray-500">
                          +{project.members.count - project.members.avatars.length}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}