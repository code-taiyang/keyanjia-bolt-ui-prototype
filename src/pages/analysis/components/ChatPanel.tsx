import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Zap, Paperclip, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: string;
  file?: {
    name: string;
    size: string;
    status: 'uploading' | 'success' | 'error';
  };
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const tokenCount = { current: 750, total: 1000 };

  const suggestions = [
    "分析这组数据的基本统计特征",
    "帮我找出数据中的异常值",
    "生成这些数据的可视化图表",
    "分析变量之间的相关性",
    "对数据进行聚类分析",
    "预测未来3个月的趋势"
  ];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputValue]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '我理解您的需求。让我帮您分析这些数据...',
        type: 'assistant',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    if (!allowedTypes.includes(file.type)) {
      alert('请上传Excel或CSV文件');
      return;
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('文件大小不能超过10MB');
      return;
    }

    const uploadMessage: Message = {
      id: Date.now().toString(),
      content: '正在上传文件...',
      type: 'user',
      timestamp: new Date().toISOString(),
      file: {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        status: 'uploading'
      }
    };

    setMessages(prev => [...prev, uploadMessage]);

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === uploadMessage.id
          ? {
              ...msg,
              content: '文件上传成功',
              file: { ...msg.file!, status: 'success' }
            }
          : msg
      ));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `我已经收到了文件 ${file.name}。这是一个${file.size / 1024}KB的数据文件，让我帮您分析其中的内容...`,
        type: 'assistant',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1500);
  };

  return (
    <div className="w-96 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">AI分析助手</h3>
            <p className="text-xs text-gray-500">专业的数据分析助手</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 
              ${message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}
            >
              {message.type === 'user' ? (
                <div className="h-5 w-5 rounded-full bg-blue-600" />
              ) : (
                <Bot className="h-5 w-5 text-gray-600" />
              )}
            </div>
            <div className={`max-w-[85%] rounded-lg px-4 py-2 text-sm
              ${message.type === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-100 shadow-sm text-gray-900'}`}
            >
              {message.content}
              {message.file && (
                <div className={`mt-2 flex items-center space-x-2 text-xs ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  <Paperclip className="h-4 w-4" />
                  <span>{message.file.name}</span>
                  <span>({message.file.size})</span>
                  {message.file.status === 'uploading' ? (
                    <div className="animate-spin h-3 w-3 border-2 border-blue-100 rounded-full border-t-transparent" />
                  ) : message.file.status === 'success' ? (
                    <div className="h-3 w-3 bg-green-500 rounded-full" />
                  ) : null}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
            onChange={handleFileUpload}
          />
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="absolute right-3 top-3 p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="AI建议"
          >
            <Sparkles className="h-4 w-4" />
          </button>
          {showSuggestions && (
            <div className="absolute bottom-full right-0 mb-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 p-2 space-y-1">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(suggestion);
                    setShowSuggestions(false);
                    if (textareaRef.current) {
                      textareaRef.current.focus();
                    }
                  }}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="描述你的分析需求，或上传数据文件..."
            className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(inputValue);
              }
            }}
          />
          <div className="absolute left-3 bottom-4 flex items-center space-x-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              title="上传数据文件"
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
              onClick={() => handleSendMessage(inputValue)}
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