import React from 'react';
import { ProgressCard } from './ProgressCard';
import { 
  FileText, 
  CheckCircle, 
  Clock,
  AlertTriangle
} from 'lucide-react';

export function FundProgress() {
  const progressItems = [
    {
      id: 'preparation',
      title: '申请准备',
      description: '基金申请材料准备阶段',
      icon: <FileText className="text-blue-600" size={24} />,
      tasks: [
        { name: '项目摘要', status: 'completed' },
        { name: '研究计划', status: 'in_progress' },
        { name: '预算编制', status: 'pending' }
      ]
    },
    {
      id: 'submission',
      title: '提交审核',
      description: '申请材料提交与审核阶段',
      icon: <CheckCircle className="text-purple-600" size={24} />,
      tasks: [
        { name: '材料检查', status: 'pending' },
        { name: '单位审核', status: 'pending' },
        { name: '正式提交', status: 'pending' }
      ]
    },
    {
      id: 'review',
      title: '评审进度',
      description: '基金评审和结果公示阶段',
      icon: <Clock className="text-green-600" size={24} />,
      tasks: [
        { name: '形式审查', status: 'pending' },
        { name: '同行评议', status: 'pending' },
        { name: '结果公示', status: 'pending' }
      ]
    },
    {
      id: 'risk',
      title: '风险提示',
      description: '申请过程中的风险点提示',
      icon: <AlertTriangle className="text-orange-600" size={24} />,
      alerts: [
        '预算合理性',
        '研究可行性',
        '创新性论证',
        '完整性检查'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {progressItems.map(item => (
        <ProgressCard key={item.id} item={item} />
      ))}
    </div>
  );
}
