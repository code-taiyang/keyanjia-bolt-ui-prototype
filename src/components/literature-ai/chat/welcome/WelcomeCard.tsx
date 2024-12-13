import React from 'react';
import { Brain, BookOpen, FileText, Search, Lightbulb, Database } from 'lucide-react';
import { WelcomeSection } from './WelcomeSection';
import { useLiteratureStore } from '../../../../stores/literatureStore';

export function WelcomeCard() {
  const { sendMessage } = useLiteratureStore();

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  const sections = [
    {
      title: "研究规划",
      icon: <Brain size={16} className="text-gray-600" />,
      questions: [
        "如何确定研究方向？",
        "研究计划制定建议",
        "实验设计方案"
      ]
    },
    {
      title: "实验规划",
      icon: <BookOpen size={16} className="text-gray-600" />,
      questions: [
        "实验方案设计",
        "实验条件优化",
        "数据采集计划"
      ]
    },
    {
      title: "写作指导",
      icon: <FileText size={16} className="text-gray-600" />,
      questions: [
        "如何组织论文结构？",
        "改进学术表达",
        "参考文献规范"
      ]
    },
    {
      title: "文献检索",
      icon: <Search size={16} className="text-gray-600" />,
      questions: [
        "查找相关研究",
        "追踪研究进展",
        "寻找研究空白"
      ]
    },
    {
      title: "创新思路",
      icon: <Lightbulb size={16} className="text-gray-600" />,
      questions: [
        "发现研究机会",
        "跨领域启发",
        "方法创新建议"
      ]
    },
    {
      title: "数据分析",
      icon: <Database size={16} className="text-gray-600" />,
      questions: [
        "数据处理方法",
        "统计分析建议",
        "可视化方案"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-900">欢迎使用文献AI，让我们开始探索学术研究的精彩世界。</p>

      <div className="grid grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <WelcomeSection
            key={index}
            section={section}
            onQuestionClick={handleQuestionClick}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => handleQuestionClick("解读示例文献")}
          className="flex-1 text-center text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 transition-colors"
        >
          解读示例文献
        </button>
        <button 
          onClick={() => handleQuestionClick("上传我的文献")}
          className="flex-1 text-center text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors"
        >
          上传我的文献
        </button>
      </div>
    </div>
  );
}