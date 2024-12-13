import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Plan } from '../types/planning';

interface PlanningState {
  plans: Plan[];
  addPlan: (plan: Omit<Plan, 'lastModified'>) => void;
  updatePlan: (id: string, updates: Partial<Plan>) => void;
  deletePlan: (id: string) => void;
  getPlan: (id: string) => Plan | undefined;
}

const initialPlans: Plan[] = [
  {
    id: '1',
    title: '深度学习在气候预测中的应用研究',
    description: '探索深度学习模型在气候变化预测中的应用前景和关键技术',
    type: 'mid_term',
    status: 'in_progress',
    progress: 35,
    content: '',
    outline: [],
    lastModified: new Date().toISOString(),
    milestones: 5,
    tasks: 12
  },
  {
    id: '2',
    title: '神经网络模型优化研究',
    description: '研究神经网络模型的性能优化方法和实现策略',
    type: 'short_term',
    status: 'draft',
    progress: 15,
    content: '',
    outline: [],
    lastModified: new Date().toISOString(),
    milestones: 3,
    tasks: 8
  }
];

export const usePlanningStore = create<PlanningState>()(
  persist(
    (set, get) => ({
      plans: initialPlans,
      addPlan: (plan) =>
        set((state) => ({
          plans: [
            {
              ...plan,
              lastModified: new Date().toISOString(),
            },
            ...state.plans,
          ],
        })),
      updatePlan: (id, updates) =>
        set((state) => ({
          plans: state.plans.map((plan) =>
            plan.id === id
              ? {
                  ...plan,
                  ...updates,
                  lastModified: new Date().toISOString(),
                }
              : plan
          ),
        })),
      deletePlan: (id) =>
        set((state) => ({
          plans: state.plans.filter((plan) => plan.id !== id),
        })),
      getPlan: (id) => get().plans.find((plan) => plan.id === id),
    }),
    {
      name: 'planning-store',
    }
  )
);