import React from 'react';
import { Play } from 'lucide-react';

interface EditorToolbarProps {
  fileName: string;
  onRun: () => void;
}

export function EditorToolbar({ fileName, onRun }: EditorToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
      <div className="text-sm text-gray-600">
        {fileName}
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onRun}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center"
        >
          <Play className="h-4 w-4 mr-1.5" />
          运行
        </button>
      </div>
    </div>
  );
}