import React from 'react';
import { ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card } from '../../common/Card';

interface Task {
  name: string;
  status: 'completed' | 'in_progress' | 'pending';
}

interface ProgressItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tasks?: Task[];
  alerts?: string[];
}

interface ProgressCardProps {
  item: ProgressItem;
}

export function ProgressCard({ item }: ProgressCardProps) {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'in_progress':
        return <Clock size={16} className="text-blue-500" />;
      case 'pending':
        return <Clock size={16} className="text-gray-400" />;
    }
  };

  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {item.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-4">
            {item.tasks && (
              <div className="space-y-2">
                {item.tasks.map((task, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className={
                      task.status === 'completed' ? 'text-green-600' :
                      task.status === 'in_progress' ? 'text-blue-600' :
                      'text-gray-500'
                    }>
                      {task.name}
                    </span>
                    {getStatusIcon(task.status)}
                  </div>
                ))}
              </div>
            )}

            {item.alerts && (
              <div className="space-y-2">
                {item.alerts.map((alert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <AlertCircle size={16} className="text-orange-500" />
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}