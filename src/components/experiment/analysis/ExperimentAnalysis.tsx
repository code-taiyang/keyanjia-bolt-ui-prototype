import React from 'react';
import { AnalysisCard } from './AnalysisCard';
import { 
  BarChart2, 
  GitCompare, 
  Search,
  Lightbulb
} from 'lucide-react';

export function ExperimentAnalysis() {
  const analysisItems = [
    {
      id: 'comparison',
      title: '参数对比',
      description: '与已发表论文中类似实验的参数对比',
      icon: <GitCompare className="text-blue-600" size={24} />,
      metrics: ['实验条件', '操作参数', '结果指标']
    },
    {
      id: 'difference',
      title: '差异分析',
      description: '不同实验条件下结果的差异分析',
      icon: <BarChart2 className="text-purple-600" size={24} />,
      metrics: ['数据统计', '趋势分析', '相关性']
    },
    {
      id: 'factors',
      title: '关键因素',
      description: '找出影响实验结果的关键因素',
      icon: <Search className="text-green-600" size={24} />,
      metrics: ['主效应', '交互作用', '影响程度']
    },
    {
      id: 'innovation',
      title: '创新性评估',
      description: '评估实验结果的创新性和可靠性',
      icon: <Lightbulb className="text-orange-600" size={24} />,
      metrics: ['创新点', '可靠性', '应用价值']
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