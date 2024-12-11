export interface Algorithm {
  id: string;
  name: string;
  description: string;
  complexity?: string;
  tags: string[];
  hot?: boolean;
}

export interface AlgorithmCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  algorithms: Algorithm[];
}