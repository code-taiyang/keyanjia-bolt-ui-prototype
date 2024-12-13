import React from 'react';
import {
  Code2,
  Brain,
  Lightbulb,
  BookOpen,
  ScrollText,
  FileText,
  Award,
  Calculator,
  TestTube,
  Users,
  Database,
  LineChart,
  Bookmark,
  GraduationCap,
  Telescope,
  Cpu
} from 'lucide-react';
import { Tool } from './types';

export function getResearchTools(): Tool[] {
  return [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "科研编程",
      description: "R语言及开源软件集成环境，提供代码调试、软件接口对接和容器化运行环境",
      bgColor: "bg-gradient-to-br from-blue-50/50 to-blue-100/50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      features: ["R语言环境", "容器部署", "接口集成", "代码调试"],
      link: "#",
      category: "research"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "智能分析",
      description: "基于对话的智能数据分析系统，提供实时分析反馈和可视化结果展示",
      bgColor: "bg-gradient-to-br from-purple-50/50 to-purple-100/50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100",
      features: ["对话分析", "实时反馈", "可视化", "算法推荐"],
      link: "#",
      category: "analysis"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "文献助手",
      description: "智能文献阅读与管理系统，支持文献解析、总结和知识图谱构建",
      bgColor: "bg-gradient-to-br from-green-50/50 to-green-100/50",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
      features: ["文献总结", "智能阅读", "知识图谱", "团队共享"],
      link: "#",
      category: "research"
    },
    {
      icon: <ScrollText className="w-5 h-5" />,
      title: "写作助手",
      description: "学术论文写作指导系统，提供SCI论文写作模板和智能写作建议",
      bgColor: "bg-gradient-to-br from-indigo-50/50 to-indigo-100/50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-100",
      features: ["SCI写作", "模板库", "写作建议", "格式检查"],
      link: "#",
      category: "writing"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "基金助手",
      description: "基金申请全流程支持系统，提供基金分析、选题建议和申请策略",
      bgColor: "bg-gradient-to-br from-orange-50/50 to-orange-100/50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
      features: ["基金分析", "选题建议", "申请指导", "项目书撰写"],
      link: "#",
      category: "writing"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "专利助手",
      description: "专利撰写与分析支持系统，提供专利检索、分析和价值评估",
      bgColor: "bg-gradient-to-br from-pink-50/50 to-pink-100/50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-100",
      features: ["专利检索", "撰写指导", "价值评估"],
      link: "#"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "算法助手",
      description: "算法理解与应用支持系统，提供算法推导、实现和优化建议",
      bgColor: "bg-gradient-to-br from-cyan-50/50 to-cyan-100/50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-100",
      features: ["算法推导", "代码实现", "性能优化"],
      link: "#"
    },
    {
      icon: <TestTube className="w-5 h-5" />,
      title: "实验助手",
      description: "实验设计与数据分析系统，支持实验方案优化和数据处理",
      bgColor: "bg-gradient-to-br from-teal-50/50 to-teal-100/50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-100",
      features: ["实验设计", "数据分析", "方案优化"],
      link: "#"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "数据集市",
      description: "科研数据集管理与共享平台，支持数据版本控制和团队协作",
      bgColor: "bg-gradient-to-br from-slate-50/50 to-slate-100/50",
      iconColor: "text-slate-600",
      borderColor: "border-slate-100",
      features: ["数据管理", "版本控制", "共享协作"],
      link: "#"
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "可视分析",
      description: "交互式数据可视化工具，支持多维数据展示和实时分析",
      bgColor: "bg-gradient-to-br from-violet-50/50 to-violet-100/50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-100",
      features: ["可视化", "交互分析", "实时展示"],
      link: "#"
    }
  ];
}