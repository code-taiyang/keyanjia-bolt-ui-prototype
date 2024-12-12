import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in_progress' | 'completed';
  lastModified: string;
  progress: number;
  team: string;
}

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{experiment.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{experiment.description}</p>
        </div>
        <ArrowRight size={16} className="text-gray-400" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={
            experiment.status === 'completed' ? 'success' :
            experiment.status === 'in_progress' ? 'warning' : 'default'
          }>
            {experiment.status === 'completed' ? '已完成' :
             experiment.status === 'in_progress' ? '进行中' : '计划中'}
          </Badge>
          <span className="text-sm text-gray-500">{experiment.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              experiment.status === 'completed' ? 'bg-green-500' :
              experiment.progress > 60 ? 'bg-blue-500' :
              'bg-yellow-500'
            }`}
            style={{ width: `${experiment.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Users size={14} />
          <span>{experiment.team}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{experiment.lastModified}</span>
        </div>
      </div>
    </Card>
  );
}