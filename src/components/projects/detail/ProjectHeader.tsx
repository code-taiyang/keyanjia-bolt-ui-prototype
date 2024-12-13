import React from 'react';
import { Share2, Star, MoreVertical, Users } from 'lucide-react';
import { Avatar } from '../../common/Avatar';

interface ProjectHeaderProps {
  title: string;
  description: string;
  type: string;
  status: 'active' | 'completed' | 'pending';
  members: {
    count: number;
    avatars: string[];
  };
}

export function ProjectHeader({ title, description, type, status, members }: ProjectHeaderProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  const statusLabels = {
    active: '进行中',
    completed: '已完成',
    pending: '待开始'
  };

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
              <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${statusColors[status]}`}>
                {statusLabels[status]}
              </span>
            </div>
            <p className="text-gray-500 mt-1">{description}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-gray-500">{type}</span>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gray-400" />
                <div className="flex -space-x-2">
                  {members.avatars.map((avatar, index) => (
                    <Avatar key={index} src={avatar} alt={`Member ${index + 1}`} size="sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{members.count} 名成员</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Star size={20} className="text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share2 size={20} className="text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}