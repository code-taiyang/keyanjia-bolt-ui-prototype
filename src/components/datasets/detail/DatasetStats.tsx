import React from 'react';
import { Dataset } from '../types';
import { 
  BarChart2, 
  TrendingUp, 
  Download, 
  Eye, 
  FileText,
  Users,
  Map,
  Calendar
} from 'lucide-react';
import { Card } from '../../common/Card';

interface DatasetStatsProps {
  dataset: Dataset;
}

export function DatasetStats({ dataset }: DatasetStatsProps) {
  // 模拟统计数据
  const stats = {
    overview: [
      {
        icon: <Eye className="text-blue-600" size={20} />,
        label: '总浏览量',
        value: dataset.stats?.views || 0,
        trend: '+12%'
      },
      {
        icon: <Download className="text-green-600" size={20} />,
        label: '总下载量',
        value: dataset.stats?.downloads || 0,
        trend: '+8%'
      },
      {
        icon: <FileText className="text-purple-600" size={20} />,
        label: '引用次数',
        value: dataset.stats?.citations || 0,
        trend: '+5%'
      },
      {
        icon: <Users className="text-orange-600" size={20} />,
        label: '使用人数',
        value: 156,
        trend: '+15%'
      }
    ],
    timeStats: [
      { date: '2024-03-15', views: 120, downloads: 45 },
      { date: '2024-03-14', views: 98, downloads: 32 },
      { date: '2024-03-13', views: 145, downloads: 56 },
      { date: '2024-03-12', views: 167, downloads: 78 },
      { date: '2024-03-11', views: 123, downloads: 43 }
    ],
    geoStats: [
      { region: '北京', count: 450 },
      { region: '上海', count: 380 },
      { region: '广州', count: 320 },
      { region: '深圳', count: 280 },
      { region: '成都', count: 220 }
    ]
  };

  return (
    <div className="p-6 space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.overview.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-gray-50">
                {stat.icon}
              </div>
              <span className="text-xs font-medium text-green-600">
                {stat.trend}
              </span>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Time Series Stats */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>时间趋势</span>
            </h3>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            时间趋势图表
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium flex items-center gap-2">
              <Map size={16} className="text-gray-400" />
              <span>地域分布</span>
            </h3>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>按城市</option>
              <option>按省份</option>
              <option>按国家</option>
            </select>
          </div>
          <div className="space-y-3">
            {stats.geoStats.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-24 text-sm text-gray-500">{item.region}</span>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600"
                      style={{ 
                        width: `${(item.count / stats.geoStats[0].count) * 100}%` 
                      }}
                    />
                  </div>
                </div>
                <span className="w-16 text-right text-sm text-gray-500">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Usage Details */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center gap-2">
            <TrendingUp size={16} className="text-gray-400" />
            <span>使用详情</span>
          </h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              导出报告
            </button>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  日期
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  浏览量
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  下载量
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stats.timeStats.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.downloads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}