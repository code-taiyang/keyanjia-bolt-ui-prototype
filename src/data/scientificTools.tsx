import React from 'react';
import { 
  Calculator, 
  Cylinder, 
  Sigma, 
  BarChart2, 
  Boxes 
} from 'lucide-react';
import { ScientificTool } from '../types/scientific';

export const scientificTools: ScientificTool[] = [
  {
    id: 'mathematica',
    name: 'Mathematica',
    description: '强大的科学计算与符号运算平台',
    icon: Sigma,
    categories: [
      {
        name: '物理学研究',
        items: [
          { id: 'physics-numerical', name: '复杂物理模型的数值计算' },
          { id: 'physics-symbolic', name: '理论推导的符号运算' },
          { id: 'physics-visualization', name: '物理现象的可视化模拟' }
        ]
      },
      {
        name: '工程领域',
        items: [
          { id: 'engineering-mechanics', name: '结构力学分析' },
          { id: 'engineering-thermal', name: '热传导计算' },
          { id: 'engineering-control', name: '控制系统建模与仿真' }
        ]
      },
      {
        name: '数据科学',
        items: [
          { id: 'data-processing', name: '大规模数据处理' },
          { id: 'data-statistics', name: '统计分析与建模' },
          { id: 'data-ml', name: '机器学习算法实现' }
        ]
      },
      {
        name: '金融分析',
        items: [
          { id: 'finance-modeling', name: '金融模型构建' },
          { id: 'finance-risk', name: '风险评估' },
          { id: 'finance-prediction', name: '市场预测' }
        ]
      }
    ]
  },
  {
    id: 'comsol',
    name: 'COMSOL Multiphysics',
    description: '多物理场耦合仿真软件',
    icon: Boxes,
    categories: [
      {
        name: '物理场分析',
        items: [
          { id: 'physics-em', name: '电磁场模拟与计算' },
          { id: 'physics-acoustic', name: '声场传播分析' },
          { id: 'physics-fluid', name: '流体力学仿真' }
        ]
      },
      {
        name: '工程应用',
        items: [
          { id: 'engineering-thermal', name: '散热设计优化' },
          { id: 'engineering-stress', name: '结构应力分析' },
          { id: 'engineering-chemical', name: '化学反应器设计' }
        ]
      },
      {
        name: '材料研究',
        items: [
          { id: 'materials-composite', name: '复合材料性能预测' },
          { id: 'materials-semiconductor', name: '半导体器件仿真' },
          { id: 'materials-interface', name: '材料界面行为分析' }
        ]
      }
    ]
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    description: '数值计算与工程仿真平台',
    icon: Calculator,
    categories: [
      {
        name: '信号处理',
        items: [
          { id: 'signal-image', name: '图像与视频处理' },
          { id: 'signal-audio', name: '语音信号分析' },
          { id: 'signal-radar', name: '雷达信号处理' }
        ]
      },
      {
        name: '控制系统',
        items: [
          { id: 'control-auto', name: '自动控制系统设计' },
          { id: 'control-robot', name: '机器人运动规划' },
          { id: 'control-pid', name: 'PID控制器优化' }
        ]
      },
      {
        name: '深度学习',
        items: [
          { id: 'dl-train', name: '神经网络训练' },
          { id: 'dl-vision', name: '计算机视觉应用' },
          { id: 'dl-nlp', name: '自然语言处理' }
        ]
      }
    ]
  },
  {
    id: 'origin',
    name: 'Origin',
    description: '专业科研数据分析与绘图软件',
    icon: BarChart2,
    categories: [
      {
        name: '数据可视化',
        items: [
          { id: 'viz-scientific', name: '高质量科研绘图' },
          { id: 'viz-3d', name: '3D表面图构建' },
          { id: 'viz-contour', name: '等高线图绘制' }
        ]
      },
      {
        name: '数据分析',
        items: [
          { id: 'analysis-fitting', name: '曲线拟合' },
          { id: 'analysis-peak', name: '峰值分析' },
          { id: 'analysis-stats', name: '统计分布研究' }
        ]
      },
      {
        name: '光谱分析',
        items: [
          { id: 'spectral-processing', name: '光谱数据处理' },
          { id: 'spectral-baseline', name: '基线校正' },
          { id: 'spectral-peak', name: '峰值分离' }
        ]
      }
    ]
  },
  {
    id: 'ansys',
    name: 'ANSYS',
    description: '工程仿真与分析软件',
    icon: Cylinder,
    categories: [
      {
        name: '结构分析',
        items: [
          { id: 'structure-static', name: '静力学计算' },
          { id: 'structure-dynamic', name: '动力学仿真' },
          { id: 'structure-fatigue', name: '疲劳分析' }
        ]
      },
      {
        name: '流体力学',
        items: [
          { id: 'fluid-flow', name: '内外流场计算' },
          { id: 'fluid-heat', name: '传热分析' },
          { id: 'fluid-multiphase', name: '多相流模拟' }
        ]
      },
      {
        name: '电磁学',
        items: [
          { id: 'em-antenna', name: '天线设计' },
          { id: 'em-motor', name: '电机性能分析' },
          { id: 'em-compatibility', name: '电磁兼容性研究' }
        ]
      }
    ]
  }
];