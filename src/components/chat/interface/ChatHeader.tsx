import React from 'react';
import { Settings, Download, Share2, Star, Archive } from 'lucide-react';
import { ChatSession } from '../types';

interface ChatHeaderProps {
  session: ChatSession;
  onStar: () => void;
  onArchive: () => void;
}

export function ChatHeader({ session, onStar, onArchive }: ChatHeaderProps) {
  const Icon = session.assistant.icon;

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          <Icon className="text-blue-600" size={24} />
        </div>
        <div>
          <h2 className="font-medium text-gray-900">{session.title}</h2>
          <p className="text-sm text-gray-500">{session.assistant.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onStar}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Star 
            size={20} 
            className={session.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
          />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Share2 size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Download size={20} className="text-gray-400" />
        </button>
        <button 
          onClick={onArchive}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Archive size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}