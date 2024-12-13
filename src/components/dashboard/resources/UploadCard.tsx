import React from 'react';
import { Upload, Plus } from 'lucide-react';
import { Card } from '../../common/Card';

export function UploadCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">文献资源</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          <span>上传资源</span>
        </button>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-blue-50 rounded-full mb-4">
            <Upload className="text-blue-600" size={24} />
          </div>
          <h4 className="font-medium text-gray-900 mb-1">
            拖放文件到此处上传
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            支持 PDF、Word、Excel 等格式文件
          </p>
          <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
            或点击选择文件
          </button>
        </div>
      </div>
    </Card>
  );
}