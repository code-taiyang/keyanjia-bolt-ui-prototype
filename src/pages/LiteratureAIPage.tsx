import React, { useState, useEffect } from 'react';
import { ChatArea } from '../components/literature-ai/chat/ChatArea';
import { InputArea } from '../components/literature-ai/input/InputArea';
import { ReferenceArea } from '../components/literature-ai/reference/ReferenceArea';
import { useLiteratureStore } from '../stores/literatureStore';

export function LiteratureAIPage() {
  const { messages } = useLiteratureStore();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);

  // Set initial selected message to the latest AI message
  useEffect(() => {
    const aiMessages = messages.filter(m => m.type === 'ai');
    if (aiMessages.length > 0) {
      setSelectedMessageId(aiMessages[aiMessages.length - 1].id);
    }
  }, [messages]);

  return (
    <div className="h-screen flex">
      <div className="flex-1 flex flex-col min-h-0">
        <ChatArea 
          onMessageSelect={setSelectedMessageId}
          selectedMessageId={selectedMessageId}
        />
        <InputArea />
      </div>
      <ReferenceArea 
        selectedMessageId={selectedMessageId}
        onMessageSelect={setSelectedMessageId}
      />
    </div>
  );
}