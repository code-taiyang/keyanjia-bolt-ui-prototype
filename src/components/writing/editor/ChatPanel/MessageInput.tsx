import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Wand2 } from 'lucide-react';

interface MessageInputProps {
  onSend: (content: string) => void;
  onAISuggestion: () => void;
  disabled?: boolean;
  placeholder?: string;
  tokens: number;
}

export function MessageInput({ 
  onSend, 
  onAISuggestion,
  disabled, 
  placeholder = "输入您的问题...",
  tokens
}: MessageInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = () => {
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="relative rounded-lg border bg-white shadow-sm">
      {/* AI Suggestion Button - Top Right */}
      <button
        onClick={onAISuggestion}
        className="absolute right-3 top-3 p-1.5 hover:bg-gray-100 rounded-md transition-colors"
        title="AI建议"
      >
        <Wand2 size={18} className="text-blue-500" />
      </button>

      {/* Send Button - Bottom Right */}
      <button
        onClick={handleSend}
        disabled={!input.trim() || disabled}
        className={`
          absolute right-3 bottom-2 p-1.5 rounded-md transition-colors
          ${input.trim() && !disabled
            ? 'text-blue-600 hover:bg-blue-50'
            : 'text-gray-300 cursor-not-allowed'
          }
        `}
      >
        {disabled ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Send size={20} />
        )}
      </button>

      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-14 text-sm rounded-lg resize-none focus:outline-none focus:ring-0 min-h-[5rem] max-h-40"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      
      <div className="absolute left-4 bottom-3 text-xs text-gray-400">
        {tokens} tokens
      </div>
    </div>
  );
}