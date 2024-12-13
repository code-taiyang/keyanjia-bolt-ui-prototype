import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PlanningHeader } from '../../components/planning/editor/PlanningHeader';
import { PlanningEditor } from '../../components/planning/editor/PlanningEditor';

interface LocationState {
  title: string;
  description: string;
  type: string;
  isNew: boolean;
}

export function PlanningEditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  const [title, setTitle] = useState(state?.title || '未命名规划');
  const [isSaved, setIsSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Redirect if no state
  useEffect(() => {
    if (!state) {
      navigate('/planning');
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
      <PlanningHeader
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
        lastSaved={lastSaved}
      />
      <PlanningEditor planId={state.isNew ? 'new' : state.title} />
    </div>
  );
}