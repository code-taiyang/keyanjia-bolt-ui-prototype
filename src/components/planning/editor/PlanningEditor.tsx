import React, { useState } from 'react';
import { PlanningHeader } from './PlanningHeader';
import { PlanningOutline } from './PlanningOutline';
import { PlanningContent } from './PlanningContent';
import { ChatPanel } from './ChatPanel';

interface PlanningEditorProps {
  planId: string;
}

export function PlanningEditor({ planId }: PlanningEditorProps) {
  const [outline, setOutline] = useState<string[]>([
    '1. 研究背景',
    '  1.1 研究现状',
    '  1.2 存在问题',
    '  1.3 研究机遇',
    '2. 研究目标',
    '  2.1 总体目标',
    '  2.2 具体目标',
    '3. 研究内容',
    '  3.1 研究方向',
    '  3.2 重点任务',
    '  3.3 预期成果',
    '4. 实施计划',
    '  4.1 时间安排',
    '  4.2 人员分工',
    '  4.3 资源配置',
    '5. 风险分析',
    '  5.1 潜在风险',
    '  5.2 应对措施',
    '6. 评估机制',
    '  6.1 评估指标',
    '  6.2 评估方法',
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
      
      <PlanningOutline 
        items={outline}
        onUpdate={handleOutlineUpdate}
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      <PlanningContent
        content=""
        onContentChange={handleContentChange}
        selectedSection={selectedSection}
      />
    </div>
  );
}