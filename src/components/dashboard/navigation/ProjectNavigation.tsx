import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Brain, FileText, Star } from 'lucide-react';
import { Card } from '../../common/Card';

export function ProjectNavigation() {
  const projects = [
    {
      title: "Climate Data Analysis",
      description: "Analysis of global temperature patterns",
      icon: <BarChart2 className="text-blue-600" size={20} />,
      to: "/projects/climate-analysis"
    },
    {
      title: "Neural Network Research",
      description: "Deep learning model development",
      icon: <Brain className="text-purple-600" size={20} />,
      to: "/projects/neural-network"
    },
    {
      title: "Research Paper",
      description: "Scientific paper writing",
      icon: <FileText className="text-green-600" size={20} />,
      to: "/projects/research-paper"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Link key={index} to={project.to}>
          <Card className="p-4 hover:border-blue-200 transition-all duration-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                {project.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}