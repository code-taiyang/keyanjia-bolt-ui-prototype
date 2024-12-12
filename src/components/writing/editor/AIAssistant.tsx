import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Wand2, Send, X } from 'lucide-react';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  onClose: () => void;
}

export function AIAssistant({ onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: '您好！我是您的写作助手。我可以帮您：\n\n1. 优化文章结构\n2. 改进表达方式\n3. 检查参考文献格式\n4. 提供写作建议',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '好的，我来帮您完善这部分内容。建议从以下几个方面展开：\n\n1. 明确研究问题\n2. 阐述研究方法\n3. 分析研究结果',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="w-80 border-l bg-gray-50 flex flex-col">
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <h3 className="font-medium">AI助手</h3>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <X size={16} className="text-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`
              w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
              ${message.type === 'ai' ? 'bg-blue-100' : 'bg-gray-100'}
            `}>
              {message.type === 'ai' ? (
                <Wand2 className="text-blue-600" size={16} />
              ) : (
                <MessageSquare className="text-gray-600" size={16} />
              )}
            </div>
            <div className={`
              max-w-[75%] rounded-lg p-3 whitespace-pre-wrap
              ${message.type === 'ai' 
                ? 'bg-white text-gray-700' 
                : 'bg-blue-600 text-white'
              }
            `}>
              {message.content}
              <div className="text-xs mt-1 opacity-50">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Wand2 className="text-blue-600" size={16} />
            </div>
            <div className="bg-white rounded-lg p-3">
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

      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题..."
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`
              p-2 rounded-lg
              ${input.trim() && !isTyping
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}