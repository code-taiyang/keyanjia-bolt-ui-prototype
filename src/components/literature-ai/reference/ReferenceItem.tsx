import React, { useState } from 'react';
import { Quote, BookOpen, Save, Check, ChevronDown, Square, CheckSquare } from 'lucide-react';
import { Reference } from '../../../stores/literatureStore';
import { Tooltip } from '../../../components/common/Tooltip';

interface ReferenceItemProps {
  reference: Reference;
  index: number;
  onInterpret: (reference: Reference) => void;
  onSave: (reference: Reference) => void;
  isBatchMode?: boolean;
  isSelected?: boolean;
  onSelect?: (refId: string) => void;
}

const CITATION_FORMATS = [
  { id: 'gb', label: 'GB/T 7714-2015' },
  { id: 'mla', label: 'MLA' },
  { id: 'apa', label: 'APA' }
];

export function ReferenceItem({ 
  reference, 
  index, 
  onInterpret, 
  onSave,
  isBatchMode = false,
  isSelected = false,
  onSelect
}: ReferenceItemProps) {
  const [showCitationMenu, setShowCitationMenu] = useState(false);
  const [citationCopied, setCitationCopied] = useState(false);
  const [citationFormat, setCitationFormat] = useState('');
  const [saved, setSaved] = useState(false);

  const getCitationText = (format: string) => {
    switch (format) {
      case 'gb':
        return `${reference.authors.join(', ')}. ${reference.title}[J]. ${reference.journal}, ${reference.year}.`;
      case 'mla':
        return `${reference.authors.join(', ')}. "${reference.title}." ${reference.journal}, ${reference.year}.`;
      case 'apa':
        return `${reference.authors.join(', ')}. (${reference.year}). ${reference.title}. ${reference.journal}.`;
      default:
        return '';
    }
  };

  const handleCitation = (format: string) => {
    const citationText = getCitationText(format);
    navigator.clipboard.writeText(citationText);
    setCitationCopied(true);
    setCitationFormat(format);
    setTimeout(() => {
      setCitationCopied(false);
      setShowCitationMenu(false);
      setCitationFormat('');
    }, 2000);
  };

  const handleSave = () => {
    onSave(reference);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="group relative">
      <div className="p-4 rounded-xl border border-gray-100 hover:border-blue-100 bg-white hover:shadow-sm transition-all duration-200">
        <div className="flex items-start gap-3">
          {isBatchMode ? (
            <button
              onClick={() => onSelect?.(reference.id)}
              className="flex-shrink-0 mt-1"
            >
              {isSelected ? (
                <CheckSquare size={16} className="text-blue-600" />
              ) : (
                <Square size={16} className="text-gray-400" />
              )}
            </button>
          ) : (
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-600">
              {index}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium text-gray-900 text-sm leading-5 hover:text-blue-600 cursor-pointer">
                {reference.title}
              </h4>
              {!isBatchMode && (
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1">
                    <div className="relative">
                      <Tooltip content="引用文献" placement="top">
                        <button 
                          onClick={() => setShowCitationMenu(!showCitationMenu)}
                          className="p-1.5 hover:bg-gray-100 rounded flex items-center gap-1 text-gray-600"
                        >
                          <Quote size={16} />
                          <ChevronDown size={14} />
                        </button>
                      </Tooltip>
                      
                      {showCitationMenu && (
                        <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border py-1 z-10">
                          {CITATION_FORMATS.map(format => (
                            <button
                              key={format.id}
                              onClick={() => handleCitation(format.id)}
                              className="w-full px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {format.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Tooltip content="解读文献" placement="top">
                      <button 
                        onClick={() => onInterpret(reference)}
                        className="p-1.5 hover:bg-gray-100 rounded" 
                      >
                        <BookOpen size={16} className="text-gray-600" />
                      </button>
                    </Tooltip>
                    
                    <Tooltip content={saved ? "已保存到文献库" : "保存到文献库"} placement="top">
                      <button 
                        onClick={handleSave}
                        className="p-1.5 hover:bg-gray-100 rounded" 
                      >
                        {saved ? (
                          <Check size={16} className="text-green-600" />
                        ) : (
                          <Save size={16} className="text-gray-600" />
                        )}
                      </button>
                    </Tooltip>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-1 text-sm text-gray-500 space-y-1">
              <p>{reference.authors.join(', ')}</p>
              <div className="flex items-center gap-2 text-xs">
                <span>{reference.journal}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{reference.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Citation Copied Notification */}
      {citationCopied && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          <div className="flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            <span>已复制{CITATION_FORMATS.find(f => f.id === citationFormat)?.label}格式引文</span>
          </div>
        </div>
      )}
    </div>
  );
}
