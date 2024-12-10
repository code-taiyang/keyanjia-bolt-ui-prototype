import React from 'react';
import { ToolCard } from './ToolCard';
import { getResearchTools } from './toolsData';

export function ResearchTools() {
  const tools = getResearchTools();
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tools.map((tool, index) => (
          <ToolCard 
            key={index} 
            {...tool}
            className={index < 5 ? 'lg:col-span-2 xl:col-span-1' : ''}
          />
        ))}
      </div>
    </div>
  );
}