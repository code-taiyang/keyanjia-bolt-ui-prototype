import React from 'react';
import { ArrowRight, Brain, FileText, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

export function RecentAnalysis() {
  const analyses = [
    {
      id: '1',
      title: '用户行为数据分析',
      description: '分析用户购买行为与年龄、收入的关系',
      type: 'correlation',
      status: 'in_progress',
      lastModified: '10分钟前',
      progress: 65
    },
    {
      id: '2',
      title: '销售趋势预测',
      description: '基于历史数据预测未来3个月销售趋势',
      type: 'regression',
      status: 'completed',
      lastModified: '2小时前',
      progress: 100
    },
    {
      id: '3',
      title: '客户满意度调查',
      description: '客户满意度问卷数据统计分析',
      type: 'descriptive',
      status: 'draft',
      lastModified: '1天前',
      progress: 30
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近分析</h2>
        <Link 
          to="/activities"
          state={{ defaultTab: 'analysis' }}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analyses.map((analysis) => (
          <Link 
            key={analysis.id} 
            to={`/analysis/editor`}
            state={{
              title: analysis.title,
              description: analysis.description,
              type: analysis.type,
              isNew: false
            }}
          >
            <Card className="p-4 hover:border-blue-200 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  <BarChart2 className="text-blue-600" size={20} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-900 truncate">
                      {analysis.title}
                    </h3>
                    <Badge variant={
                      analysis.status === 'completed' ? 'success' :
                      analysis.status === 'in_progress' ? 'warning' : 'default'
                    }>
                      {analysis.status === 'completed' ? '已完成' :
                       analysis.status === 'in_progress' ? '分析中' : '草稿'}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {analysis.description}
                  </p>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-500">{analysis.lastModified}</span>
                      <span className="text-sm text-gray-500">{analysis.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          analysis.status === 'completed' ? 'bg-green-500' :
                          analysis.progress > 60 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${analysis.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}