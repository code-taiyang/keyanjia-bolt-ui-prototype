import React from 'react';
import { Brain, FileText, TestTubes, Database, Clock, Users } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface Activity {
  id: string;
  type: 'analysis' | 'document' | 'experiment' | 'dataset';
  title: string;
  description: string;
  project?: {
    name: string;
    team?: string;
  };
  tool: string;
  updatedAt: string;
  status: 'in_progress' | 'completed' | 'reviewing';
}

export function ResearchActivities() {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析',
      description: '使用机器学习模型分析全球温度变化趋势',
      project: {
        name: '气候变化研究',
        team: '气候研究组'
      },
      tool: '数据分析助手',
      updatedAt: '10分钟前',
      status: 'in_progress'
    },
    {
      id: '2',
      type: 'document',
      title: '文献阅读笔记',
      description: '深度学习在气候预测中的应用综述',
      tool: '文献助手',
      updatedAt: '1小时前',
      status: 'completed'
    },
    {
      id: '3',
      type: 'experiment',
      title: '模型验证实验',
      description: '神经网络模型性能测试与优化',
      project: {
        name: '神经网络优化',
        team: '人工智能实验室'
      },
      tool: '实验助手',
      updatedAt: '2小时前',
      status: 'reviewing'
    }
  ];

  const getActivityIcon = (type: Activity['type']) => {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近研究活动</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          查看全部
        </button>
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
                  <Badge variant={
                    activity.status === 'completed' ? 'default' :
                    activity.status === 'in_progress' ? 'success' : 'warning'
                  }>
                    {activity.status === 'completed' ? '已完成' :
                     activity.status === 'in_progress' ? '进行中' : '审核中'}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    {activity.project && (
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{activity.project.team}</span>
                        <span>·</span>
                        <span>{activity.project.name}</span>
                      </div>
                    )}
                    <span>工具: {activity.tool}</span>
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
    </div>
  );
}