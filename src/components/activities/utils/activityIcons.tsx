import React from 'react';
import { 
  Brain, 
  TestTubes, 
  BookOpen, 
  ScrollText,
  FileText,
  Award,
  Calculator,
  Database,
  LineChart,
  ClipboardList
} from 'lucide-react';
import { ActivityType } from '../types';

export function getActivityIcon(type: ActivityType) {
  const iconProps = { size: 20 };
  
  switch (type) {
    case 'analysis':
      return <Brain className="text-purple-600" {...iconProps} />;
    case 'experiment':
      return <TestTubes className="text-green-600" {...iconProps} />;
    case 'literature':
      return <BookOpen className="text-blue-600" {...iconProps} />;
    case 'writing':
      return <ScrollText className="text-indigo-600" {...iconProps} />;
    case 'patent':
      return <FileText className="text-amber-600" {...iconProps} />;
    case 'grant':
      return <Award className="text-emerald-600" {...iconProps} />;
    case 'algorithm':
      return <Calculator className="text-cyan-600" {...iconProps} />;
    case 'dataset':
      return <Database className="text-orange-600" {...iconProps} />;
    case 'visualization':
      return <LineChart className="text-rose-600" {...iconProps} />;
    case 'planning':
      return <ClipboardList className="text-violet-600" {...iconProps} />;
  }
}