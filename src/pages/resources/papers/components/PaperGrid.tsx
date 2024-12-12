import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { generatePaperData } from '../utils/mockData';
import { FieldSelector } from './FieldSelector';

interface PaperGridProps {
  activeTab: 'all' | 'recent' | 'starred';
  searchQuery: string;
}

export function PaperGrid({ activeTab, searchQuery }: PaperGridProps) {
  const [selectedFields, setSelectedFields] = useState(['abstract', 'background', 'purpose', 'method', 'conclusion']);
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
    <div>
      <FieldSelector 
        selectedFields={selectedFields}
        onFieldChange={setSelectedFields}
      />
      
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    论文信息
                  </th>
                  {selectedFields.includes('background') && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      研究背景
                    </th>
                  )}
                  {selectedFields.includes('purpose') && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      研究目的
                    </th>
                  )}
                  {selectedFields.includes('method') && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      研究方法
                    </th>
                  )}
                  {selectedFields.includes('conclusion') && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      研究结论
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPapers.slice(0, 10).map((paper) => (
                  <tr key={paper.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                          {paper.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {paper.authors.join(', ')} · {paper.journal}
                        </div>
                      </div>
                    </td>
                    {selectedFields.includes('background') && (
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-md">
                          {paper.abstract?.background}
                        </div>
                      </td>
                    )}
                    {selectedFields.includes('purpose') && (
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-md">
                          {paper.abstract?.purpose}
                        </div>
                      </td>
                    )}
                    {selectedFields.includes('method') && (
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-md">
                          {paper.abstract?.methods}
                        </div>
                      </td>
                    )}
                    {selectedFields.includes('conclusion') && (
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-md">
                          {paper.abstract?.conclusion}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-t">
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
    </div>
  );
}