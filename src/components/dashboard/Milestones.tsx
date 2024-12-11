import React from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import { Card } from '../common/Card';

interface Milestone {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  status: 'upcoming' | 'completed' | 'overdue';
}

export function Milestones() {
  const milestones: Milestone[] = [
    {
      id: '1',
      title: '完成数据预处理',
      project: '气候变化研究',
      dueDate: '2024/3/20',
      status: 'upcoming'
    },
    {
      id: '2',
      title: '模型验证报告',
      project: '神经网络优化',
      dueDate: '2024/3/18',
      status: 'overdue'
    },
    {
      id: '3',
      title: '文献综述初稿',
      project: '气候变化研究',
      dueDate: '2024/3/15',
      status: 'completed'
    }
  ];

  const getStatusIcon = (status: Milestone['status']) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="text-blue-600" size={16} />;
      case 'completed':
        return <CheckCircle2 className="text-green-600" size={16} />;
      case 'overdue':
        return <Calendar className="text-red-600" size={16} />;
    }
  };

  const getStatusColor = (status: Milestone['status']) => {
    switch (status) {
      case 'upcoming':
        return 'text-blue-600';
      case 'completed':
        return 'text-green-600';
      case 'overdue':
        return 'text-red-600';
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">重要里程碑</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          查看全部
        </button>
      </div>

      <div className="space-y-4">
        {milestones.map(milestone => (
          <div 
            key={milestone.id}
            className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0"
          >
            {getStatusIcon(milestone.status)}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900">{milestone.title}</h3>
              <p className="text-sm text-gray-500">{milestone.project}</p>
              <div className={`text-xs mt-1 ${getStatusColor(milestone.status)}`}>
                {milestone.dueDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}