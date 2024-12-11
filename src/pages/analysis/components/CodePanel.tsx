import React, { useState, useEffect } from 'react';
import { FileCode } from 'lucide-react';
import Editor from "@monaco-editor/react";

interface CodeFile {
  id: string;
  name: string;
  content: string;
  language: string;
}

interface CodePanelProps {
  config: {
    objective: string;
    files: Array<{
      id: string;
      name: string;
      size: string;
      uploadTime: string;
    }>;
  };
}

const SAMPLE_CODE = {
  descriptive: `import pandas as pd
import numpy as np
from scipy import stats

def analyze_descriptive(df):
    """
    Perform descriptive analysis on the dataset
    Parameters:
        df (pd.DataFrame): Input dataset for analysis
    Returns:
        dict: Dictionary containing descriptive statistics
    """
    # Basic statistics
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    basic_stats = df[numeric_cols].describe()
    
    # Check for missing values
    missing_values = df.isnull().sum()
    
    # Distribution analysis
    skewness = df[numeric_cols].skew()
    kurtosis = df[numeric_cols].kurtosis()
    
    # Additional statistics
    quartiles = df[numeric_cols].quantile([0.25, 0.5, 0.75])
    
    return {
        'basic_stats': basic_stats,
        'missing_values': missing_values,
        'distribution': {
            'skewness': skewness,
            'kurtosis': kurtosis,
            'quartiles': quartiles
        }
    }

# Analysis objective:
"""
{objective}
"""

# Sample usage:
if __name__ == "__main__":
    # Load data
    data = pd.read_csv("dataset.csv")
    
    # Perform analysis
    results = analyze_descriptive(data)
    
    # Print results
    print("Basic Statistics:\\n", results['basic_stats'])
    print("\\nMissing Values:\\n", results['missing_values'])
    print("\\nDistribution Analysis:\\n", results['distribution'])`,

  correlation: `import pandas as pd
import numpy as np
from scipy import stats
import seaborn as sns

def analyze_correlation(df):
    """
    Perform correlation analysis on numeric variables
    Parameters:
        df (pd.DataFrame): Input dataset for analysis
    Returns:
        dict: Dictionary containing correlation analysis results
    """
    # Select numeric columns
    numeric_df = df.select_dtypes(include=[np.number])
    
    # Compute correlation matrix
    correlation_matrix = numeric_df.corr()
    
    # Compute p-values for correlations
    def calculate_pvalues(df):
        dfcols = pd.DataFrame(columns=df.columns)
        pvalues = dfcols.transpose().join(dfcols, how='outer')
        for r in df.columns:
            for c in df.columns:
                pvalues[r][c] = round(stats.pearsonr(df[r], df[c])[1], 4)
        return pvalues
    
    pvalues = calculate_pvalues(numeric_df)
    
    # Find significant correlations
    significant_corr = []
    for i in range(len(correlation_matrix.columns)):
        for j in range(i):
            if abs(correlation_matrix.iloc[i, j]) > 0.5 and pvalues.iloc[i, j] < 0.05:
                significant_corr.append({
                    'var1': correlation_matrix.columns[i],
                    'var2': correlation_matrix.columns[j],
                    'correlation': correlation_matrix.iloc[i, j],
                    'pvalue': pvalues.iloc[i, j]
                })
    
    return {
        'correlation_matrix': correlation_matrix,
        'pvalues': pvalues,
        'significant_correlations': significant_corr
    }

# Analysis objective:
"""
{objective}
"""

# Sample usage:
if __name__ == "__main__":
    # Load data
    data = pd.read_csv("dataset.csv")
    
    # Perform analysis
    results = analyze_correlation(data)
    
    # Print results
    print("Significant Correlations:")
    for corr in results['significant_correlations']:
        print(f"{corr['var1']} vs {corr['var2']}: r={corr['correlation']:.3f} (p={corr['pvalue']:.4f})")`,

  visualization: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def create_visualizations(df):
    """
    Create various visualizations for the dataset
    Parameters:
        df (pd.DataFrame): Input dataset for visualization
    Returns:
        dict: Dictionary containing figure objects
    """
    # Set style
    plt.style.use('seaborn')
    figures = {}
    
    # Distribution plots
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    dist_fig = plt.figure(figsize=(15, 10))
    for i, col in enumerate(numeric_cols[:4]):
        plt.subplot(2, 2, i+1)
        sns.histplot(data=df, x=col, kde=True)
        plt.title(f'Distribution of {col}')
    plt.tight_layout()
    figures['distributions'] = dist_fig
    
    # Correlation heatmap
    corr_fig = plt.figure(figsize=(10, 8))
    sns.heatmap(df[numeric_cols].corr(), annot=True, cmap='coolwarm')
    plt.title('Correlation Heatmap')
    figures['correlation'] = corr_fig
    
    # Box plots for categorical variables
    categorical_cols = df.select_dtypes(include=['object']).columns
    if len(categorical_cols) > 0:
        box_fig = plt.figure(figsize=(12, 6))
        for i, col in enumerate(categorical_cols[:2]):
            plt.subplot(1, 2, i+1)
            sns.boxplot(data=df, x=col, y=numeric_cols[0])
            plt.title(f'{numeric_cols[0]} by {col}')
            plt.xticks(rotation=45)
        plt.tight_layout()
        figures['boxplots'] = box_fig
    
    return figures

# Analysis objective:
"""
{objective}
"""

# Sample usage:
if __name__ == "__main__":
    # Load data
    data = pd.read_csv("dataset.csv")
    
    # Create visualizations
    figures = create_visualizations(data)
    
    # Save figures
    for name, fig in figures.items():
        fig.savefig(f"{name}.png")
        plt.close(fig)`
};

export function CodePanel({ config }: CodePanelProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');

  const files: CodeFile[] = [
    {
      id: 'descriptive',
      name: 'descriptive_analysis.py',
      content: SAMPLE_CODE.descriptive.replace('{objective}', config.objective),
      language: 'python'
    },
    {
      id: 'correlation',
      name: 'correlation_analysis.py',
      content: SAMPLE_CODE.correlation.replace('{objective}', config.objective),
      language: 'python'
    },
    {
      id: 'visualization',
      name: 'visualization.py',
      content: SAMPLE_CODE.visualization.replace('{objective}', config.objective),
      language: 'python'
    }
  ];

  useEffect(() => {
    if (files.length > 0 && !selectedFile) {
      setSelectedFile(files[0].id);
      setEditorContent(files[0].content);
    }
  }, []);

  useEffect(() => {
    if (selectedFile) {
      const file = files.find(f => f.id === selectedFile);
      if (file) {
        setEditorContent(file.content);
      }
    }
  }, [selectedFile]);

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
            <div className="flex-1 overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="python"
                value={editorContent}
                onChange={(value) => setEditorContent(value || '')}
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
                  wordWrap: 'on',
                  renderWhitespace: 'selection',
                  rulers: [80, 100],
                  suggest: {
                    showKeywords: true,
                    showSnippets: true
                  }
                }}
                loading={
                  <div className="h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
                  </div>
                }
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