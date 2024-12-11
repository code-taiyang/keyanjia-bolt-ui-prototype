export type AIRole = 'academic' | 'technical' | 'writing' | 'research' | 'analysis';

export interface AIAssistant {
  id: string;
  role: AIRole;
  name: string;
  description: string;
  icon: LucideIcon;
  avatarUrl?: string;
  capabilities: string[];
}

export interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  assistant: AIAssistant;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  isStarred?: boolean;
  isArchived?: boolean;
  tags?: string[];
}

export type ChatFilter = {
  query?: string;
  role?: AIRole;
  timeRange?: 'today' | 'yesterday' | 'week' | 'month' | 'all';
  status?: 'active' | 'archived';
  starred?: boolean;
};

export type ChatSort = {
  field: 'updatedAt' | 'createdAt' | 'title';
  order: 'asc' | 'desc';
};