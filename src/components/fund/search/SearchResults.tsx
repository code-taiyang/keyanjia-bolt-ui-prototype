import React from 'react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Calendar, DollarSign, Building2, Target } from 'lucide-react';

export function SearchResults() {
  const results = [
    {
      id: '1',
      title: '基于深度学习的气候变化预测研究',
      category: '自然科学基金面上项目',
      organization: '国家自然科学基金委员会',
      field: '地球科学',
      amount: '80万元',
      deadline: '2024-05-20',
      status: 'open'
    },
    {
      id: '2',
      title: '新型环境监测传感器研发',
      category: '重点研发计划项目',
      organization: '科技部',
      field: '环境科学与工程',
      amount: '300万元',
      deadline: '2024-06-15',
      status: 'upcoming'
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
                  <p className="text-sm text-gray-500 mt-1">{result.category}</p>
                </div>
                <Badge variant={
                  result.status === 'open' ? 'success' : 'warning'
                }>
                  {result.status === 'open' ? '申请中' : '即将开始'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>资助机构：{result.organization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target size={16} />
                  <span>研究领域：{result.field}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  <span>资助金额：{result.amount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>截止日期：{result.deadline}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}