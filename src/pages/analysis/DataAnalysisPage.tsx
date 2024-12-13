import React from 'react';
import { Plus } from 'lucide-react';
import { RecentAnalysis } from './components/RecentAnalysis';
import { useNavigate } from 'react-router-dom';

export function DataAnalysisPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">数据分析助手</h1>
            <p className="text-gray-500 mt-1">AI驱动的数据分析助手</p>
          </div>
          
          <button 
            onClick={() => navigate('/analysis/new')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建分析</span>
          </button>
        </div>

        {/* Recent Analysis Section */}
        <div className="space-y-8">
          <RecentAnalysis />
        </div>
      </div>
    </div>
  );
}