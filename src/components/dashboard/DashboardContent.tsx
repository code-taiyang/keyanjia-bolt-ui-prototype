import React from 'react';
import { ResearchTools } from './tools/ResearchTools';
import { ProjectList } from './ProjectList';
import { SystemResources } from './SystemResources';
import { ActivityFeed } from './ActivityFeed';
import { ProjectStats } from './ProjectStats';
import { SharedResources } from '../shared/SharedResources';
import { TeamSelector } from '../shared/TeamSelector';
import { ResearchActivities } from './activities/ResearchActivities';
import { ProjectNavigation } from './navigation/ProjectNavigation';

export function DashboardContent() {
  return (
    <div className="mt-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">工作台</h1>
        <TeamSelector />
      </div>

      <section className="bg-gradient-to-br from-white to-gray-50/50 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">AI科研工具</h2>
        <ResearchTools />
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">研究课题导航</h2>
        <ProjectNavigation />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-xl shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">我的项目</h2>
              <ProjectList />
            </div>
          </section>
          
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">研究活动</h2>
            <ResearchActivities />
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm">
            <SharedResources />
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">最近活动</h2>
            <ActivityFeed />
          </section>
          
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4">系统资源</h2>
            <SystemResources />
          </section>
        </div>
      </div>
    </div>
  );
}