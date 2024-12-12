import React, { useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { Link } from 'react-router-dom';

interface ChatAreaProps {
  selectedMessageId: string | null;
  onMessageSelect: (id: string) => void;
}

export function ChatArea({ selectedMessageId, onMessageSelect }: ChatAreaProps) {
  const { messages } = useLiteratureStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // 每当消息列表更新时滚动到底部

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex-shrink-0 h-14 flex items-center px-6 border-b bg-white">
        <div className="flex items-center gap-4">
          <Link 
            to="/resources/papers"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <h1 className="text-base font-medium text-gray-900">文献AI</h1>
        </div>
      </div>

      <div 
        className="flex-1 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            message={message}
            isSelected={message.id === selectedMessageId}
            onClick={() => onMessageSelect(message.id)}
            onQuestionClick={() => {}}
            onReferenceClick={() => {}}
          />
        ))}
        <div ref={messagesEndRef} /> {/* 滚动锚点 */}
      </div>
    </div>
  );
}