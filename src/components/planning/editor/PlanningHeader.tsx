import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../../common/Badge';

interface PlanningHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  isSaved: boolean;
  lastSaved: Date | null;
}

export function PlanningHeader({
  title,
  onTitleChange,
  isSaved,
  lastSaved
}: PlanningHeaderProps) {
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-4 flex-1">
        <Link 
          to="/planning"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
        </Link>
        
        <div className="flex items-center space-x-3 flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="输入规划标题..."
            className="text-xl font-medium border-none focus:outline-none focus:ring-0 w-96 placeholder-gray-400"
          />
          <div className="flex items-center gap-2">
            {isSaved ? (
              <Badge variant="success">已保存</Badge>
            ) : (
              <Badge variant="warning">未保存</Badge>
            )}
            {lastSaved && (
              <span className="text-sm text-gray-500">
                上次保存: {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowExportMenu(!showExportMenu)}
          className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Download size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
          <Share2 size={20} />
        </button>
      </div>

      {showExportMenu && (
        <div className="absolute right-4 top-12 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
            导出为 Word
          </button>
          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
            导出为 PDF
          </button>
        </div>
      )}
    </div>
  );
}