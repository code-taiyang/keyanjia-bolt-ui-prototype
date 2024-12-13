import React, { useState, useRef, useEffect } from 'react';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { ChatMessage } from './types';

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: '您好！我是您的写作助手。我可以帮您：\n\n1. 优化文章结构\n2. 改进表达方式\n3. 检查参考文献格式\n4. 提供写作建议',
      type: 'assistant',
      timestamp: new Date().toISOString(),
      suggestions: ['优化文章结构', '改进表达', '检查格式']
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tokens, setTokens] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    setTokens(prev => prev + content.length);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: '好的，我来帮您完善这部分内容。建议从以下几个方面展开：\n\n1. 明确研究问题\n2. 阐述研究方法\n3. 分析研究结果',
        type: 'assistant',
        timestamp: new Date().toISOString(),
        suggestions: ['研究问题', '研究方法', '研究结果']
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-80 border-r bg-gray-50 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <Message 
            key={message.id} 
            message={message}
            onSuggestionClick={handleSendMessage}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput 
        onSend={handleSendMessage}
        disabled={isProcessing}
        placeholder="输入您的问题或从上方选择建议..."
        tokens={tokens}
      />
    </div>
  );
}