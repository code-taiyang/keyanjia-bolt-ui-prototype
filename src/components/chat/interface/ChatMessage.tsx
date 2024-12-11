import React from 'react';
import { MessageSquare, Wand2 } from 'lucide-react';
import { Message } from '../types';
import { Avatar } from '../../common/Avatar';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
        ${isUser ? 'bg-blue-100' : 'bg-gray-100'}
      `}>
        {isUser ? (
          <MessageSquare className="text-blue-600" size={20} />
        ) : (
          <Wand2 className="text-gray-600" size={20} />
        )}
      </div>
      
      <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : ''}`}>
        <div className={`
          inline-block rounded-lg p-4 whitespace-pre-wrap
          ${isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-white border text-gray-700'
          }
        `}>
          {message.content}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}