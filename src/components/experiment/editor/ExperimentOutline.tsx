import React, { useState, useRef, useEffect } from 'react';
import { Trash2, BookOpen, ListOrdered } from 'lucide-react';
import { ExperimentReference } from './ExperimentReference';

interface ExperimentOutlineProps {
  items: string[];
  onUpdate: (items: string[]) => void;
  selectedSection: string | null;
  onSectionSelect: (section: string | null) => void;
}

export function ExperimentOutline({
  items,
  onUpdate,
  selectedSection,
  onSectionSelect
}: ExperimentOutlineProps) {
  const [activeTab, setActiveTab] = useState<'outline' | 'reference'>('outline');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingIndex !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingIndex]);

  const handleEdit = (index: number) => {
    const section = items[index];
    const isNumberOnly = /^\d+\.\s*$/.test(section);
    const hasNumber = /^\d+\./.test(section);
    
    if (isNumberOnly) return;

    setEditingIndex(index);
    setEditingContent(hasNumber ? section.replace(/^\d+\.\s*/, '') : section);
  };

  const handleEditComplete = (index: number) => {
    if (editingContent.trim()) {
      const currentSection = items[index];
      const currentNumber = currentSection.match(/^\d+\./)?.[0];
      
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

  const handleDelete = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onUpdate(newItems);
  };

  return (
    <div className="w-80 bg-white flex flex-col">
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
        <ExperimentReference />
      )}
    </div>
  );
}