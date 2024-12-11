export interface Dataset {
  id: string;
  name: string;
  description: string;
  type: 'tabular' | 'image' | 'text' | 'time_series' | 'spatial';
  format: string;
  size: string;
  records: number;
  createdAt: string;
  updatedAt: string;
  owner: {
    name: string;
    avatar: string;
  };
  tags: string[];
  visibility: 'private' | 'team' | 'public';
  status: 'active' | 'archived';
  stats?: {
    downloads: number;
    views: number;
    citations: number;
  };
}

export interface DatasetFilter {
  type?: string;
  visibility?: string;
  status?: string;
  tags?: string[];
}

export interface DatasetSort {
  field: 'name' | 'createdAt' | 'updatedAt' | 'size' | 'records';
  order: 'asc' | 'desc';
}