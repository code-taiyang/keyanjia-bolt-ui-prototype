import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Card } from '../../common/Card';

interface StatCardProps {
  label: string;
  value: string | number;
  change: {
    value: number;
    trend: 'up' | 'down';
  };
}

export function StatCard({ label, value, change }: StatCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        <BarChart3 size={18} className="text-gray-400" />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold">{value}</span>
        <div className={`flex items-center text-sm ${
          change.trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change.trend === 'up' ? '↑' : '↓'} {Math.abs(change.value)}%
        </div>
      </div>
    </Card>
  );
}