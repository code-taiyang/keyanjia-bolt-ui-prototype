import React from 'react';

interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex gap-2">
        <button className="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md text-sm">
          所有项目
        </button>
        <button className="text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-md text-sm">
          收藏
        </button>
        <button className="text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-md text-sm">
          最近
        </button>
      </div>
    </div>
  );
}