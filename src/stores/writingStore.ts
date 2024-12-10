import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Writing {
  id: string;
  title: string;
  description: string;
  type: 'thesis' | 'journal' | 'report';
  date: string;
  isStarred?: boolean;
  isSelected?: boolean;
}

interface WritingState {
  writings: Writing[];
  starredWritings: string[];
  addWriting: (writing: Writing) => void;
  removeWriting: (id: string) => void;
  toggleStar: (id: string) => void;
  isStarred: (id: string) => boolean;
  getStarredWritings: () => Writing[];
}

export const useWritingStore = create<WritingState>()(
  persist(
    (set, get) => ({
      writings: [],
      starredWritings: [],

      addWriting: (writing) =>
        set((state) => ({
          writings: [writing, ...state.writings],
        })),

      removeWriting: (id) =>
        set((state) => ({
          writings: state.writings.filter((w) => w.id !== id),
          starredWritings: state.starredWritings.filter((wId) => wId !== id),
        })),

      toggleStar: (id) =>
        set((state) => {
          const isCurrentlyStarred = state.starredWritings.includes(id);
          return {
            starredWritings: isCurrentlyStarred
              ? state.starredWritings.filter((wId) => wId !== id)
              : [...state.starredWritings, id],
          };
        }),

      isStarred: (id) => get().starredWritings.includes(id),

      getStarredWritings: () => {
        const state = get();
        return state.writings.filter((w) => state.starredWritings.includes(w.id));
      },
    }),
    {
      name: 'writing-store',
    }
  )
);