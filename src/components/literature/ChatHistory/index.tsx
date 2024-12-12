import React, { useState } from 'react';
import { ChatHistorySearch } from './ChatHistorySearch';
import { ChatHistoryFilters } from './ChatHistoryFilters';
import { ChatHistoryList } from './ChatHistoryList';
import { ChatSession, FilterType } from './types';

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
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredSessions = sessions.filter(session => {
    switch (activeFilter) {
      case 'starred':
        return session.isStarred;
      case 'recent':
        return new Date(session.date).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  });

  return (
    <div className="w-80 border-r bg-gray-50 flex flex-col">
      <ChatHistorySearch onSearch={onSearch} />
      <ChatHistoryFilters 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ChatHistoryList
        sessions={filteredSessions}
        activeSessionId={activeSessionId}
        onSessionSelect={onSessionSelect}
      />
    </div>
  );
}