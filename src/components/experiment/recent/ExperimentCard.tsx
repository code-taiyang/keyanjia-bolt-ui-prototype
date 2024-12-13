import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Experiment } from '../../../types/experiment';

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const getStatusBadgeVariant = (status: Experiment['status']) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in_progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: Experiment['status']) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'in_progress':
        return '进行中';
      default:
        return '计划中';
    }
  };

  const getProgressBarColor = (status: Experiment['status'], progress: number) => {
    if (status === 'completed') return 'bg-green-500';
    if (progress > 60) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{experiment.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{experiment.description}</p>
        </div>
        <Badge variant={getStatusBadgeVariant(experiment.status)}>
          {getStatusLabel(experiment.status)}
        </Badge>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{experiment.type}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              <span>{new Date(experiment.lastModified).toLocaleDateString()}</span>
            </span>
          </div>
          <span className="text-sm text-gray-500">{experiment.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              getProgressBarColor(experiment.status, experiment.progress)
            }`}
            style={{ width: `${experiment.progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
}