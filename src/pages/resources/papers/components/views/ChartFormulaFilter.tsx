import React from 'react';

interface Filter {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ChartFormulaFilterProps {
  filters: Filter[];
  selectedType: string;
  onTypeChange: (type: any) => void;
}

export function ChartFormulaFilter({
  filters,
  selectedType,
  onTypeChange
}: ChartFormulaFilterProps) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 bg-white border-b">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onTypeChange(filter.id)}
          className={`
            flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
            ${selectedType === filter.id
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600 hover:bg-gray-50'
            }
          `}
        >
          {filter.icon}
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
}