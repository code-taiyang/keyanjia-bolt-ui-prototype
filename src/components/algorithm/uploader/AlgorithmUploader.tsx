import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadZone } from './UploadZone';
import { FilePreview } from './FilePreview';

export function AlgorithmUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf'
    );
    setFiles(prev => [...prev, ...droppedFiles]);
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
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleStartAnalysis = () => {
    if (files.length === 0) return;

    // Store file info in localStorage
    localStorage.setItem('algorithm_info', JSON.stringify({
      description: `正在分析论文: ${files[0].name}`,
      fileSize: files[0].size,
      uploadTime: new Date().toISOString()
    }));

    // Navigate to editor
    navigate('/tools/algorithm/editor', {
      state: { 
        fileId: Date.now().toString(),
        fileName: files[0].name
      }
    });
  };

  return (
    <div className="space-y-6">
      <UploadZone
        isDragging={isDragging}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onFileChange={handleFileChange}
      />

      {files.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <h3 className="font-medium text-gray-900">已选择的文件</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <FilePreview
                key={index}
                file={file}
                onRemove={() => removeFile(index)}
              />
            ))}
          </div>
          
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
  );
}