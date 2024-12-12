import React from 'react';
import { 
  ScrollText, 
  FileText, 
  Award, 
  Book, 
  Newspaper, 
  FileCheck,
  Presentation,
  BookOpen,
  GraduationCap,
  FileSearch,
  FileSpreadsheet,
  FileCode
} from 'lucide-react';
import { Card } from '../../common/Card';

interface Template {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: 'academic' | 'research' | 'application' | 'other';
}

interface TemplateGridProps {
  onSelect: (templateId: string) => void;
}

export function TemplateGrid({ onSelect }: TemplateGridProps) {
  const templates: Template[] = [
    // 学术论文类
    {
      id: 'sci-paper',
      title: 'SCI论文',
      description: '标准SCI论文写作模板，包含摘要、引言、方法等章节',
      icon: <ScrollText size={24} />,
      color: 'text-blue-600',
      category: 'academic'
    },
    {
      id: 'conference',
      title: '会议论文',
      description: '学术会议论文写作模板，适用于各类学术会议投稿',
      icon: <Presentation size={24} />,
      color: 'text-indigo-600',
      category: 'academic'
    },
    {
      id: 'thesis',
      title: '学位论文',
      description: '博士/硕士学位论文写作模板，符合学位论文规范',
      icon: <GraduationCap size={24} />,
      color: 'text-purple-600',
      category: 'academic'
    },
    {
      id: 'review',
      title: '综述论文',
      description: '文献综述论文模板，帮助梳理研究领域进展',
      icon: <BookOpen size={24} />,
      color: 'text-emerald-600',
      category: 'academic'
    },

    // 研究文档类
    {
      id: 'research-proposal',
      title: '研究计划',
      description: '研究课题立项计划书，包含研究背景、目标和方法',
      icon: <FileText size={24} />,
      color: 'text-amber-600',
      category: 'research'
    },
    {
      id: 'experiment-report',
      title: '实验报告',
      description: '标准实验报告模板，包含实验方法、数据和结论',
      icon: <FileSpreadsheet size={24} />,
      color: 'text-cyan-600',
      category: 'research'
    },
    {
      id: 'technical-report',
      title: '技术报告',
      description: '技术研发报告模板，适用于项目技术文档',
      icon: <FileCode size={24} />,
      color: 'text-slate-600',
      category: 'research'
    },
    {
      id: 'research-summary',
      title: '研究总结',
      description: '阶段性研究工作总结报告模板',
      icon: <FileCheck size={24} />,
      color: 'text-teal-600',
      category: 'research'
    },

    // 申请材料类
    {
      id: 'grant',
      title: '基金申请',
      description: '国家自然科学基金申请书写作模板',
      icon: <Award size={24} />,
      color: 'text-green-600',
      category: 'application'
    },
    {
      id: 'patent',
      title: '专利申请',
      description: '发明专利申请书写作模板，包含权利要求、说明书等',
      icon: <FileSearch size={24} />,
      color: 'text-orange-600',
      category: 'application'
    },
    {
      id: 'project-application',
      title: '项目申请',
      description: '科研项目申请书模板，适用于各类项目申报',
      icon: <Book size={24} />,
      color: 'text-rose-600',
      category: 'application'
    },
    {
      id: 'achievement-report',
      title: '成果报告',
      description: '科研成果总结报告，用于项目结题和成果转化',
      icon: <Newspaper size={24} />,
      color: 'text-violet-600',
      category: 'application'
    }
  ];

  // 按类别分组模板
  const groupedTemplates = {
    academic: templates.filter(t => t.category === 'academic'),
    research: templates.filter(t => t.category === 'research'),
    application: templates.filter(t => t.category === 'application')
  };

  return (
    <div className="space-y-8">
      {/* 学术论文类 */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">学术论文</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groupedTemplates.academic.map((template) => (
            <Card 
              key={template.id}
              className="p-4 cursor-pointer hover:border-blue-200 transition-all duration-200"
              onClick={() => onSelect(template.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-gray-50 ${template.color}`}>
                  {template.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 研究文档类 */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">研究文档</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groupedTemplates.research.map((template) => (
            <Card 
              key={template.id}
              className="p-4 cursor-pointer hover:border-blue-200 transition-all duration-200"
              onClick={() => onSelect(template.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-gray-50 ${template.color}`}>
                  {template.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 申请材料类 */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">申请材料</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groupedTemplates.application.map((template) => (
            <Card 
              key={template.id}
              className="p-4 cursor-pointer hover:border-blue-200 transition-all duration-200"
              onClick={() => onSelect(template.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-gray-50 ${template.color}`}>
                  {template.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}