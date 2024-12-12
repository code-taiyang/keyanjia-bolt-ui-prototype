import { Activity } from '../components/activities/types';

export const sampleActivities: Activity[] = [
  // Writing Activities
  {
    id: '1',
    type: 'writing',
    title: 'SCI论文撰写',
    description: '深度学习在气候预测中的应用研究论文',
    status: 'in_progress',
    tool: 'writing',
    scope: 'personal',
    project: {
      id: 'proj1',
      name: '气候预测研究'
    },
    tags: ['深度学习', '气候预测', 'SCI'],
    collaborators: [
      {
        id: 'user1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      }
    ],
    createdAt: '2024-03-15T10:00:00Z',
    lastUpdated: '10分钟前'
  },

  // Analysis Activities
  {
    id: '2',
    type: 'analysis',
    title: '气候数据分析',
    description: '全球温度变化趋势分析与可视化',
    status: 'completed',
    tool: 'data-analysis',
    scope: 'team',
    project: {
      id: 'proj1',
      name: '气候预测研究'
    },
    tags: ['数据分析', '可视化'],
    collaborators: [
      {
        id: 'user2',
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      }
    ],
    createdAt: '2024-03-14T15:00:00Z',
    lastUpdated: '2小时前'
  },

  // Experiment Activities
  {
    id: '3',
    type: 'experiment',
    title: '材料性能测试',
    description: '新型纳米材料的力学性能实验研究',
    status: 'in_progress',
    tool: 'experiment',
    scope: 'team',
    project: {
      id: 'proj2',
      name: '纳米材料研究'
    },
    tags: ['材料科学', '实验研究'],
    collaborators: [
      {
        id: 'user3',
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
      }
    ],
    createdAt: '2024-03-13T09:00:00Z',
    lastUpdated: '1天前'
  },

  // Grant Activities
  {
    id: '4',
    type: 'grant',
    title: '国自然基金申请',
    description: '面上项目申请书撰写与材料准备',
    status: 'in_progress',
    tool: 'grant',
    scope: 'personal',
    tags: ['基金申请', '面上项目'],
    createdAt: '2024-03-12T14:00:00Z',
    lastUpdated: '2天前'
  },

  // Planning Activities
  {
    id: '5',
    type: 'planning',
    title: '研究方向规划',
    description: '未来一年的研究方向和目标规划',
    status: 'in_progress',
    tool: 'planning',
    scope: 'personal',
    tags: ['研究规划', '目标制定'],
    createdAt: '2024-03-11T11:00:00Z',
    lastUpdated: '3天前'
  },

  // Algorithm Activities
  {
    id: '6',
    type: 'algorithm',
    title: '深度学习模型优化',
    description: '气候预测模型的性能优化研究',
    status: 'in_progress',
    tool: 'algorithm',
    scope: 'team',
    project: {
      id: 'proj1',
      name: '气候预测研究'
    },
    tags: ['深度学习', '模型优化'],
    collaborators: [
      {
        id: 'user1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      }
    ],
    createdAt: '2024-03-10T16:00:00Z',
    lastUpdated: '4天前'
  }
];