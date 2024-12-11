import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { AlgorithmList } from './AlgorithmList';
import { algorithmCategories } from '../../../data/algorithmCategories';

interface AlgorithmSelectorProps {
  selectedAlgorithm: string | null;
  onSelect: (id: string) => void;
}

export function AlgorithmSelector({ selectedAlgorithm, onSelect }: AlgorithmSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleStartImplementation = () => {
    if (!selectedAlgorithm) return;
    
    // Find the selected algorithm details
    const algorithm = algorithmCategories.flatMap(cat => cat.algorithms)
      .find(alg => alg.id === selectedAlgorithm);

    if (algorithm) {
      // Store algorithm info in localStorage
      localStorage.setItem('algorithm_info', JSON.stringify({
        algorithmId: algorithm.id,
        name: algorithm.name,
        description: algorithm.description,
        type: algorithm.tags[0]
      }));

      // Navigate to editor
      navigate('/tools/algorithm/editor', {
        state: { algorithmId: algorithm.id }
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索算法..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Algorithm Categories */}
      <div className="space-y-6">
        {algorithmCategories.map(category => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-gray-50">
                {category.icon}
              </div>
              <div className="text-sm text-gray-500">{category.name}</div>
            </div>
            <AlgorithmList
              algorithms={category.algorithms}
              searchQuery={searchQuery}
              selectedId={selectedAlgorithm}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>

      {/* Implementation Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={handleStartImplementation}
          disabled={!selectedAlgorithm}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all duration-200
            ${selectedAlgorithm
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
          `}
        >
          <span>开始复现</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}