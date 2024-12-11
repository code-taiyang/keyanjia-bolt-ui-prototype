import React from 'react';
import { TemplateGrid } from '../../templates/TemplateGrid';

interface TemplateSelectStepProps {
  selectedId: string;
  onSelect: (templateId: string) => void;
}

export function TemplateSelectStep({ selectedId, onSelect }: TemplateSelectStepProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        选择一个适合您写作需求的模板，我们将根据模板为您提供智能写作辅助。
      </p>
      <div className="max-h-[60vh] overflow-y-auto">
        <TemplateGrid
          onSelect={onSelect}
          selectedId={selectedId}
          compact
        />
      </div>
    </div>
  );
}