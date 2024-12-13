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

export const usePlanningStore = create<PlanningState>()(
  persist(
    (set, get) => ({
      plans: [],
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