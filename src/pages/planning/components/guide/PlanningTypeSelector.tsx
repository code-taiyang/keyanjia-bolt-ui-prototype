import React from 'react';
import { Target, Brain, ClipboardList } from 'lucide-react';

interface PlanningTypeProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

export function PlanningTypeSelector({ selectedType, onSelect }: PlanningTypeProps) {
  const planTypes = [
    {
      id: 'short_term',
      name: '短期规划',
      description: '3-6个月的研究目标和计划',
      icon: <Target className="text-blue-600" size={24} />,
      features: ['阶段性目标', '任务分解', '时间管理']
    },
    {
      id: 'mid_term',
      name: '中期规划',
      description: '6-12个月的研究方向和重点',
      icon: <Brain className="text-purple-600" size={24} />,
      features: ['研究方向', '资源规划', '里程碑']
    },
    {
      id: 'long_term',
      name: '长期规划',
      description: '1-3年的研究愿景和战略',
      icon: <ClipboardList className="text-green-600" size={24} />,
      features: ['研究愿景', '战略目标', '发展路径']
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-medium text-gray-900">规划类型</h2>
        <p className="text-sm text-gray-500 mt-1">选择合适的规划类型，我们将为您推荐对应的规划模板</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {planTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className={`
              relative w-full p-4 rounded-xl border-2 text-left transition-all duration-200
              hover:shadow-md
              ${selectedType === type.id 
                ? 'border-blue-500 bg-blue-50/50' 
                : 'border-gray-100 hover:border-gray-200'}
            `}
          >
            {selectedType === type.id && (
              <div className="absolute top-3 right-3">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}

            <div className="flex flex-col items-start gap-3">
              <div className={`
                p-2.5 rounded-lg transition-colors duration-200
                ${selectedType === type.id ? 'bg-white' : 'bg-gray-50'}
              `}>
                {type.icon}
              </div>

              <div>
                <div className="font-medium text-gray-900">{type.name}</div>
                <p className="mt-1 text-sm text-gray-500">{type.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {type.features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-0.5 bg-white/60 rounded-full text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}