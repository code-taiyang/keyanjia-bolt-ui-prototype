import React, { useRef, useEffect } from 'react';
import { useWritingState } from './hooks/useWritingState';

interface WritingContentProps {
  initialContent?: string;
  onContentChange?: (content: string) => void;
  onSave?: () => void;
}

export function WritingContent({ 
  initialContent = '', 
  onContentChange,
  onSave 
}: WritingContentProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const { state, updateContent, saveContent } = useWritingState(initialContent);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        saveContent();
        onSave?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSave, saveContent]);

  // Handle content changes
  const handleInput = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.innerHTML;
    updateContent(content);
    onContentChange?.(content);
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="max-w-3xl mx-auto px-8 py-6">
        <div
          ref={editorRef}
          contentEditable
          className="prose prose-lg max-w-none focus:outline-none min-h-[calc(100vh-12rem)]"
          onInput={handleInput}
          suppressContentEditableWarning
        >
          {initialContent}
        </div>
      </div>
    </div>
  );
}