import React from 'react';
import { Edit, Download, Share2, Star, Archive, Trash2 } from 'lucide-react';

interface WritingContextMenuProps {
  x: number;
  y: number;
  isStarred: boolean;
  onClose: () => void;
  onEdit: () => void;
  onStar: () => void;
  onShare: () => void;
  onDownload: () => void;
  onArchive: () => void;
  onDelete: () => void;
}

export function WritingContextMenu({
  x,
  y,
  isStarred,
  onClose,
  onEdit,
  onStar,
  onShare,
  onDownload,
  onArchive,
  onDelete
}: WritingContextMenuProps) {
  const menuItems = [
    { icon: <Edit size={16} />, label: '编辑', onClick: onEdit },
    { icon: <Star size={16} />, label: isStarred ? '取消收藏' : '收藏', onClick: onStar },
    { icon: <Share2 size={16} />, label: '分享', onClick: onShare },
    { icon: <Download size={16} />, label: '下载', onClick: onDownload },
    { icon: <Archive size={16} />, label: '归档', onClick: onArchive },
    { icon: <Trash2 size={16} />, label: '删除', onClick: onDelete, danger: true }
  ];

  return (
    <div 
      className="fixed bg-white rounded-lg shadow-lg border py-1 z-50"
      style={{ top: y, left: x }}
      onClick={e => e.stopPropagation()}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          className={`
            w-full px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 text-left
            ${item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'}
          `}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}