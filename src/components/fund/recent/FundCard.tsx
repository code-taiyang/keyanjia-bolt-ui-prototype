import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Fund {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'in_progress' | 'submitted';
  type: string;
  lastModified: string;
  progress: number;
  deadline: string;
}

interface FundCardProps {
  fund: Fund;
}

export function FundCard({ fund }: FundCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{fund.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{fund.description}</p>
        </div>
        <ArrowRight size={16} className="text-gray-400" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={
            fund.status === 'submitted' ? 'success' :
            fund.status === 'in_progress' ? 'warning' : 'default'
          }>
            {fund.status === 'submitted' ? '已提交' :
             fund.status === 'in_progress' ? '撰写中' : '草稿'}
          </Badge>
          <span className="text-sm text-gray-500">{fund.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              fund.status === 'submitted' ? 'bg-green-500' :
              fund.progress > 60 ? 'bg-blue-500' :
              'bg-yellow-500'
            }`}
            style={{ width: `${fund.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>截止: {fund.deadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{fund.lastModified}</span>
        </div>
      </div>
    </Card>
  );
}