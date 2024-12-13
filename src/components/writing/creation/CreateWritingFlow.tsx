import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { TemplateSelectStep } from './steps/TemplateSelectStep';
import { TemplateSettingsStep } from './steps/TemplateSettingsStep';

export interface WritingInfo {
  title: string;
  description: string;
  type: 'thesis' | 'journal' | 'report';
}

export interface TemplateSettings {
  citationStyle: string;
  fontSize: string;
  lineSpacing: string;
  margins: string;
  language: string;
  autoSave: boolean;
  aiAssistance: boolean;
  aiFeatures: string[];
}

interface CreateWritingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  initialTemplateId: string | null;
}

export function CreateWritingFlow({ isOpen, onClose, initialTemplateId }: CreateWritingFlowProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [writingInfo, setWritingInfo] = useState<WritingInfo>({
    title: '',
    description: '',
    type: 'thesis'
  });
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [templateSettings, setTemplateSettings] = useState<TemplateSettings>({
    citationStyle: 'APA',
    fontSize: '12pt',
    lineSpacing: '1.5',
    margins: '1inch',
    language: 'zh-CN',
    autoSave: true,
    aiAssistance: true,
    aiFeatures: ['智能润色', '语法检查', '文献引用建议']
  });

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      if (initialTemplateId) {
        setSelectedTemplateId(initialTemplateId);
        setStep(2); // Go directly to template settings when template is pre-selected
      } else {
        setStep(1);
      }
    } else {
      // Reset state when dialog closes
      setStep(1);
      setWritingInfo({
        title: '',
        description: '',
        type: 'thesis'
      });
      setSelectedTemplateId('');
    }
  }, [isOpen, initialTemplateId]);

  const canProceed = () => {
    switch (step) {
      case 1:
        return writingInfo.title.trim() !== '';
      case 2:
        return selectedTemplateId !== '';
      case 3:
        return true; // Template settings always valid
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) return;

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Create writing and navigate to editor
      const writingId = Date.now().toString();
      navigate(`/writing/${writingId}`, {
        state: {
          ...writingInfo,
          templateId: selectedTemplateId,
          settings: templateSettings,
          isNew: true
        }
      });
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <h3 className="font-medium">新建写作</h3>
            <div className="flex items-center gap-2">
              <div className={`flex items-center ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  step === 1 ? 'border-blue-600' : 'border-gray-400'
                }`}>1</span>
                <span>基本信息</span>
              </div>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <div className={`flex items-center ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  step === 2 ? 'border-blue-600' : 'border-gray-400'
                }`}>2</span>
                <span>选择模板</span>
              </div>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <div className={`flex items-center ${step === 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 border-2 rounded-full flex items-center justify-center mr-2 ${
                  step === 3 ? 'border-blue-600' : 'border-gray-400'
                }`}>3</span>
                <span>模板设置</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <BasicInfoStep
              writingInfo={writingInfo}
              onChange={setWritingInfo}
            />
          )}
          {step === 2 && (
            <TemplateSelectStep
              selectedId={selectedTemplateId}
              onSelect={(id) => {
                setSelectedTemplateId(id);
                setStep(3); // Automatically proceed to settings after template selection
              }}
            />
          )}
          {step === 3 && (
            <TemplateSettingsStep
              settings={templateSettings}
              onChange={setTemplateSettings}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              上一步
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            取消
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {step === 3 ? '完成' : '下一步'}
          </button>
        </div>
      </div>
    </div>
  );
}