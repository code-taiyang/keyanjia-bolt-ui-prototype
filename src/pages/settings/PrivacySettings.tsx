import React from 'react';
import { Shield, Eye, Lock, History } from 'lucide-react';

export function PrivacySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">隐私设置</h2>
        <p className="text-sm text-gray-500 mt-1">管理您的隐私和安全选项</p>
      </div>

      <div className="space-y-6">
        {/* Profile Visibility */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Eye className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">个人资料可见性</h3>
              <p className="text-sm text-gray-500">控制其他用户可以看到的信息</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="text-sm text-gray-700">显示我的个人简介</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="text-sm text-gray-700">显示我的联系方式</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="text-sm text-gray-700">显示我的研究项目</span>
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Lock className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">安全设置</h3>
              <p className="text-sm text-gray-500">管理账户安全选项</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                两步验证
              </label>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                启用两步验证
              </button>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                修改密码
              </label>
              <button className="px-4 py-2 border text-gray-700 rounded-lg hover:bg-gray-50">
                更改密码
              </button>
            </div>
          </div>
        </div>

        {/* Activity History */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <History className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">活动历史</h3>
              <p className="text-sm text-gray-500">管理您的活动记录</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="text-sm text-gray-700">记录登录活动</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="text-sm text-gray-700">记录操作历史</span>
            </label>
            <button className="text-sm text-red-600 hover:text-red-700">
              清除活动历史
            </button>
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