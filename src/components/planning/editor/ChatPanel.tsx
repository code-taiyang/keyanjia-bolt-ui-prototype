import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Zap, Paperclip, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: '您好！我是您的规划助手。我可以帮您：\n\n1. 优化研究规划\n2. 制定发展路线\n3. 分解研究目标\n4. 提供规划建议',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const tokenCount = { current: 750, total: 1000 };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: '好的，我来帮您完善这部分内容。建议从以下几个方面展开：\n\n1. 明确研究目标\n2. 制定时间节点\n3. 分配研究资源',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="w-80 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">AI助手</h3>
            <p className="text-xs text-gray-500">专业的规划助手</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`
              w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
              ${message.type === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'}
            `}>
              {message.type === 'assistant' ? (
                <Bot className="text-blue-600" size={16} />
              ) : (
                <div className="h-5 w-5 rounded-full bg-blue-600" />
              )}
            </div>
            <div className={`
              max-w-[75%] rounded-lg p-3 whitespace-pre-wrap
              ${message.type === 'assistant' 
                ? 'bg-white border border-gray-100 shadow-sm text-gray-900' 
                : 'bg-blue-600 text-white'}
            `}>
              {message.content}
              <div className="text-xs mt-1 opacity-50">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Bot className="text-blue-600" size={16} />
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-100" />
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="relative">
          <button
            className="absolute right-3 top-3 p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="AI建议"
          >
            <Sparkles className="h-4 w-4" />
          </button>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题..."
            className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <div className="absolute left-3 bottom-4 flex items-center space-x-2">
            <button
              className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              title="上传文件"
            >
              <Paperclip className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute right-3 bottom-4 flex items-center space-x-2">
            <div className="flex items-center text-xs text-gray-400">
              <Zap className="h-3 w-3 text-yellow-500 mr-1" />
              <span>{tokenCount.current}</span>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isProcessing}
              className={`p-1.5 rounded-lg transition-colors ${
                input.trim() && !isProcessing
                  ? 'text-blue-600 hover:bg-blue-50'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}