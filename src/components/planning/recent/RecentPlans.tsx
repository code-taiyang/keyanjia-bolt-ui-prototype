import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PlanningCard } from './PlanningCard';
import { usePlanningStore } from '../../../stores/planningStore';

export function RecentPlans() {
  const plans = usePlanningStore(state => state.plans);

  const renderPlanLink = (plan: ReturnType<typeof usePlanningStore>['plans'][0]) => (
    <Link 
      key={plan.id} 
      to={`/planning/${plan.id}`}
      state={{
        planId: plan.id,
        title: plan.title,
        description: plan.description,
        type: plan.type,
        status: plan.status,
        progress: plan.progress,
        milestones: plan.milestones,
        tasks: plan.tasks,
        isNew: false
      }}
    >
      <PlanningCard plan={plan} />
    </Link>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近规划</h2>
        <Link 
          to="/activities?type=planning" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map(renderPlanLink)}
      </div>
    </div>
  );
}