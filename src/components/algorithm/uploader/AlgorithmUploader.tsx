import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Bot } from 'lucide-react';
import { UploadZone } from './UploadZone';
import { FilePreview } from './FilePreview';

export function AlgorithmUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    console.log('File dropped:', e.dataTransfer.files[0]?.name);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === 'application/pdf') {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File selected:', e.target.files?.[0]?.name);
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleStartAnalysis = () => {
    if (!file) return;

    // Store analysis info in localStorage
    const analysisInfo = {
      description: `正在分析论文: ${file.name}`,
      fileSize: file.size,
      uploadTime: new Date().toISOString(),
      analysisSteps: [
        {
          id: 'parse',
          title: '论文解析',
          description: '正在解析论文内容和结构',
          status: 'pending'
        },
        {
          id: 'extract',
          title: '算法提取',
          description: '识别并提取论文中的算法描述',
          status: 'pending'
        },
        {
          id: 'code',
          title: '代码生成',
          description: '构建算法实现代码',
          status: 'pending'
        },
        {
          id: 'optimize',
          title: '代码优化',
          description: '优化代码结构和性能',
          status: 'pending'
        }
      ]
    };
    localStorage.setItem('algorithm_info', JSON.stringify(analysisInfo));

    // Navigate to editor
    navigate('/tools/algorithm/editor', {
      state: { 
        fileId: Date.now().toString(),
        fileName: file.name,
        isNewAnalysis: true
      },
      replace: true
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">AI算法复现助手</h3>
              <p className="mt-1 text-sm text-gray-500">
                上传论文，AI助手将帮您分析并复现算法
              </p>
            </div>
          </div>

          <UploadZone
            isDragging={isDragging}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onFileChange={handleFileChange}
          />

          {file && (
            <div className="bg-white rounded-xl p-6 space-y-4 mt-6">
              <h3 className="font-medium text-gray-900">已选择的文件</h3>
              <FilePreview
                file={file}
                onRemove={removeFile}
              />
              
              <div className="flex justify-end">
                <button 
                  onClick={handleStartAnalysis}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  开始分析
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}