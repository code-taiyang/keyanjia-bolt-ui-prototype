import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PlanningHeader } from '../../components/planning/editor/PlanningHeader';
import { PlanningEditor } from '../../components/planning/editor/PlanningEditor';
import { usePlanningStore } from '../../stores/planningStore';

interface LocationState {
  planId: string;
  title: string;
  description: string;
  type: string;
  status: 'draft' | 'in_progress' | 'completed';
  progress: number;
  milestones: number;
  tasks: number;
  isNew: boolean;
}

export function PlanningEditorPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const getPlan = usePlanningStore(state => state.getPlan);

  const [title, setTitle] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    // 如果没有 state，尝试从 URL 参数获取规划
    if (!state && id) {
      const plan = getPlan(id);
      if (plan) {
        setTitle(plan.title);
      } else {
        console.log('Plan not found, redirecting...');
        navigate('/planning');
      }
      return;
    }

    // 如果有 state，使用 state 中的数据
    if (state) {
      setTitle(state.title);
    }
  }, [state, id, getPlan, navigate]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setIsSaved(false);
    setTimeout(() => {
      setIsSaved(true);
      setLastSaved(new Date());
    }, 1000);
  };

  // 如果既没有 state 也没有 id，重定向
  if (!state && !id) {
    console.log('No plan data found, redirecting...');
    navigate('/planning');
    return null;
  }

  const planId = state?.planId || id;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <PlanningHeader
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
        lastSaved={lastSaved}
      />
      <PlanningEditor 
        planId={planId!}
        isNew={state?.isNew || false}
      />
    </div>
  );
}