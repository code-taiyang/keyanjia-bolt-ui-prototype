import React, { useState } from 'react';
import { SearchCard } from './SearchCard';
import { SearchResults } from './SearchResults';
import { 
  Search, 
  Filter,
  SortAsc,
  Database,
  Globe,
  Calendar,
  BookOpen
} from 'lucide-react';

export function PatentSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const searchOptions = [
    {
      id: 'global',
      title: '全球专利库',
      description: '搜索全球主要专利数据库',
      icon: <Globe className="text-blue-600" size={24} />,
      databases: ['USPTO', 'EPO', 'CNIPA', 'WIPO'],
      count: '120M+'
    },
    {
      id: 'technical',
      title: '技术领域',
      description: '按技术分类检索专利',
      icon: <Database className="text-purple-600" size={24} />,
      categories: ['IPC', 'CPC', 'F-term'],
      count: '650+'
    },
    {
      id: 'time',
      title: '时间范围',
      description: '按时间维度检索专利',
      icon: <Calendar className="text-green-600" size={24} />,
      ranges: ['申请日', '公开日', '授权日'],
      count: '30年'
    },
    {
      id: 'citation',
      title: '引用关系',
      description: '基于引用关系检索专利',
      icon: <BookOpen className="text-orange-600" size={24} />,
      types: ['正向引用', '反向引用', '同族引用'],
      count: '5000+'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="输入关键词、申请号、IPC分类号等..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Filter size={20} />
          <span>筛选</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <SortAsc size={20} />
          <span>排序</span>
        </button>
      </div>

      {/* Search Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchOptions.map(option => (
          <SearchCard key={option.id} option={option} />
        ))}
      </div>

      {/* Search Results */}
      <SearchResults />
    </div>
  );
}