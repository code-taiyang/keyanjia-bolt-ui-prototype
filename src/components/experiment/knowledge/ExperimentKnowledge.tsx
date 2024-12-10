import React from 'react';
import { KnowledgeCard } from './KnowledgeCard';
import { 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  FileText 
} from 'lucide-react';

export function ExperimentKnowledge() {
  const knowledgeBase = [
    {
      id: 'methods',
      title: '实验方法库',
      description: '标准实验方法与技术',
      icon: <BookOpen className="text-blue-600" size={24} />,
      categories: ['样品制备', '测试方法', '数据处理', '结果分析']
    },
    {
      id: 'solutions',
      title: '问题解决方案',
      description: '常见问题与解决方案',
      icon: <HelpCircle className="text-purple-600" size={24} />,
      categories: ['仪器故障', '实验异常', '数据问题', '结果偏差']
    },
    {
      id: 'experience',
      title: '经验总结',
      description: '实验经验与技巧分享',
      icon: <Lightbulb className="text-green-600" size={24} />,
      categories: ['操作技巧', '注意事项', '优化建议', '案例分析']
    },
    {
      id: 'literature',
      title: '文献资料',
      description: '相关研究文献与资料',
      icon: <FileText className="text-orange-600" size={24} />,
      categories: ['研究论文', '技术报告', '标准规范', '参考资料']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {knowledgeBase.map(item => (
        <KnowledgeCard key={item.id} knowledge={item} />
      ))}
    </div>
  );
}