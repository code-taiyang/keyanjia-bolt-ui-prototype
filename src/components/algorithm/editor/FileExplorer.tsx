import React from 'react';
import { FileText, FolderOpen, ChevronRight } from 'lucide-react';

interface FileExplorerProps {
  selectedFile: string | null;
  onSelect: (file: string) => void;
}

export function FileExplorer({ selectedFile, onSelect }: FileExplorerProps) {
  const files = [
    {
      id: 'main',
      name: 'main.py',
      type: 'file'
    },
    {
      id: 'model',
      name: 'model.py',
      type: 'file'
    },
    {
      id: 'utils',
      name: 'utils.py',
      type: 'file'
    },
    {
      id: 'config',
      name: 'config.py',
      type: 'file'
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium text-gray-900">项目文件</h3>
      </div>
      <div className="flex-1 p-2 space-y-0.5">
        {files.map((file) => (
          <button
            key={file.id}
            onClick={() => onSelect(file.id)}
            className={`
              w-full flex items-center px-2 py-1.5 rounded-lg text-sm
              ${selectedFile === file.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{file.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}