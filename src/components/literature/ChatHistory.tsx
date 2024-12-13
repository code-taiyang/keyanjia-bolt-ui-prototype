import React from 'react';
import { MessageSquare, Star, Clock, Search } from 'lucide-react';

interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  isStarred?: boolean;
}

interface ChatHistoryProps {
  sessions: ChatSession[];
  activeSessionId: string;
  onSessionSelect: (sessionId: string) => void;
  onSearch: (query: string) => void;
}

export function ChatHistory({
  sessions,
  activeSessionId,
  onSessionSelect,
  onSearch
}: ChatHistoryProps) {
  return (
    <div className="w-80 border-r bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white">
        <h2 className="font-medium">对话历史</h2>
        <div className="mt-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="搜索对话..."
            className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-2 border-b bg-white">
        <div className="flex space-x-1">
          <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-lg">
            <MessageSquare size={16} />
            <span>全部</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <Star size={16} />
            <span>收藏</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            <Clock size={16} />
            <span>最近</span>
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-auto">
        {sessions.map((session) => (
          <button
            key={session.id}
            onClick={() => onSessionSelect(session.id)}
            className={`w-full p-4 text-left border-b hover:bg-gray-100 transition-colors ${
              session.id === activeSessionId ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{session.title}</h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{session.preview}</p>
              </div>
              {session.isStarred && (
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              )}
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>{session.timestamp}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}