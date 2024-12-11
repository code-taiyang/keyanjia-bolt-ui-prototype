import React from 'react';
import { PatentCard } from './PatentCard';
import { ArrowRight } from 'lucide-react';

export function RecentPatents() {
  const patents = [
    {
      id: '1',
      title: '基于深度学习的温度预测方法',
      description: '一种使用深度神经网络进行温度预测的方法及系统',
      status: 'draft',
      type: '发明专利',
      lastModified: '10分钟前',
      progress: 35
    },
    {
      id: '2',
      title: '智能传感器数据处理装置',
      description: '一种用于处理和分析传感器数据的智能装置',
      status: 'in_progress',
      type: '发明专利',
      lastModified: '2小时前',
      progress: 65
    },
    {
      id: '3',
      title: '环境监测系统',
      description: '一种基于物联网的环境参数监测系统',
      status: 'completed',
      type: '实用新型',
      lastModified: '1天前',
      progress: 100
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近专利</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patents.map(patent => (
          <PatentCard key={patent.id} patent={patent} />
        ))}
      </div>
    </div>
  );
}