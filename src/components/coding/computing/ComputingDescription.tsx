import React from 'react';
import { Calculator, Upload } from 'lucide-react';

interface ComputingDescriptionProps {
  value: string;
  onChange: (value: string) => void;
}

export function ComputingDescription({ value, onChange }: ComputingDescriptionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Calculator className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-medium">描述您的计算需求</h2>
      </div>

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="描述您需要进行的科研计算，或上传数据文件..."
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />
        <button 
          className="absolute right-3 top-3 p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          title="上传数据文件"
        >
          <Upload className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}