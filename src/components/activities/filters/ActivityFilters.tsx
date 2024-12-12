import React from 'react';
import { Filter, SortAsc, Search, Calendar } from 'lucide-react';

interface ActivityFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

export function ActivityFilters({ onSearch, onFilterChange, onSortChange }: ActivityFiltersProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索研究活动..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <select 
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">所有类型</option>
          <option value="analysis">数据分析</option>
          <option value="experiment">实验记录</option>
          <option value="literature">文献阅读</option>
          <option value="writing">学术写作</option>
        </select>

        <select
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="latest">最新创建</option>
          <option value="updated">最近更新</option>
          <option value="name">名称排序</option>
        </select>

        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Calendar size={18} />
          <span>日期范围</span>
        </button>
      </div>
    </div>
  );
}