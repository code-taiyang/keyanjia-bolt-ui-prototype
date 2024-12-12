import React from 'react';
import { HardDrive, Database, Trash2, RefreshCw } from 'lucide-react';

export function StorageSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">存储设置</h2>
        <p className="text-sm text-gray-500 mt-1">管理数据存储和缓存</p>
      </div>

      <div className="space-y-6">
        {/* Storage Usage */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <HardDrive className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">存储空间</h3>
              <p className="text-sm text-gray-500">查看存储空间使用情况</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">总存储空间</span>
                <span className="text-sm text-gray-500">2.1 GB / 5 GB</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '42%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-700">文档</div>
                <div className="text-lg font-semibold text-gray-900">1.2 GB</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium text-gray-700">数据</div>
                <div className="text-lg font-semibold text-gray-900">0.9 GB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Database className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">数据管理</h3>
              <p className="text-sm text-gray-500">管理数据存储选项</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">自动备份数据</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecke d />
                <span className="text-sm text-gray-700">启用数据压缩</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="text-sm text-gray-700">保存历史版本</span>
              </label>
            </div>
          </div>
        </div>

        {/* Cache Management */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <RefreshCw className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">缓存管理</h3>
              <p className="text-sm text-gray-500">管理系统缓存</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">应用缓存</div>
                <div className="text-sm text-gray-500">124 MB</div>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 size={16} />
                <span>清除</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">临时文件</div>
                <div className="text-sm text-gray-500">256 MB</div>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg">
                <Trash2 size={16} />
                <span>清除</span>
              </button>
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