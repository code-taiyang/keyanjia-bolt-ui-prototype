import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Paperclip, Zap } from 'lucide-react';
import { useReferenceStore } from '../../../../stores/referenceStore';

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
  tokens
}: MessageInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addReference = useReferenceStore((state) => state.addReference);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      // 创建新的参考资料
      const reference = {
        id: Date.now().toString(),
        title: file.name,
        type: file.type.split('/').pop() || 'unknown',
        size: formatFileSize(file.size),
        uploadTime: new Date().toLocaleString(),
        url: URL.createObjectURL(file)
      };

      // 添加到store
      addReference(reference);

      // 在对话中显示上传成功消息
      onSend(`上传文件：${file.name}`);
    });

    // 清空input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="p-4 border-t">
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={handleFileUpload}
        />
        
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-4 min-h-[120px] text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (input.trim()) {
                onSend(input);
                setInput('');
              }
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

        <div className="absolute right-3 bottom-4 flex items-center space-x-2">
          <div className="flex items-center text-xs text-gray-400">
            <Zap className="h-3 w-3 text-yellow-500 mr-1" />
            <span>{tokens}</span>
          </div>
          <button
            onClick={() => {
              if (input.trim()) {
                onSend(input);
                setInput('');
              }
            }}
            disabled={!input.trim() || disabled}
            className={`p-1.5 rounded-lg transition-colors ${
              input.trim() && !disabled
                ? 'text-blue-600 hover:bg-blue-50'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}