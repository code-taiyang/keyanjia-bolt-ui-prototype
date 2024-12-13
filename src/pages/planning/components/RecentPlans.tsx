import React from 'react';
import { ArrowRight, ClipboardList, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

interface Plan {
  id: string;
  title: string;
  description: string;
  type: 'short_term' | 'mid_term' | 'long_term';
  status: 'draft' | 'in_progress' | 'completed';
  lastModified: string;
  progress: number;
  milestones: number;
  tasks: number;
}

export function RecentPlans() {
  const plans: Plan[] = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用研究',
      description: '探索深度学习模型在气候变化预测中的应用前景和关键技术',
      type: 'mid_term',
      status: 'in_progress',
      lastModified: '10分钟前',
      progress: 35,
      milestones: 5,
      tasks: 12
    },
    {
      id: '2',
      title: '神经网络模型优化研究',
      description: '研究神经网络模型的性能优化方法和实现策略',
      type: 'short_term',
      status: 'draft',
      lastModified: '2小时前',
      progress: 15,
      milestones: 3,
      tasks: 8
    },
    {
      id: '3',
      title: '气候变化预测系统开发',
      description: '基于机器学习的气候变化预测系统的设计与实现',
      type: 'long_term',
      status: 'completed',
      lastModified: '1天前',
      progress: 100,
      milestones: 8,
      tasks: 24
    }
  ];

  const getTypeIcon = (type: Plan['type']) => {
    switch (type) {
      case 'short_term':
        return <Target className="text-blue-600" size={20} />;
      case 'mid_term':
        return <Brain className="text-purple-600" size={20} />;
      case 'long_term':
        return <ClipboardList className="text-green-600" size={20} />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近规划</h2>
        <Link 
          to="/activities?type=planning"
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Link key={plan.id} to={`/planning/${plan.id}`}>
            <Card className="p-4 hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  {getTypeIcon(plan.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-900 truncate">
                      {plan.title}
                    </h3>
                    <Badge variant={
                      plan.status === 'completed' ? 'success' :
                      plan.status === 'in_progress' ? 'warning' : 'default'
                    }>
                      {plan.status === 'completed' ? '已完成' :
                       plan.status === 'in_progress' ? '进行中' : '草稿'}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {plan.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{plan.milestones} 个里程碑</span>
                        <span>{plan.tasks} 个任务</span>
                      </div>
                      <span className="text-sm text-gray-500">{plan.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          plan.status === 'completed' ? 'bg-green-500' :
                          plan.progress > 60 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-500">
                    {plan.lastModified}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}