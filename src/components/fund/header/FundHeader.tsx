import React from 'react';
import { Plus, Award } from 'lucide-react';

export function FundHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">基金助手</h1>
        <p className="text-gray-500 mt-1">
          智能辅助基金申请与管理
        </p>
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Plus size={20} />
        <span>新建申请</span>
      </button>
    </div>
  );
}