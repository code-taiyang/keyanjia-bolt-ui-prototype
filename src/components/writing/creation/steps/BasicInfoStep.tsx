import React from 'react';
import { WritingInfo } from '../CreateWritingFlow';

interface BasicInfoStepProps {
  writingInfo: WritingInfo;
  onChange: (info: WritingInfo) => void;
}

export function BasicInfoStep({ writingInfo, onChange }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          写作标题 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={writingInfo.title}
          onChange={(e) => onChange({ ...writingInfo, title: e.target.value })}
          placeholder="输入写作标题..."
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          写作类型
        </label>
        <select
          value={writingInfo.type}
          onChange={(e) => onChange({ ...writingInfo, type: e.target.value as WritingInfo['type'] })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="thesis">学位论文</option>
          <option value="journal">期刊论文</option>
          <option value="report">研究报告</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          写作描述
        </label>
        <textarea
          value={writingInfo.description}
          onChange={(e) => onChange({ ...writingInfo, description: e.target.value })}
          placeholder="简要描述写作内容..."
          rows={3}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  );
}