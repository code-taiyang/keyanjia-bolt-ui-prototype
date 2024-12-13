export interface Experiment {
  id: string;
  title: string;
  description: string;
  type: 'physical' | 'chemical' | 'biological';
  status: 'draft' | 'in_progress' | 'completed';
  progress: number;
  content: string;
  outline: string[];
  lastModified: string;
}

export interface ExperimentSection {
  id: string;
  title: string;
  content: string;
  level: number;
  children?: ExperimentSection[];
}