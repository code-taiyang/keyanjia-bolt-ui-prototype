import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SearchBar } from './navigation/SearchBar';
import { FilterBar } from './navigation/FilterBar';
import { WritingCard } from './navigation/WritingCard';
import { RecentWritings } from './recent/RecentWritings';
import { TeamWritings } from './recent/TeamWritings';

interface Writing {
  id: string;
  title: string;
  description: string;
  type: 'thesis' | 'journal' | 'report';
  date: string;
  isStarred?: boolean;
}

export function WritingAssistant() {
  const [writings] = useState<Writing[]>([
    {
      id: '1',
      title: '深度学习在自然语言处理中的应用研究',
      description: '这是文档的预览内容。在这里您可以看到文档的开头部分，包括研究背景、研究目的和研究方法等关键信息...',
      type: 'thesis',
      date: '2024-03-20',
      isStarred: true
    },
    {
      id: '2',
      title: '新型储能材料的性能优化与表征',
      description: '这是文档的预览内容。在这里您可以看到文档的开头部分，包括研究背景、研究目的和研究方法等关键信息...',
      type: 'journal',
      date: '2024-03-15'
    },
    {
      id: '3',
      title: '智能制造系统的设计与实现',
      description: '这是文档的预览内容。在这里您可以看到文档的开头部分，包括研究背景、研究目的和研究方法等关键信息...',
      type: 'report',
      date: '2024-03-10'
    }
  ]);

  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  const handleFilterChange = (type: string) => {
    console.log('Filter type:', type);
  };

  const handleTimeRangeChange = (range: string) => {
    console.log('Time range:', range);
  };

  const handleStatusChange = (status: string) => {
    console.log('Status:', status);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">写作助手</h1>
            <p className="text-gray-500 mt-1">管理和创建您的学术写作</p>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>新建写作</span>
          </button>
        </div>

        {/* Recent Writings Sections */}
        <div className="space-y-8 mb-12">
          <RecentWritings />
          <TeamWritings />
        </div>

        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        <FilterBar 
          onFilterChange={handleFilterChange}
          onTimeRangeChange={handleTimeRangeChange}
          onStatusChange={handleStatusChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {writings.map(writing => (
            <WritingCard
              key={writing.id}
              {...writing}
              onStar={() => console.log('Star:', writing.id)}
              onShare={() => console.log('Share:', writing.id)}
              onDownload={() => console.log('Download:', writing.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}