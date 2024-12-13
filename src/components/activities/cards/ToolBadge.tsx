import React from 'react';
import { getToolInfo, AITool } from '../utils/toolMapping';

interface ToolBadgeProps {
  toolId: string;
}

export function ToolBadge({ toolId }: ToolBadgeProps) {
  const tool = getToolInfo(toolId);
  
  if (!tool) return null;
  
  const Icon = tool.icon;
  
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={14} className={tool.color} />
      <span className="text-sm">{tool.name}</span>
    </div>
  );
}