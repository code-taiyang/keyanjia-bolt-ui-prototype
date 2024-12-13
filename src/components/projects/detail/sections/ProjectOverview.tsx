import React from 'react';
import { Clock, GitBranch, GitCommit, Users } from 'lucide-react';
import { Card } from '../../../common/Card';

export function ProjectOverview() {
  const stats = [
    { 
      icon: <Clock size={20} className="text-blue-600" />,
      label: "运行时间",
      value: "124h",
      change: "+12h"
    },
    {
      icon: <GitBranch size={20} className="text-green-600" />,
      label: "代码版本",
      value: "28",
      change: "+3"
    },
    {
      icon: <GitCommit size={20} className="text-purple-600" />,
      label: "提交次数",
      value: "156",
      change: "+24"
    },
    {
      icon: <Users size={20} className="text-orange-600" />,
      label: "活跃成员",
      value: "8",
      change: "+2"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              {stat.icon}
              <span className={`text-xs font-medium text-green-600`}>
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
        <Card className="col-span-2 p-6">
          <h3 className="text-lg font-medium mb-4">项目进度</h3>
          {/* Add project timeline/progress component here */}
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">团队活动</h3>
          {/* Add team activity feed component here */}
        </Card>
      </div>
    </div>
  );
}