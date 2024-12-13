import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ExperimentCard } from './ExperimentCard';
import { useExperimentStore } from '../../../stores/experimentStore';

export function RecentExperiments() {
  const navigate = useNavigate();
  const experiments = useExperimentStore(state => state.experiments);

  const handleExperimentClick = (experiment: any) => {
    navigate(`/experiment/${experiment.id}`, {
      state: {
        title: experiment.title,
        description: experiment.description,
        type: experiment.type,
        isNew: false
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近实验</h2>
        <Link 
          to="/activities?type=experiment" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiments.map((experiment) => (
          <ExperimentCard
            key={experiment.id}
            experiment={experiment}
            onClick={() => handleExperimentClick(experiment)}
          />
        ))}
      </div>
    </div>
  );
}