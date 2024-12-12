import React from 'react';
import { Cpu, CircuitBoard, HardDrive, Activity } from 'lucide-react';
import { ResourceCard } from './resources/ResourceCard';

export function SystemResources() {
  const resources = [
    {
      icon: <Cpu size={18} className="text-blue-600" />,
      title: "CPU使用率",
      value: "4/8 核心",
      percentage: 45,
      status: 'good' as const,
      details: [
        { label: "用户进程", value: "35%" },
        { label: "系统进程", value: "10%" }
      ]
    },
    {
      icon: <CircuitBoard size={18} className="text-green-600" />,
      title: "内存使用",
      value: "8/16 GB",
      percentage: 65,
      status: 'warning' as const,
      details: [
        { label: "应用程序", value: "6.5 GB" },
        { label: "缓存", value: "1.5 GB" }
      ]
    },
    {
      icon: <HardDrive size={18} className="text-purple-600" />,
      title: "存储空间",
      value: "156/512 GB",
      percentage: 30,
      status: 'good' as const,
      details: [
        { label: "系统", value: "56 GB" },
        { label: "数据", value: "100 GB" }
      ]
    },
    {
      icon: <Activity size={18} className="text-orange-600" />,
      title: "网络带宽",
      value: "2.4 GB/s",
      percentage: 80,
      status: 'critical' as const,
      details: [
        { label: "上传", value: "1.2 GB/s" },
        { label: "下载", value: "1.2 GB/s" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  );
}