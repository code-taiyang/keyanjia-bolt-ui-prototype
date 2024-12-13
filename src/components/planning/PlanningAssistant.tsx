import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { RecentPlans } from './recent/RecentPlans';
import { PlanningGuide } from './guide/PlanningGuide';
import { usePlanningStore } from '../../stores/planningStore';
import { useNavigate } from 'react-router-dom';

export function PlanningAssistant() {
  const [showNewPlan, setShowNewPlan] = useState(false);
  const addPlan = usePlanningStore(state => state.addPlan);
  const navigate = useNavigate();

  const handleNewPlan = (data: any) => {
    const planId = Date.now().toString();
    // 添加更多规划配置
    const planConfig = {
      id: planId,
      title: data.title,
      description: data.description,
      type: data.type,
      status: 'draft',
      progress: 0,
      content: '',
      outline: [],
      // 新增字段
      direction: data.direction || {},
      resources: data.resources || {},
      team: data.team || [],
      milestones: data.milestones || [],
      tasks: data.tasks || [],
      dependencies: data.dependencies || [],
      timeline: data.timeline || {},
      progress_tracking: {
        current_phase: '',
        completed_tasks: 0,
        total_tasks: 0,
        last_updated: new Date().toISOString()
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    addPlan(planConfig);

    navigate(`/planning/${planId}`, {
      state: {
        ...planConfig,
        isNew: true
      }
    });
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">研究规划</h1>
            <p className="text-gray-500 mt-1">AI驱动的研究规划助手</p>
          </div>
          
          <button 
            onClick={() => setShowNewPlan(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
            <span>新建规划</span>
          </button>
        </div>

        <div className="space-y-8">
          <RecentPlans />
        </div>

        {showNewPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
              <PlanningGuide 
                onClose={() => setShowNewPlan(false)}
                onSubmit={handleNewPlan}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}