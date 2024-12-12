import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';

interface SearchOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  databases?: string[];
  categories?: string[];
  ranges?: string[];
  count: string;
}

interface SearchCardProps {
  option: SearchOption;
}

export function SearchCard({ option }: SearchCardProps) {
  const items = option.databases || option.categories || option.ranges;

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {option.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{option.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{option.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {items?.map((item, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              收录数据：{option.count}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}