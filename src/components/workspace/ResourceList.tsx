import React from 'react';
import { Database, Brain, Star, MoreVertical, Share2 } from 'lucide-react';
import { Card } from '../common/Card';

interface Resource {
  id: number;
  type: 'dataset' | 'model' | 'document';
  name: string;
  description: string;
  size: string;
  lastModified: string;
  shared: boolean;
  favorite: boolean;
}

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'dataset':
        return <Database className="text-blue-600" size={20} />;
      case 'model':
        return <Brain className="text-purple-600" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {resources.map((resource) => (
        <Card key={resource.id} className="group">
          <div className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                {getIcon(resource.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {resource.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {resource.shared && (
                      <Share2 size={16} className="text-gray-400" />
                    )}
                    {resource.favorite && (
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    )}
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <span>大小: {resource.size}</span>
                  <span>最后修改: {resource.lastModified}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}