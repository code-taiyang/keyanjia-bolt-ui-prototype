import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AlgorithmType } from '../../../types/algorithm';

interface AlgorithmTypeCardProps {
  type: AlgorithmType;
  isSelected: boolean;
  icon: LucideIcon;
  onSelect: () => void;
}

export function AlgorithmTypeCard({ type, isSelected, icon: Icon, onSelect }: AlgorithmTypeCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        relative flex flex-col items-start p-4 text-left rounded-lg border transition-all duration-200
        ${isSelected 
          ? 'border-blue-600 bg-blue-50 shadow-sm' 
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
      `}
    >
      {type.hot && (
        <span className="absolute top-2 right-2 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      )}

      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
        <Icon className={`h-5 w-5 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
      </div>

      <div className="mt-3">
        <div className="font-medium text-sm text-gray-900">{type.name}</div>
        <div className="text-xs text-gray-500 mt-0.5">{type.description}</div>
      </div>

      {type.features && (
        <div className="mt-3 space-y-1">
          {type.features.map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-500">
              <span className="w-1 h-1 rounded-full bg-gray-300 mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
      )}
    </button>
  );
}