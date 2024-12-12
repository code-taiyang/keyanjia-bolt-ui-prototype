import React, { useState } from 'react';
import { ActivityTabs } from '../components/activities/tabs/ActivityTabs';
import { ActivityFilters } from '../components/activities/filters/ActivityFilters';
import { ActivityCard } from '../components/activities/cards/ActivityCard';

export function ActivityList() {
  const [activeTab, setActiveTab] = useState('writing');
  const [searchQuery, setSearchQuery] = useState('');

  // 示例活动数据
  const activities = [
    {
      id: '1',
      type: 'writing',
      title: '深度学习在气候预测中的应用',
      description: '探讨深度学习模型在气候变化预测中的应用和优势',
      tool: 'writing',
      project: {
        name: '气候变化研究',
        team: '气候研究组'
      },
      status: 'in_progress',
      tags: ['深度学习', '气候预测'],
      lastUpdated: '10分钟前'
    },
    {
      id: '2',
      type: 'analysis',
      title: '气候数据分析报告',
      description: '全球温度变化趋势分析与可视化',
      tool: 'data-analysis',
      project: {
        name: '气候变化研究',
        team: '数据分析组'
      },
      status: 'completed',
      tags: ['数据分析', '可视化'],
      lastUpdated: '2小时前'
    },
    {
      id: '3',
      type: 'algorithm',
      title: '温度预测算法优化',
      description: '基于深度学习的温度预测算法实现与优化',
      tool: 'algorithm',
      project: {
        name: '气候预测模型',
        team: 'AI实验室'
      },
      status: 'in_progress',
      tags: ['算法优化', '深度学习'],
      lastUpdated: '1天前'
    },
    {
      id: '4',
      type: 'computing',
      title: '气候模型计算',
      description: '大规模气候模型的并行计算实现',
      tool: 'computing',
      project: {
        name: '气候模拟系统',
        team: '高性能计算组'
      },
      status: 'completed',
      tags: ['并行计算', '模型模拟'],
      lastUpdated: '2天前'
    }
  ];

  // 过滤活动
  const filteredActivities = activities.filter(activity => {
    const matchesTab = activeTab === activity.type;
    const matchesSearch = searchQuery === '' || 
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // 统计各类型活动数量
  const counts = {
    writing: activities.filter(a => a.type === 'writing').length,
    analysis: activities.filter(a => a.type === 'analysis').length,
    algorithm: activities.filter(a => a.type === 'algorithm').length,
    computing: activities.filter(a => a.type === 'computing').length
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">研究活动</h1>
          <p className="text-gray-500 mt-1">查看和管理您的研究活动记录</p>
        </div>

        <ActivityTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        <ActivityFilters
          onSearch={setSearchQuery}
          onFilterChange={() => {}}
          onSortChange={() => {}}
        />

        <div className="space-y-4">
          {filteredActivities.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
            />
          ))}
          
          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无相关活动记录</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}