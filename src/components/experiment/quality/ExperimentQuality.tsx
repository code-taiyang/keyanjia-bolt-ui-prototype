import React from 'react';
import { QualityCard } from './QualityCard';
import { 
  Gauge, 
  AlertTriangle, 
  RefreshCw, 
  CheckCircle 
} from 'lucide-react';

export function ExperimentQuality() {
  const qualityFeatures = [
    {
      id: 'monitoring',
      title: '条件监测',
      description: '实验条件实时监控',
      icon: <Gauge className="text-blue-600" size={24} />,
      metrics: ['温度', '湿度', '压力', 'pH值']
    },
    {
      id: 'anomaly',
      title: '异常检测',
      description: '实验数据异常检测',
      icon: <AlertTriangle className="text-red-600" size={24} />,
      metrics: ['离群值', '趋势异常', '数据缺失']
    },
    {
      id: 'repeatability',
      title: '重复性验证',
      description: '实验结果重复性检验',
      icon: <RefreshCw className="text-green-600" size={24} />,
      metrics: ['标准差', '变异系数', '置信区间']
    },
    {
      id: 'validation',
      title: '质量验证',
      description: '实验质量综合评估',
      icon: <CheckCircle className="text-purple-600" size={24} />,
      metrics: ['准确度', '精密度', '稳定性']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {qualityFeatures.map(feature => (
        <QualityCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}