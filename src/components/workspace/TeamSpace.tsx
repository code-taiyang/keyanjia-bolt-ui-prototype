import React from 'react';
import { Users, Star, Clock, Settings, UserPlus, Plus } from 'lucide-react';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceNav } from './WorkspaceNav';
import { TeamList } from './TeamList';

export function TeamSpace() {
  const teams = [
    {
      id: 1,
      name: "气候研究组",
      description: "研究全球气候变化趋势与影响",
      members: [
        {
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
          name: "John Doe",
          role: "组长"
        },
        {
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
          name: "Jane Smith",
          role: "研究员"
        }
      ],
      projects: 12,
      resources: 45
    },
    {
      id: 2,
      name: "神经网络实验室",
      description: "深度学习算法研究与应用",
      members: [
        {
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
          name: "Mike Johnson",
          role: "负责人"
        }
      ],
      projects: 8,
      resources: 23
    }
  ];

  const categories = [
    { icon: <Users size={20} />, label: "所有团队", count: 3, active: true },
    { icon: <Star size={20} />, label: "收藏的团队", count: 1 },
    { icon: <Clock size={20} />, label: "最近访问", count: 2 }
  ];

  return (
    <div className="h-full flex flex-col">
      <WorkspaceHeader 
        title="团队空间" 
        description="管理您的团队与协作"
        actions={[
          <button key="settings" className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
          </button>,
          <button
            key="invite"
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            <UserPlus size={20} />
            <span>邀请成员</span>
          </button>,
          <button
            key="create"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>创建团队</span>
          </button>
        ]}
      />
      
      <div className="flex-1 flex min-h-0">
        <WorkspaceNav categories={categories} />
        
        <main className="flex-1 overflow-auto p-6">
          <TeamList teams={teams} />
        </main>
      </div>
    </div>
  );
}