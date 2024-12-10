import React from 'react';
import { useLiteratureStore } from '../../../stores/literatureStore';
import { ReferenceItem } from './ReferenceItem';

interface ReferenceCardsProps {
  onMessageSelect: (id: string) => void;
}

export function ReferenceCards({ onMessageSelect }: ReferenceCardsProps) {
  const { messages, getMessageReferences } = useLiteratureStore();
  const aiMessages = messages.filter(m => m.type === 'ai');

  return (
    <div className="p-4 space-y-6">
      {aiMessages.map(message => {
        const references = getMessageReferences(message.id);
        if (references.length === 0) return null;

        return (
          <div 
            key={message.id}
            className="border rounded-lg hover:border-blue-200 cursor-pointer"
            onClick={() => onMessageSelect(message.id)}
          >
            <div className="p-4 border-b bg-gray-50">
              <p className="text-sm text-gray-900 line-clamp-2">{message.content}</p>
              <p className="text-xs text-gray-500 mt-2">
                {references.length}条参考文献
              </p>
            </div>
            <div className="p-4 space-y-4">
              {references.map((reference, index) => (
                <ReferenceItem
                  key={reference.id}
                  reference={reference}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}