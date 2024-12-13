import React from 'react';
import { FileCode, FileSpreadsheet } from 'lucide-react';

interface File {
  id: string;
  name: string;
  type: 'code' | 'data';
  content: string;
  language?: string;
  size?: string;
  uploadTime?: string;
}

interface FileListProps {
  files: File[];
  selectedFileId: string | null;
  onFileSelect: (file: File) => void;
}

export function FileList({ files, selectedFileId, onFileSelect }: FileListProps) {
  const codeFiles = files.filter(f => f.type === 'code');
  const dataFiles = files.filter(f => f.type === 'data');

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {/* Code Files */}
      {codeFiles.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <FileCode size={14} />
            <span>代码文件</span>
          </div>
          <div className="space-y-0.5">
            {codeFiles.map(file => (
              <button
                key={file.id}
                onClick={() => onFileSelect(file)}
                className={`
                  w-full flex items-center p-2 rounded-lg text-left text-sm
                  ${selectedFileId === file.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-600'}
                `}
              >
                <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Data Files */}
      {dataFiles.length > 0 && (
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <FileSpreadsheet size={14} />
            <span>数据文件</span>
          </div>
          <div className="space-y-0.5">
            {dataFiles.map(file => (
              <button
                key={file.id}
                onClick={() => onFileSelect(file)}
                className={`
                  w-full flex items-center p-2 rounded-lg text-left text-sm
                  ${selectedFileId === file.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-50 text-gray-600'}
                `}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}