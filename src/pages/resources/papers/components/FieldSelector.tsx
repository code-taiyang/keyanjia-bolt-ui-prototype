import React from 'react';

interface Field {
  id: string;
  label: string;
}

interface FieldSelectorProps {
  selectedFields: string[];
  onFieldChange: (fields: string[]) => void;
}

export function FieldSelector({ selectedFields, onFieldChange }: FieldSelectorProps) {
  const fields: Field[] = [
    { id: 'all', label: '全部' },
    { id: 'abstract', label: '论文概要' },
    { id: 'background', label: '研究背景' },
    { id: 'purpose', label: '研究目的' },
    { id: 'method', label: '研究方法' },
    { id: 'conclusion', label: '研究结论' },
    { id: 'innovation', label: '创新点' },
    { id: 'future', label: '未来研究方向' },
    { id: 'limitation', label: '研究局限' }
  ];

  const handleFieldClick = (fieldId: string) => {
    if (fieldId === 'all') {
      onFieldChange(fields.map(f => f.id));
    } else {
      const newFields = selectedFields.includes(fieldId)
        ? selectedFields.filter(f => f !== fieldId)
        : [...selectedFields, fieldId];
      onFieldChange(newFields);
    }
  };

  return (
    <div className="px-6 py-3 bg-gray-50 border-b flex flex-wrap gap-2">
      <span className="text-sm text-gray-500">选择要显示的字段：</span>
      {fields.map(field => (
        <button
          key={field.id}
          onClick={() => handleFieldClick(field.id)}
          className={`
            px-3 py-1 text-sm rounded-full
            ${selectedFields.includes(field.id)
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}
        >
          {field.label}
        </button>
      ))}
    </div>
  );
}