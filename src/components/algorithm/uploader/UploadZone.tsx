import React from 'react';
import { Upload, Bot, FileText, Sparkles } from 'lucide-react';

interface UploadZoneProps {
  isDragging: boolean;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadZone({
  isDragging,
  onDrop,
  onDragOver,
  onDragLeave,
  onFileChange
}: UploadZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={`
        relative border-2 border-dashed rounded-xl p-8 transition-all duration-200
        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
      `}
    >
      <div className="mx-auto flex flex-col items-center max-w-sm text-center">
        <div className="p-4 bg-blue-50 rounded-full mb-4">
          <Upload className="h-8 w-8 text-blue-500" />
        </div>
        <div className="space-y-2 mb-6">
          <h4 className="text-base font-medium text-gray-900">
            上传论文PDF文件，AI助手将帮助您分析并复现论文中的算法
          </h4>
          <p className="text-sm text-gray-500">
            支持 PDF 格式，最大 20MB
          </p>
        </div>
        <label className="relative">
          <input
            type="file"
            className="sr-only"
            accept=".pdf"
            onChange={onFileChange}
          />
          <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors">
            <Upload className="h-4 w-4 mr-2" />
            选择文件
          </span>
        </label>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50/80 hover:bg-gray-50 transition-colors">
          <Bot className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600">
            智能分析论文中的算法细节和实现思路
          </p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50/80 hover:bg-gray-50 transition-colors">
          <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600">
            自动生成完整的代码实现和运行步骤
          </p>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-lg bg-gray-50/80 hover:bg-gray-50 transition-colors">
          <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600">
            提供性能优化和改进建议
          </p>
        </div>
      </div>
    </div>
  );
}