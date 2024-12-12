import React from 'react';
import { AnalysisCard } from './AnalysisCard';
import { 
  Target, 
  TrendingUp, 
  Users,
  BarChart2
} from 'lucide-react';

export function FundAnalysis() {
  const analysisItems = [
    {
      id: 'topic',
      title: '选题分析',
      description: '基于研究方向的基金选题分析',
      icon: <Target className="text-blue-600" size={24} />,
      features: ['热点分析', '资助趋势', '竞争程度', '创新性评估']
    },
    {
      id: 'trend',
      title: '趋势分析',
      description: '基金资助趋势与分布分析',
      icon: <TrendingUp className="text-purple-600" size={24} />,
      features: ['领域分布', '金额分布', '地域分布', '时间趋势']
    },
    {
      id: 'competition',
      title: '竞争分析',
      description: '申请竞争力评估与分析',
      icon: <Users className="text-green-600" size={24} />,
      features: ['申请难度', '成功率', '评审偏好', '竞争对手']
    },
    {
      id: 'performance',
      title: '绩效分析',
      description: '历史项目绩效分析',
      icon: <BarChart2 className="text-orange-600" size={24} />,
      features: ['完成情况', '成果产出', '影响力', '后续资助']
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