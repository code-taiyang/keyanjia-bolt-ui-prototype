import React, { useState } from 'react';
import { X, Search, FileText, Trash2, Upload } from 'lucide-react';

interface WritingReferenceProps {
  onClose: () => void;
}

interface Reference {
  id: string;
  title: string;
  type: string;
  size: string;
  uploadDate: string;
}

export function WritingReference({ onClose }: WritingReferenceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const references: Reference[] = [
    {
      id: '1',
      title: 'Research on Large Language Models.pdf',
      type: 'pdf',
      size: '2.3 MB',
      uploadDate: '2024-03-20'
    },
    {
      id: '2',
      title: 'AI in Academic Writing.pdf',
      type: 'pdf',
      size: '1.8 MB',
      uploadDate: '2024-03-15'
    }
  ];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  };

  const filteredReferences = references.filter(ref =>
    ref.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 border-l bg-white flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium">参考文献</h3>
        <button 
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索文献..."
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {filteredReferences.map((ref) => (
          <div
            key={ref.id}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 group"
          >
            <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">
                {ref.title}
              </h4>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <span>{ref.uploadDate}</span>
                <span className="mx-1">·</span>
                <span>{ref.size}</span>
              </div>
            </div>
            <button 
              className="ml-2 p-1 text-gray-400 hover:text-red-600 rounded-full opacity-0 group-hover:opacity-100"
              title="删除"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          className={`
            border-2 border-dashed rounded-lg p-4 text-center
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
          `}
        >
          <Upload className="h-5 w-5 text-gray-400 mx-auto mb-2" />
          <div className="text-sm text-gray-500">
            拖拽文件或
            <label className="text-blue-600 hover:text-blue-700 cursor-pointer mx-1">
              点击上传
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" multiple />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}