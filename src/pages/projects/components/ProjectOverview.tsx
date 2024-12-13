import React from 'react';
import { Card } from '../../../components/common/Card';
import { Clock, GitBranch, GitCommit, Users, Brain, FileText, Database } from 'lucide-react';
import { RecentActivities } from './overview/RecentActivities';
import { ResourceStats } from './overview/ResourceStats';
import { TeamMembers } from './overview/TeamMembers';

interface ProjectOverviewProps {
  project: {
    id: string;
    title: string;
    status: string;
    progress: number;
  };
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const stats = [
    {
      icon: <Clock size={20} className="text-blue-600" />,
      label: "运行时间",
      value: "124h",
      change: "+12h"
    },
    {
      icon: <Brain size={20} className="text-purple-600" />,
      label: "研究活动",
      value: "28",
      change: "+3"
    },
    {
      icon: <FileText size={20} className="text-green-600" />,
      label: "文档数量",
      value: "156",
      change: "+24"
    },
    {
      icon: <Database size={20} className="text-orange-600" />,
      label: "数据集",
      value: "8",
      change: "+2"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              {stat.icon}
              <span className="text-xs font-medium text-green-600">
                {stat.change}
              </span>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">最近活动</h3>
            <RecentActivities projectId={project.id} />
          </Card>
        </div>

        {/* Team Members */}
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">团队成员</h3>
            <TeamMembers projectId={project.id} />
          </Card>
        </div>

        {/* Resource Stats */}
        <div className="col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">资源统计</h3>
            <ResourceStats projectId={project.id} />
          </Card>
        </div>

        {/* Progress Timeline */}
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">进度时间线</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">总体进度</span>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}