import React from 'react';
import { Palette, Layout, Monitor, Moon } from 'lucide-react';

export function AppearanceSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">界面设置</h2>
        <p className="text-sm text-gray-500 mt-1">自定义界面外观和布局</p>
      </div>

      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Palette className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">主题设置</h3>
              <p className="text-sm text-gray-500">选择您喜欢的界面主题</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="p-4 border-2 border-blue-600 rounded-lg bg-white">
              <div className="text-center">
                <Monitor size={24} className="mx-auto mb-2 text-blue-600" />
                <span className="text-sm font-medium">浅色主题</span>
              </div>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg bg-gray-900">
              <div className="text-center">
                <Moon size={24} className="mx-auto mb-2 text-gray-400" />
                <span className="text-sm font-medium text-white">深色主题</span>
              </div>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-r from-white to-gray-900">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Monitor size={24} className="text-gray-900" />
                  <Moon size={24} className="text-white" />
                </div>
                <span className="text-sm font-medium">自动切换</span>
              </div>
            </button>
          </div>
        </div>

        {/* Layout Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Layout className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">布局设置</h3>
              <p className="text-sm text-gray-500">自定义界面布局方式</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                导航栏位置
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>左侧固定</option>
                <option>顶部固定</option>
                <option>自动收缩</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                内容区域宽度
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>自适应</option>
                <option>固定宽度</option>
                <option>全屏显示</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">显示快捷操作栏</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
}