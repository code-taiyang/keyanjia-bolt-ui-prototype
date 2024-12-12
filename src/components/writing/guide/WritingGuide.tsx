import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { DescriptionInput } from './DescriptionInput';
import { WritingTypeSelector } from './WritingTypeSelector';

interface WritingGuideProps {
  onClose: () => void;
}

export function WritingGuide({ onClose }: WritingGuideProps) {
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!description || !selectedType) return;
    
    const writingInfo = {
      title: description.split('\n')[0].slice(0, 50),
      description,
      type: selectedType,
      createdAt: new Date().toISOString()
    };
    
    // Generate a unique ID for the new writing
    const writingId = Date.now().toString();
    
    navigate(`/writing/${writingId}`, { 
      state: {
        ...writingInfo,
        isNew: true
      }
    });
    onClose();
  };

  return (
    <div className="relative bg-white rounded-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">开始新的写作</h1>
            <p className="text-sm text-gray-500 mt-1">填写基本信息开始您的写作之旅</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/50 rounded-lg transition-colors"
        >
          <X size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        <DescriptionInput 
          value={description}
          onChange={setDescription}
        />

        <WritingTypeSelector
          selectedType={selectedType}
          onSelect={setSelectedType}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 px-8 py-6 border-t bg-gray-50">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          取消
        </button>
        <button
          onClick={handleSubmit}
          disabled={!description || !selectedType}
          className={`
            flex items-center gap-2 px-6 py-2 rounded-lg font-medium
            transition-all duration-200
            ${description && selectedType
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
          `}
        >
          <span>开始写作</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}