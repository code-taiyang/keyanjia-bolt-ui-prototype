import React from 'react';
import { Clock, Users, Tag, MoreVertical } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Avatar } from '../../common/Avatar';
import { getActivityIcon } from '../utils/activityIcons';
import { ToolBadge } from './ToolBadge';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onShare?: (id: string) => void;
}

export function ActivityCard({ activity, onEdit, onDelete, onShare }: ActivityCardProps) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {getActivityIcon(activity.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <Badge variant={
                  activity.status === 'completed' ? 'success' :
                  activity.status === 'in_progress' ? 'warning' : 'default'
                }>
                  {activity.status === 'completed' ? '已完成' :
                   activity.status === 'in_progress' ? '进行中' : '已归档'}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{activity.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  className="p-1.5 hover:bg-gray-100 rounded-lg"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <MoreVertical size={16} className="text-gray-400" />
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border rounded-lg shadow-lg py-1 z-10">
                    <button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        onEdit?.(activity.id);
                        setShowMenu(false);
                      }}
                    >
                      编辑活动
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      onClick={() => {
                        onDelete?.(activity.id);
                        setShowMenu(false);
                      }}
                    >
                      删除活动
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {activity.tags && activity.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-3">
              <Tag size={14} className="text-gray-400" />
              <div className="flex flex-wrap gap-1">
                {activity.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              {activity.project && (
                <div className="flex items-center gap-2">
                  <Users size={14} />
                  <span>{activity.project.name}</span>
                </div>
              )}
              <ToolBadge toolId={activity.tool} />
            </div>
            
            <div className="flex items-center gap-4">
              {activity.collaborators && (
                <div className="flex -space-x-2">
                  {activity.collaborators.map((collaborator, index) => (
                    <Avatar
                      key={index}
                      src={collaborator.avatar}
                      alt={collaborator.name}
                      size="sm"
                    />
                  ))}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{activity.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}