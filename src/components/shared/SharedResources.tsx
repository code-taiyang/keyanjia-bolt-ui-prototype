import React from 'react';
import { Database, Users, Star, Share2 } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';

interface SharedResource {
  id: string;
  type: 'project' | 'dataset' | 'document';
  name: string;
  description: string;
  team: {
    id: string;
    name: string;
    avatar: string;
  };
  sharedBy: {
    name: string;
    avatar: string;
  };
  sharedAt: string;
  favorite: boolean;
}

export function SharedResources() {
  const sharedResources: SharedResource[] = [
    {
      id: '1',
      type: 'project',
      name: 'Climate Data Analysis',
      description: 'Global temperature patterns analysis project with visualization',
      team: {
        id: 'team1',
        name: '气候研究组',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      sharedBy: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      sharedAt: '2024/3/12',
      favorite: true
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">共享资源</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">全部</button>
          <button className="text-sm text-gray-600 hover:text-gray-900">项目</button>
          <button className="text-sm text-gray-600 hover:text-gray-900">数据集</button>
          <button className="text-sm text-gray-600 hover:text-gray-900">文档</button>
        </div>
      </div>

      <div className="grid gap-4">
        {sharedResources.map((resource) => (
          <Card key={resource.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-50">
                <Database className="text-blue-600" size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {resource.favorite && (
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    )}
                    <Share2 size={16} className="text-gray-400" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{resource.team.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar src={resource.sharedBy.avatar} alt={resource.sharedBy.name} size="sm" />
                    <span className="text-sm text-gray-600">
                      由 {resource.sharedBy.name} 共享
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{resource.sharedAt}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}