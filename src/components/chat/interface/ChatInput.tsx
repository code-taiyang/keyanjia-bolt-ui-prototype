import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image } from 'lucide-react';

interface ChatInputProps {
  onSend: (content: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end gap-4">
          <div className="flex-1 bg-gray-50 rounded-lg p-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入消息..."
              className="w-full bg-transparent border-0 resize-none focus:ring-0 p-2 max-h-32"
              rows={1}
            />
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-200 rounded">
                  <Paperclip size={18} className="text-gray-400" />
                </button>
                <button className="p-1.5 hover:bg-gray-200 rounded">
                  <Image size={18} className="text-gray-400" />
                </button>
              </div>
              <div className="text-xs text-gray-400">
                Shift + Enter 换行，Enter 发送
              </div>
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`
              p-3 rounded-lg flex-shrink-0
              ${input.trim() && !isLoading
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