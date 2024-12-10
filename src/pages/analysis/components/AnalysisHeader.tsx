import React from 'react';
import { Brain, ChevronRight } from 'lucide-react';

interface AnalysisHeaderProps {
  step: number;
  title: string;
  description: string;
}

export function AnalysisHeader({ step, title, description }: AnalysisHeaderProps) {
  const steps = ['配置分析', '上传数据', '分析结果'];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            <p className="mt-1 text-gray-500">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {steps.map((stepName, index) => (
          <React.Fragment key={index}>
            <div className={`
              flex items-center gap-2 text-sm font-medium
              ${index + 1 === step ? 'text-blue-600' : 'text-gray-400'}
            `}>
              <span className={`
                w-6 h-6 rounded-full flex items-center justify-center
                ${index + 1 === step 
                  ? 'bg-blue-100 text-blue-600' 
                  : index + 1 < step
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100'}
              `}>
                {index + 1}
              </span>
              <span>{stepName}</span>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight size={16} className="text-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}