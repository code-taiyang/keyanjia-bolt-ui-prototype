import React from 'react';
import { BarChart2, LineChart, PieChart } from 'lucide-react';

interface ResultsPanelProps {
  steps: Array<{
    id: string;
    title: string;
    description: string;
    status: string;
    progress?: number;
  }>;
  currentStep: number;
  isComputing: boolean;
  isComplete: boolean;
}

export function ResultsPanel({ 
  steps, 
  currentStep, 
  isComputing,
  isComplete 
}: ResultsPanelProps) {
  console.log('ResultsPanel props:', { steps, currentStep, isComputing, isComplete });

  if (isComputing) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-500">正在计算中...</p>
        </div>
      </div>
    );
  }

  if (!isComplete) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <BarChart2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">请先运行计算以查看结果</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Results Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
            计算结果概览
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">计算时间</div>
              <div className="text-lg font-medium text-gray-900">2.3s</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">内存占用</div>
              <div className="text-lg font-medium text-gray-900">256MB</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">计算精度</div>
              <div className="text-lg font-medium text-gray-900">99.9%</div>
            </div>
          </div>
        </div>

        {/* Visualization Results */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <LineChart className="h-5 w-5 text-blue-500 mr-2" />
            可视化结果
          </h3>
          <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">计算结果图表</span>
          </div>
        </div>

        {/* Analysis Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <PieChart className="h-5 w-5 text-blue-500 mr-2" />
            分析总结
          </h3>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600">
              计算结果显示，在给定参数范围内，模型表现稳定。
              计算精度达到99.9%，运行时间为2.3秒，内存占用峰值为256MB。
              与基准模型相比，性能提升了15%，同时减少了30%的计算资源消耗。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}