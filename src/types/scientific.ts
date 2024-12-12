import { LucideIcon } from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
}

interface ToolCategory {
  name: string;
  items: ToolItem[];
}

export interface ScientificTool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  categories: ToolCategory[];
}