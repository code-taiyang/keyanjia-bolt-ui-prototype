export type ActivityType = 
  | 'analysis' 
  | 'experiment' 
  | 'literature' 
  | 'writing'
  | 'patent'
  | 'grant'
  | 'algorithm'
  | 'dataset'
  | 'visualization'
  | 'planning';

export type ActivityStatus = 'completed' | 'in_progress' | 'archived';

export type ActivityScope = 'all' | 'personal' | 'team';

export interface Collaborator {
  id: string;
  name: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  status: ActivityStatus;
  tool: string;
  scope: ActivityScope;
  project?: Project;
  tags?: string[];
  collaborators?: Collaborator[];
  createdAt: string;
  lastUpdated: string;
}