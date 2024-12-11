import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, Book, FileIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../../common/Badge';

interface WritingHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  wordCount: number;
  isModified: boolean;
  isSaving: boolean;
  lastSaved: Date | null;
  onToggleReference: () => void;
  isReferenceOpen: boolean;
}

export function WritingHeader({
  title,
  onTitleChange,
  wordCount,
  isModified,
  isSaving,
  lastSaved,
  onToggleReference,
  isReferenceOpen
}: WritingHeaderProps) {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleExport = (format: 'pdf' | 'docx') => {
    // Handle export logic
    console.log(`Exporting as ${format}...`);
    setShowExportMenu(false);
  };

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-4 flex-1">
        <Link 
          to="/tools/writing"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        
        <div className="flex items-center space-x-3 flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="输入标题..."
            className="text-xl font-medium border-none focus:outline-none focus:ring-0 w-96 placeholder-gray-400"
          />
          <div className="flex items-center gap-2">
            {isModified ? (
              <Badge variant="warning">未保存</Badge>
            ) : isSaving ? (
              <Badge variant="default">保存中...</Badge>
            ) : (
              <Badge variant="success">已保存</Badge>
            )}
            {lastSaved && (
              <span className="text-sm text-gray-500">
                上次保存: {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm text-gray-500">
          <FileText size={16} className="mr-1" />
          {wordCount} 字
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onToggleReference}
            className={`
              p-2 rounded-full transition-colors
              ${isReferenceOpen 
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}
            `}
            title="参考文献"
          >
            <Book size={20} />
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              title="导出"
            >
              <Download size={20} />
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border py-1 z-10">
                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <FileIcon size={16} className="text-red-500" />
                  导出为 PDF
                </button>
                <button
                  onClick={() => handleExport('docx')}
                  className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <FileIcon size={16} className="text-blue-500" />
                  导出为 Word
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}