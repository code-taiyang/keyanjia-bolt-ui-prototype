import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Zap, Paperclip, Sparkles } from 'lucide-react';
import { Message } from './Message';
import { ChatHeader } from './ChatHeader';

interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  metadata?: {
    type?: 'computation';
    stage?: string;
    progress?: number;
  };
}

interface ChatPanelProps {
  steps: Array<{
    id: string;
    title: string;
    description: string;
    status: string;
    progress?: number;
  }>;
  currentStep: number;
}

export function ChatPanel({ steps, currentStep }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Load computation info and add initial message
    const computationInfo = localStorage.getItem('computation_info');
    if (computationInfo) {
      try {
        const { description } = JSON.parse(computationInfo);
        const initialMessage: ChatMessage = {
          id: Date.now().toString(),
          content: `${description}\n\n我将按以下步骤执行计算：\n\n${
            steps.map((step, index) => 
              `${index + 1}. ${step.title} - ${step.description}`
            ).join('\n')
          }`,
          type: 'assistant',
          timestamp: new Date()
        };
        setMessages([initialMessage]);
      } catch (error) {
        console.error('Failed to parse computation info:', error);
      }
    }
  }, [steps]);

  useEffect(() => {
    // Add progress message for current step
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      const progressMessage: ChatMessage = {
        id: `progress-${Date.now()}`,
        content: `正在${step.title}...\n${step.description}`,
        type: 'assistant',
        timestamp: new Date(),
        metadata: {
          type: 'computation',
          stage: step.title,
          progress: step.progress
        }
      };
      setMessages(prev => [...prev, progressMessage]);
    }
  }, [currentStep, steps]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: '我理解您的问题。让我帮您分析一下...',
        type: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="w-96 border-r bg-white flex flex-col">
      <ChatHeader />
      
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="relative">
          <button
            onClick={() => {}}
            className="absolute right-3 top-3 p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="AI建议"
          >
            <Sparkles className="h-4 w-4" />
          </button>
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入您的问题..."
            className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={1}
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
              title="上传代码文件"
            >
              <Paperclip className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute right-3 bottom-4 flex items-center space-x-2">
            <div className="flex items-center text-xs text-gray-400">
              <Zap className="h-3 w-3 text-yellow-500 mr-1" />
              <span>750</span>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isProcessing}
              className={`p-1.5 rounded-lg transition-colors ${
                inputValue.trim() && !isProcessing
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