import React from 'react';
import { 
  Filter, 
  SortAsc, 
  MessageSquare, 
  Code2, 
  BookOpen, 
  ScrollText, 
  Brain,
  Calculator,
  TestTubes,
  FileText,
  Award,
  Database,
  LineChart,
  Search,
  Microscope
} from 'lucide-react';
import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';

interface Activity {
  id: string;
  type: 'chat' | 'coding' | 'writing' | 'reading' | 'analysis' | 'algorithm' | 
        'experiment' | 'patent' | 'grant' | 'dataset' | 'visualization' | 
        'literature_review' | 'lab_record';
  title: string;
  description: string;
  project?: {
    name: string;
    icon: React.ReactNode;
  };
  tool: string;
  status: 'active' | 'completed' | 'archived';
  timestamp: string;
  lastUpdated: string;
}

function getActivityIcon(type: Activity['type']) {
  switch (type) {
    case 'chat':
      return <MessageSquare className="text-blue-600" size={20} />;
    case 'coding':
      return <Code2 className="text-purple-600" size={20} />;
    case 'writing':
      return <ScrollText className="text-green-600" size={20} />;
    case 'reading':
      return <BookOpen className="text-orange-600" size={20} />;
    case 'analysis':
      return <Brain className="text-indigo-600" size={20} />;
    case 'algorithm':
      return <Calculator className="text-cyan-600" size={20} />;
    case 'experiment':
      return <TestTubes className="text-pink-600" size={20} />;
    case 'patent':
      return <FileText className="text-amber-600" size={20} />;
    case 'grant':
      return <Award className="text-emerald-600" size={20} />;
    case 'dataset':
      return <Database className="text-blue-600" size={20} />;
    case 'visualization':
      return <LineChart className="text-violet-600" size={20} />;
    case 'literature_review':
      return <Search className="text-slate-600" size={20} />;
    case 'lab_record':
      return <Microscope className="text-rose-600" size={20} />;
  }
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card className="p-4 hover:border-gray-300 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {getActivityIcon(activity.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
            </div>
            {activity.project && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {activity.project.icon}
                <span>{activity.project.name}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>工具: {activity.tool}</span>
            <span>最后更新: {activity.lastUpdated}</span>
            <span>创建时间: {activity.timestamp}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function TaskList() {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'chat',
      title: '气候数据分析对话',
      description: '与AI助手讨论全球温度模式分析方法和数据预处理策略',
      project: {
        name: 'Climate Data Analysis',
        icon: <Brain size={16} className="text-blue-600" />
      },
      tool: '智能分析助手',
      status: 'active',
      timestamp: '2024/3/15 14:30',
      lastUpdated: '2024/3/15 15:45'
    },
    {
      id: '2',
      type: 'coding',
      title: 'R语言数据处理脚本',
      description: '使用R语言编写数据清洗和预处理脚本，包含异常值处理和数据标准化',
      project: {
        name: 'Climate Data Analysis',
        icon: <Brain size={16} className="text-blue-600" />
      },
      tool: '科研编程助手',
      status: 'completed',
      timestamp: '2024/3/15 10:20',
      lastUpdated: '2024/3/15 11:30'
    },
    {
      id: '3',
      type: 'experiment',
      title: '温度传感器校准实验',
      description: '进行温度传感器的精确度校准和数据采集实验',
      tool: '实验助手',
      status: 'active',
      timestamp: '2024/3/14 16:00',
      lastUpdated: '2024/3/15 09:15'
    },
    {
      id: '4',
      type: 'literature_review',
      title: '气候变化文献综述',
      description: '系统性回顾近5年气候变化研究的关键进展',
      tool: '文献助手',
      status: 'completed',
      timestamp: '2024/3/14 13:20',
      lastUpdated: '2024/3/14 15:40'
    },
    {
      id: '5',
      type: 'visualization',
      title: '温度变化趋势可视化',
      description: '创建交互式数据可视化展示温度变化趋势',
      project: {
        name: 'Climate Data Analysis',
        icon: <Brain size={16} className="text-blue-600" />
      },
      tool: '可视化助手',
      status: 'active',
      timestamp: '2024/3/14 11:00',
      lastUpdated: '2024/3/14 12:30'
    },
    {
      id: '6',
      type: 'algorithm',
      title: '温度预测算法优化',
      description: '优化现有的温度预测算法，提高预测准确度',
      tool: '算法助手',
      status: 'active',
      timestamp: '2024/3/14 10:00',
      lastUpdated: '2024/3/14 11:30'
    },
    {
      id: '7',
      type: 'grant',
      title: '气候研究基金申请',
      description: '准备国家自然科学基金申请材料',
      tool: '基金助手',
      status: 'active',
      timestamp: '2024/3/13 15:00',
      lastUpdated: '2024/3/14 09:30'
    },
    {
      id: '8',
      type: 'patent',
      title: '温度预测方法专利',
      description: '撰写基于深度学习的温度预测方法专利申请书',
      tool: '专利助手',
      status: 'active',
      timestamp: '2024/3/13 14:00',
      lastUpdated: '2024/3/13 16:30'
    },
    {
      id: '9',
      type: 'lab_record',
      title: '实验室记录',
      description: '记录温度传感器校准实验的详细过程和数据',
      tool: '实验记录助手',
      status: 'completed',
      timestamp: '2024/3/13 09:00',
      lastUpdated: '2024/3/13 11:30'
    }
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">研究活动</h1>
            <p className="text-gray-500 mt-1">查看您的所有研究活动记录</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Filter size={18} />
              <span>筛选</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <SortAsc size={18} />
              <span>排序</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}