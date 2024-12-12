import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isCollapsed: boolean;
  onClick: () => void;
}

export function SidebarToggle({ isCollapsed, onClick }: SidebarToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute h-8 w-8
        flex items-center justify-center
        bg-white hover:bg-gray-50
        border shadow-sm rounded-full
        transition-all duration-300
        ${isCollapsed ? '-right-4' : '-right-4'}
        top-[72px]
      `}
      title={isCollapsed ? '展开侧边栏' : '收起侧边栏'}
    >
      {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
    </button>
  );
}