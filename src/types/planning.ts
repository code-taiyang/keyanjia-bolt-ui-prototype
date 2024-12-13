export interface Plan {
  id: string;
  title: string;
  description: string;
  type: 'short_term' | 'mid_term' | 'long_term';
  status: 'draft' | 'in_progress' | 'completed';
  progress: number;
  content: string;
  outline: string[];
  lastModified: string;
  milestones?: number;
  tasks?: number;
}

export interface PlanSection {
  id: string;
  title: string;
  content: string;
  level: number;
  children?: PlanSection[];
}