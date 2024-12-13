import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatPanel } from './chat/ChatPanel';
import { CodePanel } from './code/CodePanel';
import { ResultsPanel } from './results/ResultsPanel';
import { ComputingHeader } from './ComputingHeader';
import { ComputingStep } from '../../../types/algorithm';

interface LocationState {
  algorithmId: string;
  title: string;
  description: string;
  type: string;
  isNew: boolean;
}

export function AlgorithmEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'code' | 'results'>('code');
  const [computingSteps, setComputingSteps] = useState<ComputingStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isComputing, setIsComputing] = useState(false);
  const [computationComplete, setComputationComplete] = useState(false);

  const state = location.state as LocationState;

  useEffect(() => {
    // 如果没有state,重定向回算法列表页面
    if (!state?.algorithmId) {
      console.log('No algorithm ID found, redirecting...');
      navigate('/tools/algorithm');
      return;
    }

    // 初始化算法信息
    const algorithmInfo = {
      description: state.description,
      computingSteps: [
        {
          id: 'init',
          title: '环境初始化',
          description: '配置计算环境和依赖',
          status: 'pending'
        },
        {
          id: 'data',
          title: '数据准备',
          description: '处理输入数据格式',
          status: 'pending'
        },
        {
          id: 'compute',
          title: '计算执行',
          description: '运行计算任务',
          status: 'pending'
        },
        {
          id: 'analyze',
          title: '结果分析',
          description: '分析计算结果',
          status: 'pending'
        }
      ]
    };

    // 设置初始状态
    setComputingSteps(algorithmInfo.computingSteps);
    
    // 如果是新建算法,自动开始计算
    if (state.isNew) {
      startComputation(algorithmInfo.computingSteps);
    }

  }, [state, navigate]);

  const startComputation = async (steps: ComputingStep[]) => {
    console.log('Starting computation with steps:', steps);
    setIsComputing(true);

    for (let i = 0; i < steps.length; i++) {
      console.log(`Processing step ${i + 1}/${steps.length}`);
      setCurrentStep(i);
      
      // 更新步骤状态
      setComputingSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index === i ? 'processing' : step.status,
        progress: index === i ? 0 : step.progress
      })));

      // 模拟步骤进度
      for (let progress = 0; progress <= 100; progress += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setComputingSteps(prev => prev.map((step, index) => ({
          ...step,
          progress: index === i ? progress : step.progress
        })));
      }

      // 标记步骤完成
      setComputingSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index === i ? 'completed' : step.status,
        progress: index === i ? 100 : step.progress
      })));
    }

    console.log('Computation complete');
    setIsComputing(false);
    setComputationComplete(true);
    setActiveTab('results');
  };

  const handleShowResults = () => {
    console.log('Showing results');
    setComputationComplete(true);
    setActiveTab('results');
  };

  // 如果没有state,返回null(已经在useEffect中处理了重定向)
  if (!state?.algorithmId) return null;

  return (
    <div className="h-screen flex flex-col">
      <ComputingHeader 
        title={state.title}
        steps={computingSteps}
        currentStep={currentStep}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <ChatPanel 
          steps={computingSteps}
          currentStep={currentStep}
        />
        
        <div className="flex-1 flex flex-col">
          <div className="border-b bg-white">
            <div className="flex items-center px-4">
              <button
                onClick={() => setActiveTab('code')}
                className={`
                  px-4 py-3 text-sm font-medium border-b-2 transition-colors
                  ${activeTab === 'code'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'}
                `}
              >
                代码
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`
                  px-4 py-3 text-sm font-medium border-b-2 transition-colors
                  ${activeTab === 'results'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'}
                `}
              >
                结果
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {activeTab === 'code' ? (
              <CodePanel 
                onShowResults={handleShowResults}
                steps={computingSteps}
                currentStep={currentStep}
              />
            ) : (
              <ResultsPanel 
                steps={computingSteps}
                currentStep={currentStep}
                isComputing={isComputing}
                isComplete={computationComplete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}