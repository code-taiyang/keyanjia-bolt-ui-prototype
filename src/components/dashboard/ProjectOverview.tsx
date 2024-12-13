import React from 'react';
import { Card } from '../common/Card';
import { FolderKanban, Clock, Brain } from 'lucide-react';

export function ProjectOverview() {
  const stats = [
    {
      icon: <FolderKanban className="text-blue-600" size={20} />,
      label: '进行中的课题',
      value: '3',
      change: '+1',
      changeType: 'increase' as const
    },
    {
      icon: <Clock className="text-green-600" size={20} />,
      label: '研究活动',
      value: '12',
      change: '+3',
      changeType: 'increase' as const
    },
    {
      icon: <Brain className="text-purple-600" size={20} />,
      label: '使用工具',
      value: '5',
      change: '+2',
      changeType: 'increase' as const
    }
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 rounded-lg bg-gray-50">
              {stat.icon}
            </div>
            <span className={`text-xs font-medium ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-semibold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        </Card>
      ))}
    </>
  );
}