import React from 'react';
import { MessageSquare, Star, Clock } from 'lucide-react';
import { FilterType } from './types';

interface ChatHistoryFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function ChatHistoryFilters({ 
  activeFilter, 
  onFilterChange 
}: ChatHistoryFiltersProps) {
  const filters = [
    { type: 'all', icon: <MessageSquare size={14} />, label: '全部' },
    { type: 'starred', icon: <Star size={14} />, label: '收藏' },
    { type: 'recent', icon: <Clock size={14} />, label: '最近' }
  ] as const;

  return (
    <div className="px-2 py-1 border-b bg-white">
      <div className="flex space-x-1">
        {filters.map(({ type, icon, label }) => (
          <button
            key={type}
            onClick={() => onFilterChange(type)}
            className={`
              flex-1 flex items-center justify-center gap-1 px-2 py-1 text-xs rounded-md
              ${activeFilter === type 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}