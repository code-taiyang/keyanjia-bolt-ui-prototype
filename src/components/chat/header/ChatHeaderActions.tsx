import React from 'react';
import { Search, PenSquare, Menu } from 'lucide-react';

interface ChatHeaderActionsProps {
  onSearch: () => void;
  onNewChat: () => void;
  onToggleMenu: () => void;
}

export function ChatHeaderActions({ onSearch, onNewChat, onToggleMenu }: ChatHeaderActionsProps) {
  return (
    <div className="flex items-center justify-between p-2 border-b bg-white">
      <button 
        onClick={onToggleMenu}
        className="p-2 hover:bg-gray-100 rounded-lg"
        aria-label="菜单"
      >
        <Menu size={20} className="text-gray-600" />
      </button>

      <div className="flex items-center gap-2">
        <button 
          onClick={onSearch}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label="搜索"
        >
          <Search size={20} className="text-gray-600" />
        </button>
        <button
          onClick={onNewChat}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label="新建对话"
        >
          <PenSquare size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}