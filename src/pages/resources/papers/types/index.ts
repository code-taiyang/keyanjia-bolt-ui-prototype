export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  references: number;
  lastOperated: string;
  status: '创建' | '引用' | '精读完成';
  isStarred?: boolean;
  abstract?: {
    background: string;
    purpose: string;
    methods: string;
    conclusion: string;
  };
  citations?: Array<{
    title: string;
    authors: string[];
    source: string;
    year: string;
  }>;
}

export type ChartFormulaType = 'image' | 'table' | 'formula' | 'code';

export interface ChartFormulaItem {
  id: string;
  paperId: string;
  title: string;
  type: ChartFormulaType;
  number: number;
  description: string;
  preview: string;
}