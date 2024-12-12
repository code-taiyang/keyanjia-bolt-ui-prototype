import React, { useState } from 'react';
import { MessageSquare, Layers, ChevronRight } from 'lucide-react';
import { ReferenceList } from './ReferenceList';
import { ReferenceCards } from './ReferenceCards';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { ReferenceFloatingButton } from './ReferenceFloatingButton';

interface ReferenceAreaProps {
  selectedMessageId: string | null;
  onMessageSelect: (id: string) => void;
}

export function ReferenceArea({ selectedMessageId, onMessageSelect }: ReferenceAreaProps) {
  const [viewMode, setViewMode] = useState<'current' | 'all'>('current');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { messages } = useLiteratureStore();

  const hasReferences = selectedMessageId && messages.find(m => m.id === selectedMessageId)?.references?.length > 0;

  if (isCollapsed) {
    return (
      <ReferenceFloatingButton onClick={() => setIsCollapsed(false)} />
    );
  }

  return (
    <div className="w-96 border-l bg-white flex flex-col relative transition-all duration-300 ease-in-out">
      {/* 收起按钮 */}
      <button
        onClick={() => setIsCollapsed(true)}
        className="absolute -left-3.5 top-32 w-4 h-8 bg-white border border-gray-200 rounded-l-md shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
        title="收起侧边栏"
      >
        <ChevronRight 
          size={12} 
          className="text-gray-400 group-hover:text-blue-500 transition-colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        />
      </button>

      <div className="h-14 flex items-center justify-between px-6 border-b">
        <h2 className="text-base font-medium text-gray-900">参考文献</h2>
        <div className="flex items-center gap-1 bg-gray-50/80 backdrop-blur rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('current')}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors
              ${viewMode === 'current' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            <MessageSquare size={16} />
            <span>当前消息</span>
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors
              ${viewMode === 'all'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            <Layers size={16} />
            <span>全部消息</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {!hasReferences ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
              <MessageSquare size={32} className="text-gray-300" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">暂无参考文献</h3>
            <p className="text-sm text-gray-500 max-w-[240px]">
              发送消息与AI助手交流，获取相关的参考文献
            </p>
          </div>
        ) : viewMode === 'current' ? (
          <ReferenceList 
            selectedMessageId={selectedMessageId}
            onMessageSelect={onMessageSelect}
          />
        ) : (
          <ReferenceCards
            onMessageSelect={onMessageSelect}
          />
        )}
      </div>
    </div>
  );
}