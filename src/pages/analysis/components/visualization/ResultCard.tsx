import React from 'react';
import { BarChart2, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { AnalysisResult } from '../../../../types/analysis';

interface ResultCardProps {
  result: AnalysisResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const getIcon = () => {
    switch (result.type) {
      case 'overview':
        return <BarChart2 size={20} className="text-blue-600" />;
      case 'trend':
        return <TrendingUp size={20} className="text-green-600" />;
      case 'alert':
        return <AlertCircle size={20} className="text-yellow-600" />;
      default:
        return <CheckCircle size={20} className="text-purple-600" />;
    }
  };

  const getBackgroundColor = () => {
    switch (result.type) {
      case 'overview':
        return 'bg-blue-50';
      case 'trend':
        return 'bg-green-50';
      case 'alert':
        return 'bg-yellow-50';
      default:
        return 'bg-purple-50';
    }
  };

  return (
    <div className={`p-4 rounded-lg ${getBackgroundColor()}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">{result.title}</h3>
        {getIcon()}
      </div>
      <p className="mt-2 text-2xl font-semibold">
        {typeof result.data === 'number' 
          ? result.data.toLocaleString()
          : result.data}
      </p>
      <p className="mt-1 text-sm text-gray-500">{result.description}</p>
    </div>
  );
}