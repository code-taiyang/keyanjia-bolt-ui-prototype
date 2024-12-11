import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatSession, Message } from '../types';

interface ChatInterfaceProps {
  session: ChatSession;
  onStar: () => void;
  onArchive: () => void;
}

export function ChatInterface({ session, onStar, onArchive }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(session.messages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (content: string) => {
    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // 模拟AI响应
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '我理解您的问题。让我为您详细分析一下...',
        type: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader 
        session={session}
        onStar={onStar}
        onArchive={onArchive}
      />
      
      <div className="flex-1 overflow-auto p-6 space-y-6 bg-gray-50">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex gap-2 items-center text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
          </div>
        )}
      </div>

      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}