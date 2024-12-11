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

export function PatentWriting() {
  const sections = [
    {
      id: 'background',
      title: '背景技术',
      description: '自动生成技术背景和现有技术分析',
      icon: <BookOpen className="text-blue-600" size={24} />,
      progress: 80,
      status: 'completed'
    },
    {
      id: 'technical',
      title: '技术方案',
      description: '详细的技术实现方案描述',
      icon: <Code className="text-purple-600" size={24} />,
      progress: 60,
      status: 'in_progress'
    },
    {
      id: 'problem',
      title: '技术问题',
      description: '明确待解决的技术问题',
      icon: <Target className="text-green-600" size={24} />,
      progress: 100,
      status: 'completed'
    },
    {
      id: 'purpose',
      title: '发明目的',
      description: '阐述发明的目的和效果',
      icon: <Lightbulb className="text-orange-600" size={24} />,
      progress: 40,
      status: 'in_progress'
    },
    {
      id: 'claims',
      title: '权利要求',
      description: '生成专利权利要求书',
      icon: <FileText className="text-red-600" size={24} />,
      progress: 20,
      status: 'draft'
    },
    {
      id: 'examples',
      title: '具体实施',
      description: '详细的实施例描述',
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