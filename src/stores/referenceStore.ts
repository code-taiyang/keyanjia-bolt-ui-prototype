import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Reference {
  id: string;
  title: string;
  type: string;
  size: string;
  uploadTime: string;
  url?: string;
}

interface ReferenceState {
  references: Reference[];
  addReference: (reference: Reference) => void;
  removeReference: (id: string) => void;
  clearReferences: () => void;
}

export const useReferenceStore = create<ReferenceState>()(
  persist(
    (set) => ({
      references: [],
      addReference: (reference) =>
        set((state) => ({
          references: [reference, ...state.references],
        })),
      removeReference: (id) =>
        set((state) => ({
          references: state.references.filter((ref) => ref.id !== id),
        })),
      clearReferences: () => set({ references: [] }),
    }),
    {
      name: 'reference-store',
    }
  )
);