import React from 'react';
import { Brain, FileText, TestTubes, Users, Clock } from 'lucide-react';
import { Card } from '../../common/Card';

interface ActivityCardProps {
  type: 'analysis' | 'document' | 'experiment';
  title: string;
  description: string;
  project?: {
    name: string;
    team: string;
  };
  tool: string;
  updatedAt: string;
}

export function ActivityCard({
  type,
  title,
  description,
  project,
  tool,
  updatedAt
}: ActivityCardProps) {
  const getActivityIcon = () => {
    switch (type) {
      case 'analysis':
        return <Brain className="text-purple-600" size={20} />;
      case 'document':
        return <FileText className="text-blue-600" size={20} />;
      case 'experiment':
        return <TestTubes className="text-green-600" size={20} />;
    }
  };

  return (
    <Card className="p-4 hover:border-blue-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {getActivityIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              {project && (
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{project.team}</span>
                  <span>·</span>
                  <span>{project.name}</span>
                </div>
              )}
              <span>工具: {tool}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}