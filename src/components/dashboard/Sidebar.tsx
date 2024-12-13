import React from 'react';
import { ActivityFeed } from './ActivityFeed';
import { ProjectStats } from './ProjectStats';

export function Sidebar() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">最近活动</h2>
        <ActivityFeed />
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">项目统计</h2>
        <ProjectStats />
      </section>
    </div>
  );
}