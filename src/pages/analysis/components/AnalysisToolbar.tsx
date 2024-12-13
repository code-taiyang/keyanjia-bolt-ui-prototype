import React from 'react';
import { 
  Download, 
  Share2, 
  Settings, 
  RefreshCw,
  FileSpreadsheet,
  FileImage
} from 'lucide-react';

interface AnalysisToolbarProps {
  onExport: () => void;
  onShare: () => void;
  onSettings: () => void;
  onReset: () => void;
}

export function AnalysisToolbar({
  onExport,
  onShare,
  onSettings,
  onReset
}: AnalysisToolbarProps) {
  const [showExportMenu, setShowExportMenu] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button 
          onClick={() => setShowExportMenu(!showExportMenu)}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
        >
          <Download size={20} />
        </button>

        {showExportMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
            <button
              onClick={() => {
                onExport();
                setShowExportMenu(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
            >
              <FileSpreadsheet size={16} className="text-green-600" />
              <span>导出为 Excel</span>
            </button>
            <button
              onClick={() => {
                onExport();
                setShowExportMenu(false);
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
            >
              <FileImage size={16} className="text-blue-600" />
              <span>导出为图片</span>
            </button>
          </div>
        )}
      </div>

      <button 
        onClick={onShare}
        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
      >
        <Share2 size={20} />
      </button>

      <button 
        onClick={onSettings}
        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
      >
        <Settings size={20} />
      </button>

      <button 
        onClick={onReset}
        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
}