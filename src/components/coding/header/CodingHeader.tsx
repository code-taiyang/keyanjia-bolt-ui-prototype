import React from 'react';
import { Code2, Plus } from 'lucide-react';

export function CodingHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">科研编程助手</h1>
        <p className="text-gray-500 mt-1">
          集成多种编程语言和计算环境，助力科研代码开发
        </p>
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Plus size={20} />
        <span>新建项目</span>
      </button>
    </div>
  );
}