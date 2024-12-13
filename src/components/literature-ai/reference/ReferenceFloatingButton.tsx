import React from 'react';
import { FileText } from 'lucide-react';

interface ReferenceFloatingButtonProps {
  onClick: () => void;
}

export function ReferenceFloatingButton({ onClick }: ReferenceFloatingButtonProps) {
  return (
    <div className="fixed right-0 top-32 z-10">
      <button
        onClick={onClick}
        className="group w-10 h-[100px] bg-white border-y border-l shadow-sm rounded-l-xl hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-3"
      >
        <FileText 
          size={18} 
          className="text-gray-400 group-hover:text-blue-500 transition-colors" 
        />
        <div className="writing-vertical-rl text-xs tracking-widest font-medium text-gray-400 group-hover:text-blue-500 transition-colors">
          参考文献
        </div>
      </button>
    </div>
  );
}