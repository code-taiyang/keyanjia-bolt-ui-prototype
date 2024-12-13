import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FundHeader } from '../../components/fund/editor/FundHeader';
import { FundEditor } from '../../components/fund/editor/FundEditor';

interface LocationState {
  title: string;
  description: string;
  type: string;
  isNew: boolean;
}

export function FundEditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  const [title, setTitle] = useState(state?.title || '未命名申请');
  const [isSaved, setIsSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Redirect if no state
  useEffect(() => {
    if (!state) {
      navigate('/tools/funding');
    }
  }, [state, navigate]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setIsSaved(false);
    // Auto save after 1 second
    setTimeout(() => {
      setIsSaved(true);
      setLastSaved(new Date());
    }, 1000);
  };

  if (!state) return null;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <FundHeader
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
        lastSaved={lastSaved}
      />
      <FundEditor fundId={state.isNew ? 'new' : state.title} />
    </div>
  );
}