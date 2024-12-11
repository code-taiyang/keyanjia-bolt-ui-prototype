import React from 'react';
import { Beaker } from 'lucide-react';

interface WorkspaceSelectorProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function WorkspaceSelector({ isCollapsed, onToggleCollapse }: WorkspaceSelectorProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className={`
        flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors
        ${isCollapsed ? 'px-2 py-1.5' : 'px-2 py-1.5 flex-1'}
      `}>
        <div className="bg-blue-600 text-white p-1.5 rounded flex-shrink-0">
          <Beaker size={20} />
        </div>
        {!isCollapsed && (
          <span className="font-medium text-gray-900">
            ResearchPlus
          </span>
        )}
      </div>
    </div>
  );
}