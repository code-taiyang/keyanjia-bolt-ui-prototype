import React from 'react';
import { Search } from 'lucide-react';

interface ChatHistorySearchProps {
  onSearch: (query: string) => void;
}

export function ChatHistorySearch({ onSearch }: ChatHistorySearchProps) {
  return (
    <div className="p-4 border-b bg-white">
      <h2 className="font-medium">对话历史</h2>
      <div className="mt-2 relative">
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          size={16} 
        />
        <input
          type="text"
          placeholder="搜索对话..."
          className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}