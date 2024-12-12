import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';

interface Library {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  category: string;
}

interface ComputingCardProps {
  library: Library;
}

export function ComputingCard({ library }: ComputingCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {library.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{library.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{library.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {library.features.map((feature, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}