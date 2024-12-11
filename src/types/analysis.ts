export interface AnalysisResult {
  type: string;
  data: {
    sampleFeatures: {
      gender: { [key: string]: number };
      grade: { [key: string]: number };
      major: { [key: string]: number };
    };
    variables: {
      [key: string]: {
        mean: number;
        std: number;
        percentile: number;
      };
    };
    correlations: Array<{
      pair: string;
      coefficient: number;
    }>;
  };
  insights: string[];
  recommendations: string[];
}