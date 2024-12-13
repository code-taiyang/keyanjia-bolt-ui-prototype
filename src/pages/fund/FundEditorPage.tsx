import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FundHeader } from '../../components/fund/editor/FundHeader';
import { FundEditor } from '../../components/fund/editor/FundEditor';
import { useFundStore } from '../../stores/fundStore';

interface LocationState {
  fundId: string;
  title: string;
  description: string;
  type: string;
  status: 'draft' | 'in_progress' | 'submitted';
  progress: number;
  deadline: string;
  isNew: boolean;
}

export function FundEditorPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const getFund = useFundStore(state => state.getFund);

  const [title, setTitle] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    // 如果没有 state，尝试从 URL 参数获取基金
    if (!state && id) {
      const fund = getFund(id);
      if (fund) {
        setTitle(fund.title);
      } else {
        console.log('Fund not found, redirecting...');
        navigate('/tools/funding');
      }
      return;
    }

    // 如果有 state，使用 state 中的数据
    if (state) {
      setTitle(state.title);
    }
  }, [state, id, getFund, navigate]);

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
    console.log('No fund data found, redirecting...');
    navigate('/tools/funding');
    return null;
  }

  const fundId = state?.fundId || id;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <FundHeader
        title={title}
        onTitleChange={handleTitleChange}
        isSaved={isSaved}
        lastSaved={lastSaved}
      />
      <FundEditor 
        fundId={fundId!}
        isNew={state?.isNew || false}
      />
    </div>
  );
}