import React from 'react';
import { Card } from '../../common/Card';
import { FileText, Users, Clock, Download } from 'lucide-react';
import { Avatar } from '../../common/Avatar';

interface Resource {
  id: string;
  title: string;
  type: string;
  size: string;
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  downloads: number;
  scope: 'personal' | 'team';
}

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
  viewAll?: () => void;
}

export function ResourceSection({ title, resources, viewAll }: ResourceSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        {viewAll && (
          <button 
            onClick={viewAll}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            查看全部
          </button>
        )}
      </div>

      <div className="space-y-3">
        {resources.map(resource => (
          <Card key={resource.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                <FileText className="text-blue-600" size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 truncate">
                      {resource.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download size={16} className="text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Avatar 
                      src={resource.user.avatar} 
                      alt={resource.user.name}
                      size="sm"
                    />
                    <span>{resource.user.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Download size={14} />
                      {resource.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {resource.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}