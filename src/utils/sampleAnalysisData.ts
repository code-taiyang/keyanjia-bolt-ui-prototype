import { AnalysisResult } from '../types/analysis';

export const sampleAnalysisResults: AnalysisResult = {
  type: 'comprehensive',
  data: {
    sampleFeatures: {
      gender: {
        male: 45.8,
        female: 54.2
      },
      grade: {
        freshman: 28.3,
        sophomore: 26.5,
        junior: 24.8,
        senior: 20.4
      },
      major: {
        science: 46.2,
        engineering: 28.5,
        arts: 15.3,
        others: 10.0
      }
    },
    variables: {
      satisfaction: {
        mean: 3.82,
        std: 0.76,
        percentile: 76.4
      },
      interaction: {
        mean: 3.65,
        std: 0.82,
        percentile: 73.0
      }
    },
    correlations: [
      {
        pair: "教学互动性与满意度",
        coefficient: 0.68
      },
      {
        pair: "平台易用性与满意度",
        coefficient: 0.59
      }
    ]
  },
  insights: [
    "学生整体学习满意度较高，平均分达到3.82分（满分5分），表明教学效果良好",
    "教学互动性与学习满意度呈现显著正相关(r=0.68)，说明互动教学对提升满意度有重要作用",
    "平台易用性与满意度也呈现中等程度正相关(r=0.59)，建议继续优化平台交互体验",
    "理工类专业学生占比较高(74.7%)，可能需要针对不同专业背景设计差异化教学策略"
  ],
  recommendations: [
    "加强师生互动环节设计，增加课堂讨论和实践机会",
    "优化在线学习平台界面，提升用户体验",
    "针对不同专业背景学生，开发个性化的教学资源",
    "建立学习效果反馈机制，及时了解学生需求"
  ]
};