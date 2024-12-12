import React from 'react';
import { BarChart2 } from 'lucide-react';

interface AnalysisChartProps {
  title: string;
  description: string;
  type: 'bar' | 'line' | 'pie' | 'scatter';
  data?: any;
  loading?: boolean;
}

export function AnalysisChart({ 
  title, 
  description, 
  type, 
  data, 
  loading = false 
}: AnalysisChartProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
        <div className="w-12 h-12 mb-4 relative">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-gray-500">正在生成图表...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
        <BarChart2 size={32} className="text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">暂无数据</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      
      <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center">
        {/* 这里集成实际的图表库，如 Chart.js 或 ECharts */}
        <BarChart2 size={32} className="text-gray-400" />
      </div>
    </div>
  );
}