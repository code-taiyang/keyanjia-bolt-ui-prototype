import React, { useState } from 'react';
import { SearchCard } from './SearchCard';
import { SearchResults } from './SearchResults';
import { 
  Search, 
  Filter,
  SortAsc,
  Globe,
  Calendar,
  Target,
  DollarSign
} from 'lucide-react';

export function FundSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const searchOptions = [
    {
      id: 'database',
      title: '基金数据库',
      description: '国内外基金项目数据库',
      icon: <Globe className="text-blue-600" size={24} />,
      databases: ['NSFC', 'NIH', 'Horizon Europe', 'NSF'],
      count: '50M+'
    },
    {
      id: 'field',
      title: '研究领域',
      description: '按学科领域检索基金项目',
      icon: <Target className="text-purple-600" size={24} />,
      categories: ['自然科学', '工程技术', '生命科学', '医学'],
      count: '100+'
    },
    {
      id: 'time',
      title: '申请时间',
      description: '按时间维度检索基金项目',
      icon: <Calendar className="text-green-600" size={24} />,
      ranges: ['申请截止', '评审时间', '立项时间'],
      count: '近5年'
    },
    {
      id: 'amount',
      title: '资助金额',
      description: '按资助金额范围检索',
      icon: <DollarSign className="text-orange-600" size={24} />,
      ranges: ['50万以下', '50-100万', '100-500万', '500万以上'],
      count: '不限'
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
            placeholder="输入关键词、基金类型、申请机构等..."
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