import React, { useState, useRef, useEffect } from 'react';
import { Send, Settings, Download } from 'lucide-react';
import { Message } from './chat/Message';
import { Toolbar } from './chat/Toolbar';
import { TypingIndicator } from './chat/TypingIndicator';

interface ChatMessage {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

export function LiteratureChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: '您好！我是您的学术助手。我可以帮您：\n\n1. 文献内容综述\n2. 语法检查和润色\n3. 论文写作指导\n4. 学术表达优化\n\n请告诉我您需要什么帮助？',
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

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // 模拟AI响应
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '好的，我来帮您分析这篇文献。建议从以下几个方面展开：\n\n1. 研究背景和意义\n2. 研究方法和创新点\n3. 实验结果分析\n4. 研究结论和展望\n\n您想先了解哪个部分？',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">学术助手</h1>
            <p className="text-sm text-gray-500 mt-1">AI驱动的学术研究助手</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Download size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {messages.map((message) => (
          <Message
            key={message.id}
            type={message.type}
            content={message.content}
            timestamp={message.timestamp}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="max-w-4xl mx-auto flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题..."
            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`
              px-6 rounded-lg flex items-center gap-2
              ${input.trim() && !isTyping
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            <Send size={20} />
            <span>发送</span>
          </button>
        </div>
      </div>
    </div>
  );
}