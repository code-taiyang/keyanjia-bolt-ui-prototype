import React, { useState, useRef, useEffect } from 'react';
import { Trash2, BookOpen, ListOrdered } from 'lucide-react';
import { WritingReference } from './WritingReference';

interface WritingOutlineProps {
  items: string[];
  onUpdate: (items: string[]) => void;
  selectedSection: string | null;
  onSectionSelect: (section: string | null) => void;
}

export function WritingOutline({
  items,
  onUpdate,
  selectedSection,
  onSectionSelect
}: WritingOutlineProps) {
  const [activeTab, setActiveTab] = useState<'outline' | 'reference'>('outline');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingIndex !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingIndex]);

  const reorderSections = (sections: string[]): string[] => {
    let currentNumber = 0;
    return sections.map(section => {
      const match = section.match(/^(\d+)(\..*)/);
      if (match) {
        currentNumber++;
        return `${currentNumber}${match[2]}`;
      }
      return section;
    });
  };

  const handleEdit = (index: number) => {
    const section = items[index];
    // 检查是否只包含序号或是否为序号开头
    const isNumberOnly = /^\d+\.\s*$/.test(section);
    const hasNumber = /^\d+\./.test(section);
    
    if (isNumberOnly) {
      return;
    }

    setEditingIndex(index);
    // 如果有序号，编辑时去掉序号
    setEditingContent(hasNumber ? section.replace(/^\d+\.\s*/, '') : section);
  };

  const handleEditComplete = (index: number) => {
    if (editingContent.trim()) {
      const currentSection = items[index];
      const currentNumber = currentSection.match(/^\d+\./)?.[0];
      
      // 如果当前章节有序号，保留序号
      const newContent = currentNumber 
        ? `${currentNumber} ${editingContent}`
        : editingContent;

      const newItems = [...items];
      newItems[index] = newContent;
      onUpdate(newItems);
    }
    setEditingIndex(null);
    setEditingContent('');
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEditComplete(index);
      
      // 在当前章节后添加新章节
      const newItems = [...items];
      const currentNumber = parseInt(items[index].match(/^\d+/)?.[0] || '0');
      
      // 插入新章节
      const insertIndex = index + 1;
      newItems.splice(insertIndex, 0, `${currentNumber + 1}. `);
      
      // 重新排序后续章节
      const reorderedItems = reorderSections(newItems);
      
      onUpdate(reorderedItems);
      setEditingIndex(insertIndex);
      setEditingContent('');
    } else if (e.key === 'Escape') {
      setEditingIndex(null);
      setEditingContent('');
    }
  };

  const handleDelete = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    // 重新排序所有章节
    const reorderedItems = reorderSections(newItems);
    onUpdate(reorderedItems);
  };

  return (
    <div className="w-80 bg-white flex flex-col">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('outline')}
          className={`
            flex items-center gap-2 flex-1 px-4 py-3 text-sm font-medium
            ${activeTab === 'outline'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <ListOrdered size={16} />
          <span>大纲</span>
        </button>
        <button
          onClick={() => setActiveTab('reference')}
          className={`
            flex items-center gap-2 flex-1 px-4 py-3 text-sm font-medium
            ${activeTab === 'reference'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'}
          `}
        >
          <BookOpen size={16} />
          <span>资料库</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'outline' ? (
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          {items.map((section, index) => (
            <div
              key={index}
              className={`
                group flex items-start p-2 rounded-lg cursor-text text-sm
                ${selectedSection === section ? 'bg-blue-50' : 'hover:bg-gray-50'}
                transition-colors duration-200
              `}
              onClick={() => {
                if (editingIndex !== index) {
                  onSectionSelect(section);
                }
              }}
            >
              {editingIndex === index ? (
                <input
                  ref={editInputRef}
                  type="text"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  onBlur={() => handleEditComplete(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="flex-1 flex items-center group">
                  <span 
                    className="flex-1"
                    onClick={() => handleEdit(index)}
                  >
                    {section}
                  </span>
                  <button
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 rounded transition-opacity duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  >
                    <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <WritingReference />
      )}
    </div>
  );
}