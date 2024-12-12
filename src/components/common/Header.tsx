import React from 'react';
import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <div className="h-16 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索项目..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <span className="w-6 h-6 flex items-center justify-center">🌐</span>
        </button>
      </div>
    </div>
  );
}