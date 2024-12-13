import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { ReferenceItem } from './ReferenceItem';

interface ReferenceListProps {
  selectedMessageId: string | null;
  onMessageSelect: (id: string) => void;
  isBatchMode?: boolean;
  selectedRefs?: string[];
  onSelectRef?: (refId: string) => void;
}

export function ReferenceList({ 
  selectedMessageId, 
  onMessageSelect,
  isBatchMode = false,
  selectedRefs = [],
  onSelectRef
}: ReferenceListProps) {
  const { 
    messages, 
    getMessageReferences, 
    getPreviousMessage, 
    getNextMessage,
    interpretReference,
    saveToLibrary
  } = useLiteratureStore();
  
  const currentMessage = messages.find(m => m.id === selectedMessageId);
  const references = currentMessage ? getMessageReferences(currentMessage.id) : [];
  
  const previousMessage = selectedMessageId ? getPreviousMessage(selectedMessageId) : null;
  const nextMessage = selectedMessageId ? getNextMessage(selectedMessageId) : null;

  return (
    <div className="p-4">
      {previousMessage && (
        <button
          onClick={() => onMessageSelect(previousMessage.id)}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-4"
        >
          <ChevronUp size={16} />
          <span>查看上一条消息</span>
        </button>
      )}

      <div className="space-y-4">
        {references.map((reference, index) => (
          <ReferenceItem 
            key={reference.id} 
            reference={reference}
            index={index + 1}
            onInterpret={interpretReference}
            onSave={saveToLibrary}
            isBatchMode={isBatchMode}
            isSelected={selectedRefs.includes(reference.id)}
            onSelect={onSelectRef}
          />
        ))}
      </div>

      {nextMessage && (
        <button
          onClick={() => onMessageSelect(nextMessage.id)}
          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mt-4"
        >
          <ChevronDown size={16} />
          <span>查看下一条消息</span>
        </button>
      )}
    </div>
  );
}
