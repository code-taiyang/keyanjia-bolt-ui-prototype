import React from 'react';
import { FileCode } from 'lucide-react';

interface FileExplorerProps {
  files: Array<{
    id: string;
    name: string;
    content: string;
  }>;
  selectedFile: string | null;
  onSelect: (fileId: string) => void;
}

export function FileExplorer({ files, selectedFile, onSelect }: FileExplorerProps) {
  return (
    <div className="w-64 border-r bg-gray-50">
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">计算代码</h3>
        <div className="space-y-2">
          {files.map(file => (
            <button
              key={file.id}
              onClick={() => onSelect(file.id)}
              className={`
                w-full flex items-center p-2 rounded-lg text-left text-sm
                transition-colors
                ${selectedFile === file.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
            >
              <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">{file.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}