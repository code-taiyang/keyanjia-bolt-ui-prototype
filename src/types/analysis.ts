export interface AnalysisConfig {
  objective: string;
  dataType: string;
  analysisType: string[];
  requirements: string;
}

export interface DataFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface AnalysisResult {
  type: string;
  title: string;
  description: string;
  data: any;
  chartType?: 'bar' | 'line' | 'pie' | 'scatter';
}

export type AnalysisStep = 'guide' | 'upload' | 'analysis';

export interface AnalysisStats {
  rowCount: number;
  columnCount: number;
  missingValues: number;
  duplicates: number;
  dataTypes: Record<string, string>;
  summary: Record<string, {
    mean?: number;
    median?: number;
    mode?: number;
    std?: number;
    min?: number;
    max?: number;
  }>;
}