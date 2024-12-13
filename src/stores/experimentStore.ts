import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Experiment } from '../types/experiment';

interface ExperimentState {
  experiments: Experiment[];
  addExperiment: (experiment: Omit<Experiment, 'lastModified'>) => void;
  updateExperiment: (id: string, updates: Partial<Experiment>) => void;
  deleteExperiment: (id: string) => void;
  getExperiment: (id: string) => Experiment | undefined;
}

// 示例数据
const initialExperiments: Experiment[] = [
  {
    id: '1',
    title: '分子动力学模拟',
    description: '使用LAMMPS进行纳米材料的分子动力学模拟',
    type: 'physical',
    status: 'in_progress',
    progress: 65,
    content: '',
    outline: [],
    lastModified: new Date().toISOString()
  },
  {
    id: '2',
    title: '神经网络优化实验',
    description: '深度学习模型性能优化与参数调优实验',
    type: 'simulation',
    status: 'draft',
    progress: 30,
    content: '',
    outline: [],
    lastModified: new Date().toISOString()
  }
];

export const useExperimentStore = create<ExperimentState>()(
  persist(
    (set, get) => ({
      experiments: initialExperiments, // 使用初始数据
      addExperiment: (experiment) =>
        set((state) => ({
          experiments: [
            {
              ...experiment,
              lastModified: new Date().toISOString(),
            },
            ...state.experiments,
          ],
        })),
      updateExperiment: (id, updates) =>
        set((state) => ({
          experiments: state.experiments.map((exp) =>
            exp.id === id
              ? {
                  ...exp,
                  ...updates,
                  lastModified: new Date().toISOString(),
                }
              : exp
          ),
        })),
      deleteExperiment: (id) =>
        set((state) => ({
          experiments: state.experiments.filter((exp) => exp.id !== id),
        })),
      getExperiment: (id) => get().experiments.find((exp) => exp.id === id),
    }),
    {
      name: 'experiment-store',
    }
  )
);