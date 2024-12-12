import React from 'react';
import { Search, Filter, SortAsc, BookOpen, Clock, Star } from 'lucide-react';
import { Card } from '../common/Card';

interface Reference {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  cited: number;
  isStarred?: boolean;
}

export function LiteratureReference() {
  const references: Reference[] = [
    {
      id: '1',
      title: 'Deep Learning in Climate Science: Recent Advances and Future Prospects',
      authors: ['John Smith', 'Mary Johnson'],
      journal: 'Nature Climate Change',
      year: 2024,
      cited: 45,
      isStarred: true
    },
    {
      id: '2',
      title: 'A Survey of Machine Learning Applications in Climate Research',
      authors: ['David Wilson', 'Sarah Chen'],
      journal: 'Reviews of Geophysics',
      year: 2023,
      cited: 128
    },
    {
      id: '3',
      title: 'Climate Prediction Using Neural Networks: A Comprehensive Review',
      authors: ['Michael Brown', 'Emma Davis'],
      journal: 'Journal of Climate',
      year: 2023,
      cited: 89,
      isStarred: true
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium text-gray-900">参考文献</h2>
        <div className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜索文献..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <Filter size={16} />
            <span>筛选</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <SortAsc size={16} />
            <span>排序</span>
          </button>
        </div>
      </div>

      {/* Reference List */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {references.map(reference => (
          <Card key={reference.id} className="p-4 hover:border-blue-200 cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-blue-600 flex-shrink-0" />
                  <h3 className="font-medium text-gray-900 truncate">{reference.title}</h3>
                  {reference.isStarred && (
                    <Star size={16} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {reference.authors.join(', ')}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{reference.journal}</span>
                  <span>{reference.year}</span>
                  <span>被引: {reference.cited}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent References */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Clock size={16} />
          <span>最近查看</span>
        </div>
        <div className="space-y-2">
          {references.slice(0, 2).map(reference => (
            <div key={reference.id} className="text-sm text-gray-600 truncate">
              {reference.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}