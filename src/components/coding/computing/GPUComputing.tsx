import React from 'react';
import { ComputingCard } from './ComputingCard';
import { Cpu, CircuitBoard, Zap, Workflow } from 'lucide-react';

export function GPUComputing() {
  const libraries = [
    {
      id: 'cuda',
      name: 'CUDA SDK',
      description: 'NVIDIA GPU编程工具包',
      icon: <CircuitBoard className="text-green-600" size={24} />,
      features: ['GPU加速', '内存管理', '并行原语'],
      category: 'sdk'
    },
    {
      id: 'cusolver',
      name: 'cuSOLVER',
      description: 'GPU加速的求解器库',
      icon: <Cpu className="text-blue-600" size={24} />,
      features: ['稀疏矩阵', '密集矩阵', '特征值'],
      category: 'solver'
    },
    {
      id: 'pycuda',
      name: 'PyCUDA',
      description: 'Python CUDA编程接口',
      icon: <Zap className="text-purple-600" size={24} />,
      features: ['Python集成', '自动内存管理', '代码生成'],
      category: 'python'
    },
    {
      id: 'cupy',
      name: 'CuPy',
      description: 'NumPy兼容的GPU数组库',
      icon: <Workflow className="text-orange-600" size={24} />,
      features: ['NumPy API', '自动微分', '深度学习'],
      category: 'python'
    }
  ];

  return (
    <div className="space-y-6">
      {/* GPU开发工具 */}
      <section>
        <h2 className="text-lg font-medium mb-4">GPU开发工具</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraries
            .filter(lib => lib.category === 'sdk')
            .map(lib => (
              <ComputingCard key={lib.id} library={lib} />
            ))}
        </div>
      </section>

      {/* GPU计算库 */}
      <section>
        <h2 className="text-lg font-medium mb-4">GPU计算库</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraries
            .filter(lib => lib.category === 'solver' || lib.category === 'python')
            .map(lib => (
              <ComputingCard key={lib.id} library={lib} />
            ))}
        </div>
      </section>
    </div>
  );
}