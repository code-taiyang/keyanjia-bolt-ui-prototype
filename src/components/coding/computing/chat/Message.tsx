import React from 'react';
import { MessageSquare, Bot, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  metadata?: {
    type?: 'computation';
    stage?: string;
    progress?: number;
  };
}

interface MessageProps {
  message: Message;
}

export function Message({ message }: MessageProps) {
  return (
    <div className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
        ${message.type === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'}
      `}>
        {message.type === 'assistant' ? (
          <Bot className="text-blue-600" size={16} />
        ) : (
          <MessageSquare className="text-gray-600" size={16} />
        )}
      </div>
      
      <div className={`flex-1 max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
        <div className={`
          inline-block rounded-lg p-3 whitespace-pre-wrap
          ${message.type === 'assistant' 
            ? 'bg-white border border-gray-100 text-gray-700' 
            : 'bg-blue-600 text-white'}
        `}>
          {message.content}
          
          {message.metadata?.type === 'computation' && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>{message.metadata.stage}</span>
                <span>{message.metadata.progress}%</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${message.metadata.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-400 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}