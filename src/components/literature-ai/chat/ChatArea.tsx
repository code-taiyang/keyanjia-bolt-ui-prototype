import React from 'react';
import { Plus, History } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { useLiteratureStore } from '../../../stores/literatureStore';

interface ChatAreaProps {
  selectedMessageId: string | null;
  onMessageSelect: (id: string) => void;
}

export function ChatArea({ selectedMessageId, onMessageSelect }: ChatAreaProps) {
  const { messages, startNewChat, sendMessage } = useLiteratureStore();

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  const handleReferenceClick = (refId: string) => {
    onMessageSelect(selectedMessageId || '');
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex-shrink-0 h-14 flex items-center justify-between px-6 border-b bg-white">
        <h1 className="text-base font-medium text-gray-900">文献AI</h1>
        <div className="flex items-center gap-3">
          <button 
            onClick={startNewChat}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Plus size={16} />
            <span>新建对话</span>
          </button>
          <div className="w-px h-4 bg-gray-200" />
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <History size={16} />
            <span>历史对话</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            message={message}
            isSelected={message.id === selectedMessageId}
            onClick={() => onMessageSelect(message.id)}
            onQuestionClick={handleQuestionClick}
            onReferenceClick={handleReferenceClick}
          />
        ))}
      </div>
    </div>
  );
}