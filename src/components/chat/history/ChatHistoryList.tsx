import React from 'react';
import { ChatSession } from './types';
import { ChatHistoryItem } from './ChatHistoryItem';

interface ChatHistoryListProps {
  sessions: ChatSession[];
  activeSessionId: string;
  onSelect: (session: ChatSession) => void;
  onStar: (session: ChatSession) => void;
  onRename: (session: ChatSession) => void;
  onShare: (session: ChatSession) => void;
  onDownload: (session: ChatSession) => void;
  onArchive: (session: ChatSession) => void;
  onDelete: (session: ChatSession) => void;
}

export function ChatHistoryList({
  sessions,
  activeSessionId,
  onSelect,
  onStar,
  onRename,
  onShare,
  onDownload,
  onArchive,
  onDelete
}: ChatHistoryListProps) {
  // 按时间分组会话
  const groupedSessions = sessions.reduce((groups, session) => {
    const now = new Date();
    const sessionDate = new Date(session.updatedAt);
    
    if (sessionDate.toDateString() === now.toDateString()) {
      groups.today.push(session);
    } else if (sessionDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
      groups.yesterday.push(session);
    } else if (sessionDate > new Date(now.setDate(now.getDate() - 6))) {
      groups.lastWeek.push(session);
    } else if (sessionDate > new Date(now.setDate(now.getDate() - 23))) {
      groups.lastMonth.push(session);
    } else {
      groups.older.push(session);
    }
    
    return groups;
  }, {
    today: [] as ChatSession[],
    yesterday: [] as ChatSession[],
    lastWeek: [] as ChatSession[],
    lastMonth: [] as ChatSession[],
    older: [] as ChatSession[]
  });

  return (
    <div className="flex-1 overflow-auto">
      {Object.entries(groupedSessions).map(([group, sessions]) => {
        if (sessions.length === 0) return null;
        
        return (
          <div key={group}>
            <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">
              {group === 'today' ? '今天' :
               group === 'yesterday' ? '昨天' :
               group === 'lastWeek' ? '前7天' :
               group === 'lastMonth' ? '前30天' : '更早'}
            </div>
            <div className="space-y-1">
              {sessions.map(session => (
                <ChatHistoryItem
                  key={session.id}
                  session={session}
                  isActive={session.id === activeSessionId}
                  onSelect={() => onSelect(session)}
                  onStar={() => onStar(session)}
                  onRename={() => onRename(session)}
                  onShare={() => onShare(session)}
                  onDownload={() => onDownload(session)}
                  onArchive={() => onArchive(session)}
                  onDelete={() => onDelete(session)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}