import { useState, useEffect } from 'react';
import { WritingState } from '../types';

export function useWritingState(initialContent: string = '') {
  const [state, setState] = useState<WritingState>({
    content: initialContent,
    wordCount: 0,
    lastSaved: new Date().toISOString(),
    isModified: false
  });

  const updateContent = (newContent: string) => {
    setState(prev => ({
      ...prev,
      content: newContent,
      wordCount: countWords(newContent),
      isModified: true
    }));
  };

  const saveContent = () => {
    setState(prev => ({
      ...prev,
      lastSaved: new Date().toISOString(),
      isModified: false
    }));
  };

  // Auto-save every 30 seconds if modified
  useEffect(() => {
    if (!state.isModified) return;

    const timer = setTimeout(() => {
      saveContent();
    }, 30000);

    return () => clearTimeout(timer);
  }, [state.content, state.isModified]);

  return {
    state,
    updateContent,
    saveContent
  };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}