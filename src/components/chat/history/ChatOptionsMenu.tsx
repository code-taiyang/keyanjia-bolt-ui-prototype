import React from 'react';
import { Download, Share2, Pencil, Archive, Trash2 } from 'lucide-react';

interface ChatOptionsMenuProps {
  onClose: () => void;
  onRename: () => void;
  onShare: () => void;
  onDownload: () => void;
  onArchive: () => void;
  onDelete: () => void;
}

export function ChatOptionsMenu({
  onClose,
  onRename,
  onShare,
  onDownload,
  onArchive,
  onDelete
}: ChatOptionsMenuProps) {
  const menuItems = [
    {
      icon: <Download size={16} />,
      label: '下载',
      onClick: onDownload
    },
    {
      icon: <Share2 size={16} />,
      label: '共享',
      onClick: onShare
    },
    {
      icon: <Pencil size={16} />,
      label: '重命名',
      onClick: onRename
    },
    {
      icon: <Archive size={16} />,
      label: '归档',
      onClick: onArchive
    },
    {
      icon: <Trash2 size={16} />,
      label: '删除',
      onClick: onDelete,
      danger: true
    }
  ];

  return (
    <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border py-1 z-50 min-w-[160px]">
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