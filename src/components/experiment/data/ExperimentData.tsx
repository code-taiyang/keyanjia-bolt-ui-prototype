import React from 'react';
import { DataCard } from './DataCard';
import { Database, GitBranch, Share2, Shield } from 'lucide-react';

export function ExperimentData() {
  const dataFeatures = [
    {
      id: 'version',
      title: '版本控制',
      description: '实验数据的版本管理与追踪',
      icon: <GitBranch className="text-blue-600" size={24} />,
      features: ['历史版本', '变更记录', '版本对比', '回滚恢复']
    },
    {
      id: 'format',
      title: '数据标准化',
      description: '统一的数据格式和处理流程',
      icon: <Database className="text-purple-600" size={24} />,
      features: ['格式转换', '数据校验', '元数据管理']
    },
    {
      id: 'share',
      title: '协作共享',
      description: '团队间的数据共享与协作',
      icon: <Share2 className="text-green-600" size={24} />,
      features: ['权限控制', '实时同步', '协作编辑']
    },
    {
      id: 'security',
      title: '数据安全',
      description: '实验数据的安全保护机制',
      icon: <Shield className="text-orange-600" size={24} />,
      features: ['加密存储', '访问控制', '操作审计']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dataFeatures.map(feature => (
        <DataCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}