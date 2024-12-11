import React from 'react';
import { ArrowRight, Code2, Brain, Calculator } from 'lucide-react';
import { Card } from '../../common/Card';

export function RecentAlgorithms() {
  const algorithms = [
    {
      id: '1',
      title: '深度学习优化算法',
      description: '基于梯度下降的神经网络优化算法实现',
      type: 'optimization',
      lastModified: '10分钟前',
      status: 'completed'
    },
    {
      id: '2',
      title: '图像处理算法',
      description: '基于卷积神经网络的图像分割算法',
      type: 'vision',
      lastModified: '2小时前',
      status: 'in_progress'
    },
    {
      id: '3',
      title: '自然语言处理算法',
      description: 'Transformer模型的实现与优化',
      type: 'nlp',
      lastModified: '1天前',
      status: 'draft'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'optimization':
        return <Calculator className="text-blue-600" size={20} />;
      case 'vision':
        return <Brain className="text-purple-600" size={20} />;
      case 'nlp':
        return <Code2 className="text-green-600" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近分析</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {algorithms.map(algorithm => (
          <Card key={algorithm.id} className="p-4 hover:border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                {getIcon(algorithm.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900">{algorithm.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{algorithm.description}</p>
                
                <div className="flex items-center justify-between mt-4 text-sm">
                  <span className={`
                    px-2 py-1 rounded-full text-xs
                    ${algorithm.status === 'completed' ? 'bg-green-100 text-green-800' :
                      algorithm.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'}
                  `}>
                    {algorithm.status === 'completed' ? '已完成' :
                     algorithm.status === 'in_progress' ? '分析中' : '草稿'}
                  </span>
                  <span className="text-gray-500">{algorithm.lastModified}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}