import React from 'react';
import { EnvironmentCard } from './EnvironmentCard';
import { 
  Code2, 
  Binary, 
  Braces, 
  Coffee,
  Calculator,
  Variable,
  Terminal
} from 'lucide-react';

export function CodingEnvironments() {
  const environments = [
    {
      id: 'python',
      name: 'Python',
      description: '科学计算、数据分析和机器学习的首选语言',
      icon: <Code2 className="text-blue-600" size={24} />,
      packages: ['NumPy', 'SciPy', 'Pandas', 'Matplotlib'],
      category: 'language'
    },
    {
      id: 'r',
      name: 'R',
      description: '统计分析和数据可视化的专业工具',
      icon: <Calculator className="text-purple-600" size={24} />,
      packages: ['ggplot2', 'dplyr', 'tidyr', 'caret'],
      category: 'language'
    },
    {
      id: 'julia',
      name: 'Julia',
      description: '高性能科学计算和数值分析语言',
      icon: <Variable className="text-green-600" size={24} />,
      packages: ['DifferentialEquations', 'Flux', 'Plots'],
      category: 'language'
    },
    {
      id: 'gcc',
      name: 'GCC',
      description: 'GNU编译器套件，支持C/C++/Fortran',
      icon: <Binary className="text-orange-600" size={24} />,
      features: ['OpenMP支持', 'MPI集成', '自动向量化'],
      category: 'compiler'
    },
    {
      id: 'intel',
      name: 'Intel编译器',
      description: '优化的高性能计算编译器',
      icon: <Braces className="text-blue-600" size={24} />,
      features: ['MKL集成', 'AVX优化', 'OpenMP支持'],
      category: 'compiler'
    },
    {
      id: 'java',
      name: 'Java',
      description: '企业级应用开发和大数据处理',
      icon: <Coffee className="text-amber-600" size={24} />,
      packages: ['Spring Boot', 'Apache Hadoop', 'Apache Spark'],
      category: 'language'
    },
    {
      id: 'perl',
      name: 'Perl',
      description: '生物信息学和文本处理的实用工具',
      icon: <Terminal className="text-slate-600" size={24} />,
      packages: ['BioPerl', 'PDL', 'Statistics::R'],
      category: 'language'
    }
  ];

  return (
    <div className="space-y-6">
      {/* 编程语言环境 */}
      <section>
        <h2 className="text-lg font-medium mb-4">编程语言环境</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {environments
            .filter(env => env.category === 'language')
            .map(env => (
              <EnvironmentCard key={env.id} environment={env} />
            ))}
        </div>
      </section>

      {/* 编译器 */}
      <section>
        <h2 className="text-lg font-medium mb-4">编译器</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {environments
            .filter(env => env.category === 'compiler')
            .map(env => (
              <EnvironmentCard key={env.id} environment={env} />
            ))}
        </div>
      </section>
    </div>
  );
}