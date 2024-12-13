import React from 'react';
import { Filter, SortAsc, Search } from 'lucide-react';

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
          <option value="">所有类型</option>
          <option value="writing">学术写作</option>
          <option value="analysis">数据分析</option>
          <option value="algorithm">科研算法</option>
          <option value="computing">科研计算</option>
          <option value="experiment">实验研究</option>
          <option value="grant">基金申请</option>
          <option value="planning">研究规划</option>
        </select>

        <select
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="latest">最新创建</option>
          <option value="updated">最近更新</option>
          <option value="name">名称排序</option>
        </select>
      </div>
    </div>
  );
}