import React, { useState, useEffect } from 'react';
import { Play, FileCode } from 'lucide-react';
import Editor from "@monaco-editor/react";

interface CodePanelProps {
  onShowResults: () => void;
  steps: Array<{
    id: string;
    title: string;
    description: string;
    status: string;
    progress?: number;
  }>;
  currentStep: number;
}

export function CodePanel({ onShowResults, steps, currentStep }: CodePanelProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [code, setCode] = useState('');

  const files = [
    {
      id: 'main',
      name: 'main.py',
      content: `# Main computation script
import numpy as np
import matplotlib.pyplot as plt

def main():
    # Initialize parameters
    x = np.linspace(-10, 10, 1000)
    y = np.sin(x) / x
    
    # Create visualization
    plt.figure(figsize=(10, 6))
    plt.plot(x, y)
    plt.title('Sinc Function')
    plt.grid(True)
    plt.show()

if __name__ == '__main__':
    main()`
    },
    {
      id: 'utils',
      name: 'utils.py',
      content: `# Utility functions
import numpy as np

def normalize_data(data):
    """Normalize data to [0, 1] range"""
    min_val = np.min(data)
    max_val = np.max(data)
    return (data - min_val) / (max_val - min_val)

def compute_statistics(data):
    """Compute basic statistics"""
    return {
        'mean': np.mean(data),
        'std': np.std(data),
        'min': np.min(data),
        'max': np.max(data)
    }`
    }
  ];

  useEffect(() => {
    if (files.length > 0 && !selectedFile) {
      setSelectedFile(files[0].id);
      setCode(files[0].content);
    }
  }, []);

  const handleRun = () => {
    // Simulate running code
    console.log('Running code...');
    setTimeout(() => {
      onShowResults();
    }, 1000);
  };

  return (
    <div className="h-full flex">
      {/* File Explorer */}
      <div className="w-64 border-r bg-gray-50">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">计算代码</h3>
          <div className="space-y-2">
            {files.map(file => (
              <button
                key={file.id}
                onClick={() => {
                  setSelectedFile(file.id);
                  setCode(file.content);
                }}
                className={`
                  w-full flex items-center p-2 rounded-lg text-left text-sm
                  transition-colors
                  ${selectedFile === file.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-600'}
                `}
              >
                <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Code Editor */}
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
              <button
                onClick={handleRun}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center"
              >
                <Play className="h-4 w-4 mr-1.5" />
                运行
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="python"
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-light"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  readOnly: false,
                  tabSize: 4,
                  insertSpaces: true,
                  wordWrap: 'on'
                }}
              />
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