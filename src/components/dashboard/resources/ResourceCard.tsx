import React from 'react';
import { Card } from '../../common/Card';
import { formatPercentage, getStatusColor } from '../../../utils/formatters';

interface ResourceDetail {
  label: string;
  value: string;
}

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  percentage: number;
  status: 'good' | 'warning' | 'critical';
  details?: ResourceDetail[];
}

export function ResourceCard({ 
  icon, 
  title, 
  value, 
  percentage,
  details 
}: ResourceCardProps) {
  const status = getStatusColor(percentage);
  
  const statusColors = {
    good: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  };

  return (
    <Card className="p-4 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        <span className="text-sm text-gray-500">{value}</span>
      </div>
      
      <div className="space-y-3">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${statusColors[status]} transition-all duration-300`}
            style={{ width: formatPercentage(percentage) }}
          />
        </div>

        {details && (
          <div className="grid grid-cols-2 gap-2 pt-2 text-sm">
            {details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-500">{detail.label}</span>
                <span className="font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}