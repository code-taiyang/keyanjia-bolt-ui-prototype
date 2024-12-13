export interface Fund {
  id: string;
  title: string;
  description: string;
  type: 'nsfc' | 'research' | 'talent';
  status: 'draft' | 'in_progress' | 'submitted';
  progress: number;
  content: string;
  outline: string[];
  lastModified: string;
  deadline?: string;
}

export interface FundSection {
  id: string;
  title: string;
  content: string;
  level: number;
  children?: FundSection[];
}