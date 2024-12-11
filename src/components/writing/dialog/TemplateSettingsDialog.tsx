import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';

interface TemplateSettings {
  citationStyle: string;
  fontSize: string;
  lineSpacing: string;
  margins: string;
  language: string;
  autoSave: boolean;
  aiAssistance: boolean;
  aiFeatures: string[];
}

interface TemplateSettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  templateId: string;
  onSave: (settings: TemplateSettings) => void;
}

export function TemplateSettingsDialog({
  isOpen,
  onClose,
  templateId,
  onSave
}: TemplateSettingsDialogProps) {
  const [settings, setSettings] = useState<TemplateSettings>({
    citationStyle: 'APA',
    fontSize: '12pt',
    lineSpacing: '1.5',
    margins: '1inch',
    language: 'zh-CN',
    autoSave: true,
    aiAssistance: true,
    aiFeatures: ['智能润色', '语法检查', '文献引用建议']
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Settings size={20} className="text-gray-400" />
            <h3 className="font-medium">模板设置</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              引用格式
            </label>
            <select
              value={settings.citationStyle}
              onChange={(e) => setSettings(prev => ({ ...prev, citationStyle: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="APA">APA</option>
              <option value="MLA">MLA</option>
              <option value="Chicago">Chicago</option>
              <option value="IEEE">IEEE</option>
              <option value="GB/T 7714">GB/T 7714</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                字体大小
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="10pt">10pt</option>
                <option value="12pt">12pt</option>
                <option value="14pt">14pt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                行间距
              </label>
              <select
                value={settings.lineSpacing}
                onChange={(e) => setSettings(prev => ({ ...prev, lineSpacing: e.target.value }))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2">2.0</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              语言
            </label>
            <select
              value={settings.language}
              onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="zh-CN">中文</option>
              <option value="en-US">English</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-gray-700">自动保存</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => setSettings(prev => ({ ...prev, autoSave: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-gray-700">AI辅助</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.aiAssistance}
                onChange={(e) => setSettings(prev => ({ ...prev, aiAssistance: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {settings.aiAssistance && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                AI辅助功能
              </label>
              <div className="space-y-2">
                {['智能润色', '语法检查', '文献引用建议', '结构优化', '写作建议'].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.aiFeatures.includes(feature)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSettings(prev => ({
                            ...prev,
                            aiFeatures: [...prev.aiFeatures, feature]
                          }));
                        } else {
                          setSettings(prev => ({
                            ...prev,
                            aiFeatures: prev.aiFeatures.filter(f => f !== feature)
                          }));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            取消
          </button>
          <button
            onClick={() => {
              onSave(settings);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  );
}