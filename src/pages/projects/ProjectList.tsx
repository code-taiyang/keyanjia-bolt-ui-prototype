import React, { useState } from 'react';
import { useProjectStore } from '../../stores/projectStore';
import { ProjectCard } from './components/ProjectCard';
import { ProjectListHeader } from './components/ProjectListHeader';
import { ProjectListTabs } from './components/ProjectListTabs';

export function ProjectList() {
  const [activeTab, setActiveTab] = useState<'all' | 'starred' | 'recent' | 'archived'>('all');
  const { projects, getStarredProjects, getRecentProjects, getArchivedProjects } = useProjectStore();

  const displayedProjects = React.useMemo(() => {
    switch (activeTab) {
      case 'starred':
        return getStarredProjects();
      case 'recent':
        return getRecentProjects();
      case 'archived':
        return getArchivedProjects();
      default:
        return projects.filter(p => !p.isArchived);
    }
  }, [activeTab, projects, getStarredProjects, getRecentProjects, getArchivedProjects]);

  return (
    <div className="flex-1 overflow-auto">
      <ProjectListHeader />
      <ProjectListTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}