import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { RecentExperiments } from './recent/RecentExperiments';
import { ExperimentGuide } from './guide/ExperimentGuide';
import { useExperimentStore } from '../../stores/experimentStore';
import { useNavigate } from 'react-router-dom';

export function ExperimentAssistant() {
  const [showNewExperiment, setShowNewExperiment] = useState(false);
  const addExperiment = useExperimentStore(state => state.addExperiment);
  const navigate = useNavigate();

  const handleNewExperiment = (data: any) => {
    const experimentId = Date.now().toString();
    // 添加更多实验配置
    const experimentConfig = {
      id: experimentId,
      title: data.title,
      description: data.description,
      type: data.type,
      status: 'draft',
      progress: 0,
      content: '',
      outline: [],
      // 新增字段
      timeline: data.timeline || [],
      resources: data.resources || {},
      parameters: data.parameters || {},
      version: '1.0.0',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addExperiment(experimentConfig);

    navigate(`/experiment/${experimentId}`, {
      state: {
        ...experimentConfig,
        isNew: true
      }
    });
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">实验助手</h1>
            <p className="text-gray-500 mt-1">AI驱动的实验设计与分析助手</p>
          </div>
          
          <button 
            onClick={() => setShowNewExperiment(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建实验</span>
          </button>
        </div>

        <div className="space-y-8">
          <RecentExperiments />
        </div>

        {showNewExperiment && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
              <ExperimentGuide 
                onClose={() => setShowNewExperiment(false)}
                onSubmit={handleNewExperiment}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}