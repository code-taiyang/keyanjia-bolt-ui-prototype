import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';

interface Environment {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  packages?: string[];
  features?: string[];
  category: 'language' | 'compiler';
}

interface EnvironmentCardProps {
  environment: Environment;
}

export function EnvironmentCard({ environment }: EnvironmentCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {environment.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{environment.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{environment.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          {environment.packages && (
            <div className="mt-3 flex flex-wrap gap-1">
              {environment.packages.map((pkg, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                >
                  {pkg}
                </span>
              ))}
            </div>
          )}

          {environment.features && (
            <div className="mt-3 flex flex-wrap gap-1">
              {environment.features.map((feature, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}