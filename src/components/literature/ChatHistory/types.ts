export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  date: string;
  time: string;
  isStarred?: boolean;
  type: 'literature_review' | 'literature_analysis' | 'literature_summary';
  status: 'active' | 'completed' | 'archived';
}

export type FilterType = 'all' | 'starred' | 'recent';