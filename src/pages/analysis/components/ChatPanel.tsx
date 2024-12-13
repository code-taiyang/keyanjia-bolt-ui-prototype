import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Zap, Paperclip, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: string;
  suggestions?: string[];
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: `欢迎使用数据分析助手！我将帮助您完成数据分析工作。

您的分析目标是：
${location.state?.objective || '进行数据分析'}

我可以帮您：
1. 数据预处理和清洗
2. 统计分析与建模
3. 可视化展示
4. 结果解释

您可以：
- 在左侧查看和编辑分析代码
- 在右侧预览数据和结果
- 随时与我交流，获取分析建议`,
      timestamp: new Date().toISOString(),
      suggestions: [
        '帮我解释代码的功能',
        '如何优化数据预处理',
        '分析结果有什么发现',
        '生成分析报告'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const tokenCount = { current: 750, total: 1000 };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

    // 模拟AI响应
    setTimeout(() => {
      let response: Message;

      // 根据用户输入内容生成相应的回复
      if (content.includes('代码')) {
        response = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: `这段代码主要实现了以下功能：

1. 数据加载和预处理
2. 基础统计分析
3. 相关性分析
4. 可视化展示

您可以通过修改参数来调整分析方法。需要我详细解释某个部分吗？`,
          timestamp: new Date().toISOString(),
          suggestions: [
            '解释数据预处理部分',
            '解释统计分析方法',
            '解释可视化代码',
            '如何修改参数'
          ]
        };
      } else if (content.includes('优化')) {
        response = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: `我建议从以下几个方面优化分析：

1. 数据清洗
   - 处理缺失值
   - 去除异常值
   - 标准化处理

2. 特征工程
   - 特征选择
   - 特征转换
   - 特征组合

需要我详细说明某个优化方案吗？`,
          timestamp: new Date().toISOString(),
          suggestions: [
            '如何处理缺失值',
            '如何识别异常值',
            '特征选择方法',
            '查看优化效果'
          ]
        };
      } else {
        response = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: `我理解您的问题。让我们一步步分析：

1. 首先查看数据特征
2. 进行必要的预处理
3. 选择合适的分析方法
4. 解释分析结果

您想从哪个方面开始？`,
          timestamp: new Date().toISOString(),
          suggestions: [
            '查看数据概况',
            '数据预处理',
            '选择分析方法',
            '查看分析结果'
          ]
        };
      }

      setMessages(prev => [...prev, response]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="w-80 border-r bg-white flex flex-col">
     

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
            <div className={`flex-1 max-w-[75%] space-y-2`}>
              <div className={`
                rounded-lg p-3 whitespace-pre-wrap
                ${message.type === 'assistant' 
                  ? 'bg-white border border-gray-100 text-gray-700' 
                  : 'bg-blue-600 text-white'}
              `}>
                {message.content}
              </div>

              {message.suggestions && (
                <div className="flex flex-wrap gap-2">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              <div className="text-xs text-gray-400">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Bot className="text-blue-600" size={16} />
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-3">
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
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入您的问题..."
            className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(inputValue);
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