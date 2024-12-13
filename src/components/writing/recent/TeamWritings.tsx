import React from 'react';
import { ScrollText, Clock, Users, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Avatar } from '../../common/Avatar';
import { Link } from 'react-router-dom';

interface TeamWriting {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: 'draft' | 'in_progress' | 'completed';
  wordCount: number;
  team: {
    name: string;
    avatar: string;
  };
  collaborators: Array<{
    avatar: string;
    name: string;
  }>;
}

export function TeamWritings() {
  const writings: TeamWriting[] = [
    {
      id: '1',
      title: '全球气候变化研究综述',
      template: 'Nature期刊',
      lastModified: '30分钟前',
      status: 'in_progress',
      wordCount: 4500,
      team: {
        name: '气候研究组',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      collaborators: [
        {
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
          name: 'John Doe'
        },
        {
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
          name: 'Jane Smith'
        }
      ]
    },
    {
      id: '2',
      title: '深度学习在环境监测中的应用',
      template: 'Science期刊',
      lastModified: '2小时前',
      status: 'draft',
      wordCount: 2800,
      team: {
        name: '人工智能实验室',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      collaborators: [
        {
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face',
          name: 'Jane Smith'
        },
        {
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
          name: 'Mike Johnson'
        }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">团队写作</h2>
        <Link 
          to="/team/writings" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {writings.map((writing) => (
          <Card 
            key={writing.id}
            className="p-4 cursor-pointer hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                <ScrollText className="text-blue-600" size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-gray-900 truncate">
                    {writing.title}
                  </h3>
                  <Badge variant={
                    writing.status === 'completed' ? 'success' :
                    writing.status === 'in_progress' ? 'warning' : 'default'
                  }>
                    {writing.status === 'completed' ? '已完成' :
                     writing.status === 'in_progress' ? '写作中' : '草稿'}
                  </Badge>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <Users size={14} />
                  <span>{writing.team.name}</span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {writing.collaborators.map((collaborator, index) => (
                      <Avatar
                        key={index}
                        src={collaborator.avatar}
                        alt={collaborator.name}
                        size="sm"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{writing.lastModified}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}