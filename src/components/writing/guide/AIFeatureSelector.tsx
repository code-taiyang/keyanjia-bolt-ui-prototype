import React from 'react';
import { Wand2 } from 'lucide-react';
import { AIFeature } from '../../../types/writing';

interface AIFeatureSelectorProps {
  features: AIFeature[];
  selectedFeatures: string[];
  onSelectionChange: (features: string[]) => void;
}

export function AIFeatureSelector({
  features,
  selectedFeatures,
  onSelectionChange
}: AIFeatureSelectorProps) {
  const handleToggle = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      onSelectionChange(selectedFeatures.filter(id => id !== featureId));
    } else {
      onSelectionChange([...selectedFeatures, featureId]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Wand2 className="h-5 w-5 text-purple-500" />
        <h2 className="text-base font-medium text-gray-900">AI辅助功能</h2>
        <span className="text-sm text-gray-500">选择需要的AI辅助功能</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {features.map((feature) => (
          <label
            key={feature.id}
            className={`
              relative flex items-start p-4 rounded-lg border-2 cursor-pointer
              transition-all duration-200
              ${selectedFeatures.includes(feature.id)
                ? 'border-purple-500 bg-purple-50/50'
                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}
            `}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={selectedFeatures.includes(feature.id)}
              onChange={() => handleToggle(feature.id)}
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">{feature.name}</div>
              <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}