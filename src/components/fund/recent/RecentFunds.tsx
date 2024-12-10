import React from 'react';
import { FundCard } from './FundCard';
import { ArrowRight } from 'lucide-react';

export function RecentFunds() {
  const funds = [
    {
      id: '1',
      title: '气候变化预测研究',
      description: '基于深度学习的气候变化预测模型研究',
      status: 'draft',
      type: '自然科学基金面上项目',
      lastModified: '10分钟前',
      progress: 35,
      deadline: '2024-05-20'
    },
    {
      id: '2',
      title: '环境监测系统开发',
      description: '新型环境监测传感器研发与系统集成',
      status: 'in_progress',
      type: '重点研发计划项目',
      lastModified: '2小时前',
      progress: 65,
      deadline: '2024-06-15'
    },
    {
      id: '3',
      title: '生态系统评估',
      description: '区域生态系统健康评估方法研究',
      status: 'submitted',
      type: '青年科学基金项目',
      lastModified: '1天前',
      progress: 100,
      deadline: '2024-04-30'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近申请</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {funds.map(fund => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </div>
    </div>
  );
}