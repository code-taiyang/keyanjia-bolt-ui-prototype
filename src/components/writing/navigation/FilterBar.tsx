import React from 'react';
import { Filter, Calendar, Tag } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (type: string) => void;
  onTimeRangeChange: (range: string) => void;
  onStatusChange: (status: string) => void;
}

export function FilterBar({ 
  onFilterChange, 
  onTimeRangeChange, 
  onStatusChange 
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex items-center gap-2">
        <Tag size={16} className="text-gray-400" />
        <select 
          onChange={(e) => onFilterChange(e.target.value)}
          className="px-3 py-1.5 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">所有类型</option>
          <option value="thesis">学位论文</option>
          <option value="journal">期刊论文</option>
          <option value="report">研究报告</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-gray-400" />
        <select 
          onChange={(e) => onTimeRangeChange(e.target.value)}
          className="px-3 py-1.5 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">时间范围</option>
          <option value="today">今天</option>
          <option value="week">最近7天</option>
          <option value="month">最近30天</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Filter size={16} className="text-gray-400" />
        <select 
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-3 py-1.5 border rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">所有状态</option>
          <option value="in_progress">进行中</option>
          <option value="completed">已完成</option>
          <option value="archived">已归档</option>
        </select>
      </div>
    </div>
  );
}