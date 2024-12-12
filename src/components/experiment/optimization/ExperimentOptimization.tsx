import React from 'react';
import { OptimizationCard } from './OptimizationCard';
import { 
  Settings, 
  AlertTriangle, 
  Clock,
  TrendingUp
} from 'lucide-react';

export function ExperimentOptimization() {
  const optimizationItems = [
    {
      id: 'improvement',
      title: '方案改进',
      description: '寻找实验方案的改进空间',
      icon: <Settings className="text-blue-600" size={24} />,
      suggestions: ['参数优化', '流程改进', '设备升级']
    },
    {
      id: 'failure',
      title: '失败分析',
      description: '分析失败实验的可能原因',
      icon: <AlertTriangle className="text-red-600" size={24} />,
      suggestions: ['原因排查', '解决方案', '预防措施']
    },
    {
      id: 'efficiency',
      title: '效率提升',
      description: '缩短实验周期或降低成本',
      icon: <Clock className="text-green-600" size={24} />,
      suggestions: ['时间优化', '成本控制', '资源利用']
    },
    {
      id: 'performance',
      title: '性能优化',
      description: '提高实验结果的准确性和可靠性',
      icon: <TrendingUp className="text-purple-600" size={24} />,
      suggestions: ['精度提升', '稳定性', '重复性']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {optimizationItems.map(item => (
        <OptimizationCard key={item.id} item={item} />
      ))}
    </div>
  );
}