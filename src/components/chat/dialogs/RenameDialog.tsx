import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RenameDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (title: string) => void;
  currentTitle: string;
}

export function RenameDialog({
  isOpen,
  onClose,
  onRename,
  currentTitle,
}: RenameDialogProps) {
  const [title, setTitle] = useState(currentTitle);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">重命名对话</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="输入新的标题"
          autoFocus
        />

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            取消
          </button>
          <button
            onClick={() => {
              if (title.trim()) {
                onRename(title);
                onClose();
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  );
}