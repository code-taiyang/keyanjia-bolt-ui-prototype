import React, { useRef, useEffect } from 'react';

interface WritingContentProps {
  content: string;
  onContentChange: (content: string) => void;
  selectedSection: string | null;
}

export function WritingContent({
  content,
  onContentChange,
  selectedSection
}: WritingContentProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [selectedSection]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.innerHTML;
    onContentChange(content);
  };

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="max-w-3xl mx-auto px-8 py-6">
        <div
          ref={editorRef}
          contentEditable
          className="prose prose-lg max-w-none focus:outline-none min-h-[calc(100vh-12rem)]"
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning
        />
      </div>
    </div>
  );
}
