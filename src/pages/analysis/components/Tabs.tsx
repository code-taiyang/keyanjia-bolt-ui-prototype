import React from 'react';
import { FileText, BarChart2, Share2, Download, FileImage } from 'lucide-react';

interface TabsProps {
  activeTab: 'files' | 'results';
  onTabChange: (tab: 'files' | 'results') => void;
  onShare?: () => void;
  onExport?: () => void;
  showExportMenu?: boolean;
  setShowExportMenu?: (show: boolean) => void;
  handleExport?: (format: 'pdf' | 'word') => void;
  showActions?: boolean;
}

export function Tabs({ 
  activeTab, 
  onTabChange,
  onShare,
  onExport,
  showExportMenu,
  setShowExportMenu,
  handleExport,
  showActions = false
}: TabsProps) {
  return (
    <div className="flex items-center justify-between border-b">
      <div className="flex">
        <button
          onClick={() => onTabChange('files')}
          className={`
            flex items-center gap-2 px-4 py-3 text-sm font-medium
            ${activeTab === 'files'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <FileText size={16} />
          <span>文件</span>
        </button>
        <button
          onClick={() => onTabChange('results')}
          className={`
            flex items-center gap-2 px-4 py-3 text-sm font-medium
            ${activeTab === 'results'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <BarChart2 size={16} />
          <span>结果</span>
        </button>
      </div>

      {showActions && activeTab === 'results' && (
        <div className="flex items-center gap-2 pr-4">
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Share2 size={16} />
            <span className="text-sm">分享</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowExportMenu?.(!showExportMenu)}
              className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Download size={16} />
              <span className="text-sm">导出报告</span>
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                <button
                  onClick={() => handleExport?.('pdf')}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <FileText size={16} className="text-red-500" />
                  <span>导出为 PDF</span>
                </button>
                <button
                  onClick={() => handleExport?.('word')}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <FileImage size={16} className="text-blue-500" />
                  <span>导出为 Word</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}