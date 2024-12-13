import { useState, useCallback, useEffect } from 'react';
import { useEditorStore } from '../stores/editorStore';
import { EditorState } from '../types/editor';

export function useEditor(id: string, type: 'experiment' | 'fund' | 'planning') {
  const store = useEditorStore();
  const [state, setState] = useState<EditorState>({
    content: '',
    outline: [],
    selectedSection: null,
    isModified: false,
    lastSaved: null
  });

  // Load initial content
  useEffect(() => {
    const savedContent = localStorage.getItem(`${type}_${id}_content`);
    const savedOutline = localStorage.getItem(`${type}_${id}_outline`);
    
    if (savedContent) {
      setState(prev => ({
        ...prev,
        content: savedContent,
        outline: savedOutline ? JSON.parse(savedOutline) : []
      }));
    }
  }, [id, type]);

  // Auto-save
  useEffect(() => {
    if (state.isModified) {
      const saveTimeout = setTimeout(() => {
        localStorage.setItem(`${type}_${id}_content`, state.content);
        localStorage.setItem(`${type}_${id}_outline`, JSON.stringify(state.outline));
        setState(prev => ({
          ...prev,
          isModified: false,
          lastSaved: new Date().toISOString()
        }));
      }, 2000);

      return () => clearTimeout(saveTimeout);
    }
  }, [state.isModified, state.content, state.outline, id, type]);

  const handleContentChange = useCallback((content: string) => {
    setState(prev => ({
      ...prev,
      content,
      isModified: true
    }));
  }, []);

  const handleOutlineUpdate = useCallback((outline: string[]) => {
    setState(prev => ({
      ...prev,
      outline,
      isModified: true
    }));
  }, []);

  const handleSectionSelect = useCallback((section: string | null) => {
    setState(prev => ({
      ...prev,
      selectedSection: section
    }));
  }, []);

  return {
    state,
    handleContentChange,
    handleOutlineUpdate,
    handleSectionSelect
  };
}