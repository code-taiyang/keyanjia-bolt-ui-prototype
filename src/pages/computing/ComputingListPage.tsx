import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RecentComputations } from './components/RecentComputations';

export function ComputingListPage() {
  const navigate = useNavigate();

  const handleNewComputation = () => {
    // Navigate to the computing assistant page for new computation
    navigate('/tools/coding/computing');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">科研计算助手</h1>
            <p className="text-gray-500 mt-1">AI驱动的科研计算与分析</p>
          </div>
          
          <button 
            onClick={handleNewComputation}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建计算</span>
          </button>
        </div>

        {/* Recent Computations Section */}
        <div className="space-y-8">
          <RecentComputations />
        </div>
      </div>
    </div>
  );
}