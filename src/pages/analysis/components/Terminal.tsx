import React from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function Terminal({ isMinimized, onToggleMinimize }: TerminalProps) {
  return (
    <div className={`border-t bg-gray-900 text-gray-100 transition-all duration-200 ${
      isMinimized ? 'h-10' : 'h-48'
    }`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <TerminalIcon size={16} />
          <span className="text-sm font-mono">运行输出</span>
        </div>
        <button 
          onClick={onToggleMinimize}
          className="p-1 hover:bg-gray-800 rounded"
        >
          {isMinimized ? (
            <Maximize2 size={14} />
          ) : (
            <Minimize2 size={14} />
          )}
        </button>
      </div>
      
      {!isMinimized && (
        <div className="p-4 font-mono text-sm space-y-1 h-[calc(100%-36px)] overflow-auto">
          <div className="text-green-400">&gt;&gt; 开始运行数据分析...</div>
          <div className="text-gray-400">正在加载数据集...</div>
          <div className="text-gray-400">执行数据预处理...</div>
          <div className="text-gray-400">进行统计分析...</div>
          <div className="text-gray-400">生成可视化图表...</div>
          <div className="text-green-400">分析完成！结果已保存。</div>
        </div>
      )}
    </div>
  );
}