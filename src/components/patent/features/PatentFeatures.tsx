import React from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  MessageSquare, 
  Star, 
  GitMerge,
  Users,
  FileSearch,
  FileText,
  BarChart2,
  History
} from 'lucide-react';

export function PatentFeatures() {
  const features = [
    {
      id: 'interaction',
      title: '智能交互',
      description: '增强的多轮对话和意图理解',
      icon: <MessageSquare className="text-blue-600" size={24} />,
      capabilities: [
        '上下文理解',
        '意图识别',
        '个性化建议',
        '实时反馈'
      ]
    },
    {
      id: 'quality',
      title: '质量评估',
      description: '专利文本质量智能评估',
      icon: <Star className="text-yellow-600" size={24} />,
      capabilities: [
        '多维度评分',
        '竞争力分析',
        '保护范围评估',
        '创新性评价'
      ]
    },
    {
      id: 'assistant',
      title: '智能辅助',
      description: '专利撰写智能辅助功能',
      icon: <FileText className="text-green-600" size={24} />,
      capabilities: [
        '自动摘要',
        '图式说明',
        '同族专利',
        '关键词提取'
      ]
    },
    {
      id: 'collaboration',
      title: '团队协作',
      description: '支持团队协作和流程管理',
      icon: <Users className="text-purple-600" size={24} />,
      capabilities: [
        '多人协作',
        '评审流程',
        '版本控制',
        '评论反馈'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map(feature => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}