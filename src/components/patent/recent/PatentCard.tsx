import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Patent {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'in_progress' | 'completed';
  type: string;
  lastModified: string;
  progress: number;
}

interface PatentCardProps {
  patent: Patent;
}

export function PatentCard({ patent }: PatentCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{patent.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{patent.description}</p>
        </div>
        <ArrowRight size={16} className="text-gray-400" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={
            patent.status === 'completed' ? 'success' :
            patent.status === 'in_progress' ? 'warning' : 'default'
          }>
            {patent.status === 'completed' ? '已完成' :
             patent.status === 'in_progress' ? '撰写中' : '草稿'}
          </Badge>
          <span className="text-sm text-gray-500">{patent.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              patent.status === 'completed' ? 'bg-green-500' :
              patent.progress > 60 ? 'bg-blue-500' :
              'bg-yellow-500'
            }`}
            style={{ width: `${patent.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{patent.type}</span>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{patent.lastModified}</span>
        </div>
      </div>
    </Card>
  );
}