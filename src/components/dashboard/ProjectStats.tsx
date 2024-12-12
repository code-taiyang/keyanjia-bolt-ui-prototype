import React from 'react';
import { StatCard } from './stats/StatCard';

export function ProjectStats() {
  const stats = [
    {
      label: "活跃项目",
      value: 12,
      change: { value: 8, trend: 'up' as const }
    },
    {
      label: "计算时长",
      value: "324h",
      change: { value: 12, trend: 'up' as const }
    },
    {
      label: "数据集大小",
      value: "1.2 TB",
      change: { value: 5, trend: 'up' as const }
    },
    {
      label: "团队成员",
      value: 24,
      change: { value: 3, trend: 'down' as const }
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}