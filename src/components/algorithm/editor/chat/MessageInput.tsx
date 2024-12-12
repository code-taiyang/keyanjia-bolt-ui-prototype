import React, { useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isProcessing: boolean;
  tokenCount: {
    current: number;
    total: number;
  };
}

export function MessageInput({
  value,
  onChange,
  onSubmit,
  isProcessing,
  tokenCount
}: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [value]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="输入您的问题..."
        className="w-full pl-4 pr-24 py-3 text-sm border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={1}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      
      <div className="absolute right-2 bottom-2 flex items-center gap-2">
        <button
          className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50"
          title="AI建议"
        >
          <Sparkles className="h-4 w-4" />
        </button>
        <button
          onClick={onSubmit}
          disabled={!value.trim() || isProcessing}
          className={`
            p-1.5 rounded-lg transition-colors
            ${value.trim() && !isProcessing
              ? 'text-blue-600 hover:bg-blue-50'
              : 'text-gray-300 cursor-not-allowed'
            }
          `}
        >
          {isProcessing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="absolute left-4 bottom-2 text-xs text-gray-400">
        {tokenCount.current} / {tokenCount.total}
      </div>
    </div>
  );
}