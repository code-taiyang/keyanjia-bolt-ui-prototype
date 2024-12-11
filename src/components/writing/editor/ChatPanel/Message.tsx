import React from 'react';
import { MessageSquare, Wand2, AlertCircle, RotateCw } from 'lucide-react';
import { ChatMessage } from './types';

interface MessageProps {
  message: ChatMessage;
  onRetry?: () => void;
  onSuggestionClick?: (suggestion: string) => void;
}

export function Message({ message, onRetry, onSuggestionClick }: MessageProps) {
  const isError = message.status === 'error';
  const isSending = message.status === 'sending';

  return (
    <div className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`
        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
        ${message.type === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'}
        ${isError ? 'bg-red-100' : ''}
      `}>
        {message.type === 'assistant' ? (
          <Wand2 className={`${isError ? 'text-red-600' : 'text-blue-600'}`} size={16} />
        ) : (
          <MessageSquare className="text-gray-600" size={16} />
        )}
      </div>
      
      <div className={`flex-1 max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
        <div className={`
          inline-block rounded-lg p-3 text-sm whitespace-pre-wrap
          ${message.type === 'assistant' 
            ? `bg-white border ${isError ? 'border-red-200 text-red-600' : 'border-gray-100 text-gray-700'}` 
            : 'bg-blue-600 text-white'
          }
          ${isSending ? 'opacity-70' : ''}
        `}>
          {message.content}
          
          {isError && (
            <div className="mt-2 flex items-center gap-2 text-red-600">
              <AlertCircle size={14} />
              <span className="text-xs">发送失败</span>
              {onRetry && (
                <button 
                  onClick={onRetry}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-red-50 hover:bg-red-100 rounded"
                >
                  <RotateCw size={12} />
                  重试
                </button>
              )}
            </div>
          )}
        </div>

        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-2 space-x-2">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSuggestionClick?.(suggestion)}
                className="inline-flex items-center px-3 py-1 text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-400 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}