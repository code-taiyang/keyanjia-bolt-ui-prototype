import React, { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, Wand2, Send, Loader2, Settings, Download } from 'lucide-react';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: string;
}

interface WritingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  templateId: string | null;
}

export function WritingDialog({ isOpen, onClose, templateId }: WritingDialogProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: '您好！我是您的写作助手。我可以帮助您：\n\n1. 提供写作建议和指导\n2. 优化文章结构和表达\n3. 改进学术写作风格\n4. 检查语法和用词\n\n请告诉我您需要什么帮助？',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      textareaRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '我理解您的需求。让我们一步步完善这篇文章：\n\n1. 首先，我们可以明确文章的主要论点\n2. 然后，构建清晰的论文结构\n3. 最后，逐步完善各个章节\n\n您觉得这个思路如何？',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium">AI写作助手</h3>
            <Badge variant="success">写作中</Badge>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Download size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`
                w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                ${message.type === 'ai' ? 'bg-blue-100' : 'bg-gray-100'}
              `}>
                {message.type === 'ai' ? (
                  <Wand2 className="text-blue-600" size={20} />
                ) : (
                  <MessageSquare className="text-gray-600" size={20} />
                )}
              </div>
              <div className={`
                flex-1 max-w-[80%]
                ${message.type === 'user' ? 'text-right' : ''}
              `}>
                <div className={`
                  inline-block rounded-lg p-4 whitespace-pre-wrap
                  ${message.type === 'ai' 
                    ? 'bg-gray-50 text-gray-700' 
                    : 'bg-blue-600 text-white'}
                `}>
                  {message.content}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Wand2 className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-gray-50 rounded-lg p-4">
                  <Loader2 className="animate-spin text-gray-400" size={20} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex gap-4">
            <div className="flex-1">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入您的写作需求或问题..."
                className="w-full h-24 px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-2 text-xs text-gray-500">
                按 Enter 发送，Shift + Enter 换行
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className={`
                px-4 py-2 rounded-lg self-end flex items-center gap-2
                ${input.trim() && !isTyping
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
              `}
            >
              {isTyping ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
              <span>发送</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'default';
  children: React.ReactNode;
}

function Badge({ variant, children }: BadgeProps) {
  const variants = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    default: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`
      ${variants[variant]}
      text-xs px-2 py-1 rounded-full font-medium
    `}>
      {children}
    </span>
  );
}