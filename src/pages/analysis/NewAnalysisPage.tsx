import React, { useState } from 'react';
import { Brain, Upload, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NewAnalysisPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [objective, setObjective] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleStartAnalysis = () => {
    if (!objective.trim() || files.length === 0) return;
    
    // Navigate to analysis editor with state
    navigate('/analysis/editor', {
      state: {
        title: objective.split('\n')[0].slice(0, 50),
        objective,
        files: files.map(file => ({
          id: Date.now().toString(),
          name: file.name,
          size: formatFileSize(file.size),
          uploadTime: new Date().toLocaleString()
        }))
      }
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">数据分析助手</h1>
            <p className="mt-1 text-gray-500">智能数据分析，快速获取洞察</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* 分析目标 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">分析需求</h2>
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="请描述您的分析需求，例如：分析用户购买行为与年龄、收入的关系..."
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            />
          </div>

          {/* 数据上传 */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">上传数据</h2>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                border-2 border-dashed rounded-lg p-8 text-center
                transition-all duration-200
                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
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
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-sm text-gray-600">
                将文件拖放到此处，或
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-blue-600 hover:text-blue-700 font-medium mx-1"
                >
                  点击上传
                </button>
              </p>
              <p className="mt-2 text-xs text-gray-500">
                支持 CSV、Excel、TXT 格式
              </p>
            </div>

            {/* 文件列表 */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-gray-200 rounded-full"
                    >
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 开始分析按钮 */}
          <button
            onClick={handleStartAnalysis}
            disabled={!objective.trim() || files.length === 0}
            className={`
              w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
              transition-all duration-200
              ${objective.trim() && files.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            <span>开始分析</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}