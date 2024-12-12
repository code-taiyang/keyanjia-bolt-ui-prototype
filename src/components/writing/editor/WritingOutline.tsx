import React, { useState } from 'react';
import { ChevronRight, Plus, ChevronDown, Trash2 } from 'lucide-react';
import { OutlineItem } from './types';

interface WritingOutlineProps {
  items: OutlineItem[];
  onUpdate: (items: OutlineItem[]) => void;
}

export function WritingOutline({ items, onUpdate }: WritingOutlineProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderItem = (item: OutlineItem, depth: number = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="relative">
        <button
          className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg group"
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
          onClick={() => toggleExpand(item.id)}
        >
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown size={16} className="text-gray-400" />
            ) : (
              <ChevronRight size={16} className="text-gray-400" />
            )
          ) : (
            <div className="w-4" />
          )}
          <span className="truncate flex-1">{item.title}</span>
          <button 
            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded"
            onClick={(e) => {
              e.stopPropagation();
              // Handle delete
            }}
          >
            <Trash2 size={14} className="text-gray-400" />
          </button>
        </button>
        {isExpanded && hasChildren && (
          <div className="ml-4">
            {item.children!.map(child => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 border-r bg-gray-50 flex flex-col">
      <div className="p-4 border-b bg-white">
        <h3 className="font-medium">大纲</h3>
        <p className="text-xs text-gray-500 mt-1">按 Enter 添加章节，Tab 调整层级</p>
      </div>

      <div className="flex-1 overflow-auto p-2">
        {items.map(item => renderItem(item))}
      </div>

      <div className="p-2 border-t bg-white">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          <Plus size={16} />
          <span>添加章节</span>
        </button>
      </div>
    </div>
  );
}