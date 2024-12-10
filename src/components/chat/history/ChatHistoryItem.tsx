import React, { useState } from 'react';
import { Star, MoreHorizontal } from 'lucide-react';
import { ChatSession } from '../types';
import { ChatOptionsMenu } from './ChatOptionsMenu';
import { RenameDialog } from '../dialogs/RenameDialog';
import { DeleteDialog } from '../dialogs/DeleteDialog';
import { useChatStore } from '../../../stores/chatStore';

interface ChatHistoryItemProps {
  session: ChatSession;
  isActive: boolean;
  onSelect: () => void;
}

export function ChatHistoryItem({
  session,
  isActive,
  onSelect,
}: ChatHistoryItemProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  
  const { starSession, renameSession, deleteSession, archiveSession } = useChatStore();

  return (
    <>
      <div
        className={`
          px-4 py-3 cursor-pointer transition-colors relative
          ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}
        `}
        onClick={onSelect}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gray-50">
                {session.assistant.icon}
              </div>
              <h3 className="font-medium text-gray-900 truncate">
                {session.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mt-1 truncate">
              {session.preview}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                starSession(session.id);
              }}
              className="p-1 hover:bg-gray-200 rounded-full"
            >
              <Star
                size={14}
                className={session.isStarred 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-400'
                }
              />
            </button>
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOptions(!showOptions);
                }}
                className="p-1 hover:bg-gray-200 rounded-full"
              >
                <MoreHorizontal size={14} className="text-gray-400" />
              </button>
              {showOptions && (
                <ChatOptionsMenu
                  onClose={() => setShowOptions(false)}
                  onRename={() => setShowRenameDialog(true)}
                  onArchive={() => archiveSession(session.id)}
                  onDelete={() => setShowDeleteDialog(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>{session.assistant.name}</span>
          <span>{new Date(session.updatedAt).toLocaleString()}</span>
        </div>
      </div>

      <RenameDialog
        isOpen={showRenameDialog}
        onClose={() => setShowRenameDialog(false)}
        onRename={(title) => renameSession(session.id, title)}
        currentTitle={session.title}
      />

      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() => deleteSession(session.id)}
        title={session.title}
      />
    </>
  );
}