import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatPanel } from './chat/ChatPanel';
import { CodePanel } from './code/CodePanel';
import { ResultsPanel } from './results/ResultsPanel';
import { ComputingHeader } from './ComputingHeader';

interface ComputingStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress?: number;
}

export function ComputingEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'code' | 'results'>('code');
  const [computingSteps, setComputingSteps] = useState<ComputingStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isComputing, setIsComputing] = useState(false);
  const [computationComplete, setComputationComplete] = useState(false);

  useEffect(() => {
    console.log('Location state:', location.state);
    // Redirect if no state
    if (!location.state?.computationId) {
      console.log('No computation ID found, redirecting...');
      navigate('/tools/coding');
      return;
    }

    // Load computation info
    const computationInfo = localStorage.getItem('computation_info');
    console.log('Computation info:', computationInfo);
    
    if (computationInfo) {
      try {
        const { description, computingSteps } = JSON.parse(computationInfo);
        console.log('Parsed computation info:', { description, computingSteps });
        setComputingSteps(computingSteps);
        
        // Start computation process for new computations
        if (location.state.isNewComputation) {
          console.log('Starting new computation...');
          startComputation(computingSteps);
        }
      } catch (error) {
        console.error('Failed to parse computation info:', error);
      }
    }
  }, [location.state, navigate]);

  const startComputation = async (steps: ComputingStep[]) => {
    console.log('Starting computation with steps:', steps);
    setIsComputing(true);

    for (let i = 0; i < steps.length; i++) {
      console.log(`Processing step ${i + 1}/${steps.length}`);
      setCurrentStep(i);
      
      // Update step status
      setComputingSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index === i ? 'processing' : step.status,
        progress: index === i ? 0 : step.progress
      })));

      // Simulate step progress
      for (let progress = 0; progress <= 100; progress += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setComputingSteps(prev => prev.map((step, index) => ({
          ...step,
          progress: index === i ? progress : step.progress
        })));
      }

      // Mark step as completed
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

  return (
    <div className="h-screen flex flex-col">
      <ComputingHeader 
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