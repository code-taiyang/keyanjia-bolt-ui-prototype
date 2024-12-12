import React from 'react';
import { 
  ScrollText, 
  FileText, 
  Award, 
  Book, 
  Newspaper,
  GraduationCap,
  FileSearch,
  FileSpreadsheet,
  FileCode,
  ArrowRight
} from 'lucide-react';
import { Card } from '../../common/Card';

interface Template {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: 'academic' | 'research' | 'application';
}

interface TemplateSelectionProps {
  onSelect: (templateId: string) => void;
}

export function TemplateSelection({ onSelect }: TemplateSelectionProps) {
  const templates: Template[] = [
    {
      id: 'thesis',
      title: '学位论文',
      description: '系统性的学术研究成果',
      icon: <GraduationCap size={24} />,
      color: 'text-blue-600',
      category: 'academic'
    },
    {
      id: 'journal',
      title: '期刊论文',
      description: '专业领域的研究发现',
      icon: <ScrollText size={24} />,
      color: 'text-purple-600',
      category: 'academic'
    },
    {
      id: 'book',
      title: '图书',
      description: '完整的知识体系著作',
      icon: <Book size={24} />,
      color: 'text-green-600',
      category: 'academic'
    },
    {
      id: 'report',
      title: '研究报告',
      description: '项目或课题研究总结',
      icon: <FileText size={24} />,
      color: 'text-orange-600',
      category: 'research'
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-semibold mb-2">描述下你今天要写的内容</h1>
        <p className="text-gray-500">例如：探讨大语言模型在科研辅助领域的应用现状与挑战...</p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <Card 
              key={template.id}
              className="p-6 cursor-pointer hover:border-blue-200 transition-all duration-200"
              onClick={() => onSelect(template.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gray-50 ${template.color}`}>
                  {template.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{template.title}</h3>
                  <p className="text-gray-500 mt-1">{template.description}</p>
                </div>
                <ArrowRight className="text-gray-400" size={20} />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => onSelect('custom')}
          >
            开始写作
          </button>
        </div>
      </div>
    </div>
  );
}