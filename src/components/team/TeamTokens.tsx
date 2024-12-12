import React from 'react';
import { Key, Plus } from 'lucide-react';

export function TeamTokens() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">API Token管理</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
          <Plus size={16} />
          <span>新建</span>
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="p-3 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key size={16} className="text-blue-600" />
              <span className="text-sm font-medium">主要Token</span>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              活跃
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            剩余额度: 8000 / 10000
          </div>
        </div>
        
        <div className="p-3 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Key size={16} className="text-gray-400" />
              <span className="text-sm font-medium">备用Token</span>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              未使用
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            剩余额度: 10000 / 10000
          </div>
        </div>
      </div>
    </div>
  );
}