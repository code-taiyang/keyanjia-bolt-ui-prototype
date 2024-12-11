import React from 'react';
import { PlanningCard } from './PlanningCard';
import { 
  ClipboardList, 
  Scale, 
  Clock, 
  DollarSign,
  FileSearch,
  BarChart
} from 'lucide-react';

export function ExperimentPlanning() {
  const planningItems = [
    {
      id: 'design',
      title: '实验设计',
      description: '了解同类实验的设计方案',
      icon: <ClipboardList className="text-blue-600" size={24} />,
      items: ['实验方案对比', '参数范围确定', '控制变量选择']
    },
    {
      id: 'feasibility',
      title: '可行性分析',
      description: '评估实验方案的可行性',
      icon: <Scale className="text-purple-600" size={24} />,
      items: ['技术可行性', '设备条件', '人员要求']
    },
    {
      id: 'time',
      title: '时间规划',
      description: '实验周期和时间安排',
      icon: <Clock className="text-green-600" size={24} />,
      items: ['实验步骤', '时间估算', '进度安排']
    },
    {
      id: 'cost',
      title: '成本评估',
      description: '实验所需资源成本',
      icon: <DollarSign className="text-orange-600" size={24} />,
      items: ['材料成本', '设备费用', '人力成本']
    },
    {
      id: 'literature',
      title: '文献调研',
      description: '相关研究文献分析',
      icon: <FileSearch className="text-indigo-600" size={24} />,
      items: ['研究现状', '技术难点', '创新点分析']
    },
    {
      id: 'analysis',
      title: '数据分析',
      description: '实验数据分析方案',
      icon: <BarChart className="text-rose-600" size={24} />,
      items: ['分析方法', '统计模型', '可视化方案']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {planningItems.map(item => (
        <PlanningCard key={item.id} item={item} />
      ))}
    </div>
  );
}