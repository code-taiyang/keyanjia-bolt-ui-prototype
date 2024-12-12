import React from 'react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { FileText, Calendar, User, Building2 } from 'lucide-react';

export function SearchResults() {
  const results = [
    {
      id: '1',
      title: '一种基于深度学习的温度预测方法及系统',
      abstract: '本发明公开了一种基于深度学习的温度预测方法及系统，包括数据预处理模块、深度学习模型和预测输出模块...',
      applicant: '智能科技有限公司',
      inventor: '张三, 李四',
      applicationDate: '2024-01-15',
      publicationDate: '2024-03-01',
      status: 'published',
      type: '发明专利',
      ipc: ['G06N 3/08', 'G06F 17/18']
    },
    {
      id: '2',
      title: '一种环境参数监测装置',
      abstract: '本实用新型提供一种环境参数监测装置，包括传感器模块、数据处理单元和通信模块...',
      applicant: '环境科技股份公司',
      inventor: '王五',
      applicationDate: '2024-02-01',
      publicationDate: '2024-03-15',
      status: 'granted',
      type: '实用新型',
      ipc: ['G01N 33/00']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">检索结果</h3>
        <span className="text-sm text-gray-500">共找到 2 条结果</span>
      </div>

      <div className="space-y-4">
        {results.map(result => (
          <Card key={result.id} className="p-4 hover:border-blue-200">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{result.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{result.abstract}</p>
                </div>
                <Badge variant={
                  result.status === 'granted' ? 'success' : 'default'
                }>
                  {result.status === 'granted' ? '已授权' : '已公开'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>申请人：{result.applicant}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>发明人：{result.inventor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>申请日：{result.applicationDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  <span>公开日：{result.publicationDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full">
                  {result.type}
                </span>
                {result.ipc.map((code, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}