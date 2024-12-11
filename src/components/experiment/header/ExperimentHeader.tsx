import React from 'react';
import { Plus, TestTube } from 'lucide-react';

export function ExperimentHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">实验助手</h1>
        <p className="text-gray-500 mt-1">
          智能辅助实验设计、分析与优化
        </p>
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Plus size={20} />
        <span>新建实验</span>
      </button>
    </div>
  );
}