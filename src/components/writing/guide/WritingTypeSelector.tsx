import React from 'react';
import { WritingTypeCard } from './WritingTypeCard';
import { 
  GraduationCap, 
  BookOpen, 
  Shield, 
  Award,
  TestTube2,
  Book,
  FileText
} from 'lucide-react';

const writingTypes = [
  {
    id: 'thesis',
    name: '学位论文',
    description: '系统性的学术研究成果展示',
    icon: GraduationCap,
    color: 'text-blue-600'
  },
  {
    id: 'journal',
    name: '期刊论文',
    description: '面向学术期刊的研究论文',
    icon: BookOpen,
    color: 'text-purple-600'
  },
  {
    id: 'patent',
    name: '专利申请书',
    description: '技术发明专利申请文件',
    icon: Shield,
    color: 'text-green-600'
  },
  {
    id: 'fund',
    name: '基金申请书',
    description: '科研项目基金申请材料',
    icon: Award,
    color: 'text-amber-600'
  },
  {
    id: 'experiment',
    name: '实验方案',
    description: '实验设计与实施方案',
    icon: TestTube2,
    color: 'text-rose-600'
  },
  {
    id: 'book',
    name: '图书',
    description: '专业领域学术著作',
    icon: Book,
    color: 'text-indigo-600'
  },
  {
    id: 'report',
    name: '研究报告',
    description: '项目或课题研究总结',
    icon: FileText,
    color: 'text-cyan-600'
  }
];

interface WritingTypeSelectorProps {
  selectedType: string;
  onSelect: (typeId: string) => void;
}

export function WritingTypeSelector({ selectedType, onSelect }: WritingTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-medium text-gray-900">写作类型</h2>
        <p className="text-sm text-gray-500 mt-1">选择合适的写作类型，我们将为您推荐对应的写作模板</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {writingTypes.map((type) => (
          <WritingTypeCard
            key={type.id}
            type={type}
            isSelected={selectedType === type.id}
            onSelect={() => onSelect(type.id)}
          />
        ))}
      </div>
    </div>
  );
}