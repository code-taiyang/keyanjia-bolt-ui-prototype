import { WritingType } from '../types/writing';

export const writingTypes: WritingType[] = [
  {
    id: 'thesis',
    name: '学位论文',
    description: '系统性的学术研究成果展示，包含完整的研究过程和成果',
    icon: 'graduation-cap',
    category: 'academic',
    features: ['格式规范', '章节完整', '引用规范']
  },
  {
    id: 'journal',
    name: '期刊论文',
    description: '面向学术期刊的研究论文，突出研究创新点和贡献',
    icon: 'book-open',
    category: 'academic',
    features: ['格式转换', '期刊投稿', '同行评议']
  },
  {
    id: 'patent',
    name: '专利申请',
    description: '技术发明专利申请文件，包含技术方案和保护范围',
    icon: 'shield',
    category: 'application',
    features: ['权利要求', '技术方案', '对比文献']
  },
  {
    id: 'report',
    name: '研究报告',
    description: '项目或课题研究总结报告，展示研究过程和结果',
    icon: 'file-text',
    category: 'research',
    features: ['数据分析', '结果展示', '建议总结']
  },
  {
    id: 'review',
    name: '文献综述',
    description: '特定研究领域的文献回顾与分析',
    icon: 'book',
    category: 'research',
    features: ['文献分析', '趋势总结', '研究展望']
  },
  {
    id: 'experiment',
    name: '实验报告',
    description: '实验设计、过程和结果的详细记录与分析',
    icon: 'test-tube',
    category: 'research',
    features: ['实验设计', '数据记录', '结果分析']
  }
];