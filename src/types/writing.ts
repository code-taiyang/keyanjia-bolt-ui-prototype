export interface WritingType {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'academic' | 'research' | 'application';
  features?: string[];
}

export interface AIFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface WritingInfo {
  description: string;
  type: string;
  aiFeatures: string[];
  createdAt: string;
}