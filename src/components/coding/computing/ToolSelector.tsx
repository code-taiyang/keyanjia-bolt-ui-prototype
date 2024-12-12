import React from 'react';
import { ScientificTool } from '../../../types/scientific';
import { Check } from 'lucide-react';

interface ToolSelectorProps {
  tools: ScientificTool[];
  selectedTool: string | null;
  onSelect: (toolId: string) => void;
}

export function ToolSelector({ tools, selectedTool, onSelect }: ToolSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">选择计算工具</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isSelected = tool.id === selectedTool;

          return (
            <button
              key={tool.id}
              onClick={() => onSelect(tool.id)}
              className={`
                relative flex flex-col p-4 rounded-lg border-2 text-left
                transition-all duration-200
                ${isSelected 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className={`
                  p-2 rounded-lg
                  ${isSelected ? 'bg-white' : 'bg-gray-100'}
                `}>
                  <Icon className={`h-5 w-5 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="font-medium">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}