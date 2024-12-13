import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ExperimentCard } from './ExperimentCard';
import { useExperimentStore } from '../../../stores/experimentStore';

export function RecentExperiments() {
  const experiments = useExperimentStore(state => state.experiments);

  const renderExperimentLink = (experiment: ReturnType<typeof useExperimentStore>['experiments'][0]) => (
    <Link 
      key={experiment.id} 
      to={`/experiment/${experiment.id}`}
      state={{
        experimentId: experiment.id,
        title: experiment.title,
        description: experiment.description,
        type: experiment.type,
        status: experiment.status,
        progress: experiment.progress,
        isNew: false
      }}
    >
      <ExperimentCard experiment={experiment} />
    </Link>
  );

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
        {experiments.map(renderExperimentLink)}
      </div>
    </div>
  );
}