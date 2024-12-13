import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Plan } from '../../../types/planning';

interface PlanningCardProps {
  plan: Plan;
}

export function PlanningCard({ plan }: PlanningCardProps) {
  const getStatusBadgeVariant = (status: Plan['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in_progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: Plan['status']) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'in_progress':
        return '进行中';
      default:
        return '草稿';
    }
  };

  const getProgressBarColor = (status: Plan['status'], progress: number) => {
    if (status === 'completed') return 'bg-green-500';
    if (progress > 60) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{plan.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
        </div>
        <Badge variant={getStatusBadgeVariant(plan.status)}>
          {getStatusLabel(plan.status)}
        </Badge>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{plan.milestones} 个里程碑</span>
            <span>{plan.tasks} 个任务</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              <span>{new Date(plan.lastModified).toLocaleDateString()}</span>
            </span>
          </div>
          <span className="text-sm text-gray-500">{plan.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              getProgressBarColor(plan.status, plan.progress)
            }`}
            style={{ width: `${plan.progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
}