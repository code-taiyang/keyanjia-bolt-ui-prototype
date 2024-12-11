import React, { useState } from 'react';
import { 
  BarChart2, 
  Download, 
  Share2, 
  MoreVertical,
  Maximize2,
  FileText,
  Image
} from 'lucide-react';
import { AnalysisResult } from '../../../../types/analysis';

interface ChartContainerProps {
  result: AnalysisResult;
}

export function ChartContainer({ result }: ChartContainerProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleExport = (format: 'excel' | 'image') => {
    // 实现导出逻辑
    console.log('Export as', format);
    setShowMenu(false);
  };

  const handleShare = () => {
    // 实现分享逻辑
    console.log('Share chart');
    setShowMenu(false);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">{result.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{result.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 hover:bg-gray-100 rounded-lg"
            >
              <Maximize2 size={16} className="text-gray-400" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1.5 hover:bg-gray-100 rounded-lg"
              >
                <MoreVertical size={16} className="text-gray-400" />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                  <button
                    onClick={() => handleExport('excel')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <FileText size={16} className="text-green-600" />
                    <span>导出数据</span>
                  </button>
                  <button
                    onClick={() => handleExport('image')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Image size={16} className="text-blue-600" />
                    <span>导出图片</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Share2 size={16} className="text-purple-600" />
                    <span>分享图表</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`
        p-4 bg-gray-50 
        ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}
      `}>
        {/* 这里集成实际的图表库 */}
        <div className="aspect-[4/3] bg-white rounded-lg flex items-center justify-center">
          <BarChart2 size={32} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}