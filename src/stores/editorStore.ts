import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EditorState } from '../types/editor';

interface EditorStore extends EditorState {
  setContent: (content: string) => void;
  setOutline: (outline: string[]) => void;
  setSelectedSection: (section: string | null) => void;
  save: () => void;
  reset: () => void;
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      content: '',
      outline: [],
      selectedSection: null,
      isModified: false,
      lastSaved: null,
      setContent: (content) => set({ content, isModified: true }),
      setOutline: (outline) => set({ outline, isModified: true }),
      setSelectedSection: (section) => set({ selectedSection: section }),
      save: () => set({ isModified: false, lastSaved: new Date().toISOString() }),
      reset: () => set({
        content: '',
        outline: [],
        selectedSection: null,
        isModified: false,
        lastSaved: null
      })
    }),
    {
      name: 'editor-store'
    }
  )
);