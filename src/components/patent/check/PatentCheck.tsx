import React from 'react';
import { CheckCard } from './CheckCard';
import { 
  CheckCircle, 
  FileCheck, 
  BookOpen,
  AlertTriangle
} from 'lucide-react';

export function PatentCheck() {
  const checkItems = [
    {
      id: 'logic',
      title: '逻辑检查',
      description: '检查申请文件的逻辑完整性',
      icon: <CheckCircle className="text-blue-600" size={24} />,
      items: ['技术方案完整性', '逻辑关系一致性', '技术特征对应性']
    },
    {
      id: 'format',
      title: '格式检查',
      description: '检查是否符合专利申请格式要求',
      icon: <FileCheck className="text-purple-600" size={24} />,
      items: ['文件格式规范', '图式要求', '文字编排']
    },
    {
      id: 'terms',
      title: '术语规范',
      description: '检查技术术语使用的规范性',
      icon: <BookOpen className="text-green-600" size={24} />,
      items: ['术语标准化', '名词统一性', '表达规范性']
    },
    {
      id: 'risk',
      title: '风险检查',
      description: '检查潜在的驳回风险点',
      icon: <AlertTriangle className="text-orange-600" size={24} />,
      items: ['新颖性风险', '创造性风险', '支持充分性']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {checkItems.map(item => (
        <CheckCard key={item.id} item={item} />
      ))}
    </div>
  );
}