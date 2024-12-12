import React from 'react';
import { Brain, Code2, ScrollText, Search, Calculator } from 'lucide-react';
import { AssistantCard } from './AssistantCard';
import { AIAssistant } from '../types';

const assistants: AIAssistant[] = [
  {
    id: 'academic',
    role: 'academic',
    name: 'Academic Insight',
    description: '专业的学术研究助手，提供深入的研究见解和方法指导',
    icon: Brain,
    capabilities: ['文献分析', '研究方法', '学术写作', '数据分析']
  },
  {
    id: 'technical',
    role: 'technical',
    name: 'Tech Specialist',
    description: '技术专家，解答编程和工程问题，提供最佳实践建议',
    icon: Code2,
    capabilities: ['代码审查', '技术架构', '问题诊断', '性能优化']
  },
  {
    id: 'writing',
    role: 'writing',
    name: 'Writing Pro',
    description: '专业写作助手，帮助改进文章结构和表达',
    icon: ScrollText,
    capabilities: ['内容创作', '文章润色', '格式规范', '写作建议']
  },
  {
    id: 'research',
    role: 'research',
    name: 'Research Guide',
    description: '研究向导，协助制定研究计划和方法',
    icon: Search,
    capabilities: ['研究设计', '数据收集', '结果分析', '研究报告']
  },
  {
    id: 'analysis',
    role: 'analysis',
    name: 'Data Analyst',
    description: '数据分析专家，提供专业的数据分析和可视化建议',
    icon: Calculator,
    capabilities: ['数据处理', '统计分析', '可视化', '结果解读']
  }
];

interface AssistantListProps {
  onSelect: (assistant: AIAssistant) => void;
}

export function AssistantList({ onSelect }: AssistantListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assistants.map(assistant => (
        <AssistantCard
          key={assistant.id}
          assistant={assistant}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}