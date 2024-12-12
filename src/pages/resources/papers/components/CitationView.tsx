import React from 'react';
import { FileText, MessageSquare, Star, MoreVertical } from 'lucide-react';
import { generatePaperData } from '../utils/mockData';
import { Badge } from '../../../../components/common/Badge';

interface CitationViewProps {
  activeTab: 'all' | 'recent' | 'starred';
  searchQuery: string;
}

export function CitationView({ activeTab, searchQuery }: CitationViewProps) {
  const papers = generatePaperData(activeTab);
  
  const filteredPapers = papers.filter(paper => 
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.authors.join(', ').toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.journal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredPapers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <FileText size={48} className="text-gray-300 mb-4" />
        <p className="text-gray-500">
          {activeTab === 'all' && "暂无文献，请点击右上角'导入文献'按钮添加。"}
          {activeTab === 'recent' && "暂无最近打开的文献。"}
          {activeTab === 'starred' && "您尚未收藏任何文献。"}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.slice(0, 10).map((paper) => (
          <div key={paper.id} className="flex flex-col border rounded-lg hover:border-blue-200 bg-white">
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                  {paper.title}
                </h3>
                <Badge variant="success" className="flex-shrink-0 whitespace-nowrap">
                  {paper.citations?.length || 0} 引用
                </Badge>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                {paper.authors.join(', ')} · {paper.journal}
              </p>

              <div className="space-y-3 flex-1">
                {paper.citations?.map((citation, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 flex-shrink-0">[{index + 1}]</span>
                      <span className="text-sm font-medium text-gray-900">{citation.title}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {citation.authors.join(', ')} · {citation.year}
                    </div>
                    <div className="text-sm text-gray-500">{citation.source}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MessageSquare size={16} className="text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Star 
                    size={16} 
                    className={paper.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
                  />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            显示 1 到 10 条，共 {filteredPapers.length} 条
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50"
            disabled
          >
            上一页
          </button>
          <button
            className="px-3 py-1 text-sm text-gray-700 bg-white border rounded-md hover:bg-gray-50"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}