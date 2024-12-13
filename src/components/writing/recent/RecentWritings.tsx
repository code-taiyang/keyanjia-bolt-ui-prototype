import React from 'react';
import { ScrollText, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Link } from 'react-router-dom';

interface Writing {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: 'draft' | 'in_progress' | 'completed';
  wordCount: number;
  description?: string;
  type?: 'thesis' | 'journal' | 'report';
}

export function RecentWritings() {
  const writings: Writing[] = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用研究',
      description: '探讨深度学习模型在气候变化预测中的应用前景和关键技术',
      template: 'SCI论文',
      type: 'journal',
      lastModified: '10分钟前',
      status: 'in_progress',
      wordCount: 3500
    },
    {
      id: '2',
      title: '基于神经网络的温度预测方法',
      description: '研究基于深度神经网络的温度预测方法及其实现',
      template: '专利申请',
      type: 'report',
      lastModified: '2小时前',
      status: 'draft',
      wordCount: 1200
    },
    {
      id: '3',
      title: '气候变化预测模型的研究与应用',
      description: '系统研究气候变化预测模型的理论基础和实践应用',
      template: '基金申请',
      type: 'thesis',
      lastModified: '1天前',
      status: 'completed',
      wordCount: 5000
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近写作</h2>
        <Link 
          to="/activities?type=writing" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {writings.map((writing) => (
          <Link 
            key={writing.id} 
            to={`/writing/${writing.id}`}
            state={{
              title: writing.title,
              description: writing.description,
              type: writing.type,
              isNew: false
            }}
          >
            <Card className="p-4 hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  <ScrollText className="text-blue-600" size={20} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-900 truncate">
                      {writing.title}
                    </h3>
                    <Badge variant={
                      writing.status === 'completed' ? 'success' :
                      writing.status === 'in_progress' ? 'warning' : 'default'
                    }>
                      {writing.status === 'completed' ? '已完成' :
                       writing.status === 'in_progress' ? '写作中' : '草稿'}
                    </Badge>
                  </div>

                  {writing.description && (
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {writing.description}
                    </p>
                  )}

                  <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                    <span>{writing.template}</span>
                    <span>{writing.wordCount} 字</span>
                  </div>

                  <div className="mt-3 flex items-center justify-end text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{writing.lastModified}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}