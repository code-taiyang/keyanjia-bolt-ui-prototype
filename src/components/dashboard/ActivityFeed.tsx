import React from 'react';
import { FileText, Share2, Plus } from 'lucide-react';
import { ActivityItem } from './ActivityItem';

export function ActivityFeed() {
  const activities = [
    {
      user: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      },
      project: {
        name: "Climate Data Analysis",
        type: "Data Analysis"
      },
      action: "更新了数据预处理流程",
      time: "10分钟前",
      icon: <FileText size={16} />
    },
    {
      user: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face"
      },
      project: {
        name: "Neural Network Research",
        type: "Machine Learning"
      },
      action: "与研究团队共享",
      time: "1小时前",
      icon: <Share2 size={16} />
    },
    {
      user: {
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
      },
      project: {
        name: "Statistical Analysis",
        type: "Statistics"
      },
      action: "创建了新项目",
      time: "2小时前",
      icon: <Plus size={16} />
    }
  ];

  return (
    <div className="space-y-1 divide-y">
      {activities.map((activity, index) => (
        <ActivityItem key={index} {...activity} />
      ))}
      <button className="w-full text-sm text-blue-600 hover:text-blue-700 py-2">
        查看全部活动
      </button>
    </div>
  );
}