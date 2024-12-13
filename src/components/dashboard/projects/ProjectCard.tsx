import React from 'react';
import { Calendar, Users, Star, ChevronRight } from 'lucide-react';
import { Badge } from '../../common/Badge';
import { Avatar } from '../../common/Avatar';
import { Card } from '../../common/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  members: {
    count: number;
    avatars: string[];
  };
  status: 'active' | 'completed' | 'pending';
  progress: number;
  icon: React.ReactNode;
  isFavorite?: boolean;
  tags?: string[];
}

export function ProjectCard({ 
  title, 
  description, 
  date, 
  members, 
  status, 
  progress,
  icon, 
  isFavorite,
  tags 
}: ProjectCardProps) {
  const statusLabels = {
    active: { text: '进行中', variant: 'success' as const },
    completed: { text: '已完成', variant: 'default' as const },
    pending: { text: '待开始', variant: 'warning' as const }
  };

  return (
    <Card className="group hover:border-gray-300 transition-all duration-200">
      <div className="p-4">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                {isFavorite && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
              </div>
              <Badge variant={statusLabels[status].variant}>
                {statusLabels[status].text}
              </Badge>
            </div>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={16} />
                  {members.count}人
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {members.avatars.slice(0, 3).map((avatar, index) => (
                    <Avatar key={index} src={avatar} alt={`Team member ${index + 1}`} size="sm" />
                  ))}
                  {members.avatars.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600 border border-white">
                      +{members.avatars.length - 3}
                    </div>
                  )}
                </div>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      status === 'completed' ? 'bg-green-500' :
                      progress > 80 ? 'bg-green-500' :
                      progress > 30 ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}