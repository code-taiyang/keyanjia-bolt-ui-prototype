import React from 'react';
import { Bot } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900">AI助手</h3>
          <p className="text-xs text-gray-500">专业的算法实现助手</p>
        </div>
      </div>
    </div>
  );
}