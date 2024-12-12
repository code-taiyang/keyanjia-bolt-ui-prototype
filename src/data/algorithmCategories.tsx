import React from 'react';
import { Brain, Network, Database, BarChart2 } from 'lucide-react';

export const algorithmCategories = [
  {
    id: 'machine-learning',
    name: '机器学习',
    description: '常用机器学习算法',
    icon: <Brain className="text-blue-600" size={24} />,
    algorithms: [
      {
        id: 'linear-regression',
        name: '线性回归',
        description: '基础的监督学习算法，用于预测连续值',
        complexity: 'O(n)',
        tags: ['监督学习', '回归'],
        hot: true
      },
      {
        id: 'logistic-regression',
        name: '逻辑回归',
        description: '用于二分类问题的监督学习算法',
        complexity: 'O(n)',
        tags: ['监督学习', '分类'],
        hot: true
      },
      {
        id: 'decision-tree',
        name: '决策树',
        description: '基于树结构的分类与回归算法',
        complexity: 'O(n log n)',
        tags: ['监督学习', '分类', '回归']
      }
    ]
  },
  {
    id: 'deep-learning',
    name: '深度学习',
    description: '神经网络与深度学习算法',
    icon: <Network className="text-purple-600" size={24} />,
    algorithms: [
      {
        id: 'cnn',
        name: '卷积神经网络',
        description: '适用于图像处理的深度学习模型',
        tags: ['计算机视觉', '图像处理'],
        hot: true
      },
      {
        id: 'rnn',
        name: '循环神经网络',
        description: '处理序列数据的神经网络',
        tags: ['序列处理', '自然语言处理'],
        hot: true
      }
    ]
  },
  {
    id: 'nlp',
    name: '自然语言处理',
    description: '文本处理与分析算法',
    icon: <Database className="text-green-600" size={24} />,
    algorithms: [
      {
        id: 'bert',
        name: 'BERT',
        description: '双向Transformer预训练模型',
        tags: ['预训练模型', '文本表示'],
        hot: true
      },
      {
        id: 'word2vec',
        name: 'Word2Vec',
        description: '词向量训练模型',
        tags: ['词嵌入', '语义表示']
      }
    ]
  },
  {
    id: 'computer-vision',
    name: '计算机视觉',
    description: '图像处理与视觉算法',
    icon: <BarChart2 className="text-orange-600" size={24} />,
    algorithms: [
      {
        id: 'yolo',
        name: 'YOLO目标检测',
        description: '实时目标检测算法',
        tags: ['目标检测', '实时处理'],
        hot: true
      },
      {
        id: 'resnet',
        name: 'ResNet',
        description: '深度残差网络',
        tags: ['图像分类', '特征提取'],
        hot: true
      }
    ]
  }
];