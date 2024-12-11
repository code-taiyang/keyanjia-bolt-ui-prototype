import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface WritingType {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface WritingTypeCardProps {
  type: WritingType;
  isSelected: boolean;
  onSelect: () => void;
}

export function WritingTypeCard({ type, isSelected, onSelect }: WritingTypeCardProps) {
  const Icon = type.icon;

  return (
    <button
      onClick={onSelect}
      className={`
        relative w-full p-4 rounded-xl border-2 transition-all duration-200
        hover:shadow-md
        ${isSelected 
          ? 'border-blue-500 bg-blue-50/50' 
          : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}
      `}
    >
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <Check size={12} className="text-white" />
          </div>
        </div>
      )}

      <div className="flex flex-col items-start gap-3">
        <div className={`
          p-2.5 rounded-lg transition-colors duration-200
          ${isSelected ? 'bg-white' : 'bg-gray-50'}
        `}>
          <Icon 
            size={20} 
            className={`${type.color} transition-colors duration-200`}
          />
        </div>

        <div className="text-left">
          <div className="font-medium text-gray-900">{type.name}</div>
          <p className="mt-1 text-sm text-gray-500">
            {type.description}
          </p>
        </div>
      </div>
    </button>
  );
}