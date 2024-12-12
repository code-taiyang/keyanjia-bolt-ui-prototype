import React from 'react';
import { Card } from '../common/Card';
import { Database, HardDrive, Activity } from 'lucide-react';

export function ResourceStatus() {
  const resources = [
    {
      icon: <Database className="text-blue-600" size={20} />,
      label: '数据存储',
      used: '156',
      total: '512',
      unit: 'GB',
      percentage: 30
    },
    {
      icon: <HardDrive className="text-green-600" size={20} />,
      label: '计算资源',
      used: '4',
      total: '8',
      unit: '核心',
      percentage: 50
    },
    {
      icon: <Activity className="text-purple-600" size={20} />,
      label: 'API配额',
      used: '8000',
      total: '10000',
      unit: '次',
      percentage: 80
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">资源状态</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-gray-50">
                {resource.icon}
              </div>
              <span className="font-medium">{resource.label}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {resource.used} / {resource.total} {resource.unit}
                </span>
                <span className="font-medium">
                  {resource.percentage}%
                </span>
              </div>
              
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    resource.percentage > 80 ? 'bg-red-500' :
                    resource.percentage > 60 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${resource.percentage}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}