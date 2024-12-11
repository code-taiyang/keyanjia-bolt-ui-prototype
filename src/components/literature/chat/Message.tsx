import React from 'react';
import { Wand2, MessageSquare } from 'lucide-react';

interface MessageProps {
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

export function Message({ type, content, timestamp }: MessageProps) {
  return (
    <div className={`flex gap-4 ${type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
        ${type === 'ai' ? 'bg-blue-100' : 'bg-gray-100'}
      `}>
        {type === 'ai' ? (
          <Wand2 className="text-blue-600" size={20} />
        ) : (
          <MessageSquare className="text-gray-600" size={20} />
        )}
      </div>
      <div className={`max-w-[80%] ${type === 'user' ? 'text-right' : ''}`}>
        <div className={`
          inline-block rounded-lg p-4 whitespace-pre-wrap
          ${type === 'ai' 
            ? 'bg-white text-gray-700 shadow-sm' 
            : 'bg-blue-600 text-white'}
        `}>
          {content}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}