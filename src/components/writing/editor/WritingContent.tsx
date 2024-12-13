import React, { useRef, useEffect, useState } from 'react';
import { getSectionContent } from '../../../utils/writingSamples';
import { ChevronDown } from 'lucide-react';

interface WritingContentProps {
  content: string;
  onContentChange: (content: string) => void;
  selectedSection: string | null;
}

export function WritingContent({
  content,
  onContentChange,
  selectedSection
}: WritingContentProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showCitationStyles, setShowCitationStyles] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('APA');

  const citationStyles = [
    { id: 'apa', name: 'APA' },
    { id: 'mla', name: 'MLA' },
    { id: 'chicago', name: 'Chicago' },
    { id: 'harvard', name: 'Harvard' },
    { id: 'ieee', name: 'IEEE' },
    { id: 'gb7714', name: 'GB/T 7714' }
  ];

  useEffect(() => {
    if (selectedSection && editorRef.current) {
      const sectionContent = getSectionContent(selectedSection);
      editorRef.current.innerHTML = sectionContent;
      onContentChange(sectionContent);
      editorRef.current.focus();
    }
  }, [selectedSection, onContentChange]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.innerHTML;
    onContentChange(content);
  };

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
    setShowCitationStyles(false);
    // 这里可以添加切换引用格式的逻辑
  };

  return (
    <div className="flex-1 overflow-auto bg-white border-l">
      <div className="max-w-3xl mx-auto px-8 py-6">
        {selectedSection && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              {selectedSection}
            </h2>
            
            {selectedSection === '参考文献' && (
              <div className="relative">
                <button
                  onClick={() => setShowCitationStyles(!showCitationStyles)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <span>引用格式: {selectedStyle}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${showCitationStyles ? 'rotate-180' : ''}`} />
                </button>

                {showCitationStyles && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                    {citationStyles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => handleStyleChange(style.name)}
                        className={`
                          w-full px-4 py-2 text-left text-sm
                          ${selectedStyle === style.name
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                          }
                        `}
                      >
                        {style.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        <div
          ref={editorRef}
          contentEditable
          className="prose prose-lg max-w-none focus:outline-none min-h-[calc(100vh-12rem)]"
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning
        />
      </div>
    </div>
  );
}