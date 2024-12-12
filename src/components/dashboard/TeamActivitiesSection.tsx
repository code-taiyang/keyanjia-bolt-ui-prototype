import React from 'react';
import { Clock, Users, Brain, FileText, Database, TestTubes } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

interface TeamActivity {
  id: string;
  type: 'analysis' | 'document' | 'experiment' | 'dataset';
  title: string;
  description: string;
  team: {
    name: string;
    avatar: string;
  };
  project: {
    name: string;
  };
  updatedAt: string;
  status: 'in_progress' | 'completed' | 'reviewing';
}

export function TeamActivitiesSection() {
  const activities: TeamActivity[] = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析报告',
      description: '全球温度变化趋势分析与模型验证',
      team: {
        name: '气候研究组',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      project: {
        name: '气候变化研究'
      },
      updatedAt: '10分钟前',
      status: 'in_progress'
    },
    {
      id: '2',
      type: 'experiment',
      title: '神经网络性能测试',
      description: '模型优化效果验证与性能测试',
      team: {
        name: '人工智能实验室',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      project: {
        name: '神经网络优化'
      },
      updatedAt: '2小时前',
      status: 'reviewing'
    }
  ];

  const getActivityIcon = (type: TeamActivity['type']) => {
    switch (type) {
      case 'analysis':
        return <Brain className="text-purple-600" size={20} />;
      case 'document':
        return <FileText className="text-blue-600" size={20} />;
      case 'experiment':
        return <TestTubes className="text-green-600" size={20} />;
      case 'dataset':
        return <Database className="text-orange-600" size={20} />;
    }
  };

  const getStatusBadge = (status: TeamActivity['status']) => {
    switch (status) {
      case 'in_progress':
        return <Badge variant="success">进行中</Badge>;
      case 'completed':
        return <Badge variant="default">已完成</Badge>;
      case 'reviewing':
        return <Badge variant="warning">审核中</Badge>;
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">团队研究活动</h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">查看全部</button>
        </div>
      </div>

      <div className="grid gap-4">
        {activities.map(activity => (
          <Card key={activity.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                  </div>
                  {getStatusBadge(activity.status)}
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{activity.team.name}</span>
                    </div>
                    <span>项目: {activity.project.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{activity.updatedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}