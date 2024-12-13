import React, { useRef, useEffect } from 'react';
import { getSectionContent } from '../../../utils/experimentSamples';

interface ExperimentContentProps {
  content: string;
  onContentChange: (content: string) => void;
  selectedSection: string | null;
}

export function ExperimentContent({
  content,
  onContentChange,
  selectedSection
}: ExperimentContentProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedSection && editorRef.current) {
      const sectionContent = getSectionContent(selectedSection);
      editorRef.current.innerHTML = sectionContent;
      onContentChange(sectionContent);
      editorRef.current.focus();
    }
  }, [selectedSection, onContentChange]);

  return (
    <div className="flex-1 overflow-auto bg-white border-l">
      <div className="max-w-3xl mx-auto px-8 py-6">
        {selectedSection && (
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            {selectedSection}
          </h2>
        )}
        
        <div
          ref={editorRef}
          contentEditable
          className="prose prose-lg max-w-none focus:outline-none min-h-[calc(100vh-12rem)]"
          onInput={(e) => onContentChange(e.currentTarget.innerHTML)}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning
        />
      </div>
    </div>
  );
}