import React, { useState } from 'react';
import { 
  Brain, FileText, TestTubes, Database, Clock, 
  BookOpen, ScrollText, Award, Calculator, Search,
  Filter, LayoutGrid, LayoutList
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface ResearchActivity {
  id: string;
  type: 'literature' | 'writing' | 'analysis' | 'experiment' | 
        'patent' | 'grant' | 'algorithm' | 'dataset';
  title: string;
  description: string;
  tool: string;
  project?: {
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'in_progress' | 'completed' | 'archived';
}

export function ResearchActivitiesList() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [filter, setFilter] = useState<'all' | 'recent' | 'unfinished'>('all');

  const activities: ResearchActivity[] = [
    {
      id: '1',
      type: 'literature',
      title: '深度学习综述文献阅读',
      description: '使用文献助手阅读《Deep Learning in Climate Science》并生成阅读笔记',
      tool: '文献助手',
      project: {
        name: '气候预测模型研究'
      },
      createdAt: '2024/3/15 14:30',
      updatedAt: '2024/3/15 15:45',
      status: 'completed'
    },
    {
      id: '2',
      type: 'analysis',
      title: '气温数据预处理',
      description: '使用数据分析助手清洗和预处理全球气温数据集',
      tool: '数据分析助手',
      project: {
        name: '气候预测模型研究'
      },
      createdAt: '2024/3/15 10:20',
      updatedAt: '2024/3/15 11:30',
      status: 'in_progress'
    },
    {
      id: '3',
      type: 'writing',
      title: '实验方法章节撰写',
      description: '使用写作助手撰写论文实验方法章节',
      tool: '写作助手',
      project: {
        name: '气候预测模型研究'
      },
      createdAt: '2024/3/14 16:00',
      updatedAt: '2024/3/15 09:15',
      status: 'draft'
    }
  ];

  const getActivityIcon = (type: ResearchActivity['type']) => {
    switch (type) {
      case 'literature':
        return <BookOpen className="text-blue-600" size={20} />;
      case 'writing':
        return <ScrollText className="text-green-600" size={20} />;
      case 'analysis':
        return <Brain className="text-purple-600" size={20} />;
      case 'experiment':
        return <TestTubes className="text-pink-600" size={20} />;
      case 'patent':
        return <FileText className="text-amber-600" size={20} />;
      case 'grant':
        return <Award className="text-emerald-600" size={20} />;
      case 'algorithm':
        return <Calculator className="text-cyan-600" size={20} />;
      case 'dataset':
        return <Database className="text-orange-600" size={20} />;
    }
  };

  const getStatusBadge = (status: ResearchActivity['status']) => {
    switch (status) {
      case 'draft':
        return <Badge variant="warning">草稿</Badge>;
      case 'in_progress':
        return <Badge variant="success">进行中</Badge>;
      case 'completed':
        return <Badge variant="default">已完成</Badge>;
      case 'archived':
        return <Badge variant="default">已归档</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">研究活动记录</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              className={`p-1.5 rounded ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              className={`p-1.5 rounded ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
              }`}
              onClick={() => setViewMode('list')}
            >
              <LayoutList size={16} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className={`text-sm px-3 py-1.5 rounded-md ${
                filter === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('all')}
            >
              全部
            </button>
            <button 
              className={`text-sm px-3 py-1.5 rounded-md ${
                filter === 'recent' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('recent')}
            >
              最近
            </button>
            <button 
              className={`text-sm px-3 py-1.5 rounded-md ${
                filter === 'unfinished' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setFilter('unfinished')}
            >
              未完成
            </button>
          </div>

          <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
            <Filter size={16} />
            <span className="text-sm">筛选</span>
          </button>
        </div>
      </div>

      <div className={`grid gap-4 ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}>
        {activities.map(activity => (
          <Card key={activity.id} className="p-4 hover:border-blue-200">
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
                  {getStatusBadge(activity.status)}
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>工具: {activity.tool}</span>
                    {activity.project && (
                      <>
                        <span>·</span>
                        <span>项目: {activity.project.name}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{activity.updatedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}