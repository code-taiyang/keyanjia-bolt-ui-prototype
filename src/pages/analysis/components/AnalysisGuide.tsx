import React, { useState } from 'react';
import { FileSpreadsheet, ChevronRight, Brain } from 'lucide-react';

interface AnalysisConfig {
  objective: string;
  dataType: string;
  analysisType: string[];
  requirements: string;
}

interface AnalysisGuideProps {
  onSubmit: (config: AnalysisConfig) => void;
}

const analysisTypes = [
  { id: 'descriptive', label: '描述性统计', description: '数据的基本特征分析' },
  { id: 'correlation', label: '相关性分析', description: '变量之间的关系分析' },
  { id: 'regression', label: '回归分析', description: '预测和因果关系分析' },
  { id: 'clustering', label: '聚类分析', description: '数据分组和模式识别' },
  { id: 'timeSeries', label: '时间序列分析', description: '时间维度的数据分析' },
  { id: 'dimension', label: '降维分析', description: '数据降维和特征提取' }
];

const dataTypes = [
  { id: 'numerical', label: '数值型数据' },
  { id: 'categorical', label: '分类数据' },
  { id: 'timeSeries', label: '时间序列数据' },
  { id: 'text', label: '文本数据' },
  { id: 'mixed', label: '混合数据' }
];

export function AnalysisGuide({ onSubmit }: AnalysisGuideProps) {
  const [config, setConfig] = useState<AnalysisConfig>({
    objective: '',
    dataType: '',
    analysisType: [],
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(config);
    }
  };

  const isValid = config.objective && config.dataType && config.analysisType.length > 0;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
          <Brain className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">数据分析助手</h1>
        <p className="mt-2 text-lg text-gray-600">
          告诉我您的分析需求，我将为您提供专业的数据分析服务
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 分析目标 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            分析目标
          </label>
          <textarea
            value={config.objective}
            onChange={(e) => setConfig({ ...config, objective: e.target.value })}
            placeholder="请描述您想要达成的分析目标，例如：分析用户购买行为与年龄、收入的关系..."
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 resize-none"
            rows={3}
          />
        </div>

        {/* 数据类型 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            数据类型
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dataTypes.map((type) => (
              <label
                key={type.id}
                className={`
                  relative flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer
                  transition-all duration-200
                  ${config.dataType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <input
                  type="radio"
                  name="dataType"
                  value={type.id}
                  checked={config.dataType === type.id}
                  onChange={(e) => setConfig({ ...config, dataType: e.target.value })}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 分析类型 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            分析类型（可多选）
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {analysisTypes.map((type) => (
              <label
                key={type.id}
                className={`
                  relative flex items-start p-4 rounded-lg border-2 cursor-pointer
                  transition-all duration-200
                  ${config.analysisType.includes(type.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                <input
                  type="checkbox"
                  value={type.id}
                  checked={config.analysisType.includes(type.id)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfig({
                      ...config,
                      analysisType: e.target.checked
                        ? [...config.analysisType, value]
                        : config.analysisType.filter(t => t !== value)
                    });
                  }}
                  className="sr-only"
                />
                <div>
                  <div className="font-medium text-gray-900">{type.label}</div>
                  <div className="mt-1 text-sm text-gray-500">{type.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* 特殊要求 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            特殊要求（可选）
          </label>
          <textarea
            value={config.requirements}
            onChange={(e) => setConfig({ ...config, requirements: e.target.value })}
            placeholder="如果您有任何特殊的分析要求，请在此说明..."
            className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 resize-none"
            rows={2}
          />
        </div>

        {/* 提交按钮 */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg text-white
              transition-all duration-200
              ${isValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'}
            `}
          >
            <span>下一步</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}