import React from 'react';
import { Lightbulb } from 'lucide-react';

interface DescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function DescriptionInput({ value, onChange }: DescriptionInputProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-medium text-gray-900">写作内容</h2>
        <p className="text-sm text-gray-500 mt-1">请描述您要写作的主题和主要内容</p>
      </div>

      <div className="relative">
        <textarea
          rows={4}
          className="block w-full rounded-lg border border-gray-200 px-4 py-3 
            shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
            text-sm resize-none transition-shadow duration-200
            placeholder:text-gray-400"
          placeholder="在此输入写作主题和内容描述..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        
        {value.length > 0 && value.length < 20 && (
          <div className="absolute -bottom-6 left-0 flex items-start gap-2 text-xs text-amber-600">
            <Lightbulb size={14} className="flex-shrink-0 mt-0.5" />
            <span>建议详细描述写作主题、目的和关键内容</span>
          </div>
        )}
      </div>
    </div>
  );
}