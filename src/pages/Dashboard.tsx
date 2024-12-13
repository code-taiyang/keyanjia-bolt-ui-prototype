import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ProjectOverview } from '../components/dashboard/ProjectOverview';
import { QuickActions } from '../components/dashboard/QuickActions';
import { ResearchActivitiesList } from '../components/dashboard/ResearchActivitiesList';
import { ResourceStatus } from '../components/dashboard/ResourceStatus';
import { TeamProjectsSection } from '../components/dashboard/TeamProjectsSection';
import { ResourceSection } from '../components/dashboard/resources/ResourceSection';
import { ActivitySection } from '../components/dashboard/activities/ActivitySection';

export function Dashboard() {
  const recentResources = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用.pdf',
      type: 'PDF',
      size: '2.3MB',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      time: '10分钟前',
      downloads: 5,
      scope: 'team'
    },
    {
      id: '2',
      title: '气候变化数据集2024.zip',
      type: 'ZIP',
      size: '156MB',
      user: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      time: '2小时前',
      downloads: 12,
      scope: 'personal'
    }
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'analysis',
      title: '气候数据分析',
      description: '完成数据预处理和初步分析',
      user: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      tool: 'data-analysis',
      time: '10分钟前',
      scope: 'personal'
    },
    {
      id: '2',
      type: 'experiment',
      title: '模型验证实验',
      description: '进行神经网络模型性能测试',
      user: {
        name: 'Team AI Lab',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      tool: 'experiment',
      time: '2小时前',
      scope: 'team'
    }
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <DashboardHeader />
        
        <div className="mt-8 space-y-8">
          {/* 研究概览 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProjectOverview />
          </div>

          {/* 快速操作 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <QuickActions />
          </section>

          {/* 最近上传和动态 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <ResourceSection 
                title="最近上传"
                resources={recentResources}
                viewAll={() => console.log('View all resources')}
              />
            </section>
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <ActivitySection 
                title="最近动态"
                activities={recentActivities}
                viewAll={() => console.log('View all activities')}
              />
            </section>
          </div>

          {/* 团队研究课题 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <TeamProjectsSection />
          </section>

          {/* 研究活动列表 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <ResearchActivitiesList />
          </section>

          {/* 资源状态 */}
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <ResourceStatus />
          </section>
        </div>
      </div>
    </div>
  );
}