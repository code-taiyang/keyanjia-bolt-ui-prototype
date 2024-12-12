import React from 'react';
import { Plus, Filter, SortAsc } from 'lucide-react';

export function ProjectListHeader() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">项目列表</h1>
            <p className="text-gray-500 mt-1">管理您的研究项目</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Filter size={18} />
              <span>筛选</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <SortAsc size={18} />
              <span>排序</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus size={18} />
              <span>新建项目</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}