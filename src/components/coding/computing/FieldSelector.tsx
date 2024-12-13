import React from 'react';
import { ScientificTool } from '../../../types/scientific';

interface FieldSelectorProps {
  tools: ScientificTool[];
  selectedTool: string | null;
  selectedField: string | null;
  onSelect: (fieldId: string) => void;
}

export function FieldSelector({ 
  tools, 
  selectedTool,
  selectedField,
  onSelect 
}: FieldSelectorProps) {
  const selectedToolData = tools.find(tool => tool.id === selectedTool);

  if (!selectedToolData) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">选择计算场景</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedToolData.categories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h3 className="font-medium text-gray-900">{category.name}</h3>
            <div className="space-y-2">
              {category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`
                    w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                    ${item.id === selectedField
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}