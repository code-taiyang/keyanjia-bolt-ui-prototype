import React from 'react';
import { Plus, Upload, Download, Share2 } from 'lucide-react';

interface QuickActionsProps {
  onNew: () => void;
  onImport: () => void;
  onExport: () => void;
  onShare: () => void;
  selectedCount: number;
}

export function QuickActions({
  onNew,
  onImport,
  onExport,
  onShare,
  selectedCount
}: QuickActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onImport}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Upload size={18} />
        <span>导入文档</span>
      </button>

      {selectedCount > 0 && (
        <>
          <button 
            onClick={onExport}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Download size={18} />
            <span>导出 ({selectedCount})</span>
          </button>
          <button 
            onClick={onShare}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Share2 size={18} />
            <span>分享 ({selectedCount})</span>
          </button>
        </>
      )}

      <button 
        onClick={onNew}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Plus size={18} />
        <span>新建写作</span>
      </button>
    </div>
  );
}