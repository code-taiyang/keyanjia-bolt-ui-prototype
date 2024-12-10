import React from 'react';
import { BarChart2, PieChart, LineChart, ScatterPlot } from 'lucide-react';
import { AnalysisResult } from '../../../../types/analysis';
import { ResultCard } from './ResultCard';
import { ChartContainer } from './ChartContainer';

interface AnalysisResultsProps {
  results: AnalysisResult[];
  isLoading?: boolean;
}

export function AnalysisResults({ results, isLoading = false }: AnalysisResultsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="aspect-[4/3] bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="text-center py-12">
        <BarChart2 className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">暂无分析结果</h3>
        <p className="mt-2 text-sm text-gray-500">请等待分析完成...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 数据概览 */}
      <section>
        <h2 className="text-lg font-medium mb-4">数据概览</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results
            .filter(result => result.type === 'overview')
            .map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
        </div>
      </section>

      {/* 统计分析 */}
      <section>
        <h2 className="text-lg font-medium mb-4">统计分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results
            .filter(result => result.type === 'statistics')
            .map((result, index) => (
              <ChartContainer key={index} result={result} />
            ))}
        </div>
      </section>

      {/* 相关性分析 */}
      <section>
        <h2 className="text-lg font-medium mb-4">相关性分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results
            .filter(result => result.type === 'correlation')
            .map((result, index) => (
              <ChartContainer key={index} result={result} />
            ))}
        </div>
      </section>

      {/* 时间序列分析 */}
      <section>
        <h2 className="text-lg font-medium mb-4">时间序列分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results
            .filter(result => result.type === 'timeSeries')
            .map((result, index) => (
              <ChartContainer key={index} result={result} />
            ))}
        </div>
      </section>
    </div>
  );
}