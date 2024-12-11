import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ChatHistorySearchProps {
  onSearch: (query: string) => void;
}

export function ChatHistorySearch({ onSearch }: ChatHistorySearchProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      <h3 className="text-sm font-medium">对话历史</h3>
      <button
        onClick={() => {
          const query = prompt('搜索对话');
          if (query) onSearch(query);
        }}
        className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
      >
        <Search size={14} />
      </button>
    </div>
  );
}