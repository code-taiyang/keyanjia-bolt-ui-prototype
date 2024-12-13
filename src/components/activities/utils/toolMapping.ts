import { 
  Brain, 
  TestTubes, 
  BookOpen, 
  ScrollText,
  FileText,
  Award,
  Calculator,
  Database,
  LineChart,
  Microscope,
  Code2,
  ClipboardList
} from 'lucide-react';

export interface AITool {
  id: string;
  name: string;
  icon: typeof Brain;
  description: string;
  color: string;
}

export const aiTools: Record<string, AITool> = {
  'data-analysis': {
    id: 'data-analysis',
    name: '数据分析助手',
    icon: Brain,
    description: '智能数据分析与可视化',
    color: 'text-purple-600'
  },
  'experiment': {
    id: 'experiment',
    name: '实验助手',
    icon: TestTubes,
    description: '实验设计与记录',
    color: 'text-green-600'
  },
  'literature': {
    id: 'literature',
    name: '文献助手',
    icon: BookOpen,
    description: '文献阅读与管理',
    color: 'text-blue-600'
  },
  'writing': {
    id: 'writing',
    name: '写作助手',
    icon: ScrollText,
    description: '学术写作辅助',
    color: 'text-indigo-600'
  },
  'patent': {
    id: 'patent',
    name: '专利助手',
    icon: FileText,
    description: '专利撰写与检索',
    color: 'text-amber-600'
  },
  'grant': {
    id: 'grant',
    name: '基金助手',
    icon: Award,
    description: '基金申请辅助',
    color: 'text-emerald-600'
  },
  'algorithm': {
    id: 'algorithm',
    name: '算法助手',
    icon: Calculator,
    description: '算法设计与优化',
    color: 'text-cyan-600'
  },
  'dataset': {
    id: 'dataset',
    name: '数据集助手',
    icon: Database,
    description: '数据集管理与处理',
    color: 'text-orange-600'
  },
  'visualization': {
    id: 'visualization',
    name: '可视化助手',
    icon: LineChart,
    description: '数据可视化设计',
    color: 'text-rose-600'
  },
  'lab': {
    id: 'lab',
    name: '实验室助手',
    icon: Microscope,
    description: '实验室管理与记录',
    color: 'text-violet-600'
  },
  'coding': {
    id: 'coding',
    name: '编程助手',
    icon: Code2,
    description: '科研代码开发',
    color: 'text-blue-600'
  },
  'planning': {
    id: 'planning',
    name: '规划助手',
    icon: ClipboardList,
    description: '研究规划与管理',
    color: 'text-violet-600'
  }
};

export function getToolInfo(toolId: string): AITool | undefined {
  return aiTools[toolId];
}