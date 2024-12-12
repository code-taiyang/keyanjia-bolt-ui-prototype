import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { AIAssistant } from '../types';
import { Avatar } from '../../common/Avatar';

interface AssistantCardProps {
  assistant: AIAssistant;
  onSelect: (assistant: AIAssistant) => void;
}

export function AssistantCard({ assistant, onSelect }: AssistantCardProps) {
  const Icon = assistant.icon;
  
  return (
    <div 
      className="p-3 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
      onClick={() => onSelect(assistant)}
    >
      <div className="flex items-center gap-3">
        <Avatar
          src={assistant.avatarUrl}
          alt={assistant.name}
          fallback={<Icon size={20} className="text-gray-600" />}
          size="md"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 text-sm">{assistant.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{assistant.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}