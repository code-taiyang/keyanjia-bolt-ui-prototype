import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { RecentPlans } from './components/RecentPlans';
import { PlanningGuide } from './components/guide/PlanningGuide';
import { Sidebar } from '../../components/layout/Sidebar';

export function PlanningPage() {
  const [showNewPlan, setShowNewPlan] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
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

          {/* Recent Plans Section */}
          <div className="space-y-8">
            <RecentPlans />
          </div>

          {/* Planning Guide Dialog */}
          {showNewPlan && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
                <PlanningGuide onClose={() => setShowNewPlan(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}