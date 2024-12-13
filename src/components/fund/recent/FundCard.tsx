import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Fund } from '../../../types/fund';

interface FundCardProps {
  fund: Fund;
}

export function FundCard({ fund }: FundCardProps) {
  const getStatusBadgeVariant = (status: Fund['status']) => {
    switch (status) {
      case 'submitted':
        return 'success';
      case 'in_progress':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: Fund['status']) => {
    switch (status) {
      case 'submitted':
        return '已提交';
      case 'in_progress':
        return '撰写中';
      default:
        return '草稿';
    }
  };

  const getProgressBarColor = (status: Fund['status'], progress: number) => {
    if (status === 'submitted') return 'bg-green-500';
    if (progress > 60) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{fund.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{fund.description}</p>
        </div>
        <Badge variant={getStatusBadgeVariant(fund.status)}>
          {getStatusLabel(fund.status)}
        </Badge>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              <span>截止: {fund.deadline}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              <span>{new Date(fund.lastModified).toLocaleDateString()}</span>
            </span>
          </div>
          <span className="text-sm text-gray-500">{fund.progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${
              getProgressBarColor(fund.status, fund.progress)
            }`}
            style={{ width: `${fund.progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
}