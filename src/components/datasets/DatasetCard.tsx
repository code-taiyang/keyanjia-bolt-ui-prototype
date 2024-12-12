import React from 'react';
import { Database, Download, Eye, Clock, Tag } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { Dataset } from './types';
import { Link } from 'react-router-dom';

interface DatasetCardProps {
  dataset: Dataset;
  onView?: (id: string) => void;
  onDownload?: (id: string) => void;
}

export function DatasetCard({ dataset, onView, onDownload }: DatasetCardProps) {
  return (
    <Link to={`/resources/datasets/${dataset.id}`}>
      <Card className="p-4 hover:border-blue-200 transition-all duration-200">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-gray-50">
            <Database className="text-blue-600" size={20} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{dataset.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{dataset.description}</p>
              </div>
              <Badge variant={
                dataset.visibility === 'public' ? 'success' :
                dataset.visibility === 'team' ? 'warning' : 'default'
              }>
                {dataset.visibility === 'public' ? '公开' :
                 dataset.visibility === 'team' ? '团队' : '私有'}
              </Badge>
            </div>

            {dataset.tags && dataset.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-3">
                <Tag size={14} className="text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {dataset.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{dataset.format}</span>
                <span>{dataset.size}</span>
                <span>{dataset.records.toLocaleString()} 条记录</span>
              </div>
              
              <div className="flex items-center gap-2">
                {dataset.stats && (
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {dataset.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download size={14} />
                      {dataset.stats.downloads}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Avatar 
                    src={dataset.owner.avatar} 
                    alt={dataset.owner.name}
                    size="sm"
                  />
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{dataset.updatedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}