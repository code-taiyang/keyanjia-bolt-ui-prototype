import React from 'react';
import { Camera } from 'lucide-react';

export function ProfileSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">个人信息</h2>
        <p className="text-sm text-gray-500 mt-1">更新您的个人资料和账户信息</p>
      </div>

      <div className="space-y-8">
        {/* Avatar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">头像</label>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Profile"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <button className="absolute -bottom-2 -right-2 p-1.5 bg-white rounded-full border shadow-sm hover:bg-gray-50">
                <Camera size={16} className="text-gray-600" />
              </button>
            </div>
            <div className="text-sm text-gray-500">
              支持 JPG, PNG, GIF 格式，文件大小不超过 2MB
            </div>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
            <input
              type="text"
              defaultValue="Alex Johnson"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">职位</label>
            <input
              type="text"
              defaultValue="Research Scientist"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
            <input
              type="email"
              defaultValue="alex.johnson@example.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">手机</label>
            <input
              type="tel"
              defaultValue="+1 234 567 8900"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">个人简介</label>
          <textarea
            rows={4}
            defaultValue="专注于气候变化和环境科学研究，擅长数据分析和模型构建。"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            保存更改
          </button>
        </div>
      </div>
    </div>
  );
}