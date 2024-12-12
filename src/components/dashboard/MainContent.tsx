import React from 'react';
import { ProjectList } from './ProjectList';
import { SystemResources } from './SystemResources';

export function MainContent() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <section className="bg-white rounded-xl shadow-sm">
        <ProjectList />
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">系统资源</h2>
        <SystemResources />
      </section>
    </div>
  );
}