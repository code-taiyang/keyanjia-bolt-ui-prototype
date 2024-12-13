import React from 'react';
import { MessageSquare, Wand2 } from 'lucide-react';
import { ChatMessage } from './types';

interface MessageProps {
  message: ChatMessage;
}

export function Message({ message }: MessageProps) {
  return (
    <div className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
        ${message.type === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'}
      `}>
        {message.type === 'assistant' ? (
          <Wand2 className="text-blue-600" size={16} />
        ) : (
          <MessageSquare className="text-gray-600" size={16} />
        )}
      </div>
      
      <div className={`flex-1 max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
        <div className={`
          inline-block rounded-lg p-3 text-sm whitespace-pre-wrap
          ${message.type === 'assistant' 
            ? 'bg-white border border-gray-100 text-gray-700' 
            : 'bg-blue-600 text-white'}
        `}>
          {message.content}
        </div>

        <div className="text-xs text-gray-400 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}