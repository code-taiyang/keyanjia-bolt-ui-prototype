import React, { useState } from 'react';
import { Search, History, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [searchHistory] = useState([
    '深度学习论文',
    '气候变化研究',
    '神经网络优化'
  ]);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          size={20} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowHistory(true)}
          placeholder="搜索写作..."
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {showHistory && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg py-2 z-10">
          {searchHistory.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSearch(item)}
              className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50 text-left"
            >
              <History size={16} className="text-gray-400" />
              <span className="text-gray-700">{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}