import React, { useState, useEffect } from 'react';
import { AnalysisToolbar } from './AnalysisToolbar';
import { AnalysisResults } from './visualization/AnalysisResults';
import { generateAnalysisStats } from '../../../utils/analysis';
import { AnalysisResult } from '../../../types/analysis';

interface AnalysisWorkspaceProps {
  config: any;
  files: any[];
  onReset: () => void;
}

export function AnalysisWorkspace({ config, files, onReset }: AnalysisWorkspaceProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [results, setResults] = useState<AnalysisResult[]>([]);

  useEffect(() => {
    const analyze = async () => {
      try {
        const stats = await generateAnalysisStats(files);
        
        const analysisResults: AnalysisResult[] = [
          {
            type: 'overview',
            title: '总记录数',
            description: '数据集中的总记录数',
            data: stats.rowCount
          },
          {
            type: 'overview',
            title: '变量数量',
            description: '数据集中的变量数量',
            data: stats.columnCount
          },
          {
            type: 'overview',
            title: '缺失值',
            description: '数据集中的缺失值数量',
            data: stats.missingValues
          },
          {
            type: 'overview',
            title: '重复记录',
            description: '数据集中的重复记录数',
            data: stats.duplicates
          }
        ];

        setResults(analysisResults);
      } catch (error) {
        console.error('Analysis failed:', error);
      } finally {
        setIsAnalyzing(false);
      }
    };

    analyze();
  }, [files]);

  const handleExport = () => {
    console.log('Export results');
  };

  const handleShare = () => {
    console.log('Share results');
  };

  const handleSettings = () => {
    console.log('Open settings');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium">分析结果</h2>
          <p className="text-sm text-gray-500 mt-1">
            {files.length} 个文件的分析报告
          </p>
        </div>
        <AnalysisToolbar
          onExport={handleExport}
          onShare={handleShare}
          onSettings={handleSettings}
          onReset={onReset}
        />
      </div>

      <div className="p-6">
        <AnalysisResults 
          results={results}
          isLoading={isAnalyzing}
        />
      </div>
    </div>
  );
}