import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  status: 'active' | 'completed' | 'pending';
  progress: number;
  startDate: string;
  endDate: string;
  members: {
    count: number;
    list: Array<{
      id: string;
      name: string;
      role: string;
      avatar: string;
    }>;
  };
  tags: string[];
  isStarred?: boolean;
  isArchived?: boolean;
  lastViewed?: string;
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  toggleStar: (id: string) => void;
  toggleArchive: (id: string) => void;
  updateLastViewed: (id: string) => void;
  getRecentProjects: () => Project[];
  getStarredProjects: () => Project[];
  getArchivedProjects: () => Project[];
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      projects: [],
      
      addProject: (project) => 
        set((state) => ({ 
          projects: [project, ...state.projects] 
        })),
      
      updateProject: (id, updates) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id ? { ...project, ...updates } : project
          ),
        })),
      
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),
      
      toggleStar: (id) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, isStarred: !project.isStarred }
              : project
          ),
        })),
      
      toggleArchive: (id) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, isArchived: !project.isArchived }
              : project
          ),
        })),
      
      updateLastViewed: (id) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, lastViewed: new Date().toISOString() }
              : project
          ),
        })),
      
      getRecentProjects: () => {
        const state = get();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        return state.projects
          .filter(project => !project.isArchived && project.lastViewed)
          .sort((a, b) => {
            const dateA = new Date(a.lastViewed || 0);
            const dateB = new Date(b.lastViewed || 0);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 10);
      },
      
      getStarredProjects: () => {
        const state = get();
        return state.projects.filter(project => project.isStarred && !project.isArchived);
      },
      
      getArchivedProjects: () => {
        const state = get();
        return state.projects.filter(project => project.isArchived);
      },
    }),
    {
      name: 'project-store',
    }
  )
);