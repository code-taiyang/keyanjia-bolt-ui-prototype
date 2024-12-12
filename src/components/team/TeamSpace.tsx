import React from 'react';
import { Users, UserPlus, Settings, Plus, Share2 } from 'lucide-react';
import { TeamHeader } from './TeamHeader';
import { TeamProjects } from './TeamProjects';
import { TeamResources } from './TeamResources';
import { TeamMembers } from './TeamMembers';
import { TeamTokens } from './TeamTokens';

export function TeamSpace() {
  return (
    <div className="flex flex-col h-full">
      <TeamHeader />
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* 团队概览 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">团队概览</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  查看详情
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-semibold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">进行中的项目</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-semibold text-green-600">45</div>
                  <div className="text-sm text-gray-600">共享资源</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-semibold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">团队成员</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TeamTokens />
            </div>
          </section>

          {/* 团队项目 */}
          <section className="bg-white rounded-xl shadow-sm">
            <TeamProjects />
          </section>

          {/* 共享资源 */}
          <section className="bg-white rounded-xl shadow-sm">
            <TeamResources />
          </section>

          {/* 团队成员 */}
          <section className="bg-white rounded-xl shadow-sm">
            <TeamMembers />
          </section>
        </div>
      </div>
    </div>
  );
}