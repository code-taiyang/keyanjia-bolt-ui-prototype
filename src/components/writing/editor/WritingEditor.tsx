import React, { useState } from 'react';
import { WritingOutline } from './WritingOutline';
import { WritingContent } from './WritingContent';
import { ChatPanel } from './ChatPanel';
import { OutlineItem } from './types';

interface WritingEditorProps {
  templateId: string;
}

export function WritingEditor({ templateId }: WritingEditorProps) {
  const [outline, setOutline] = useState<string[]>([
    '摘要',
    '1. 引言',
    '  1.1 研究背景',
    '  1.2 研究意义',
    '2. 研究方法',
    '3. 结果',
    '4. 讨论',
    '5. 结论',
    '参考文献'
  ]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleContentChange = (content: string) => {
    // Handle content changes
    console.log('Content updated:', content);
  };

  const handleOutlineUpdate = (newOutline: string[]) => {
    setOutline(newOutline);
  };

  return (
    <div className="flex-1 flex min-h-0">
      <ChatPanel />
      
      <WritingOutline 
        items={outline}
        onUpdate={handleOutlineUpdate}
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      <WritingContent
        content=""
        onContentChange={handleContentChange}
        selectedSection={selectedSection}
      />
    </div>
  );
}