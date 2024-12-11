import React from 'react';
import { ProjectCard } from './ProjectCard';
import { ArrowRight } from 'lucide-react';

export function RecentProjects() {
  const projects = [
    {
      id: '1',
      name: '分子动力学模拟',
      description: '使用LAMMPS进行纳米材料的分子动力学模拟',
      language: 'Python',
      lastModified: '10分钟前',
      status: 'active'
    },
    {
      id: '2',
      name: '并行计算优化',
      description: '使用OpenMP和MPI优化数值计算程序',
      language: 'C++',
      lastModified: '2小时前',
      status: 'completed'
    },
    {
      id: '3',
      name: 'GPU加速计算',
      description: '使用CUDA加速深度学习模型训练',
      language: 'CUDA',
      lastModified: '1天前',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近项目</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}