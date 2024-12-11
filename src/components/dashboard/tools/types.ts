import { ReactNode } from 'react';

export interface Tool {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  features?: string[];
  link: string;
  category?: 'research' | 'analysis' | 'writing' | 'tools';
}