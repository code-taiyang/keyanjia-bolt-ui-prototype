import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { ActivityFilters } from '../components/activities/filters/ActivityFilters';
import { ActivityCard } from '../components/activities/cards/ActivityCard';
import { ActivityTabs } from '../components/activities/tabs/ActivityTabs';
import { ShareModal } from '../components/activities/share/ShareModal';
import { Activity, ActivityScope } from '../components/activities/types';

export function ActivityList() {
  const [activeTab, setActiveTab] = useState<ActivityScope>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('latest');
  const [shareModal, setShareModal] = useState<{
    isOpen: boolean;
    activityTitle: string;
  }>({
    isOpen: false,
    activityTitle: ''
  });

  const activities: Activity[] = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析',
      description: '使用机器学习模型分析全球温度变化趋势，包括数据预处理、模型训练和结果验证',
      status: 'in_progress',
      tool: 'data-analysis',
      scope: 'personal',
      project: {
        id: 'p1',
        name: '气候变化研究'
      },
      tags: ['机器学习', '数据分析', '气候研究'],
      collaborators: [
        {
          id: 'u1',
          name: 'John Doe',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
        }
      ],
      createdAt: '2024/3/15 14:30',
      lastUpdated: '10分钟前'
    },
    {
      id: '2',
      type: 'experiment',
      title: '模型验证实验',
      description: '进行神经网络模型的性能测试与优化，评估模型在不同数据集上的表现',
      status: 'completed',
      tool: 'experiment',
      scope: 'team',
      project: {
        id: 'p2',
        name: '神经网络优化'
      },
      tags: ['深度学习', '模型验证', '性能优化'],
      collaborators: [
        {
          id: 'u2',
          name: 'Jane Smith',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
        },
        {
          id: 'u3',
          name: 'Mike Johnson',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
        }
      ],
      createdAt: '2024/3/15 10:20',
      lastUpdated: '2小时前'
    }
  ];

  const filteredActivities = useMemo(() => {
    return activities
      .filter(activity => {
        // Filter by scope
        if (activeTab !== 'all' && activity.scope !== activeTab) return false;
        
        // Filter by type
        if (filter !== 'all' && activity.type !== filter) return false;
        
        // Filter by search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            activity.title.toLowerCase().includes(query) ||
            activity.description.toLowerCase().includes(query) ||
            activity.tags?.some(tag => tag.toLowerCase().includes(query))
          );
        }
        return true;
      })
      .sort((a, b) => {
        switch (sort) {
          case 'name':
            return a.title.localeCompare(b.title);
          case 'updated':
            return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
          default:
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
      });
  }, [activities, activeTab, filter, searchQuery, sort]);

  const counts = useMemo(() => ({
    all: activities.length,
    personal: activities.filter(a => a.scope === 'personal').length,
    team: activities.filter(a => a.scope === 'team').length
  }), [activities]);

  const handleEdit = (id: string) => {
    console.log('Edit activity:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete activity:', id);
  };

  const handleShare = (id: string) => {
    const activity = activities.find(a => a.id === id);
    if (activity) {
      setShareModal({
        isOpen: true,
        activityTitle: activity.title
      });
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">研究活动</h1>
            <p className="text-gray-500 mt-1">管理和追踪您的研究活动记录</p>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>新建活动</span>
          </button>
        </div>

        <ActivityTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        <ActivityFilters
          onSearch={setSearchQuery}
          onFilterChange={setFilter}
          onSortChange={setSort}
        />

        <div className="space-y-4">
          {filteredActivities.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onShare={handleShare}
            />
          ))}
        </div>

        <ShareModal
          isOpen={shareModal.isOpen}
          onClose={() => setShareModal({ isOpen: false, activityTitle: '' })}
          activityTitle={shareModal.activityTitle}
        />
      </div>
    </div>
  );
}