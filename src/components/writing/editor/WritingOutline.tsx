import React, { useState, useRef, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';

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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingIndex !== null && editRef.current) {
      editRef.current.focus();
      editRef.current.select();
    }
  }, [editingIndex]);

  const getIndentLevel = (text: string): number => {
    const match = text.match(/^(\s*)/);
    return match ? Math.floor(match[0].length / 2) : 0;
  };

  const getNextSectionNumber = (sections: string[], index: number, level: number): string => {
    const numbers: number[] = Array(4).fill(0);
    
    for (let i = 0; i < index; i++) {
      const currentLevel = getIndentLevel(sections[i]);
      const content = sections[i].replace(/^[\s\d.]+/, '').trim();
      
      if (!content || content === '摘要' || content === '前言' || content === '参考文献') {
        continue;
      }

      if (currentLevel === level) {
        numbers[level]++;
      } else if (currentLevel < level) {
        numbers[level] = 0;
        numbers[currentLevel]++;
      }
    }
    
    numbers[level]++;
    return numbers.slice(0, level + 1).filter(n => n > 0).join('.');
  };

  const updateSectionNumbers = (sections: string[]): string[] => {
    return sections.map((section, index) => {
      const level = getIndentLevel(section);
      const content = section.replace(/^[\s\d.]+/, '').trim();
      
      if (!content || content === '摘要' || content === '前言' || content === '参考文献') {
        return section;
      }

      const prefix = getNextSectionNumber(sections, index, level);
      return `${'  '.repeat(level)}${prefix}. ${content}`;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, index: number) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const newOutline = [...items];
      const currentIndent = getIndentLevel(items[index]);
      const currentContent = items[index].replace(/^[\s\d.]+/, '').trim();
      
      if (!currentContent) {
        if (currentIndent > 0) {
          newOutline[index] = items[index].replace(/^  /, '');
          onUpdate(updateSectionNumbers(newOutline));
        } else if (newOutline.length > 1) {
          newOutline.splice(index, 1);
          onUpdate(updateSectionNumbers(newOutline));
          setEditingIndex(Math.max(0, index - 1));
        }
        return;
      }

      const nextNumber = getNextSectionNumber(newOutline, index + 1, currentIndent);
      const newSection = `${'  '.repeat(currentIndent)}${nextNumber}. `;
      newOutline.splice(index + 1, 0, newSection);
      onUpdate(updateSectionNumbers(newOutline));
      setEditingIndex(index + 1);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const newOutline = [...items];
      const currentLine = newOutline[index];
      
      if (e.shiftKey && currentLine.startsWith('  ')) {
        newOutline[index] = currentLine.replace(/^  /, '');
      } else if (!e.shiftKey && index > 0) {
        newOutline[index] = '  ' + currentLine;
      }
      onUpdate(updateSectionNumbers(newOutline));
    } else if (e.key === 'Backspace' && items[index].trim() === '') {
      e.preventDefault();
      const newOutline = [...items];
      newOutline.splice(index, 1);
      onUpdate(updateSectionNumbers(newOutline));
      setEditingIndex(Math.max(0, index - 1));
    }
  };

  const renderOutlineItem = (section: string, index: number) => {
    const indentLevel = getIndentLevel(section);
    const isEditing = editingIndex === index;
    const content = section.replace(/^[\s\d.]+/, '').trim();
    const isEmpty = !content;
    const sectionNumber = section.match(/^[\s\d.]+/)?.[0] || getNextSectionNumber(items, index, indentLevel) + '. ';
    const isSpecialSection = content === '摘要' || content === '前言' || content === '参考文献';

    return (
      <div
        key={index}
        className={`
          group flex items-start p-2 rounded-lg cursor-text text-sm
          ${selectedSection === section ? 'bg-blue-50' : 'hover:bg-gray-50'}
          ${isEmpty ? 'opacity-50' : ''}
          transition-colors duration-200
        `}
        style={{ marginLeft: `${indentLevel * 1.5}rem` }}
        onClick={() => {
          if (!isEditing) {
            setEditingIndex(index);
          }
          if (!isEmpty) {
            onSectionSelect(section);
          }
        }}
      >
        {isEditing ? (
          <div className="flex-1 relative">
            <span className={`
              absolute left-0 text-gray-400
              ${isSpecialSection ? 'hidden' : ''}
            `}>
              {sectionNumber}
            </span>
            <textarea
              ref={editRef}
              value={content}
              onChange={(e) => {
                const newOutline = [...items];
                const indent = '  '.repeat(indentLevel);
                newOutline[index] = `${indent}${e.target.value}`;
                onUpdate(updateSectionNumbers(newOutline));
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onBlur={() => setEditingIndex(null)}
              className={`
                w-full bg-transparent border-none resize-none focus:ring-0 outline-none
                ${isSpecialSection ? 'pl-0' : 'pl-8'}
              `}
              rows={1}
              placeholder="新章节"
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center group">
            {!isSpecialSection && (
              <span className="text-gray-400 mr-2">{sectionNumber}</span>
            )}
            <span className="flex-1">{content || '新章节'}</span>
            {!isSpecialSection && (
              <button
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 rounded transition-opacity duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  const newOutline = [...items];
                  newOutline.splice(index, 1);
                  onUpdate(updateSectionNumbers(newOutline));
                }}
              >
                <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">大纲</h3>
          <button
            onClick={() => {
              const newOutline = [...items, `${'  '.repeat(getIndentLevel(items[items.length - 1] || ''))}新章节`];
              onUpdate(updateSectionNumbers(newOutline));
              setEditingIndex(items.length);
            }}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            title="添加章节"
          >
            <Plus size={16} />
          </button>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          按 Enter 添加章节，Tab 调整层级
        </p>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-2 space-y-0.5"
        onClick={() => {
          if (items.length === 0) {
            onUpdate(['1. ']);
            setEditingIndex(0);
          }
        }}
      >
        {items.map((section, index) => renderOutlineItem(section, index))}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
            <Plus size={24} className="mb-2" />
            <p className="text-sm">点击添加章节</p>
          </div>
        )}
      </div>
    </div>
  );
}
