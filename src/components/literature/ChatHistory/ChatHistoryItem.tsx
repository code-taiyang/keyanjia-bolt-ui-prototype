import React from 'react';
import { Star, BookOpen, Brain, FileText } from 'lucide-react';

interface ChatHistoryItemProps {
  session: ChatSession;
  isActive: boolean;
  onSelect: () => void;
}

export function ChatHistoryItem({ session, isActive, onSelect }: ChatHistoryItemProps) {
  const getTypeIcon = () => {
    switch (session.type) {
      case 'literature_review':
        return <BookOpen size={16} className="text-blue-600" />;
      case 'literature_analysis':
        return <Brain size={16} className="text-purple-600" />;
      case 'literature_summary':
        return <FileText size={16} className="text-green-600" />;
    }
  };

  const getTypeLabel = () => {
    switch (session.type) {
      case 'literature_review':
        return '文献综述';
      case 'literature_analysis':
        return '文献分析';
      case 'literature_summary':
        return '文献总结';
    }
  };

  return (
    <button
      onClick={onSelect}
      className={`
        w-full px-4 py-3 text-left transition-colors
        ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1.5 rounded-lg bg-gray-50">
            {getTypeIcon()}
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{session.title}</h3>
            <p className="text-sm text-gray-500 truncate">{session.preview}</p>
          </div>
        </div>
        {session.isStarred && (
          <Star size={16} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
        )}
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
        <span>{getTypeLabel()}</span>
        <span>{session.time}</span>
      </div>
    </button>
  );
}