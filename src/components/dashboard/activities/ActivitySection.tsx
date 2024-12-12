import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../../common/Card';
import { Avatar } from '../../common/Avatar';
import { getActivityIcon } from '../../activities/utils/activityIcons';
import { ToolBadge } from '../../activities/cards/ToolBadge';

interface Activity {
  id: string;
  type: 'analysis' | 'experiment' | 'literature' | 'writing';
  title: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  tool: string;
  time: string;
  scope: 'personal' | 'team';
}

interface ActivitySectionProps {
  title: string;
  activities: Activity[];
  viewAll?: () => void;
}

export function ActivitySection({ title, activities, viewAll }: ActivitySectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        {viewAll && (
          <button 
            onClick={viewAll}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            查看全部
          </button>
        )}
      </div>

      <div className="space-y-3">
        {activities.map(activity => (
          <Card key={activity.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div>
                  <h4 className="font-medium text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                </div>

                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar 
                        src={activity.user.avatar} 
                        alt={activity.user.name}
                        size="sm"
                      />
                      <span>{activity.user.name}</span>
                    </div>
                    <ToolBadge toolId={activity.tool} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{activity.time}</span>
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