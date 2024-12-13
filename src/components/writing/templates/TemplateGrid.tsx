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
  BookOpen,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { Card } from '../../common/Card';
import { useNavigate } from 'react-router-dom';

interface TemplateGridProps {
  onSelect?: (templateId: string) => void;
  selectedId?: string;
  compact?: boolean;
}

export function TemplateGrid({ onSelect, selectedId, compact = false }: TemplateGridProps) {
  const navigate = useNavigate();
  
  const templates = [
    {
      id: 'sci-paper',
      title: 'SCI论文',
      description: '标准SCI论文写作模板，包含摘要、引言、方法等章节',
      icon: <ScrollText size={24} />,
      color: 'text-blue-600 bg-blue-50',
      category: 'academic',
      citationStyles: ['APA', 'IEEE'],
      aiFeatures: ['智能润色', '格式检查', '参考文献管理']
    },
    {
      id: 'thesis',
      title: '学位论文',
      description: '博士/硕士学位论文写作模板，符合学位论文规范',
      icon: <GraduationCap size={24} />,
      color: 'text-purple-600 bg-purple-50',
      category: 'academic',
      citationStyles: ['GB/T 7714'],
      aiFeatures: ['章节建议', '格式规范', '文献引用']
    },
    {
      id: 'research-methods',
      title: '研究方法论',
      description: '研究方法论写作模板，包含定量/定性研究方法描述',
      icon: <FileText size={24} />,
      color: 'text-pink-600 bg-pink-50',
      category: 'research',
      citationStyles: ['APA', 'Chicago'],
      aiFeatures: ['方法选择建议', '研究设计优化', '数据分析方案']
    },
    {
      id: 'literature-analysis',
      title: '文献分析报告',
      description: '文献分析专用模板，支持文献归类、观点提取和研究趋势分析',
      icon: <BookOpen size={24} />,
      color: 'text-sky-600 bg-sky-50',
      category: 'research',
      citationStyles: ['APA', 'GB/T 7714'],
      aiFeatures: ['文献聚类', '观点提取', '趋势分析']
    },
    {
      id: 'research-ethics',
      title: '伦理审查申请',
      description: '研究伦理审查申请材料模板，包含伦理问题说明和防范措施',
      icon: <FileCheck size={24} />,
      color: 'text-lime-600 bg-lime-50',
      category: 'application',
      citationStyles: ['APA'],
      aiFeatures: ['伦理风险识别', '防范措施建议', '文档完整性检查']
    }
  ];

  const handleTemplateSelect = (template: typeof templates[0]) => {
    if (onSelect) {
      onSelect(template.id);
    } else {
      // If no onSelect handler is provided, navigate directly to writing page
      const writingId = Date.now().toString();
      navigate(`/writing/${writingId}`, {
        state: {
          title: `新建${template.title}`,
          templateId: template.id,
          isNew: true
        }
      });
    }
  };

  const renderTemplateCard = (template: typeof templates[0]) => (
    <Card 
      key={template.id}
      className={`
        p-4 cursor-pointer transition-all duration-200 group
        ${selectedId === template.id 
          ? 'ring-2 ring-blue-500 border-transparent' 
          : 'hover:border-blue-200'}
      `}
      onClick={() => handleTemplateSelect(template)}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-xl ${template.color}`}>
          {template.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">{template.title}</h3>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{template.description}</p>
          {!compact && (
            <>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {template.citationStyles.map((style) => (
                  <span
                    key={style}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {style}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {template.aiFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );

  if (compact) {
    return (
      <div className="grid gap-3 grid-cols-1">
        {templates.map(renderTemplateCard)}
      </div>
    );
  }

  const groupedTemplates = {
    academic: templates.filter(t => t.category === 'academic'),
    research: templates.filter(t => t.category === 'research'),
    application: templates.filter(t => t.category === 'application')
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-medium mb-4">学术论文</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groupedTemplates.academic.map(renderTemplateCard)}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">研究文档</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groupedTemplates.research.map(renderTemplateCard)}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">申请材料</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groupedTemplates.application.map(renderTemplateCard)}
        </div>
      </div>
    </div>
  );
}