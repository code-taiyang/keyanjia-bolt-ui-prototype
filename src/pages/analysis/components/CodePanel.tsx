import React from 'react';
import { FileCode } from 'lucide-react';

interface CodePanelProps {
  config: any;
}

export function CodePanel({ config }: CodePanelProps) {
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);

  const files = [
    {
      id: 'analysis',
      name: 'analysis.py',
      content: `import pandas as pd
import numpy as np
from scipy import stats

def analyze_data(df):
    # Basic statistics
    basic_stats = df.describe()
    
    # Correlation analysis
    correlation = df.corr()
    
    return {
        'basic_stats': basic_stats,
        'correlation': correlation
    }`,
      language: 'python'
    }
  ];

  return (
    <div className="h-full flex">
      <div className="w-64 border-r bg-gray-50">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">分析代码</h3>
          <div className="space-y-2">
            {files.map(file => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file.id)}
                className={`w-full flex items-center p-2 rounded-lg text-left text-sm transition-colors ${
                  selectedFile === file.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedFile ? (
          <>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <FileCode className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  {files.find(f => f.id === selectedFile)?.name}
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <pre className="h-full font-mono text-sm bg-gray-50 p-4 rounded-lg overflow-auto">
                {files.find(f => f.id === selectedFile)?.content}
              </pre>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
            选择代码文件以查看内容
          </div>
        )}
      </div>
    </div>
  );
}