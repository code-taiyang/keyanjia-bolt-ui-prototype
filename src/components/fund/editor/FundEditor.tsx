import React, { useState } from 'react';
import { FundHeader } from './FundHeader';
import { FundOutline } from './FundOutline';
import { FundContent } from './FundContent';
import { ChatPanel } from './ChatPanel';

interface FundEditorProps {
  fundId: string;
}

export function FundEditor({ fundId }: FundEditorProps) {
  const [outline, setOutline] = useState<string[]>([
    '1. 立项依据',
    '  1.1 研究意义',
    '  1.2 国内外研究现状',
    '  1.3 研究基础',
    '2. 研究内容',
    '  2.1 研究目标',
    '  2.2 研究内容',
    '  2.3 关键科学问题',
    '3. 研究方案',
    '  3.1 技术路线',
    '  3.2 研究方法',
    '  3.3 可行性分析',
    '4. 研究特色与创新',
    '5. 研究基础与保障',
    '  5.1 研究基础',
    '  5.2 研究队伍',
    '  5.3 设备条件',
    '6. 预期成果',
    '7. 经费预算',
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
      
      <FundOutline 
        items={outline}
        onUpdate={handleOutlineUpdate}
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      <FundContent
        content=""
        onContentChange={handleContentChange}
        selectedSection={selectedSection}
      />
    </div>
  );
}