import React, { useState } from 'react';
import { ActivityFilters } from '../components/activities/filters/ActivityFilters';
import { ActivityTabs } from '../components/activities/tabs/ActivityTabs';
import { ActivityCard } from '../components/activities/cards/ActivityCard';
import { sampleActivities } from '../data/sampleActivities';
import { Activity } from '../components/activities/types';

export function ActivityList() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  // Filter activities based on active tab, search query and filter
  const filteredActivities = sampleActivities.filter(activity => {
    const matchesTab = activeTab === 'all' || activity.type === activeTab;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !filter || activity.type === filter;
    return matchesTab && matchesSearch && matchesFilter;
  });

  // Count activities by type
  const counts = {
    writing: sampleActivities.filter(a => a.type === 'writing').length,
    analysis: sampleActivities.filter(a => a.type === 'analysis').length,
    algorithm: sampleActivities.filter(a => a.type === 'algorithm').length,
    computing: sampleActivities.filter(a => a.type === 'computing').length,
    experiment: sampleActivities.filter(a => a.type === 'experiment').length,
    grant: sampleActivities.filter(a => a.type === 'grant').length,
    planning: sampleActivities.filter(a => a.type === 'planning').length
  };

  const handleEdit = (id: string) => {
    console.log('Edit activity:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete activity:', id);
  };

  const handleShare = (id: string) => {
    console.log('Share activity:', id);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">研究活动</h1>
          <p className="text-gray-500 mt-1">管理您的研究活动记录</p>
        </div>

        <ActivityFilters
          onSearch={setSearchQuery}
          onFilterChange={setFilter}
          onSortChange={() => {}}
        />

        <ActivityTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        <div className="space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onShare={handleShare}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无相关活动记录</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}