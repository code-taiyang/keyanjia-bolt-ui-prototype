import React from 'react';
import { Filter, SortAsc, Search } from 'lucide-react';
import { DatasetFilter, DatasetSort } from './types';

interface DatasetFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: DatasetFilter) => void;
  onSortChange: (sort: DatasetSort) => void;
}

export function DatasetFilters({ onSearch, onFilterChange, onSortChange }: DatasetFiltersProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索数据集..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <select 
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onFilterChange({ type: e.target.value })}
        >
          <option value="">所有类型</option>
          <option value="tabular">表格数据</option>
          <option value="image">图像数据</option>
          <option value="text">文本数据</option>
          <option value="time_series">时间序列</option>
          <option value="spatial">空间数据</option>
        </select>

        <select
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onFilterChange({ visibility: e.target.value })}
        >
          <option value="">所有权限</option>
          <option value="public">公开</option>
          <option value="team">团队</option>
          <option value="private">私有</option>
        </select>

        <select
          className="px-3 py-2 border rounded-lg text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSortChange({ 
            field: e.target.value as DatasetSort['field'], 
            order: 'desc' 
          })}
        >
          <option value="updatedAt">最近更新</option>
          <option value="createdAt">创建时间</option>
          <option value="name">名称</option>
          <option value="size">大小</option>
          <option value="records">记录数</option>
        </select>

        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Filter size={18} />
          <span>高级筛选</span>
        </button>
      </div>
    </div>
  );
}