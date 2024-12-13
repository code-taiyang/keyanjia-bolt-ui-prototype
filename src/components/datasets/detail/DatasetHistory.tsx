import React from 'react';
import { Dataset } from '../types';
import { Clock, GitCommit, Download } from 'lucide-react';
import { Avatar } from '../../common/Avatar';

interface DatasetHistoryProps {
  dataset: Dataset;
}

export function DatasetHistory({ dataset }: DatasetHistoryProps) {
  // 模拟版本历史数据
  const history = [
    {
      id: 1,
      version: 'v1.2.0',
      changes: '更新2024年1月数据',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      timestamp: '2024-03-15 14:30',
      size: '2.3GB'
    },
    {
      id: 2,
      version: 'v1.1.0',
      changes: '添加新的观测站点数据',
      user: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      timestamp: '2024-02-28 09:15',
      size: '2.1GB'
    },
    {
      id: 3,
      version: 'v1.0.0',
      changes: '初始数据集发布',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      timestamp: '2024-01-15 10:00',
      size: '2.0GB'
    }
  ];

  return (
    <div className="p-6">
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-200" />
        <div className="space-y-8">
          {history.map((version) => (
            <div key={version.id} className="relative flex gap-8">
              <div className="absolute -left-2 mt-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600" />
              <div className="flex-1 bg-white p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitCommit size={16} className="text-blue-600" />
                    <span className="font-medium">{version.version}</span>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Download size={14} />
                    <span>下载此版本</span>
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{version.changes}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Avatar 
                      src={version.user.avatar} 
                      alt={version.user.name}
                      size="sm"
                    />
                    <span>{version.user.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>大小: {version.size}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{version.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}