import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { DatasetCard } from '../../components/datasets/DatasetCard';
import { DatasetFilters } from '../../components/datasets/DatasetFilters';
import { DatasetTabs } from '../../components/datasets/tabs/DatasetTabs';
import { Dataset, DatasetFilter, DatasetSort } from '../../components/datasets/types';

export function DatasetList() {
  const [activeTab, setActiveTab] = useState<'personal' | 'team'>('personal');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<DatasetFilter>({});
  const [sort, setSort] = useState<DatasetSort>({
    field: 'updatedAt',
    order: 'desc'
  });

  const datasets: Dataset[] = [
    {
      id: '1',
      name: '全球气温变化数据集',
      description: '包含过去50年全球各地区气温变化数据，包括最高温度、最低温度和平均温度等指标',
      type: 'time_series',
      format: 'CSV',
      size: '2.3GB',
      records: 1250000,
      createdAt: '2024/3/15',
      updatedAt: '10分钟前',
      owner: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      tags: ['气候数据', '时间序列', '环境科学'],
      visibility: 'public',
      status: 'active',
      stats: {
        downloads: 1280,
        views: 3500,
        citations: 45
      }
    },
    {
      id: '2',
      name: '卫星图像数据集',
      description: '高分辨率卫星图像数据集，用于环境监测和变化检测研究',
      type: 'image',
      format: 'TIFF',
      size: '15.6GB',
      records: 5000,
      createdAt: '2024/3/10',
      updatedAt: '2小时前',
      owner: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      tags: ['遥感', '图像处理', '环境监测'],
      visibility: 'team',
      status: 'active',
      stats: {
        downloads: 450,
        views: 1200,
        citations: 12
      }
    },
    {
      id: '3',
      name: '气象站观测数据',
      description: '全球主要气象站的温度、湿度、气压等观测数据',
      type: 'tabular',
      format: 'Excel',
      size: '856MB',
      records: 500000,
      createdAt: '2024/3/8',
      updatedAt: '1天前',
      owner: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      tags: ['气象数据', '观测数据'],
      visibility: 'private',
      status: 'active',
      stats: {
        downloads: 25,
        views: 89,
        citations: 0
      }
    },
    {
      id: '4',
      name: '环境监测数据集',
      description: '城市空气质量监测数据，包括PM2.5、CO2等指标',
      type: 'time_series',
      format: 'CSV',
      size: '1.2GB',
      records: 750000,
      createdAt: '2024/3/5',
      updatedAt: '3天前',
      owner: {
        name: 'Team Environment',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=32&h=32&fit=crop&crop=face'
      },
      tags: ['环境监测', '空气质量'],
      visibility: 'team',
      status: 'active',
      stats: {
        downloads: 320,
        views: 890,
        citations: 8
      }
    }
  ];

  const filteredDatasets = useMemo(() => {
    return datasets.filter(dataset => {
      // Filter by tab
      if (activeTab === 'personal' && dataset.visibility === 'team') {
        return false;
      }
      if (activeTab === 'team' && dataset.visibility !== 'team') {
        return false;
      }

      // Filter by search query
      if (searchQuery && !dataset.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Filter by type
      if (filter.type && dataset.type !== filter.type) {
        return false;
      }
      
      // Filter by visibility
      if (filter.visibility && dataset.visibility !== filter.visibility) {
        return false;
      }
      
      // Filter by status
      if (filter.status && dataset.status !== filter.status) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      const field = sort.field;
      const order = sort.order === 'asc' ? 1 : -1;
      
      if (field === 'name') {
        return order * a.name.localeCompare(b.name);
      }
      
      if (field === 'createdAt' || field === 'updatedAt') {
        return order * (new Date(b[field]).getTime() - new Date(a[field]).getTime());
      }
      
      return order * ((b[field] as number) - (a[field] as number));
    });
  }, [datasets, activeTab, searchQuery, filter, sort]);

  const counts = useMemo(() => ({
    personal: datasets.filter(d => d.visibility !== 'team').length,
    team: datasets.filter(d => d.visibility === 'team').length
  }), [datasets]);

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">数据集</h1>
            <p className="text-gray-500 mt-1">管理和共享您的研究数据集</p>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>新建数据集</span>
          </button>
        </div>

        <DatasetTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        <DatasetFilters
          onSearch={setSearchQuery}
          onFilterChange={setFilter}
          onSortChange={setSort}
        />

        <div className="space-y-4">
          {filteredDatasets.map(dataset => (
            <DatasetCard
              key={dataset.id}
              dataset={dataset}
            />
          ))}
        </div>
      </div>
    </div>
  );
}