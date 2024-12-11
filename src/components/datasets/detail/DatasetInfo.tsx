import React from 'react';
import { Dataset } from '../types';
import { Clock, Database, Tag, Eye, Download } from 'lucide-react';
import { Avatar } from '../../common/Avatar';

interface DatasetInfoProps {
  dataset: Dataset;
}

export function DatasetInfo({ dataset }: DatasetInfoProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-4">基本信息</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">数据类型</span>
              <span className="text-sm font-medium">{dataset.type}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">文件格式</span>
              <span className="text-sm font-medium">{dataset.format}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">数据大小</span>
              <span className="text-sm font-medium">{dataset.size}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">记录数量</span>
              <span className="text-sm font-medium">{dataset.records.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-4">使用统计</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">浏览次数</span>
              <span className="text-sm font-medium">{dataset.stats?.views}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">下载次数</span>
              <span className="text-sm font-medium">{dataset.stats?.downloads}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">引用次数</span>
              <span className="text-sm font-medium">{dataset.stats?.citations}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">标签</h3>
        <div className="flex flex-wrap gap-2">
          {dataset.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">创建信息</h3>
        <div className="flex items-center gap-4">
          <Avatar
            src={dataset.owner.avatar}
            alt={dataset.owner.name}
            size="md"
          />
          <div>
            <div className="font-medium">{dataset.owner.name}</div>
            <div className="text-sm text-gray-500">创建于 {dataset.createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}