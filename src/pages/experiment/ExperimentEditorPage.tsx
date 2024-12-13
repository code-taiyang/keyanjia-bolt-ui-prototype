import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ExperimentHeader } from '../../components/experiment/editor/ExperimentHeader';
import { ExperimentEditor } from '../../components/experiment/editor/ExperimentEditor';
import { useExperimentStore } from '../../stores/experimentStore';

interface LocationState {
  experimentId: string;
  title: string;
  description: string;
  type: string;
  status: 'draft' | 'in_progress' | 'completed';
  progress: number;
  isNew: boolean;
}

export function ExperimentEditorPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const getExperiment = useExperimentStore(state => state.getExperiment);

  const [title, setTitle] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    // 如果没有 state，尝试从 URL 参数获取实验
    if (!state && id) {
      const experiment = getExperiment(id);
      if (experiment) {
        setTitle(experiment.title);
      } else {
        console.log('Experiment not found, redirecting...');
        navigate('/tools/experiment');
      }
      return;
    }

    // 如果有 state，使用 state 中的数据
    if (state) {
      setTitle(state.title);
    }
  }, [state, id, getExperiment, navigate]);

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
    console.log('No experiment data found, redirecting...');
    navigate('/tools/experiment');
    return null;
  }

  const experimentId = state?.experimentId || id;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ExperimentHeader
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
        lastSaved={lastSaved}
      />
      <ExperimentEditor 
        experimentId={experimentId!}
        isNew={state?.isNew || false}
      />
    </div>
  );
}