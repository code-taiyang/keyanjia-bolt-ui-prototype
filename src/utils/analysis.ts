import { AnalysisStats, DataFile } from '../types/analysis';

export const validateFile = (file: File): string | null => {
  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  const ALLOWED_TYPES = [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain'
  ];

  if (!ALLOWED_TYPES.includes(file.type)) {
    return '不支持的文件类型';
  }
  if (file.size > MAX_FILE_SIZE) {
    return '文件大小超过限制（50MB）';
  }
  return null;
};

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

export const parseCSV = async (file: File): Promise<string[][]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const data = lines.map(line => line.split(','));
      resolve(data);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};

export const generateAnalysisStats = async (files: DataFile[]): Promise<AnalysisStats> => {
  // 模拟数据分析过程
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    rowCount: 1000,
    columnCount: 15,
    missingValues: 23,
    duplicates: 5,
    dataTypes: {
      'age': 'number',
      'gender': 'categorical',
      'income': 'number',
      'date': 'datetime'
    },
    summary: {
      'age': {
        mean: 35.4,
        median: 34,
        std: 12.3,
        min: 18,
        max: 75
      },
      'income': {
        mean: 52000,
        median: 48000,
        std: 15000,
        min: 25000,
        max: 120000
      }
    }
  };
};

export const getAnalysisTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    'descriptive': '描述性统计',
    'correlation': '相关性分析',
    'regression': '回归分析',
    'clustering': '聚类分析',
    'timeSeries': '时间序列',
    'dimension': '降维分析'
  };
  return labels[type] || type;
};

export const getDataTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    'numerical': '数值型数据',
    'categorical': '分类数据',
    'timeSeries': '时间序列数据',
    'text': '文本数据',
    'mixed': '混合数据'
  };
  return labels[type] || type;
};