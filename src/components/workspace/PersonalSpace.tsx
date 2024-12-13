import React from 'react';
import { Folder, Star, Clock, Settings, Plus } from 'lucide-react';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceNav } from './WorkspaceNav';
import { ResourceList } from './ResourceList';

export function PersonalSpace() {
  const categories = [
    { icon: <Folder size={20} />, label: "所有资源", count: 128, active: true },
    { icon: <Star size={20} />, label: "收藏", count: 23 },
    { icon: <Clock size={20} />, label: "最近", count: 45 }
  ];

  const resources = [
    {
      id: 1,
      type: 'dataset',
      name: '气候变化数据集',
      description: '全球气候变化历史数据集合',
      size: '2.3GB',
      lastModified: '2024/3/12',
      shared: true,
      favorite: true
    },
    {
      id: 2,
      type: 'model',
      name: '深度学习模型',
      description: '用于气候预测的神经网络模型',
      size: '156MB',
      lastModified: '2024/3/11',
      shared: false,
      favorite: false
    },
    // 更多资源...
  ];

  return (
    <div className="h-full flex flex-col">
      <WorkspaceHeader 
        title="个人空间" 
        description="管理您的个人研究资源"
        actions={[
          <button key="settings" className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
          </button>,
          <button
            key="create"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建资源</span>
          </button>
        ]}
      />
      
      <div className="flex-1 flex min-h-0">
        <WorkspaceNav categories={categories} />
        
        <main className="flex-1 overflow-auto p-6">
          <ResourceList resources={resources} />
        </main>
      </div>
    </div>
  );
}