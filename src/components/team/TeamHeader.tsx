import React from 'react';
import { UserPlus, Settings, Share2 } from 'lucide-react';

export function TeamHeader() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">研究团队空间</h1>
            <p className="text-gray-500 mt-1">管理您的团队资源和协作</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Share2 size={20} />
              <span>分享</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <UserPlus size={20} />
              <span>邀请成员</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
              <Settings size={20} />
              <span>团队设置</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}