import React from 'react';
import { ActivityCard } from './ActivityCard';

export function TeamActivities() {
  const activities = [
    {
      id: '1',
      type: 'experiment',
      title: '模型验证实验',
      description: '神经网络模型性能测试与优化',
      project: {
        name: '神经网络优化',
        team: '人工智能实验室'
      },
      tool: '实验助手',
      updatedAt: '2小时前'
    }
  ];

  return (
    <div className="space-y-4">
      {activities.map(activity => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </div>
  );
}