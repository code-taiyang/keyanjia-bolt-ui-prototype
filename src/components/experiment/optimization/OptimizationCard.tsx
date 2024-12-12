import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';

interface OptimizationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  suggestions: string[];
}

interface OptimizationCardProps {
  item: OptimizationItem;
}

export function OptimizationCard({ item }: OptimizationCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {item.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-3 space-y-2">
            {item.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-sm text-gray-600">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}