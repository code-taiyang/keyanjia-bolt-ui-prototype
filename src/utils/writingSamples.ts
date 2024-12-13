import { WritingType } from '../types/writing';

interface SectionContent {
  title: string;
  content: string;
}

export const sectionSamples: Record<string, SectionContent> = {
  '摘要': {
    title: '摘要',
    content: `本研究探讨了深度学习在气候变化预测中的应用。通过构建基于长短期记忆网络(LSTM)的深度学习模型,对全球气温变化进行预测。研究结果表明,该模型在预测准确性上优于传统统计方法,平均预测误差降低了15%。本研究为气候变化预测提供了新的方法论参考,对相关领域研究具有重要启示。

关键词：深度学习、气候变化、预测模型、LSTM`
  },
  '1. 引言': {
    title: '引言',
    content: `气候变化是当今全球面临的重大挑战之一。准确预测气候变化趋势对制定应对策略具有重要意义。随着人工智能技术的发展,深度学习在时间序列预测领域展现出巨大潜力。本研究旨在探索深度学习技术在气候变化预测中的应用价值。`
  },
  '1.1 研究背景': {
    title: '研究背景',
    content: `近年来,全球气候变化日益加剧,极端天气事件频发,给社会经济发展带来严重影响。传统的气候预测方法主要依赖于统计模型和数值模拟,但在处理复杂的非线性关系时存在局限性。深度学习技术的快速发展为解决这一问题提供了新的思路。`
  },
  '1.2 研究意义': {
    title: '研究意义',
    content: `本研究具有以下重要意义：

1. 理论意义：探索深度学习在气候科学中的应用,丰富气候预测的方法论体系。

2. 实践意义：提高气候预测的准确性,为气候变化应对策略的制定提供科学依据。

3. 创新意义：将最新的人工智能技术应用于气候科学,推动学科交叉创新。`
  },
  '2. 研究方法': {
    title: '研究方法',
    content: `本研究采用以下研究方法：

1. 数据收集与预处理
- 收集全球气温观测数据
- 数据清洗与标准化
- 特征工程与数据增强

2. 模型构建
- LSTM网络架构设计
- 超参数优化
- 模型训练与验证

3. 性能评估
- 预测准确性分析
- 与基准模型对比
- 稳定性测试`
  },
  '3. 结果': {
    title: '结果',
    content: `研究结果表明：

1. 预测性能
- 平均预测误差降低15%
- R²值达到0.92
- RMSE降低至0.15°C

2. 模型优势
- 更好地捕捉非线性关系
- 对长期趋势预测更准确
- 计算效率提升30%

3. 应用效果
- 成功预测极端天气事件
- 季节性变化预测准确率提高20%
- 模型泛化能力良好`
  },
  '4. 讨论': {
    title: '讨论',
    content: `本研究的主要发现及其意义：

1. 模型创新
- LSTM结构的改进提升了预测准确性
- 注意力机制的引入增强了模型解释性
- 多尺度特征融合提高了预测稳定性

2. 局限性
- 数据质量对模型性能影响显著
- 计算资源需求较高
- 对极端情况的预测仍需改进

3. 未来展望
- 引入更多环境因素
- 开发轻量级模型
- 提高实时预测能力`
  },
  '5. 结论': {
    title: '结论',
    content: `本研究得出以下主要结论：

1. 深度学习模型在气候预测中表现优异,预测准确率显著提升。

2. 改进的LSTM模型能更好地捕捉气温变化的长期依赖关系。

3. 该方法为气候变化研究提供了新的技术路径,具有重要的理论和实践价值。

4. 未来研究方向包括模型优化、多源数据融合和实时预测系统开发。`
  },
  '参考文献': {
    title: '参考文献',
    content: `[1] Smith, J., et al. (2023). Deep Learning Applications in Climate Science. Nature Climate Change, 13(2), 123-135.

[2] Wang, L., & Johnson, M. (2022). LSTM Networks for Time Series Prediction. Journal of Machine Learning Research, 23, 1-15.

[3] Zhang, Y., et al. (2023). Climate Change Prediction: A Review. Reviews of Geophysics, 61(3), 234-256.

[4] Brown, R., & Davis, S. (2023). Artificial Intelligence in Environmental Science. Science, 380(6642), 456-470.`
  }
};

export function getSectionContent(section: string): string {
  const normalizedSection = section.replace(/^\s+/, '').replace(/^\d+\.\s*/, '');
  const sampleContent = sectionSamples[section] || sectionSamples[normalizedSection];
  return sampleContent?.content || '';
}

export function getDefaultContent(type: WritingType['id']): string {
  switch (type) {
    case 'thesis':
      return sectionSamples['摘要'].content;
    case 'journal':
      return sectionSamples['摘要'].content;
    case 'report':
      return sectionSamples['1. 引言'].content;
    default:
      return '';
  }
}