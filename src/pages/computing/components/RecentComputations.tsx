import React from 'react';
import { ArrowRight, Calculator, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

interface Computation {
  id: string;
  title: string;
  description: string;
  type: 'numerical' | 'simulation' | 'optimization';
  status: 'completed' | 'in_progress' | 'draft';
  lastModified: string;
  progress: number;
  resources: {
    cpu: string;
    memory: string;
    time: string;
  };
}

export function RecentComputations() {
  const computations: Computation[] = [
    {
      id: '1',
      title: '分子动力学模拟',
      description: '使用LAMMPS进行纳米材料的分子动力学模拟',
      type: 'simulation',
      status: 'in_progress',
      lastModified: '10分钟前',
      progress: 65,
      resources: {
        cpu: '8核',
        memory: '16GB',
        time: '2.3h'
      }
    },
    {
      id: '2',
      title: '并行计算优化',
      description: '使用OpenMP和MPI优化数值计算程序',
      type: 'optimization',
      status: 'completed',
      lastModified: '2小时前',
      progress: 100,
      resources: {
        cpu: '16核',
        memory: '32GB',
        time: '4.5h'
      }
    },
    {
      id: '3',
      title: 'GPU加速计算',
      description: '使用CUDA加速深度学习模型训练',
      type: 'numerical',
      status: 'draft',
      lastModified: '1天前',
      progress: 30,
      resources: {
        cpu: '4核',
        memory: '8GB',
        time: '1.2h'
      }
    }
  ];

  const getTypeIcon = (type: Computation['type']) => {
    switch (type) {
      case 'numerical':
        return <Calculator className="text-blue-600" size={20} />;
      case 'simulation':
        return <Code2 className="text-purple-600" size={20} />;
      case 'optimization':
        return <Database className="text-green-600" size={20} />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近计算</h2>
        <Link 
          to="/activities"
          state={{ defaultTab: 'computing' }}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {computations.map((computation) => (
          <Link 
            key={computation.id} 
            to="/tools/algorithm/editor"
            state={{ 
              algorithmId: `algo-${computation.id}`,
              title: computation.title,
              description: computation.description,
              type: computation.type,
              isNew: false
            }}
          >
            <Card className="p-4 hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  {getTypeIcon(computation.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-900 truncate">
                      {computation.title}
                    </h3>
                    <Badge variant={
                      computation.status === 'completed' ? 'success' :
                      computation.status === 'in_progress' ? 'warning' : 'default'
                    }>
                      {computation.status === 'completed' ? '已完成' :
                       computation.status === 'in_progress' ? '计算中' : '草稿'}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {computation.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>CPU: {computation.resources.cpu}</span>
                        <span>内存: {computation.resources.memory}</span>
                        <span>耗时: {computation.resources.time}</span>
                      </div>
                      <span className="text-sm text-gray-500">{computation.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          computation.status === 'completed' ? 'bg-green-500' :
                          computation.progress > 60 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${computation.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-500">
                    {computation.lastModified}
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