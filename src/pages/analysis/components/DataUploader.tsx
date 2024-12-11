import React, { useState, useRef } from 'react';
import { Upload, X, ArrowLeft, FileSpreadsheet, File, Loader2 } from 'lucide-react';

interface AnalysisConfig {
  objective: string;
  dataType: string;
  analysisType: string[];
  requirements: string;
}

interface DataFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

interface DataUploaderProps {
  config: AnalysisConfig;
  onUpload: (files: DataFile[]) => void;
  onBack: () => void;
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_TYPES = [
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain'
];

export function DataUploader({ config, onUpload, onBack }: DataUploaderProps) {
  const [files, setFiles] = useState<DataFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return '不支持的文件类型';
    }
    if (file.size > MAX_FILE_SIZE) {
      return '文件大小超过限制（50MB）';
    }
    return null;
  };

  const processFiles = async (fileList: FileList | null) => {
    if (!fileList) return;

    setError(null);
    const newFiles: DataFile[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const error = validateFile(file);
      
      if (error) {
        setError(error);
        return;
      }

      newFiles.push({
        id: Date.now().toString() + i,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      });
    }

    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    await processFiles(e.dataTransfer.files);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await processFiles(e.target.files);
  };

  const removeFile = (id: string) => {
    setFiles(prev => {
      const newFiles = prev.filter(f => f.id !== id);
      const removedFile = prev.find(f => f.id === id);
      if (removedFile?.url) {
        URL.revokeObjectURL(removedFile.url);
      }
      return newFiles;
    });
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setError('请至少上传一个文件');
      return;
    }

    setIsUploading(true);
    // 模拟上传过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    onUpload(files);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        <span>返回修改分析配置</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-medium mb-1">上传数据文件</h2>
        <p className="text-sm text-gray-500 mb-6">
          支持 CSV、Excel 和文本文件格式，单个文件大小不超过 50MB
        </p>

        {/* 拖拽上传区域 */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative border-2 border-dashed rounded-lg p-8
            transition-all duration-200
            ${isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".csv,.xlsx,.xls,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-sm text-gray-600">
              将文件拖放到此处，或
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 font-medium mx-1"
              >
                点击上传
              </button>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              支持 CSV、Excel、TXT 格式，最大 50MB
            </p>
          </div>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* 文件列表 */}
        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-medium text-gray-700">已选择的文件</h3>
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 提交按钮 */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={files.length === 0 || isUploading}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg text-white
              transition-all duration-200
              ${files.length > 0 && !isUploading
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'}
            `}
          >
            {isUploading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>正在处理...</span>
              </>
            ) : (
              <>
                <span>开始分析</span>
                <ChevronRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}