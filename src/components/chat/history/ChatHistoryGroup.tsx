import React from 'react';
import { ChatSession } from '../types';
import { ChatHistoryItem } from './ChatHistoryItem';

interface ChatHistoryGroupProps {
  title: string;
  sessions: ChatSession[];
  activeSessionId?: string;
  onSelect: (session: ChatSession) => void;
  onStar: (session: ChatSession) => void;
  onRename: (session: ChatSession) => void;
  onShare: (session: ChatSession) => void;
  onDownload: (session: ChatSession) => void;
  onArchive: (session: ChatSession) => void;
  onDelete: (session: ChatSession) => void;
}

export function ChatHistoryGroup({
  title,
  sessions,
  activeSessionId,
  onSelect,
  onStar,
  onRename,
  onShare,
  onDownload,
  onArchive,
  onDelete
}: ChatHistoryGroupProps) {
  if (sessions.length === 0) return null;

  return (
    <div>
      <div className="px-4 py-2">
        <span className="text-xs font-medium text-gray-500">
          {title}
        </span>
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
}