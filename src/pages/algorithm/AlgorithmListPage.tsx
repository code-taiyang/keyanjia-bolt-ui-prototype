import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RecentAlgorithms } from './components/RecentAlgorithms';

export function AlgorithmListPage() {
  const navigate = useNavigate();

  const handleNewAlgorithm = () => {
    // Navigate to the algorithm assistant page for new algorithm creation
    navigate('/tools/algorithm/assistant');
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">科研算法助手</h1>
            <p className="text-gray-500 mt-1">AI驱动的科研算法实现与优化</p>
          </div>
          
          <button 
            onClick={handleNewAlgorithm}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建算法</span>
          </button>
        </div>

        {/* Recent Algorithms Section */}
        <div className="space-y-8">
          <RecentAlgorithms />
        </div>
      </div>
    </div>
  );
}