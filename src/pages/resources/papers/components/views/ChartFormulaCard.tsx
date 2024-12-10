import React from 'react';
import { Link } from 'react-router-dom';
import { ChartFormulaItem } from '../types';

interface ChartFormulaCardProps {
  item: ChartFormulaItem;
}

export function ChartFormulaCard({ item }: ChartFormulaCardProps) {
  const typeLabels = {
    image: '图',
    table: '表',
    formula: '公式',
    code: '代码'
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:border-blue-200 transition-all duration-200">
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={item.preview}
          alt={item.description}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <Link 
          to={`/resources/papers/${item.paperId}`}
          className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-1"
        >
          {item.title}
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-gray-600">
            {typeLabels[item.type]} {item.number}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}