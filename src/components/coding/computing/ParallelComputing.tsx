import React from 'react';
import { ComputingCard } from './ComputingCard';
import { Network, Cpu, Library, Box } from 'lucide-react';

export function ParallelComputing() {
  const libraries = [
    {
      id: 'openmpi',
      name: 'OpenMPI',
      description: '开源消息传递接口实现',
      icon: <Network className="text-blue-600" size={24} />,
      features: ['高性能通信', '容错机制', '动态进程管理'],
      category: 'mpi'
    },
    {
      id: 'intel-mpi',
      name: 'Intel MPI',
      description: 'Intel优化的MPI实现',
      icon: <Cpu className="text-purple-600" size={24} />,
      features: ['硬件优化', '自动调优', 'Fabric支持'],
      category: 'mpi'
    },
    {
      id: 'mkl',
      name: 'Intel MKL',
      description: '数学核心函数库',
      icon: <Library className="text-green-600" size={24} />,
      features: ['BLAS', 'LAPACK', 'FFT', 'PARDISO'],
      category: 'math'
    },
    {
      id: 'openblas',
      name: 'OpenBLAS',
      description: '开源基础线性代数库',
      icon: <Box className="text-orange-600" size={24} />,
      features: ['多核优化', '自动选择', 'SIMD支持'],
      category: 'math'
    }
  ];

  return (
    <div className="space-y-6">
      {/* MPI实现 */}
      <section>
        <h2 className="text-lg font-medium mb-4">MPI实现</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraries
            .filter(lib => lib.category === 'mpi')
            .map(lib => (
              <ComputingCard key={lib.id} library={lib} />
            ))}
        </div>
      </section>

      {/* 数学计算库 */}
      <section>
        <h2 className="text-lg font-medium mb-4">数学计算库</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraries
            .filter(lib => lib.category === 'math')
            .map(lib => (
              <ComputingCard key={lib.id} library={lib} />
            ))}
        </div>
      </section>
    </div>
  );
}