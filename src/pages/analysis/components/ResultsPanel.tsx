import React from 'react';
import { ChevronRight, Users, TrendingUp, LineChart, PieChart } from 'lucide-react';

interface ResultsPanelProps {
  results: {
    type: string;
    data: {
      sampleFeatures: {
        gender: { [key: string]: number };
        grade: { [key: string]: number };
        major: { [key: string]: number };
      };
      variables: {
        [key: string]: {
          mean: number;
          std: number;
          percentile: number;
        };
      };
      correlations: Array<{
        pair: string;
        coefficient: number;
      }>;
    };
    insights: string[];
    recommendations: string[];
  } | null;
  isAnalyzing: boolean;
}

export function ResultsPanel({ results, isAnalyzing }: ResultsPanelProps) {
  if (isAnalyzing) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-500">正在分析数据...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-500">
        运行分析代码以查看结果
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* 样本特征 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <Users className="h-5 w-5 text-blue-500 mr-2" />
            样本特征
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">性别分布</div>
              <div className="text-lg font-medium text-gray-900">
                男生 {results.data.sampleFeatures.gender.male}% / 
                女生 {results.data.sampleFeatures.gender.female}%
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">年级分布</div>
              <div className="text-lg font-medium text-gray-900">
                大一 {results.data.sampleFeatures.grade.freshman}% / 
                大二 {results.data.sampleFeatures.grade.sophomore}%
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">专业类别</div>
              <div className="text-lg font-medium text-gray-900">
                理工类 {results.data.sampleFeatures.major.science}%
              </div>
            </div>
          </div>
        </div>

        {/* 主要变量统计 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
            主要变量描述性统计
          </h3>
          <div className="space-y-4">
            {Object.entries(results.data.variables).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <div className="w-1/3">
                  <div className="text-sm text-gray-600">{key === 'satisfaction' ? '学习满意度' : '教学互动性'}</div>
                  <div className="text-lg font-medium text-gray-900">{value.mean}</div>
                  <div className="text-xs text-gray-500">标准差={value.std}</div>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-500 rounded-full" 
                      style={{ width: `${value.percentile}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 相关性分析 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <LineChart className="h-5 w-5 text-blue-500 mr-2" />
            相关性分析
          </h3>
          <div className="space-y-3">
            {results.data.correlations.map((correlation, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="w-1/3 text-gray-600">{correlation.pair}</span>
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="w-24 text-blue-600 font-medium">
                      r = {correlation.coefficient.toFixed(2)}
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-500 rounded-full" 
                        style={{ width: `${correlation.coefficient * 100}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 研究发现 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center">
            <PieChart className="h-5 w-5 text-blue-500 mr-2" />
            研究发现
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">主要结论</h4>
              <ul className="space-y-2">
                {results.insights.map((insight, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">实践建议</h4>
              <ul className="space-y-2">
                {results.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}