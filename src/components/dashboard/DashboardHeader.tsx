import React from 'react';
import { PlusCircle } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-gray-900">欢迎回来，Alex</h1>
        <p className="text-gray-500">查看您的研究项目和最新活动</p>
      </div>
      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        <PlusCircle size={20} />
        <span>新建项目</span>
      </button>
    </div>
  );
}