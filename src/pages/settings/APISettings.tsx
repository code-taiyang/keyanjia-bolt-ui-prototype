import React from 'react';
import { Key, Plus, RefreshCw, Clock } from 'lucide-react';

export function APISettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">API设置</h2>
        <p className="text-sm text-gray-500 mt-1">管理API密钥和访问配额</p>
      </div>

      <div className="space-y-6">
        {/* API Keys */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Key className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">API密钥</h3>
                <p className="text-sm text-gray-500">管理您的API访问密钥</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus size={16} />
              <span>新建密钥</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">主要密钥</div>
                <div className="text-sm text-gray-500">用于生产环境</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">活跃</span>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <RefreshCw size={16} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">测试密钥</div>
                <div className="text-sm text-gray-500">用于开发测试</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">未使用</span>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <RefreshCw size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Quotas */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">使用配额</h3>
              <p className="text-sm text-gray-500">查看和管理API使用限制</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">API调用次数</span>
                <span className="text-sm text-gray-500">8,000 / 10,000</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: '80%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">存储空间</span>
                <span className="text-sm text-gray-500">2.1 GB / 5 GB</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: '42%' }} />
              </div>
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