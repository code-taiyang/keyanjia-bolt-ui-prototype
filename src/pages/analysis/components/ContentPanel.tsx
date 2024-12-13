import React from 'react';
import Editor from "@monaco-editor/react";

interface File {
  id: string;
  name: string;
  type: 'code' | 'data';
  content: string;
  language?: string;
  size?: string;
  uploadTime?: string;
}

interface ContentPanelProps {
  file: File | null;
}

export function ContentPanel({ file }: ContentPanelProps) {
  if (!file) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        选择文件以预览内容
      </div>
    );
  }

  if (file.type === 'code') {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900">{file.name}</span>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage={file.language || 'python'}
            value={file.content}
            theme="vs-light"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              readOnly: true,
              wordWrap: 'on'
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-900">{file.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">{file.size}</span>
          <span>{file.uploadTime}</span>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="border rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  列 1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  列 2
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  数据 1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  数据 2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}