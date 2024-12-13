import React from 'react';
import { Database, Brain, FileText, Plus, Filter } from 'lucide-react';

export function TeamResources() {
  const resources = [
    {
      type: 'dataset',
      name: '全球气候数据集',
      description: '包含过去50年的全球气候变化数据',
      size: '2.3GB',
      shared: true,
      owner: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      lastModified: '2024/3/12'
    },
    // More resources...
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">共享资源</h3>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Filter size={18} />
            <span>筛选</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
            <Plus size={18} />
            <span>上传资源</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
            <div className="p-2 rounded-lg bg-blue-50">
              <Database className="text-blue-600" size={20} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{resource.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span>大小: {resource.size}</span>
                <span>上传者: {resource.owner.name}</span>
                <span>最后修改: {resource.lastModified}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}