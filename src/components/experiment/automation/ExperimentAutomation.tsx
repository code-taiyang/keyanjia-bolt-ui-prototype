import React from 'react';
import { AutomationCard } from './AutomationCard';
import { 
  GitFlow, 
  PlayCircle, 
  Sliders, 
  ActivitySquare 
} from 'lucide-react';

export function ExperimentAutomation() {
  const automationFeatures = [
    {
      id: 'workflow',
      title: '流程模板',
      description: '标准化实验流程模板',
      icon: <GitFlow className="text-blue-600" size={24} />,
      features: ['模板管理', '参数配置', '流程定制']
    },
    {
      id: 'execution',
      title: '自动执行',
      description: '自动化实验步骤执行',
      icon: <PlayCircle className="text-purple-600" size={24} />,
      features: ['定时执行', '条件触发', '并行处理']
    },
    {
      id: 'parameters',
      title: '参数管理',
      description: '实验参数的批量处理',
      icon: <Sliders className="text-green-600" size={24} />,
      features: ['参数优化', '条件筛选', '批量修改']
    },
    {
      id: 'monitoring',
      title: '过程监控',
      description: '实验过程实时监控',
      icon: <ActivitySquare className="text-orange-600" size={24} />,
      features: ['状态监测', '异常预警', '进度追踪']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {automationFeatures.map(feature => (
        <AutomationCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}