import React, { useState } from 'react';
import { WritingOutline } from './WritingOutline';
import { WritingContent } from './WritingContent';
import { AIAssistant } from './AIAssistant';
import { OutlineItem } from './types';

interface WritingEditorProps {
  templateId: string;
}

export function WritingEditor({ templateId }: WritingEditorProps) {
  const [showAIAssistant, setShowAIAssistant] = useState(true);
  const [outline, setOutline] = useState<OutlineItem[]>([
    {
      id: '1',
      title: '摘要',
      level: 1
    },
    {
      id: '2',
      title: '引言',
      level: 1,
      children: [
        { id: '2.1', title: '研究背景', level: 2 },
        { id: '2.2', title: '研究意义', level: 2 }
      ]
    },
    {
      id: '3',
      title: '研究方法',
      level: 1
    },
    {
      id: '4',
      title: '结果',
      level: 1
    },
    {
      id: '5',
      title: '讨论',
      level: 1
    },
    {
      id: '6',
      title: '结论',
      level: 1
    },
    {
      id: '7',
      title: '参考文献',
      level: 1
    }
  ]);

  const handleContentChange = (content: string) => {
    // Handle content changes
    console.log('Content updated:', content);
  };

  const handleOutlineUpdate = (newOutline: OutlineItem[]) => {
    setOutline(newOutline);
  };

  const handleSave = () => {
    // Handle save
    console.log('Saving document...');
  };

  return (
    <div className="flex-1 flex min-h-0">
      <WritingOutline 
        items={outline}
        onUpdate={handleOutlineUpdate}
      />
      <WritingContent
        onContentChange={handleContentChange}
        onSave={handleSave}
      />
      {showAIAssistant && (
        <AIAssistant
          onClose={() => setShowAIAssistant(false)}
        />
      )}
    </div>
  );
}