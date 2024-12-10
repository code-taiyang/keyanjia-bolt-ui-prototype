import { Paper, ChartFormulaItem } from '../types';

export function generatePaperData(filter?: 'all' | 'recent' | 'starred'): Paper[] {
  const papers: Paper[] = [
    {
      id: '1',
      title: '基于深度学习的优化算法研究',
      authors: ['张三', '赵六', 'Sarah Chen'],
      journal: 'Cell',
      references: 45,
      lastOperated: '10分钟前',
      status: '创建',
      isStarred: true,
      abstract: {
        background: '深度学习算法的优化一直是研究热点',
        purpose: '提出一种新的优化方法',
        methods: '通过改进梯度下降算法',
        conclusion: '实验表明该方法效果显著'
      },
      citations: [
        {
          title: '深度学习优化方法综述',
          authors: ['张三', '赵六'],
          source: 'IEEE Transactions',
          year: '2023'
        },
        {
          title: '机器学习算法优化研究',
          authors: ['Sarah Chen', '张三'],
          source: 'Nature Machine Intelligence',
          year: '2024'
        },
        {
          title: '神经网络优化新方法',
          authors: ['赵六', '李四'],
          source: 'Science',
          year: '2023'
        },
        {
          title: '深度学习在优化中的应用',
          authors: ['王五', 'John Smith'],
          source: 'ICML',
          year: '2023'
        },
        {
          title: '优化算法效率研究',
          authors: ['David Wilson', '张三'],
          source: 'NeurIPS',
          year: '2024'
        }
      ]
    },
    {
      id: '2',
      title: '神经网络在气候预测中的应用',
      authors: ['李四', '王五', 'John Smith'],
      journal: 'Science',
      references: 38,
      lastOperated: '2小时前',
      status: '引用',
      abstract: {
        background: '气候变化预测是当前环境科学研究的重要课题',
        purpose: '探索深度神经网络在气候预测中的应用潜力',
        methods: '构建了一个基于LSTM的气候预测模型',
        conclusion: '模型在长期气候趋势预测上表现出色'
      },
      citations: [
        {
          title: '气候预测模型研究',
          authors: ['李四', 'John Smith'],
          source: 'Nature Climate Change',
          year: '2023'
        },
        {
          title: '深度学习在环境科学中的应用',
          authors: ['王五', 'Sarah Chen'],
          source: 'Environmental Science',
          year: '2024'
        },
        {
          title: '气候变化趋势分析',
          authors: ['张三', 'Mary Johnson'],
          source: 'Climate Dynamics',
          year: '2023'
        },
        {
          title: 'LSTM在时序预测中的应用',
          authors: ['David Wilson', '李四'],
          source: 'Neural Networks',
          year: '2024'
        },
        {
          title: '气候数据分析方法',
          authors: ['王五', 'John Smith'],
          source: 'Scientific Reports',
          year: '2023'
        }
      ]
    },
    {
      id: '3',
      title: '深度强化学习算法改进研究',
      authors: ['王五', '张三', 'David Wilson'],
      journal: 'ICML',
      references: 42,
      lastOperated: '1天前',
      status: '精读完成',
      isStarred: true,
      abstract: {
        background: '强化学习在复杂决策问题中具有广泛应用',
        purpose: '提出一种改进的深度强化学习算法',
        methods: '结合注意力机制和记忆网络的新型架构',
        conclusion: '在多个标准测试环境中取得了最优性能'
      },
      citations: [
        {
          title: '强化学习算法综述',
          authors: ['王五', 'David Wilson'],
          source: 'Machine Learning',
          year: '2023'
        },
        {
          title: '深度强化学习新进展',
          authors: ['张三', 'Sarah Chen'],
          source: 'AAAI',
          year: '2024'
        },
        {
          title: '注意力机制在强化学习中的应用',
          authors: ['李四', 'John Smith'],
          source: 'Neural Computation',
          year: '2023'
        },
        {
          title: '记忆增强型强化学习',
          authors: ['王五', 'Mary Johnson'],
          source: 'ICLR',
          year: '2024'
        },
        {
          title: '强化学习算法性能分析',
          authors: ['David Wilson', '张三'],
          source: 'ArXiv',
          year: '2023'
        }
      ]
    },
    {
      id: '4',
      title: '图神经网络在社交网络分析中的应用',
      authors: ['赵六', '李四', 'Mary Johnson'],
      journal: 'KDD',
      references: 35,
      lastOperated: '2天前',
      status: '创建',
      abstract: {
        background: '社交网络的复杂性需要先进的分析方法',
        purpose: '研究图神经网络在社交网络分析中的效果',
        methods: '设计了新的图卷积网络结构',
        conclusion: '显著提高了社交网络特征提取的效率'
      },
      citations: [
        {
          title: '图神经网络研究进展',
          authors: ['赵六', 'Mary Johnson'],
          source: 'TKDE',
          year: '2023'
        },
        {
          title: '社交网络分析方法',
          authors: ['李四', 'Sarah Chen'],
          source: 'WWW',
          year: '2024'
        },
        {
          title: '图卷积网络最新进展',
          authors: ['张三', 'David Wilson'],
          source: 'ICDM',
          year: '2023'
        },
        {
          title: '社交网络特征学习',
          authors: ['王五', 'John Smith'],
          source: 'WSDM',
          year: '2024'
        },
        {
          title: '图神经网络应用研究',
          authors: ['赵六', '李四'],
          source: 'CIKM',
          year: '2023'
        }
      ]
    },
    {
      id: '5',
      title: '自然语言处理中的预训练模型研究',
      authors: ['张三', '王五', 'Sarah Chen'],
      journal: 'ACL',
      references: 50,
      lastOperated: '3天前',
      status: '引用',
      abstract: {
        background: '预训练模型已成为NLP研究的重要方向',
        purpose: '探索更高效的预训练方法',
        methods: '提出了新的预训练目标和模型结构',
        conclusion: '在多个下游任务中取得显著提升'
      },
      citations: [
        {
          title: '预训练语言模型综述',
          authors: ['张三', 'Sarah Chen'],
          source: 'TACL',
          year: '2023'
        },
        {
          title: 'NLP模型优化研究',
          authors: ['王五', 'John Smith'],
          source: 'EMNLP',
          year: '2024'
        },
        {
          title: '语言模型预训练方法',
          authors: ['李四', 'David Wilson'],
          source: 'NAACL',
          year: '2023'
        },
        {
          title: '预训练模型下游应用',
          authors: ['张三', 'Mary Johnson'],
          source: 'COLING',
          year: '2024'
        },
        {
          title: '高效预训练方法研究',
          authors: ['王五', 'Sarah Chen'],
          source: 'ACL',
          year: '2023'
        }
      ]
    },
    {
      id: '6',
      title: '联邦学习隐私保护机制研究',
      authors: ['李四', '张三', 'David Wilson'],
      journal: 'IEEE Security & Privacy',
      references: 32,
      lastOperated: '4天前',
      status: '精读完成',
      abstract: {
        background: '联邦学习中的隐私保护至关重要',
        purpose: '设计新的隐私保护机制',
        methods: '结合差分隐私和安全多方计算',
        conclusion: '在保护隐私的同时保持了模型性能'
      },
      citations: [
        {
          title: '联邦学习安全性研究',
          authors: ['李四', 'David Wilson'],
          source: 'USENIX Security',
          year: '2023'
        },
        {
          title: '差分隐私最新进展',
          authors: ['张三', 'Sarah Chen'],
          source: 'CCS',
          year: '2024'
        },
        {
          title: '安全多方计算综述',
          authors: ['王五', 'John Smith'],
          source: 'NDSS',
          year: '2023'
        },
        {
          title: '联邦学习系统设计',
          authors: ['李四', 'Mary Johnson'],
          source: 'S&P',
          year: '2024'
        },
        {
          title: '隐私保护机器学习',
          authors: ['张三', 'David Wilson'],
          source: 'PETS',
          year: '2023'
        }
      ]
    },
    {
      id: '7',
      title: '多模态深度学习模型研究',
      authors: ['王五', '赵六', 'Sarah Chen'],
      journal: 'CVPR',
      references: 48,
      lastOperated: '5天前',
      status: '创建',
      isStarred: true,
      abstract: {
        background: '多模态学习是人工智能的重要研究方向',
        purpose: '提出新的多模态特征融合方法',
        methods: '设计了跨模态注意力机制',
        conclusion: '实现了更好的模态间特征对齐'
      },
      citations: [
        {
          title: '多模态学习综述',
          authors: ['王五', 'Sarah Chen'],
          source: 'TPAMI',
          year: '2023'
        },
        {
          title: '跨模态特征学习',
          authors: ['赵六', 'John Smith'],
          source: 'ICCV',
          year: '2024'
        },
        {
          title: '多模态注意力机制',
          authors: ['张三', 'David Wilson'],
          source: 'ECCV',
          year: '2023'
        },
        {
          title: '模态融合新方法',
          authors: ['李四', 'Mary Johnson'],
          source: 'NeurIPS',
          year: '2024'
        },
        {
          title: '多模态表示学习',
          authors: ['王五', '赵六'],
          source: 'AAAI',
          year: '2023'
        }
      ]
    },
    {
      id: '8',
      title: '知识图谱补全算法研究',
      authors: ['赵六', '王五', 'John Smith'],
      journal: 'AAAI',
      references: 36,
      lastOperated: '6天前',
      status: '引用',
      abstract: {
        background: '知识图谱补全是构建完整知识库的关键',
        purpose: '提出新的知识图谱补全算法',
        methods: '基于图神经网络的推理方法',
        conclusion: '显著提高了补全任务的准确率'
      },
      citations: [
        {
          title: '知识图谱补全综述',
          authors: ['赵六', 'John Smith'],
          source: 'TKDE',
          year: '2023'
        },
        {
          title: '图神经网络在知识图谱中的应用',
          authors: ['王五', 'Sarah Chen'],
          source: 'WSDM',
          year: '2024'
        },
        {
          title: '知识推理新方法',
          authors: ['张三', 'David Wilson'],
          source: 'ICLR',
          year: '2023'
        },
        {
          title: '知识图谱表示学习',
          authors: ['李四', 'Mary Johnson'],
          source: 'WWW',
          year: '2024'
        },
        {
          title: '知识补全算法研究',
          authors: ['赵六', '王五'],
          source: 'KDD',
          year: '2023'
        }
      ]
    },
    {
      id: '9',
      title: '量子机器学习算法研究',
      authors: ['张三', '李四', 'Mary Johnson'],
      journal: 'Nature Physics',
      references: 40,
      lastOperated: '7天前',
      status: '精读完成',
      abstract: {
        background: '量子计算为机器学习带来新的可能',
        purpose: '探索量子机器学习算法的优势',
        methods: '设计了混合量子-经典学习框架',
        conclusion: '在特定问题上展现出量子优势'
      },
      citations: [
        {
          title: '量子机器学习综述',
          authors: ['张三', 'Mary Johnson'],
          source: 'Reviews of Modern Physics',
          year: '2023'
        },
        {
          title: '量子-经典混合算法',
          authors: ['李四', 'Sarah Chen'],
          source: 'Quantum',
          year: '2024'
        },
        {
          title: '量子计算优势研究',
          authors: ['王五', 'John Smith'],
          source: 'Nature',
          year: '2023'
        },
        {
          title: '量子机器学习应用',
          authors: ['张三', 'David Wilson'],
          source: 'Science',
          year: '2024'
        },
        {
          title: '量子算法效率分析',
          authors: ['李四', 'Mary Johnson'],
          source: 'Physical Review X',
          year: '2023'
        }
      ]
    }
  ];

  if (filter === 'recent') {
    return papers.slice(0, 3);
  }
  if (filter === 'starred') {
    return papers.filter(paper => paper.isStarred);
  }
  return papers;
}

export function generateChartFormulaData(): ChartFormulaItem[] {
  const items: ChartFormulaItem[] = [];
  const types: Array<'image' | 'table' | 'formula' | 'code'> = ['image', 'table', 'formula', 'code'];
  
  // Generate 20 items (5 of each type)
  for (let i = 0; i < 20; i++) {
    const type = types[Math.floor(i / 5)];
    const number = (i % 5) + 1;
    
    items.push({
      id: `item-${i + 1}`,
      paperId: `paper-${Math.floor(i / 4) + 1}`,
      title: `基于深度学习的优化算法研究 - ${type} ${number}`,
      type,
      number,
      description: getDescription(type, number),
      preview: `https://picsum.photos/400/300?random=${i}`
    });
  }

  return items;
}

function getDescription(type: 'image' | 'table' | 'formula' | 'code', number: number): string {
  const descriptions = {
    image: [
      '实验结果对比图',
      '模型架构示意图',
      '数据分布可视化',
      '性能评估曲线',
      '算法流程图'
    ],
    table: [
      '实验参数配置表',
      '性能评估指标表',
      '数据统计分析表',
      '算法对比结果表',
      '模型超参数表'
    ],
    formula: [
      '模型损失函数',
      '优化目标函数',
      '理论推导公式',
      '评估指标计算公式',
      '算法核心公式'
    ],
    code: [
      '模型核心实现',
      '数据预处理代码',
      '评估函数实现',
      '优化器配置代码',
      '训练循环代码'
    ]
  };

  return descriptions[type][number - 1];
}