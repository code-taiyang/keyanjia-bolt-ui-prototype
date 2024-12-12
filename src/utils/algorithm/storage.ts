import { AlgorithmInfo, ComputingStep } from '../../types/algorithm';

const DEFAULT_COMPUTING_STEPS: ComputingStep[] = [
  {
    id: 'init',
    title: '环境初始化',
    description: '配置计算环境和依赖',
    status: 'pending'
  },
  {
    id: 'data',
    title: '数据准备',
    description: '处理输入数据格式',
    status: 'pending'
  },
  {
    id: 'compute',
    title: '计算执行',
    description: '运行计算任务',
    status: 'pending'
  },
  {
    id: 'analyze',
    title: '结果分析',
    description: '分析计算结果',
    status: 'pending'
  }
];

export function getAlgorithmInfo(): AlgorithmInfo | null {
  try {
    const storedInfo = localStorage.getItem('algorithm_info');
    if (!storedInfo) return null;

    const parsedInfo = JSON.parse(storedInfo);
    return {
      description: parsedInfo.description || '',
      algorithmId: parsedInfo.algorithmId || '',
      computingSteps: parsedInfo.computingSteps || DEFAULT_COMPUTING_STEPS
    };
  } catch (error) {
    console.error('Failed to parse algorithm info:', error);
    return null;
  }
}

export function setAlgorithmInfo(info: Partial<AlgorithmInfo>): void {
  try {
    const currentInfo = getAlgorithmInfo() || {
      description: '',
      algorithmId: '',
      computingSteps: DEFAULT_COMPUTING_STEPS
    };
    
    const updatedInfo = {
      ...currentInfo,
      ...info
    };

    localStorage.setItem('algorithm_info', JSON.stringify(updatedInfo));
  } catch (error) {
    console.error('Failed to save algorithm info:', error);
  }
}

export function clearAlgorithmInfo(): void {
  localStorage.removeItem('algorithm_info');
}