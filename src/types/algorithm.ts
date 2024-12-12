export interface ComputingStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress?: number;
}

export interface AlgorithmInfo {
  description: string;
  algorithmId: string;
  computingSteps: ComputingStep[];
}

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