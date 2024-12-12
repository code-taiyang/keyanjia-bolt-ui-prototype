import React, { useState, useMemo } from 'react';
import { ChatHeaderActions } from '../header/ChatHeaderActions';
import { ChatHistorySearch } from './ChatHistorySearch';
import { ChatHistoryFilters } from './ChatHistoryFilters';
import { ChatHistoryList } from './ChatHistoryList';
import { ChatSession, FilterType } from './types';

interface ChatHistoryProps {
  sessions: ChatSession[];
  activeSessionId: string;
  onSessionSelect: (session: ChatSession) => void;
  onSearch: (query: string) => void;
  onNewChat: () => void;
}

export function ChatHistory({
  sessions,
  activeSessionId,
  onSessionSelect,
  onSearch,
  onNewChat
}: ChatHistoryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      switch (activeFilter) {
        case 'starred':
          return session.isStarred;
        case 'recent':
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return new Date(session.updatedAt) > oneWeekAgo;
        default:
          return true;
      }
    });
  }, [sessions, activeFilter]);

  const handleStar = (session: ChatSession) => {
    console.log('Star session:', session.id);
  };

  const handleRename = (session: ChatSession) => {
    console.log('Rename session:', session.id);
  };

  const handleShare = (session: ChatSession) => {
    console.log('Share session:', session.id);
  };

  const handleDownload = (session: ChatSession) => {
    console.log('Download session:', session.id);
  };

  const handleArchive = (session: ChatSession) => {
    console.log('Archive session:', session.id);
  };

  const handleDelete = (session: ChatSession) => {
    console.log('Delete session:', session.id);
  };

  return (
    <div className={`border-r bg-gray-50 flex flex-col transition-all duration-300 ${
      isMenuOpen ? 'w-80' : 'w-0'
    }`}>
      <ChatHeaderActions 
        onSearch={onSearch}
        onNewChat={onNewChat}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ChatHistorySearch onSearch={onSearch} />
      <ChatHistoryFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ChatHistoryList
        sessions={filteredSessions}
        activeSessionId={activeSessionId}
        onSelect={onSessionSelect}
        onStar={handleStar}
        onRename={handleRename}
        onShare={handleShare}
        onDownload={handleDownload}
        onArchive={handleArchive}
        onDelete={handleDelete}
      />
    </div>
  );
}