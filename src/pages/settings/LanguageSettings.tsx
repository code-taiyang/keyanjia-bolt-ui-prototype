import React from 'react';
import { Globe, Clock, MapPin } from 'lucide-react';

export function LanguageSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium text-gray-900">语言设置</h2>
        <p className="text-sm text-gray-500 mt-1">设置界面语言和地区选项</p>
      </div>

      <div className="space-y-6">
        {/* Language Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Globe className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">界面语言</h3>
              <p className="text-sm text-gray-500">选择您偏好的界面语言</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                主要语言
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>简体中文</option>
                <option>English</option>
                <option>日本語</option>
                <option>한국어</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                备选语言
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>简体中文</option>
                <option>日本語</option>
                <option>한국어</option>
              </select>
            </div>
          </div>
        </div>

        {/* Region Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <MapPin className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">地区设置</h3>
              <p className="text-sm text-gray-500">选择您所在的地区</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                地区
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>中国</option>
                <option>美国</option>
                <option>日本</option>
                <option>韩国</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                时区
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>(GMT+08:00) 北京，重庆，香港，乌鲁木齐</option>
                <option>(GMT+09:00) 大阪，札幌，东京</option>
                <option>(GMT-08:00) 太平洋时间（美国和加拿大）</option>
              </select>
            </div>
          </div>
        </div>

        {/* Format Settings */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Clock className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">格式设置</h3>
              <p className="text-sm text-gray-500">设置日期和数字格式</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                日期格式
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>YYYY-MM-DD</option>
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                时间格式
              </label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>24小时制</option>
                <option>12小时制</option>
              </select>
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