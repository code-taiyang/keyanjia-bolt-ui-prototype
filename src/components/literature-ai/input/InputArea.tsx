import React, { useState, useRef, useEffect } from 'react';
import { Send, FileText } from 'lucide-react';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { UploadedPaper } from './UploadedPaper';

export function InputArea() {
  const [input, setInput] = useState('');
  const { sendMessage, uploadPaper, currentPaper } = useLiteratureStore();
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    setIsLoading(true);
    await sendMessage(input);
    setInput('');
    setIsLoading(false);
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleUpload = () => {
    uploadPaper({
      id: Date.now().toString(),
      title: '深度学习在气候预测中的应用研究',
      authors: ['张三', '李四', '王五'],
      journal: 'Nature Climate Change',
      year: '2024',
      doi: '10.1038/s41558-024-01234-5'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-shrink-0 border-t bg-white">
      {currentPaper && <UploadedPaper paper={currentPaper} />}
      
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-start gap-3">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-3">
              <button
                onClick={handleUpload}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="上传文献"
              >
                <FileText size={18} />
              </button>
            </div>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入您的问题... (按 Enter 发送，Shift + Enter 换行)"
              className="w-full pl-12 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[46px] max-h-32 overflow-y-auto leading-6"
              rows={1}
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`
              mt-0.5 h-[42px] px-5 rounded-xl flex items-center gap-2 transition-all duration-200 flex-shrink-0
              ${input.trim() && !isLoading
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <Send size={18} className={isLoading ? 'animate-pulse' : ''} />
            <span>发送</span>
          </button>
        </div>
      </div>
    </div>
  );
}