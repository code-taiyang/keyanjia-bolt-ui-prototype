import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Paperclip, Zap } from "lucide-react";

interface MessageInputProps {
  onSend: (content: string) => void;
  disabled?: boolean;
  placeholder?: string;
  tokens: number;
}

export function MessageInput({
  onSend,
  disabled,
  placeholder = "输入您的问题...",
  tokens,
}: MessageInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const suggestionIndex = useRef(0);

  const suggestions = [
    "帮我优化这段内容的学术表达",
    "检查这部分的语法和用词",
    "为这段内容添加相关文献引用",
    "帮我改进这部分的逻辑结构",
    "生成这部分内容的英文翻译",
    "提供写作建议和改进意见",
  ];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  const handleSend = () => {
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput("");
  };

  const handleAISuggestion = () => {
    const suggestion = suggestions[suggestionIndex.current];
    setInput(suggestion);
    suggestionIndex.current =
      (suggestionIndex.current + 1) % suggestions.length;

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={(e) => {
            // Handle file upload
            console.log("File selected:", e.target.files?.[0]?.name);
          }}
        />

        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <div className="absolute left-3 bottom-4 flex items-center space-x-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="上传文件"
          >
            <Paperclip className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-3 top-3 flex items-center space-x-2">
          <button
            onClick={handleAISuggestion}
            className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="AI建议"
          >
            <Sparkles className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-3 bottom-4 flex items-center space-x-2">
          <div className="flex items-center text-xs text-gray-400">
            <Zap className="h-3 w-3 text-yellow-500 mr-1" />
            <span>{tokens}</span>
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || disabled}
            className={`p-1.5 rounded-lg transition-colors ${
              input.trim() && !disabled
                ? "text-blue-600 hover:bg-blue-50"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
