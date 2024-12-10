import React from 'react';
import { AnalysisCard } from './AnalysisCard';
import { 
  Search, 
  TrendingUp, 
  GitBranch,
  Network
} from 'lucide-react';

export function PatentAnalysis() {
  const analysisItems = [
    {
      id: 'search',
      title: '专利检索',
      description: '全球专利数据库智能检索',
      icon: <Search className="text-blue-600" size={24} />,
      features: ['关键词检索', '分类号检索', '申请人检索', '引用检索']
    },
    {
      id: 'trend',
      title: '趋势分析',
      description: '专利申请趋势与分布分析',
      icon: <TrendingUp className="text-purple-600" size={24} />,
      features: ['时间趋势', '地域分布', '技术分布', '申请人分析']
    },
    {
      id: 'technology',
      title: '技术路线',
      description: '专利技术发展路线分析',
      icon: <GitBranch className="text-green-600" size={24} />,
      features: ['技术演进', '创新路径', '技术分支', '发展方向']
    },
    {
      id: 'citation',
      title: '引用分析',
      description: '专利引用关系网络分析',
      icon: <Network className="text-orange-600" size={24} />,
      features: ['引用网络', '被引频次', '技术关联', '影响力评估']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {analysisItems.map(item => (
        <AnalysisCard key={item.id} item={item} />
      ))}
    </div>
  );
}