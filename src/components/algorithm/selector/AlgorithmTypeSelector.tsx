import React from 'react';
import { Brain, Network, Database, BarChart2, GitBranch, Cpu } from 'lucide-react';
import { AlgorithmTypeCard } from './AlgorithmTypeCard';
import { AlgorithmType } from '../../../types/algorithm';

const icons = {
  'brain': Brain,
  'network': Network,
  'database': Database,
  'chart-bar': BarChart2,
  'git-branch': GitBranch,
  'cpu': Cpu
};

interface AlgorithmTypeSelectorProps {
  types: AlgorithmType[];
  selectedType: string;
  onSelect: (typeId: string) => void;
}

export function AlgorithmTypeSelector({ types, selectedType, onSelect }: AlgorithmTypeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="text-xs text-gray-500">选择算法类型</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {types.map((type) => {
          const Icon = icons[type.icon as keyof typeof icons];
          return (
            <AlgorithmTypeCard
              key={type.id}
              type={type}
              isSelected={selectedType === type.id}
              icon={Icon}
              onSelect={() => onSelect(type.id)}
            />
          );
        })}
      </div>
    </div>
  );
}