import React, { useState } from 'react';
import { X, FileText, Settings, ChevronRight } from 'lucide-react';
import { TemplateGrid } from '../templates/TemplateGrid';
import { useNavigate } from 'react-router-dom';

interface NewWritingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewWritingDialog({
  isOpen,
  onClose,
}: NewWritingDialogProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTemplateId, setSelectedTemplateId] = useState('');

  const handleNext = () => {
    if (step === 1 && title.trim()) {
      setStep(2);
    } else if (step === 2 && selectedTemplateId) {
      // Create writing and navigate to editor
      const writingId = Date.now().toString();
      navigate(`/writing/${writingId}`, {
        state: {
          title,
          description,
          templateId: selectedTemplateId,
          isNew: true
        }
      });
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    setTitle('');
    setDescription('');
    setSelectedTemplateId('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <FileText size={20} className="text-gray-400" />
            <h3 className="font-medium">新建写作</h3>
            <div className="flex items-center">
              <div className={`flex items-center ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className="w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2">1</span>
                <span>基本信息</span>
              </div>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <div className={`flex items-center ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className="w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2">2</span>
                <span>选择模板</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  标题
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="输入写作标题..."
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  描述
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="简要描述写作内容..."
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto">
                <TemplateGrid 
                  onSelect={(templateId) => setSelectedTemplateId(templateId)}
                  selectedId={selectedTemplateId}
                  compact
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              上一步
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            取消
          </button>
          <button
            onClick={handleNext}
            disabled={step === 1 ? !title.trim() : !selectedTemplateId}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {step === 1 ? (
              <>
                <ChevronRight size={16} />
                <span>下一步</span>
              </>
            ) : (
              <>
                <Settings size={16} />
                <span>开始写作</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}