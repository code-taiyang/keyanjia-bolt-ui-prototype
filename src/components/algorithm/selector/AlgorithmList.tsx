import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { Algorithm } from '../../../types/algorithm';

interface AlgorithmListProps {
  algorithms: Algorithm[];
  searchQuery: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function AlgorithmList({ algorithms, searchQuery, selectedId, onSelect }: AlgorithmListProps) {
  const filteredAlgorithms = algorithms.filter(algorithm => 
    algorithm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    algorithm.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    algorithm.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
      {filteredAlgorithms.map((algorithm) => (
        <button
          key={algorithm.id}
          onClick={() => onSelect(algorithm.id)}
          className={`
            w-full text-left p-3 rounded-lg border transition-all duration-200
            ${selectedId === algorithm.id 
              ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start gap-2 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-medium text-sm text-gray-900 truncate">{algorithm.name}</h4>
                  {algorithm.hot && (
                    <span className="px-1 py-0.5 text-[10px] font-medium text-red-600 bg-red-50 rounded-full leading-none">
                      Hot
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{algorithm.description}</p>
              </div>
            </div>

            {algorithm.complexity && (
              <div className="mt-auto flex items-center gap-1.5 text-[10px] text-gray-500">
                <Clock size={12} />
                <span>{algorithm.complexity}</span>
              </div>
            )}

            <div className="mt-2 flex flex-wrap gap-1">
              {algorithm.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 text-[10px] bg-gray-100 text-gray-600 rounded-full truncate"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}