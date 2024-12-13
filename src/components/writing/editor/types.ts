export interface OutlineItem {
  id: string;
  title: string;
  level: number;
  children?: OutlineItem[];
}


export interface WritingState {
  content: string;
  wordCount: number;
  lastSaved: string;
  isModified: boolean;
}

export interface WritingTemplate {
  id: string;
  title: string;
  description: string;
  outline: OutlineItem[];
  format: 'markdown' | 'richtext';
  citationStyle: string;
}
