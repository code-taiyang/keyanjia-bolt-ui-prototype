import React from 'react';
import { WritingCard } from './WritingCard';
import { 
  FileText, 
  BookOpen, 
  Target,
  Lightbulb,
  Code,
  CheckSquare
} from 'lucide-react';

export function FundWriting() {
  const sections = [
    {
      id: 'summary',
      title: '项目摘要',
      description: '项目研究内容和目标的概述',
      icon: <FileText className="text-blue-600" size={24} />,
      progress: 80,
      status: 'completed'
    },
    {
      id: 'purpose',
      title: '研究目标',
      description: '研究目标和预期成果',
      icon: <Target className="text-purple-600" size={24} />,
      progress: 60,
      status: 'in_progress'
    },
    {
      id: 'budget',
      title: '经费预算',
      description: '项目经费使用计划',
      icon: <Code className="text-green-600" size={24} />,
      progress: 40,
      status: 'in_progress'
    },
    {
      id: 'schedule',
      title: '研究计划',
      description: '研究进度和时间安排',
      icon: <BookOpen className="text-orange-600" size={24} />,
      progress: 20,
      status: 'draft'
    },
    {
      id: 'team',
      title: '研究团队',
      description: '团队成员及分工',
      icon: <Lightbulb className="text-red-600" size={24} />,
      progress: 100,
      status: 'completed'
    },
    {
      id: 'feasibility',
      title: '可行性分析',
      description: '研究基础和可行性论证',
      icon: <CheckSquare className="text-indigo-600" size={24} />,
      progress: 0,
      status: 'draft'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sections.map(section => (
        <WritingCard key={section.id} section={section} />
      ))}
    </div>
  );
}