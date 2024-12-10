import React from 'react';
import { MessageSquare, Star, MoreVertical, FileText } from 'lucide-react';
import { generatePaperData } from '../utils/mockData';
import { Paper } from '../types';

interface PaperListProps {
  activeTab: 'all' | 'recent' | 'starred';
  searchQuery: string;
}

export function PaperList({ activeTab, searchQuery }: PaperListProps) {
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              文献标题
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              作者
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              期刊
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              参考文献
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              最近操作
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              状态
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredPapers.map((paper) => (
            <tr key={paper.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                  {paper.title}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{paper.authors.join(', ')}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{paper.journal}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{paper.references}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">{paper.lastOperated}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${paper.status === '创建' ? 'bg-gray-100 text-gray-800' :
                    paper.status === '引用' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'}
                `}>
                  {paper.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right space-x-2">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}