import React, { useState } from 'react';
import { Search, Filter, Upload, MoreVertical, MessageSquare, Star, Clock, FileText, Grid, List, ChevronDown } from 'lucide-react';
import { PaperList } from './components/PaperList';
import { PaperGrid } from './components/PaperGrid';
import { CitationView } from './components/CitationView';
import { ChartFormulaView } from './components/views/ChartFormulaView';
import { Badge } from '../../../components/common/Badge';

type ViewType = 'list' | 'grid' | 'citation' | 'chart-formula';
type TabType = 'all' | 'recent' | 'starred';

export function PaperLibrary() {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [viewType, setViewType] = useState<ViewType>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [showViewMenu, setShowViewMenu] = useState(false);

  const tabs = [
    { id: 'all' as const, label: '全部文献', icon: <FileText size={18} />, count: 50 },
    { id: 'recent' as const, label: '最近打开', icon: <Clock size={18} />, count: 20 },
    { id: 'starred' as const, label: '我的收藏', icon: <Star size={18} />, count: 10 }
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">文献库</h1>
            <p className="text-gray-500 mt-1">管理和阅读您的研究文献</p>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Upload size={20} />
            <span>导入文献</span>
          </button>
        </div>

        {/* Tabs & Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                  ${activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <Badge variant={activeTab === tab.id ? 'success' : 'default'}>
                  {tab.count}
                </Badge>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索文献..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewType('list')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                  ${viewType === 'list'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <List size={20} />
                <span>文件视图</span>
              </button>
              <button
                onClick={() => setViewType('grid')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                  ${viewType === 'grid'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <Grid size={20} />
                <span>内容视图</span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowViewMenu(!showViewMenu)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                    ${(viewType === 'citation' || viewType === 'chart-formula')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <MessageSquare size={20} />
                  <span>
                    {viewType === 'citation' ? '引文视图' : 
                     viewType === 'chart-formula' ? '图表公式代码' : 
                     '引文视图'}
                  </span>
                  <ChevronDown size={16} />
                </button>

                {showViewMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                    <button
                      onClick={() => {
                        setViewType('citation');
                        setShowViewMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>引文视图</span>
                    </button>
                    <button
                      onClick={() => {
                        setViewType('chart-formula');
                        setShowViewMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Grid size={16} />
                      <span>图表公式代码</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-lg">
          {viewType === 'list' && (
            <PaperList 
              activeTab={activeTab}
              searchQuery={searchQuery}
            />
          )}
          {viewType === 'grid' && (
            <PaperGrid
              activeTab={activeTab}
              searchQuery={searchQuery}
            />
          )}
          {viewType === 'citation' && (
            <CitationView
              activeTab={activeTab}
              searchQuery={searchQuery}
            />
          )}
          {viewType === 'chart-formula' && (
            <ChartFormulaView
              searchQuery={searchQuery}
            />
          )}
        </div>
      </div>
    </div>
  );
}