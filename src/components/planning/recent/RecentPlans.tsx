import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PlanningCard } from './PlanningCard';
import { usePlanningStore } from '../../../stores/planningStore';

export function RecentPlans() {
  const navigate = useNavigate();
  const plans = usePlanningStore(state => state.plans);

  const handlePlanClick = (plan: any) => {
    navigate(`/planning/${plan.id}`, {
      state: {
        title: plan.title,
        description: plan.description,
        type: plan.type,
        isNew: false
      }
    });
  };

  return (
    // ... rest of the component code
  );
}