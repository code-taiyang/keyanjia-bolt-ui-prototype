import React from 'react';
import { FileText, Users, Clock, Download } from 'lucide-react';
import { Card } from '../../common/Card';
import { Avatar } from '../../common/Avatar';

interface Upload {
  id: string;
  title: string;
  type: string;
  size: string;
  uploadedBy: {
    name: string;
    avatar: string;
  };
  uploadTime: string;
  scope: 'personal' | 'team';
  downloads: number;
}

interface RecentUploadsProps {
  scope: 'personal' | 'team';
}

export function RecentUploads({ scope }: RecentUploadsProps) {
  const uploads: Upload[] = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用.pdf',
      type: 'PDF',
      size: '2.3MB',
      uploadedBy: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      uploadTime: '10分钟前',
      scope: 'team',
      downloads: 5
    },
    {
      id: '2',
      title: '气候变化数据集2024.zip',
      type: 'ZIP',
      size: '156MB',
      uploadedBy: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      uploadTime: '2小时前',
      scope: 'personal',
      downloads: 12
    }
  ].filter(upload => upload.scope === scope);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          {scope === 'personal' ? '个人上传' : '团队上传'}
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          查看全部
        </button>
      </div>

      <div className="space-y-3">
        {uploads.map(upload => (
          <Card key={upload.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                <FileText className="text-blue-600" size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 truncate">
                      {upload.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span>{upload.type}</span>
                      <span>{upload.size}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download size={16} className="text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Avatar 
                      src={upload.uploadedBy.avatar} 
                      alt={upload.uploadedBy.name}
                      size="sm"
                    />
                    <span>{upload.uploadedBy.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Download size={14} />
                      {upload.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {upload.uploadTime}
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