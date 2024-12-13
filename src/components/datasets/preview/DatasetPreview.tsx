import React, { useState } from 'react';
import { Table, Grid, List } from 'lucide-react';
import { Dataset } from '../types';

interface DatasetPreviewProps {
  dataset: Dataset & {
    schema: Array<{
      name: string;
      type: string;
      description: string;
    }>;
    previewData: Array<Record<string, any>>;
  };
}

export function DatasetPreview({ dataset }: DatasetPreviewProps) {
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'raw'>('table');

  return (
    <div className="p-6">
      {/* View Mode Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded ${
              viewMode === 'table' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <Table size={16} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded ${
              viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <Grid size={16} />
          </button>
          <button
            onClick={() => setViewMode('raw')}
            className={`p-1.5 rounded ${
              viewMode === 'raw' ? 'bg-white shadow-sm' : 'text-gray-500'
            }`}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Schema Info */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">数据结构</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  字段名
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  类型
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  描述
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataset.schema.map((field, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {field.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {field.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {field.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Preview */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">数据预览</h3>
        {viewMode === 'table' && (
          <div className="border rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {dataset.schema.map((field, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {field.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataset.previewData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {dataset.schema.map((field, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {row[field.name]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 gap-4">
            {dataset.previewData.map((row, index) => (
              <div key={index} className="border rounded-lg p-4">
                {dataset.schema.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex justify-between py-1">
                    <span className="text-sm font-medium text-gray-500">
                      {field.name}:
                    </span>
                    <span className="text-sm text-gray-900">
                      {row[field.name]}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {viewMode === 'raw' && (
          <div className="border rounded-lg p-4 bg-gray-50">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(dataset.previewData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}