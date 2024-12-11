import React from 'react';
import { Wand2 } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
        <Wand2 className="text-blue-600" size={20} />
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-100" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
}