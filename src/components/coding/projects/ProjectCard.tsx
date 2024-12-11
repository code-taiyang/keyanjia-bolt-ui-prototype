import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  lastModified: string;
  status: 'active' | 'completed' | 'archived';
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-4 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{project.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
        </div>
        <ArrowRight size={16} className="text-gray-400" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant={
            project.status === 'active' ? 'success' :
            project.status === 'completed' ? 'default' : 'warning'
          }>
            {project.language}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>{project.lastModified}</span>
        </div>
      </div>
    </Card>
  );
}