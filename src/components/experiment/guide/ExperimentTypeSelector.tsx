import React from 'react';
import { TestTubes, Microscope, Beaker } from 'lucide-react';

interface ExperimentTypeSelectorProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

export function ExperimentTypeSelector({ selectedType, onSelect }: ExperimentTypeSelectorProps) {
  const experimentTypes = [
    {
      id: 'physical',
      name: '物理实验',
      description: '物理现象和规律的实验研究',
      icon: <TestTubes className="text-blue-600" size={24} />,
      features: ['参数测量', '数据采集', '误差分析']
    },
    {
      id: 'chemical',
      name: '化学实验',
      description: '化学反应和物质性质研究',
      icon: <Beaker className="text-purple-600" size={24} />,
      features: ['反应条件', '产物分析', '动力学研究']
    },
    {
      id: 'biological',
      name: '生物实验',
      description: '生物学现象和过程研究',
      icon: <Microscope className="text-green-600" size={24} />,
      features: ['样品制备', '显微观察', '数据统计']
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-medium text-gray-900">实验类型</h2>
        <p className="text-sm text-gray-500 mt-1">选择合适的实验类型，我们将为您推荐对应的实验方案</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {experimentTypes.map((type) => (
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