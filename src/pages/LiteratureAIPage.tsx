import React, { useState, useEffect } from 'react';
import { ChatArea } from '../components/literature-ai/chat/ChatArea';
import { InputArea } from '../components/literature-ai/input/InputArea';
import { ReferenceArea } from '../components/literature-ai/reference/ReferenceArea';
import { HistorySidebar } from '../components/literature-ai/navigation/HistorySidebar';
import { useLiteratureStore } from '../stores/literatureStore';

export function LiteratureAIPage() {
  const { messages } = useLiteratureStore();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);

  // Auto-select the latest AI message whenever messages change
  useEffect(() => {
    const aiMessages = messages.filter(m => m.type === 'ai');
    if (aiMessages.length > 0) {
      setSelectedMessageId(aiMessages[aiMessages.length - 1].id);
    }
  }, [messages]);

  return (
    <div className="fixed inset-0 flex">
      {/* Fixed History Sidebar */}
      <div className="w-80 border-r bg-white">
        <HistorySidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-h-0">
        <ChatArea 
          onMessageSelect={setSelectedMessageId}
          selectedMessageId={selectedMessageId}
        />
        <InputArea />
      </div>

      {/* Reference Area */}
      <ReferenceArea 
        selectedMessageId={selectedMessageId}
        onMessageSelect={setSelectedMessageId}
      />
    </div>
  );
}