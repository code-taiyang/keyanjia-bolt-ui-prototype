import React, { useState, useRef, useEffect } from 'react';
import { Message } from './ChatPanel/Message';
import { MessageInput } from './ChatPanel/MessageInput';
import { ChatMessage } from './ChatPanel/types';
import { Sparkles, Wand2 } from 'lucide-react';

const INITIAL_MESSAGE: ChatMessage = {
  id: '1',
  content: '您好！我是您的写作助手。我可以帮您：\n\n1. 优化文章结构\n2. 改进表达方式\n3. 检查参考文献格式\n4. 提供写作建议',
  type: 'assistant',
  timestamp: new Date().toISOString(),
  suggestions: ['优化文章结构', '改进表达', '检查格式']
};

const AI_SUGGESTIONS = [
  '帮我完善这段内容',
  '检查语言表达',
  '优化文章结构',
  '提供写作建议'
];

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
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
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date().toISOString(),
      status: 'sending'
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

      setMessages(prev => [
        ...prev.slice(0, -1),
        { ...prev[prev.length - 1], status: 'sent' },
        assistantMessage
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { ...prev[prev.length - 1], status: 'error' }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetry = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message && message.type === 'user') {
      handleSendMessage(message.content);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleAISuggestion = () => {
    const suggestion = AI_SUGGESTIONS[Math.floor(Math.random() * AI_SUGGESTIONS.length)];
    const input = document.querySelector('textarea');
    if (input) {
      (input as HTMLTextAreaElement).value = suggestion;
      (input as HTMLTextAreaElement).focus();
    }
  };

  return (
    <div className="w-80 border-r bg-gray-50 flex flex-col">
      <div className="p-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium">AI 助手</h3>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          智能写作辅助，提供专业建议
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <Message 
            key={message.id} 
            message={message}
            onRetry={() => handleRetry(message.id)}
            onSuggestionClick={handleSuggestionClick}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-white">
        <div className="relative">
          <MessageInput 
            onSend={handleSendMessage}
            disabled={isProcessing}
            placeholder="输入您的问题或从上方选择建议..."
            onAISuggestion={handleAISuggestion}
            tokens={tokens}
          />
        </div>
      </div>
    </div>
  );
}