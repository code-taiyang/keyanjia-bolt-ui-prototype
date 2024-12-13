import React from 'react';
import { 
  FileText, 
  BookOpen, 
  ScrollText, 
  Brain, 
  Sparkles,
  Languages,
  Highlighter
} from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  label: string;
  description: string;
  action: () => void;
}

export function Toolbar() {
  const tools: Tool[] = [
    {
      icon: <FileText size={16} />,
      label: '文献总结',
      description: '生成文献内容摘要',
      action: () => console.log('Summarize')
    },
    {
      icon: <BookOpen size={16} />,
      label: '文献综述',
      description: '生成文献综述内容',
      action: () => console.log('Review')
    },
    {
      icon: <ScrollText size={16} />,
      label: '写作润色',
      description: '优化学术写作表达',
      action: () => console.log('Polish')
    },
    {
      icon: <Brain size={16} />,
      label: '方法分析',
      description: '分析研究方法',
      action: () => console.log('Analyze')
    },
    {
      icon: <Sparkles size={16} />,
      label: '创新点',
      description: '提取研究创新点',
      action: () => console.log('Innovation')
    },
    {
      icon: <Languages size={16} />,
      label: '翻译',
      description: '学术翻译',
      action: () => console.log('Translate')
    },
    {
      icon: <Highlighter size={16} />,
      label: '批注',
      description: '添加研究批注',
      action: () => console.log('Annotate')
    }
  ];

  return (
    <div className="px-4 py-2 border-b bg-white">
      <div className="flex items-center gap-1 overflow-x-auto">
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={tool.action}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg whitespace-nowrap"
            title={tool.description}
          >
            {tool.icon}
            <span>{tool.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}