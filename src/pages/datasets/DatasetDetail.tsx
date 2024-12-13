import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Edit, 
  Trash2,
  Table,
  BarChart2,
  Info,
  History,
  FileText,
  Brain,
  Code2,
  TestTubes,
  ExternalLink
} from 'lucide-react';
import { DatasetPreview } from '../../components/datasets/preview/DatasetPreview';
import { DatasetInfo } from '../../components/datasets/detail/DatasetInfo';
import { DatasetHistory } from '../../components/datasets/detail/DatasetHistory';
import { DatasetStats } from '../../components/datasets/detail/DatasetStats';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';

export function DatasetDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'preview' | 'info' | 'history' | 'stats'>('preview');
  const [showIntegrationMenu, setShowIntegrationMenu] = useState(false);

  // 模拟数据集详情数据
  const dataset = {
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
    },
    schema: [
      { name: 'date', type: 'datetime', description: '观测日期' },
      { name: 'location', type: 'string', description: '观测地点' },
      { name: 'temperature', type: 'float', description: '温度值(°C)' },
      { name: 'humidity', type: 'float', description: '湿度(%)' },
      { name: 'pressure', type: 'float', description: '气压(hPa)' }
    ],
    previewData: [
      { date: '2024-03-15', location: '北京', temperature: 15.2, humidity: 45, pressure: 1013.2 },
      { date: '2024-03-15', location: '上海', temperature: 18.5, humidity: 62, pressure: 1012.8 },
      { date: '2024-03-15', location: '广州', temperature: 22.1, humidity: 78, pressure: 1011.5 },
      { date: '2024-03-15', location: '深圳', temperature: 23.4, humidity: 75, pressure: 1011.2 },
      { date: '2024-03-15', location: '成都', temperature: 16.8, humidity: 58, pressure: 1014.3 }
    ]
  };

  const tabs = [
    { id: 'preview' as const, label: '数据预览', icon: <Table size={18} /> },
    { id: 'info' as const, label: '基本信息', icon: <Info size={18} /> },
    { id: 'history' as const, label: '版本历史', icon: <History size={18} /> },
    { id: 'stats' as const, label: '使用统计', icon: <BarChart2 size={18} /> }
  ];

  const integrationOptions = [
    {
      icon: <Brain size={20} className="text-purple-600" />,
      label: '导入到数据分析',
      description: '使用AI助手分析数据集',
      path: '/tools/analysis'
    },
    {
      icon: <Code2 size={20} className="text-blue-600" />,
      label: '导入到编程环境',
      description: '在编程环境中处理数据',
      path: '/tools/coding'
    },
    {
      icon: <TestTubes size={20} className="text-green-600" />,
      label: '导入到实验',
      description: '在实验中使用数据集',
      path: '/tools/experiment'
    }
  ];

  const handleIntegration = (path: string) => {
    // TODO: 处理数据集导入到其他功能模块的逻辑
    console.log('Integrating dataset to:', path);
    setShowIntegrationMenu(false);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/resources/datasets"
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {dataset.name}
                </h1>
                <Badge variant={
                  dataset.visibility === 'public' ? 'success' :
                  dataset.visibility === 'team' ? 'warning' : 'default'
                }>
                  {dataset.visibility === 'public' ? '公开' :
                   dataset.visibility === 'team' ? '团队' : '私有'}
                </Badge>
              </div>
              <p className="text-gray-500 mt-1">{dataset.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <button 
                onClick={() => setShowIntegrationMenu(!showIntegrationMenu)}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <ExternalLink size={16} />
                <span>导入到</span>
              </button>

              {showIntegrationMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-10">
                  {integrationOptions.map((option, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 text-left"
                      onClick={() => handleIntegration(option.path)}
                    >
                      {option.icon}
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-gray-500">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Edit size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Trash2 size={20} className="text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download size={16} />
              <span>下载数据集</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="text-sm text-gray-500">总记录数</div>
            <div className="text-2xl font-semibold mt-1">{dataset.records.toLocaleString()}</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-500">数据大小</div>
            <div className="text-2xl font-semibold mt-1">{dataset.size}</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-500">被引用次数</div>
            <div className="text-2xl font-semibold mt-1">{dataset.stats.citations}</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-500">下载次数</div>
            <div className="text-2xl font-semibold mt-1">{dataset.stats.downloads}</div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium
                  ${activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white border rounded-lg">
          {activeTab === 'preview' && <DatasetPreview dataset={dataset} />}
          {activeTab === 'info' && <DatasetInfo dataset={dataset} />}
          {activeTab === 'history' && <DatasetHistory dataset={dataset} />}
          {activeTab === 'stats' && <DatasetStats dataset={dataset} />}
        </div>
      </div>
    </div>
  );
}