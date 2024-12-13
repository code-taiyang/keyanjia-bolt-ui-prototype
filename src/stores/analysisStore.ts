import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AnalysisConfig, DataFile, AnalysisResult } from '../types/analysis';

interface AnalysisState {
  config: AnalysisConfig | null;
  files: DataFile[];
  results: AnalysisResult[];
  isAnalyzing: boolean;
  setConfig: (config: AnalysisConfig) => void;
  setFiles: (files: DataFile[]) => void;
  setResults: (results: AnalysisResult[]) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  reset: () => void;
}

export const useAnalysisStore = create<AnalysisState>()(
  persist(
    (set) => ({
      config: null,
      files: [],
      results: [],
      isAnalyzing: false,
      setConfig: (config) => set({ config }),
      setFiles: (files) => set({ files }),
      setResults: (results) => set({ results }),
      setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
      reset: () => set({ config: null, files: [], results: [], isAnalyzing: false })
    }),
    {
      name: 'analysis-store'
    }
  )
);