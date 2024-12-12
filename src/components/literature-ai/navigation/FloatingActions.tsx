import React, { useState } from 'react';
import { Plus, History } from 'lucide-react';
import { useLiteratureStore } from '../../../stores/literatureStore';

interface FloatingActionsProps {
  isHistoryOpen: boolean;
  onHistoryClick: () => void;
}

export function FloatingActions({ isHistoryOpen, onHistoryClick }: FloatingActionsProps) {
  const { startNewChat } = useLiteratureStore();
  const [hoveredButton, setHoveredButton] = useState<'new' | 'history' | null>(null);

  if (isHistoryOpen) return null;

  return (
    <div className="fixed left-0 top-32 z-10">
      <div className="relative">
        <div className="w-12 bg-white border-y border-r shadow-lg rounded-r-xl hover:border-blue-200 hover:shadow-xl transition-all duration-200">
          {/* New Chat Button */}
          <button 
            onClick={() => {
              startNewChat();
              document.body.style.backgroundColor = '#f3f4f6';
              setTimeout(() => {
                document.body.style.backgroundColor = '';
              }, 100);
            }}
            onMouseEnter={() => setHoveredButton('new')}
            onMouseLeave={() => setHoveredButton(null)}
            className="w-full h-12 flex items-center justify-center hover:bg-gray-50 rounded-tr-xl transition-colors"
          >
            <Plus 
              size={22} 
              className="text-gray-600 hover:text-blue-600 transition-colors" 
            />
          </button>

          {/* Divider */}
          <div className="w-8 h-px bg-gray-200 mx-auto" />

          {/* History Button */}
          <button 
            onClick={onHistoryClick}
            onMouseEnter={() => setHoveredButton('history')}
            onMouseLeave={() => setHoveredButton(null)}
            className="w-full h-12 flex items-center justify-center hover:bg-gray-50 rounded-br-xl transition-colors"
          >
            <History 
              size={22} 
              className="text-gray-600 hover:text-blue-600 transition-colors" 
            />
          </button>
        </div>

        {/* New Chat Tooltip */}
        <div className={`
          absolute left-full top-0 ml-2 
          transition-all duration-200 pointer-events-none
          ${hoveredButton === 'new' 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-2'
          }
        `}>
          <div className="relative py-1.5 px-2 bg-gray-900 text-white text-xs font-medium rounded whitespace-nowrap">
            新建对话
            <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-[6px] border-transparent border-r-gray-900" />
          </div>
        </div>

        {/* History Tooltip */}
        <div className={`
          absolute left-full bottom-0 ml-2
          transition-all duration-200 pointer-events-none
          ${hoveredButton === 'history' 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-2'
          }
        `}>
          <div className="relative py-1.5 px-2 bg-gray-900 text-white text-xs font-medium rounded whitespace-nowrap">
            历史对话
            <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-[6px] border-transparent border-r-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}