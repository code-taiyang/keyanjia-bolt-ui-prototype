import React from 'react';
import { ExperimentCard } from './ExperimentCard';
import { ArrowRight } from 'lucide-react';

export function RecentExperiments() {
  const experiments = [
    {
      id: '1',
      title: '纳米材料合成实验',
      description: '研究不同温度条件下纳米材料的合成效果',
      status: 'in_progress',
      lastModified: '10分钟前',
      progress: 65,
      team: '材料研究组'
    },
    {
      id: '2',
      title: '催化剂性能测试',
      description: '评估新型催化剂在不同反应条件下的性能',
      status: 'completed',
      lastModified: '2小时前',
      progress: 100,
      team: '催化研究组'
    },
    {
      id: '3',
      title: '光谱分析实验',
      description: '使用拉曼光谱分析样品结构特征',
      status: 'planned',
      lastModified: '1天前',
      progress: 0,
      team: '光谱分析组'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近实验</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiments.map(experiment => (
          <ExperimentCard key={experiment.id} experiment={experiment} />
        ))}
      </div>
    </div>
  );
}