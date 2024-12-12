import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  status: 'draft' | 'in_progress' | 'completed';
}

interface WritingCardProps {
  section: Section;
}

export function WritingCard({ section }: WritingCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50">
          {section.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{section.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{section.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant={
                section.status === 'completed' ? 'success' :
                section.status === 'in_progress' ? 'warning' : 'default'
              }>
                {section.status === 'completed' ? '已完成' :
                 section.status === 'in_progress' ? '撰写中' : '草稿'}
              </Badge>
              <span className="text-sm text-gray-500">{section.progress}%</span>
            </div>
            
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  section.status === 'completed' ? 'bg-green-500' :
                  section.progress > 60 ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`}
                style={{ width: `${section.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}