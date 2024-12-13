import React from 'react';
import { Card } from '../common/Card';
import { ChevronRight } from 'lucide-react';
import { scientificTools } from '../../data/scientificTools';

export function ScientificTools() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">科研编程工具</h1>
          <p className="text-gray-500 mt-1">专业的科研计算与分析工具集</p>
        </div>

        <div className="space-y-8">
          {scientificTools.map((tool) => (
            <div key={tool.id}>
              <Card className="p-6 hover:border-blue-200 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {tool.categories.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <h4 className="text-sm font-medium text-gray-900">{category.name}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.id}>
                                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}