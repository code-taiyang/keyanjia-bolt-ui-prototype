import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { WritingHeader } from '../components/writing/editor/WritingHeader';
import { ChatPanel } from '../components/writing/editor/ChatPanel';
import { WritingOutline } from '../components/writing/editor/WritingOutline';
import { WritingContent } from '../components/writing/editor/WritingContent';
import { WritingReference } from '../components/writing/editor/WritingReference';
import { defaultOutline } from '../utils/writingTemplates';

export function WritingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // State management
  const [title, setTitle] = useState(location.state?.title || '未命名写作');
  const [content, setContent] = useState('');
  const [outline, setOutline] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [isModified, setIsModified] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Redirect if no state
  useEffect(() => {
    if (!location.state && id) {
      navigate('/tools/writing');
    }
  }, [location.state, id, navigate]);

  // Initialize content
  useEffect(() => {
    if (location.state?.type) {
      const initialOutline = defaultOutline[location.state.type] || [];
      setOutline(initialOutline);
      
      if (location.state.description) {
        setContent(location.state.description);
        setWordCount(location.state.description.split(/\s+/).length);
      }
    }
  }, [location.state]);

  // Auto-save functionality
  useEffect(() => {
    let saveTimeout: NodeJS.Timeout;

    if (isModified) {
      setIsSaving(true);
      saveTimeout = setTimeout(() => {
        // Save content to backend/localStorage
        const writingData = {
          id,
          title,
          content,
          outline,
          lastModified: new Date().toISOString()
        };
        localStorage.setItem(`writing_${id}`, JSON.stringify(writingData));
        
        setLastSaved(new Date());
        setIsModified(false);
        setIsSaving(false);
      }, 2000);
    }

    return () => clearTimeout(saveTimeout);
  }, [id, title, content, outline, isModified]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleContentChange = useCallback((newContent: string) => {
    setContent(newContent);
    setWordCount(newContent.trim().split(/\s+/).length);
    setIsModified(true);
  }, []);

  const handleOutlineChange = useCallback((newOutline: string[]) => {
    setOutline(newOutline);
    setIsModified(true);
  }, []);

  const handleTitleChange = useCallback((newTitle: string) => {
    setTitle(newTitle);
    setIsModified(true);
  }, []);

  const handleSave = useCallback(() => {
    setIsSaving(true);
    // Save content logic
    setTimeout(() => {
      setLastSaved(new Date());
      setIsModified(false);
      setIsSaving(false);
    }, 500);
  }, []);

  const handleSectionSelect = useCallback((section: string | null) => {
    setSelectedSection(section);
  }, []);

  if (!location.state) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <WritingHeader
        title={title}
        onTitleChange={handleTitleChange}
        wordCount={wordCount}
        isModified={isModified}
        isSaving={isSaving}
        lastSaved={lastSaved}
        onToggleReference={() => setIsReferenceOpen(!isReferenceOpen)}
        isReferenceOpen={isReferenceOpen}
        onSave={handleSave}
      />

      <div className="flex-1 flex overflow-hidden">
        <ChatPanel />
        
        <WritingOutline
          items={outline}
          onUpdate={handleOutlineChange}
          selectedSection={selectedSection}
          onSectionSelect={handleSectionSelect}
        />
        
        <div className="flex-1 flex bg-white rounded-tl-xl shadow-sm overflow-hidden">
          <WritingContent
            content={content}
            onContentChange={handleContentChange}
            selectedSection={selectedSection}
          />
          
          {isReferenceOpen && (
            <WritingReference
              onClose={() => setIsReferenceOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
