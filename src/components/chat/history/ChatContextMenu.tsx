import React from 'react';
import { Download, Share2, Pencil, Archive, Trash2 } from 'lucide-react';
import { ChatSession } from './types';

interface ChatContextMenuProps {
  session: ChatSession;
  position: { x: number; y: number };
  onClose: () => void;
  onRename: (session: ChatSession) => void;
  onShare: (session: ChatSession) => void;
  onDownload: (session: ChatSession) => void;
  onArchive: (session: ChatSession) => void;
  onDelete: (session: ChatSession) => void;
}

export function ChatContextMenu({
  session,
  position,
  onClose,
  onRename,
  onShare,
  onDownload,
  onArchive,
  onDelete
}: ChatContextMenuProps) {
  const menuItems = [
    {
      icon: <Download size={16} />,
      label: '下载',
      onClick: () => onDownload(session)
    },
    {
      icon: <Share2 size={16} />,
      label: '共享',
      onClick: () => onShare(session)
    },
    {
      icon: <Pencil size={16} />,
      label: '重命名',
      onClick: () => onRename(session)
    },
    {
      icon: <Archive size={16} />,
      label: '归档',
      onClick: () => onArchive(session)
    },
    {
      icon: <Trash2 size={16} />,
      label: '删除',
      onClick: () => onDelete(session),
      danger: true
    }
  ];

  React.useEffect(() => {
    const handleClickOutside = () => onClose();
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div
      className="fixed bg-white rounded-lg shadow-lg border py-1 z-50"
      style={{ 
        top: position.y, 
        left: position.x,
        minWidth: '160px'
      }}
      onClick={e => e.stopPropagation()}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            item.onClick();
            onClose();
          }}
          className={`
            w-full px-4 py-2 text-sm flex items-center gap-2
            ${item.danger 
              ? 'text-red-600 hover:bg-red-50' 
              : 'text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}