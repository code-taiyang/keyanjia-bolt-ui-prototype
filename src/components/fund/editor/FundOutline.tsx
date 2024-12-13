import React, { useState } from 'react';
import { FileText, BookOpen, FileCode, Database, Settings } from 'lucide-react';

interface FundOutlineProps {
  items: string[];
  onUpdate: (items: string[]) => void;
  selectedSection: string | null;
  onSectionSelect: (section: string | null) => void;
}

export function FundOutline({
  items,
  onUpdate,
  selectedSection,
  onSectionSelect
}: FundOutlineProps) {
  const [activeTab, setActiveTab] = useState<'files' | 'reference'>('files');

  // 预定义的基金申请相关文件
  const fundFiles = [
    {
      id: 'summary',
      name: '项目摘要.docx',
      icon: <FileText className="text-blue-600" size={16} />,
      section: '摘要'
    },
    {
      id: 'background',
      name: '立项依据.docx',
      icon: <FileText className="text-purple-600" size={16} />,
      section: '1. 立项依据'
    },
    {
      id: 'research',
      name: '研究内容.docx',
      icon: <FileText className="text-green-600" size={16} />,
      section: '2. 研究内容'
    },
    {
      id: 'plan',
      name: '研究方案.docx',
      icon: <FileText className="text-orange-600" size={16} />,
      section: '3. 研究方案'
    },
    {
      id: 'innovation',
      name: '研究特色与创新.docx',
      icon: <FileText className="text-indigo-600" size={16} />,
      section: '4. 研究特色与创新'
    },
    {
      id: 'foundation',
      name: '研究基础与保障.docx',
      icon: <FileText className="text-pink-600" size={16} />,
      section: '5. 研究基础与保障'
    },
    {
      id: 'results',
      name: '预期成果.docx',
      icon: <FileText className="text-cyan-600" size={16} />,
      section: '6. 预期成果'
    },
    {
      id: 'budget',
      name: '经费预算.xlsx',
      icon: <FileCode className="text-emerald-600" size={16} />,
      section: '7. 经费预算'
    },
    {
      id: 'references',
      name: '参考文献.docx',
      icon: <FileText className="text-gray-600" size={16} />,
      section: '参考文献'
    },
    {
      id: 'appendix',
      name: '附件材料.pdf',
      icon: <Database className="text-red-600" size={16} />,
      section: '附件'
    }
  ];

  return (
    <div className="w-80 bg-white flex flex-col">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('files')}
          className={`
            flex items-center gap-2 flex-1 px-4 py-3 text-sm font-medium
            ${activeTab === 'files'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <FileText size={16} />
          <span>文件</span>
        </button>
        <button
          onClick={() => setActiveTab('reference')}
          className={`
            flex items-center gap-2 flex-1 px-4 py-3 text-sm font-medium
            ${activeTab === 'reference'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <BookOpen size={16} />
          <span>资料库</span>
        </button>
      </div>

      {activeTab === 'files' ? (
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          {fundFiles.map((file) => (
            <button
              key={file.id}
              onClick={() => onSectionSelect(file.section)}
              className={`
                w-full flex items-center gap-2 p-2 rounded-lg text-sm
                ${selectedSection === file.section ? 'bg-blue-50' : 'hover:bg-gray-50'}
                transition-colors duration-200
              `}
            >
              {file.icon}
              <span className="flex-1 text-left truncate">{file.name}</span>
              <Settings size={14} className="text-gray-400 opacity-0 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex-1 p-4">
          <div className="text-sm text-gray-500">资料库内容...</div>
        </div>
      )}
    </div>
  );
}