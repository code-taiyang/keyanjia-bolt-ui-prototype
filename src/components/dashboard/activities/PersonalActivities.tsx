import React from 'react';
import { ActivityCard } from './ActivityCard';

export function PersonalActivities() {
  const activities = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析',
      description: '使用机器学习模型分析全球温度变化趋势',
      tool: '数据分析助手',
      project: {
        name: '气候变化研究',
        team: '气候研究组'
      },
      updatedAt: '10分钟前'
    },
    {
      id: '2',
      type: 'document',
      title: '文献阅读笔记',
      description: '深度学习在气候预测中的应用综述',
      tool: '文献助手',
      updatedAt: '1小时前'
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