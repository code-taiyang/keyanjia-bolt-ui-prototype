import React from 'react';
import { Star } from 'lucide-react';
import { ChatSession } from './types';

interface ChatHistoryListProps {
  sessions: ChatSession[];
  activeSessionId: string;
  onSessionSelect: (sessionId: string) => void;
}

export function ChatHistoryList({ 
  sessions, 
  activeSessionId, 
  onSessionSelect 
}: ChatHistoryListProps) {
  // 按时间分组会话
  const groupedSessions = sessions.reduce((groups, session) => {
    const date = session.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(session);
    return groups;
  }, {} as Record<string, ChatSession[]>);

  return (
    <div className="flex-1 overflow-auto">
      {Object.entries(groupedSessions).map(([date, dateSessions]) => (
        <div key={date}>
          <div className="sticky top-0 px-4 py-2 bg-gray-50 border-b">
            <span className="text-xs font-medium text-gray-500">{date}</span>
          </div>
          {dateSessions.map((session) => (
            <button
              key={session.id}
              onClick={() => onSessionSelect(session.id)}
              className={`w-full p-4 text-left border-b hover:bg-gray-100 transition-colors ${
                session.id === activeSessionId ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {session.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {session.preview}
                  </p>
                </div>
                {session.isStarred && (
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                )}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>{session.time}</span>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}