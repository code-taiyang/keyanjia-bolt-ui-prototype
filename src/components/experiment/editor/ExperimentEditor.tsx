import React, { useState } from 'react';
import { ExperimentHeader } from './ExperimentHeader';
import { ExperimentOutline } from './ExperimentOutline';
import { ExperimentContent } from './ExperimentContent';
import { ChatPanel } from './ChatPanel';

interface ExperimentEditorProps {
  experimentId: string;
}

export function ExperimentEditor({ experimentId }: ExperimentEditorProps) {
  const [outline, setOutline] = useState<string[]>([
    '1. 实验目的',
    '2. 实验原理',
    '3. 实验材料与仪器',
    '4. 实验方法',
    '  4.1 实验步骤',
    '  4.2 数据采集',
    '  4.3 安全措施',
    '5. 结果与分析',
    '6. 结论',
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
      
      <ExperimentOutline 
        items={outline}
        onUpdate={handleOutlineUpdate}
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      <ExperimentContent
        content=""
        onContentChange={handleContentChange}
        selectedSection={selectedSection}
      />
    </div>
  );
}