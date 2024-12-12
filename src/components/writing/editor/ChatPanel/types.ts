export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: string;
  status?: 'sending' | 'sent' | 'error';
  suggestions?: string[];
}

export interface TokenCount {
  current: number;
  total: number;
}