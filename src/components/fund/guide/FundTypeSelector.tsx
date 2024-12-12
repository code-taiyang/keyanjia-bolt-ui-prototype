import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

interface FundTypeSelectorProps {
  selectedType: string;
  onSelect: (type: string) => void;
}

export function FundTypeSelector({ selectedType, onSelect }: FundTypeSelectorProps) {
  const fundTypes = [
    {
      id: 'nsfc',
      name: '自然科学基金',
      description: '国家自然科学基金项目申请',
      icon: <Award className="text-blue-600" size={24} />,
      features: ['面上项目', '青年基金', '重点项目']
    },
    {
      id: 'research',
      name: '重点研发计划',
      description: '国家重点研发计划项目申请',
      icon: <Briefcase className="text-purple-600" size={24} />,
      features: ['重点专项', '示范工程', '创新研究']
    },
    {
      id: 'talent',
      name: '人才项目',
      description: '各类人才计划项目申请',
      icon: <GraduationCap className="text-green-600" size={24} />,
      features: ['杰青', '优青', '青年人才']
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-medium text-gray-900">基金类型</h2>
        <p className="text-sm text-gray-500 mt-1">选择合适的基金类型，我们将为您推荐对应的申请模板</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fundTypes.map((type) => (
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