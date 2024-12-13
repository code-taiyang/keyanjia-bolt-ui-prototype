import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Fund } from '../types/fund';

interface FundState {
  funds: Fund[];
  addFund: (fund: Omit<Fund, 'lastModified'>) => void;
  updateFund: (id: string, updates: Partial<Fund>) => void;
  deleteFund: (id: string) => void;
  getFund: (id: string) => Fund | undefined;
}

// 示例数据
const initialFunds: Fund[] = [
  {
    id: '1',
    title: '深度学习在气候预测中的应用',
    description: '国家自然科学基金面上项目申请',
    type: 'nsfc',
    status: 'in_progress',
    progress: 45,
    content: '',
    outline: [],
    lastModified: new Date().toISOString(),
    deadline: '2024-03-20'
  },
  {
    id: '2',
    title: '新型环境监测系统研发',
    description: '重点研发计划项目申请',
    type: 'research',
    status: 'draft',
    progress: 20,
    content: '',
    outline: [],
    lastModified: new Date().toISOString(),
    deadline: '2024-04-15'
  }
];

export const useFundStore = create<FundState>()(
  persist(
    (set, get) => ({
      funds: initialFunds, // 使用初始数据
      addFund: (fund) =>
        set((state) => ({
          funds: [
            {
              ...fund,
              lastModified: new Date().toISOString(),
            },
            ...state.funds,
          ],
        })),
      updateFund: (id, updates) =>
        set((state) => ({
          funds: state.funds.map((fund) =>
            fund.id === id
              ? {
                  ...fund,
                  ...updates,
                  lastModified: new Date().toISOString(),
                }
              : fund
          ),
        })),
      deleteFund: (id) =>
        set((state) => ({
          funds: state.funds.filter((fund) => fund.id !== id),
        })),
      getFund: (id) => get().funds.find((fund) => fund.id === id),
    }),
    {
      name: 'fund-store',
    }
  )
);