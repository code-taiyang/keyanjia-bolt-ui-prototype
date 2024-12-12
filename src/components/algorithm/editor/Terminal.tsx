import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export function Terminal() {
  return (
    <div className="h-48 border-t border-gray-200 bg-gray-900 text-gray-100 p-4 font-mono text-sm">
      <div className="flex items-center space-x-2 mb-2">
        <TerminalIcon className="h-4 w-4" />
        <span>运行输出</span>
      </div>
      <div className="text-green-400">&gt;&gt; 开始运行算法...</div>
      <div className="text-gray-400">正在初始化模型...</div>
      <div className="text-gray-400">加载数据中...</div>
      <div className="text-green-400">运行完成！结果已保存。</div>
    </div>
  );
}