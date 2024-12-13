export const sectionSamples: Record<string, string> = {
  '1. 研究背景': `当前研究领域面临的主要挑战：

1. 技术发展趋势
   - 人工智能技术快速发展
   - 跨学科融合日益加深
   - 新型计算范式不断涌现

2. 存在问题
   - 理论基础需要完善
   - 应用效果有待提升
   - 计算效率需要优化

3. 发展机遇
   - 国家政策支持
   - 市场需求旺盛
   - 技术创新活跃`,

  '2. 研究目标': `总体目标：
建立基于深度学习的气候预测模型，提高预测准确性和时效性。

具体目标：
1. 技术目标
   - 预测准确率提升15%
   - 计算效率提高30%
   - 模型泛化能力增强

2. 应用目标
   - 完成示范应用
   - 形成技术标准
   - 推广应用案例`,

  '3. 研究内容': `主要研究内容：

1. 基础理论研究
   - 模型架构设计
   - 算法优化策略
   - 评估方法体系

2. 关键技术攻关
   - 特征提取方法
   - 模型训练技术
   - 系统集成方案

3. 应用验证
   - 场景适应性
   - 性能评估
   - 应用示范`,

  '4. 实施计划': `项目实施计划：

第一阶段（6个月）：
1. 完成需求分析
2. 建立研究框架
3. 开展预研工作

第二阶段（12个月）：
1. 核心技术研发
2. 原型系统开发
3. 初步测试验证

第三阶段（6个月）：
1. 系统优化完善
2. 应用示范推广
3. 总结评估`,

  '5. 风险分析': `潜在风险：

1. 技术风险
   - 算法性能不达标
   - 计算资源不足
   - 数据质量问题

2. 管理风险
   - 进度延期
   - 人员变动
   - 成本超支

应对措施：
1. 技术储备
2. 资源保障
3. 过程管理`,

  '6. 评估机制': `评估指标：

1. 技术指标
   - 预测准确率
   - 计算效率
   - 模型稳定性

2. 应用指标
   - 用户满意度
   - 系统可用性
   - 推广应用量

评估方法：
1. 定期评审
2. 第三方测试
3. 用户反馈`,

  '参考文献': `[1] Smith, J., et al. (2023). Research Planning in AI Era. Nature, 605(7908), 26-35.

[2] Wang, L., & Johnson, M. (2022). Strategic Planning for Scientific Research. Science of The Total Environment, 853, 158-170.

[3] Zhang, Y., et al. (2023). Research Management and Planning. Research Policy, 52(4), 104-116.

[4] Brown, R., & Davis, S. (2023). Modern Research Planning Methods. Journal of Research Management, 15(2), 78-92.`
};

export function getSectionContent(section: string): string {
  return sectionSamples[section] || '';
}