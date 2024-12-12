import React from 'react';
import { ChatManager } from '../components/chat/ChatManager';

export function ChatPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 min-h-0">
        <ChatManager />
      </div>
    </div>
  );
}