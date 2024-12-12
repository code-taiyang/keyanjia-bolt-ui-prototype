import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Zap, Paperclip, Sparkles } from 'lucide-react';
import { Message } from './Message';
import { ChatHeader } from './ChatHeader';

interface AnalysisStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress?: number;
}

interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  metadata?: {
    type?: 'analysis';
    stage?: string;
    progress?: number;
  };
}

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [analysisSteps, setAnalysisSteps] = useState<AnalysisStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const analysisInfo = localStorage.getItem('algorithm_info');
    if (analysisInfo) {
      try {
        const { description, analysisSteps } = JSON.parse(analysisInfo);
        
        // Add initial welcome message with analysis plan
        const initialMessage: ChatMessage = {
          id: `init-${Date.now()}`,
          content: `${description}\n\n我将按以下步骤分析论文中的算法：\n\n${
            analysisSteps.map((step: AnalysisStep, index: number) => 
              `${index + 1}. ${step.title} - ${step.description}`
            ).join('\n')
          }`,
          type: 'assistant',
          timestamp: new Date()
        };
        setMessages([initialMessage]);
        setAnalysisSteps(analysisSteps);
        
        // Start analysis process
        startAnalysis(analysisSteps);
      } catch (error) {
        console.error('Failed to parse analysis info:', error);
      }
    }
  }, []);

  const startAnalysis = async (steps: AnalysisStep[]) => {
    let currentMessage: ChatMessage | null = null;

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      const step = steps[i];
      
      // Update step status
      setAnalysisSteps(prev => prev.map((s, index) => 
        index === i ? { ...s, status: 'processing' } : s
      ));

      // Update or create progress message
      const progressMessage: ChatMessage = {
        id: `progress-${Date.now()}`,
        content: `${i + 1}. ${step.title}\n${step.description}`,
        type: 'assistant',
        timestamp: new Date(),
        metadata: {
          type: 'analysis',
          stage: step.title,
          progress: 0
        }
      };

      if (currentMessage) {
        // Update existing message with new step
        setMessages(prev => prev.map(msg => 
          msg.id === currentMessage?.id 
            ? {
                ...msg,
                content: msg.content + `\n\n${progressMessage.content}`,
                metadata: progressMessage.metadata
              }
            : msg
        ));
      } else {
        // Create new message for first step
        setMessages(prev => [...prev, progressMessage]);
        currentMessage = progressMessage;
      }

      // Simulate step progress
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Update step status
      setAnalysisSteps(prev => prev.map((s, index) => 
        index === i ? { ...s, status: 'completed', progress: 100 } : s
      ));
    }

    // Add completion message
    const completionMessage: ChatMessage = {
      id: `completion-${Date.now()}`,
      content: '✨ 论文分析完成！我已经成功提取并实现了算法。您可以在代码面板查看具体实现，如有任何问题请随时询问。',
      type: 'assistant',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, completionMessage]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
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
        id: `assistant-${Date.now()}`,
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