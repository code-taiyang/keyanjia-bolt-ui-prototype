import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
}

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {feature.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {feature.capabilities.map((capability, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}