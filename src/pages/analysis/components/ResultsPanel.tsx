import React from 'react';
import { ChevronRight, Users, TrendingUp, LineChart, PieChart } from 'lucide-react';

interface ResultsPanelProps {
  results: any[];
  isAnalyzing: boolean;
}

export function ResultsPanel({ results, isAnalyzing }: ResultsPanelProps) {
  if (isAnalyzing) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-500">正在分析数据...</p>
        </div>
      </div>
    );
  }

  if (!results?.length) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-500">
        暂无分析结果
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <Users className="h-5 w-5 text-blue-500 mr-2" />
            分析结果
          </h3>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}