import { AIFeature } from '../types/writing';

export const aiFeatures: AIFeature[] = [
  {
    id: 'polish',
    name: '智能润色',
    description: '优化语言表达，提升学术写作水平',
    icon: 'wand'
  },
  {
    id: 'structure',
    name: '结构优化',
    description: '分析并优化文章结构和逻辑',
    icon: 'layout'
  },
  {
    id: 'citation',
    name: '引用建议',
    description: '智能推荐相关文献并规范引用格式',
    icon: 'quote'
  },
  {
    id: 'grammar',
    name: '语法检查',
    description: '检查并修正语法错误和用词不当',
    icon: 'check'
  },
  {
    id: 'format',
    name: '格式规范',
    description: '自动调整格式以符合目标期刊要求',
    icon: 'layout'
  },
  {
    id: 'translate',
    name: '翻译助手',
    description: '提供专业的学术翻译建议',
    icon: 'languages'
  }
];