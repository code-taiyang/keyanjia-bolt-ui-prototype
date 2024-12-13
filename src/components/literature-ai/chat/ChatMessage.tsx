import React, { useState } from 'react';
import { MessageSquare, Wand2, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        px-4 py-4 cursor-pointer group relative
        hover:bg-gray-50/50 transition-colors duration-200
      `}
      onClick={onClick}
    >
      <div className="max-w-6xl mx-auto flex gap-4">
        {isAI ? (
          <>
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 
              bg-gradient-to-br from-blue-50 to-blue-100 ring-2
              ${isSelected ? 'ring-blue-200' : 'ring-blue-50'}
              transition-all duration-200
            `}>
              <Wand2 className={`${isSelected ? 'text-blue-700' : 'text-blue-600'} transition-colors`} size={20} />
            </div>
            <div className="flex-1 flex relative">
              <div className={`
                bg-white shadow-sm border rounded-xl px-5 py-3 max-w-[85%] relative
                ${isSelected ? 'border-blue-200' : 'border-gray-100/50'}
                transition-colors duration-200
              `}>
                {renderMessageContent()}
                <button
                  onClick={handleCopy}
                  className="absolute -right-10 bottom-2 p-1.5 bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg shadow-sm border transition-colors opacity-0 group-hover:opacity-100"
                  title={copied ? "已复制" : "复制内容"}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex justify-end relative">
              <div className="bg-gradient-to-br from-blue-400/90 to-blue-500/90 backdrop-blur-sm shadow-sm rounded-xl px-5 py-3 max-w-[85%] relative">
                {renderMessageContent()}
                <button
                  onClick={handleCopy}
                  className="absolute -left-10 bottom-2 p-1.5 bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg shadow-sm border transition-colors opacity-0 group-hover:opacity-100"
                  title={copied ? "已复制" : "复制内容"}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
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
