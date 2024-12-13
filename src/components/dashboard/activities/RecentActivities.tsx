import React from 'react';
import { Clock, Users } from 'lucide-react';
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

interface RecentActivitiesProps {
  scope: 'personal' | 'team';
}

export function RecentActivities({ scope }: RecentActivitiesProps) {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析',
      description: '完成数据预处理和初步分析',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      tool: 'data-analysis',
      time: '10分钟前',
      scope: 'personal'
    },
    {
      id: '2',
      type: 'experiment',
      title: '模型验证实验',
      description: '进行神经网络模型性能测试',
      user: {
        name: 'Team AI Lab',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      tool: 'experiment',
      time: '2小时前',
      scope: 'team'
    }
  ].filter(activity => activity.scope === scope);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          {scope === 'personal' ? '个人动态' : '团队动态'}
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          查看全部
        </button>
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