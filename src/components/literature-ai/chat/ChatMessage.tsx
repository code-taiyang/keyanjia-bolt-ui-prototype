import React from 'react';
import { MessageSquare, Wand2 } from 'lucide-react';
import { Message } from '../../../stores/literatureStore';
import { WelcomeCard } from './welcome/WelcomeCard';

interface ChatMessageProps {
  message: Message;
  isSelected: boolean;
  onClick: () => void;
  onQuestionClick: (question: string) => void;
  onReferenceClick?: (refId: string) => void;
}

export function ChatMessage({ 
  message, 
  isSelected, 
  onClick, 
  onQuestionClick, 
  onReferenceClick 
}: ChatMessageProps) {
  const isAI = message.type === 'ai';
  const isWelcome = isAI && message.content.includes('欢迎使用文献AI');

  const renderMessageContent = () => {
    if (isWelcome) {
      return <WelcomeCard />;
    }

    let content = message.content;
    if (message.references) {
      message.references.forEach((refId, index) => {
        const refMark = `[${refId}]`;
        content = content.replace(refMark, `<sup><span class="inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors" data-ref="${refId}">${index + 1}</span></sup>`);
      });
    }

    return (
      <div 
        className={`text-sm tracking-wide leading-7 ${isAI ? 'text-gray-800' : 'text-white/95'}`}
        dangerouslySetInnerHTML={{ __html: content }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'SPAN' && target.dataset.ref) {
            onReferenceClick?.(target.dataset.ref);
          }
        }}
      />
    );
  };

  return (
    <div 
      className={`
        px-4 py-4 cursor-pointer
        ${isSelected ? 'bg-gray-50/80' : 'hover:bg-gray-50/50'} 
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      <div className="max-w-6xl mx-auto flex gap-4">
        {isAI ? (
          <>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 ring-2 ring-blue-50">
              <Wand2 className="text-blue-600" size={20} />
            </div>
            <div className="flex-1 flex">
              <div className="bg-white shadow-sm border border-gray-100/50 rounded-xl px-5 py-3 max-w-[85%]">
                {renderMessageContent()}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex justify-end">
              <div className="bg-gradient-to-br from-blue-400/90 to-blue-500/90 backdrop-blur-sm shadow-sm rounded-xl px-5 py-3 max-w-[85%]">
                {renderMessageContent()}
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 ring-2 ring-gray-50">
              <MessageSquare className="text-gray-600" size={20} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}