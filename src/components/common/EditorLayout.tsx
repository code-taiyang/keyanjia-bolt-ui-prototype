import React from 'react';
import { EditorProps } from '../../types/editor';
import { useEditor } from '../../hooks/useEditor';

export function EditorLayout({ id, type, children }: EditorProps & { children: React.ReactNode }) {
  const { state, handleContentChange, handleOutlineUpdate, handleSectionSelect } = useEditor(id, type);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            content: state.content,
            outline: state.outline,
            selectedSection: state.selectedSection,
            isModified: state.isModified,
            lastSaved: state.lastSaved ? new Date(state.lastSaved) : null,
            onContentChange: handleContentChange,
            onOutlineUpdate: handleOutlineUpdate,
            onSectionSelect: handleSectionSelect
          });
        }
        return child;
      })}
    </div>
  );
}