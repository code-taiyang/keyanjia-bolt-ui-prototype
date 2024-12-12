import React from 'react';
import { ArrowRight, Brain, Code2, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Algorithm {
  id: string;
  title: string;
  description: string;
  type: 'optimization' | 'ml' | 'dl';
  status: 'completed' | 'in_progress' | 'draft';
  lastModified: string;
  progress: number;
  complexity: string;
}

export function RecentAlgorithms() {
  const algorithms: Algorithm[] = [
    {
      id: '1',
      title: '深度神经网络优化',
      description: '基于梯度下降的神经网络优化算法实现',
      type: 'dl',
      status: 'in_progress',
      lastModified: '10分钟前',
      progress: 65,
      complexity: 'O(n log n)'
    },
    {
      id: '2',
      title: '图像分割算法',
      description: '基于卷积神经网络的图像分割算法',
      type: 'ml',
      status: 'completed',
      lastModified: '2小时前',
      progress: 100,
      complexity: 'O(n²)'
    },
    {
      id: '3',
      title: '粒子群优化算法',
      description: '用于多目标优化问题的PSO算法实现',
      type: 'optimization',
      status: 'draft',
      lastModified: '1天前',
      progress: 30,
      complexity: 'O(n)'
    }
  ];

  const getTypeIcon = (type: Algorithm['type']) => {
    switch (type) {
      case 'ml':
        return <Brain className="text-blue-600" size={20} />;
      case 'dl':
        return <Code2 className="text-purple-600" size={20} />;
      case 'optimization':
        return <Calculator className="text-green-600" size={20} />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近算法</h2>
        <Link 
          to="/activities"
          state={{ defaultTab: 'algorithm' }}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {algorithms.map((algorithm) => (
          <Link 
            key={algorithm.id} 
            to="/tools/algorithm/editor"
            state={{
              algorithmId: algorithm.id,
              title: algorithm.title,
              description: algorithm.description,
              type: algorithm.type,
              isNew: false
            }}
          >
            <Card className="p-4 hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  {getTypeIcon(algorithm.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-900 truncate">
                      {algorithm.title}
                    </h3>
                    <Badge variant={
                      algorithm.status === 'completed' ? 'success' :
                      algorithm.status === 'in_progress' ? 'warning' : 'default'
                    }>
                      {algorithm.status === 'completed' ? '已完成' :
                       algorithm.status === 'in_progress' ? '实现中' : '草稿'}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {algorithm.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">复杂度: {algorithm.complexity}</span>
                      <span className="text-sm text-gray-500">{algorithm.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          algorithm.status === 'completed' ? 'bg-green-500' :
                          algorithm.progress > 60 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${algorithm.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-500">
                    {algorithm.lastModified}
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