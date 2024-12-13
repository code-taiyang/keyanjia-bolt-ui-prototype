import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

interface DataFile {
  id: string;
  name: string;
  size: string;
  uploadTime: string;
  data?: any[];
}

interface DataPanelProps {
  files?: DataFile[];
}

export function DataPanel({ files = [] }: DataPanelProps) {
  const [selectedFile, setSelectedFile] = React.useState<string | null>(
    files.length > 0 ? files[0].id : null
  );

  if (files.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-500">
        暂无数据文件
      </div>
    );
  }

  return (
    <div className="h-full flex">
      <div className="w-64 border-r bg-gray-50">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">数据文件</h3>
          <div className="space-y-2">
            {files.map(file => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file.id)}
                className={`w-full flex items-center p-2 rounded-lg text-left text-sm transition-colors ${
                  selectedFile === file.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedFile ? (
          <>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <FileSpreadsheet className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  {files.find(f => f.id === selectedFile)?.name}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{files.find(f => f.id === selectedFile)?.size}</span>
                <span>{files.find(f => f.id === selectedFile)?.uploadTime}</span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(files.find(f => f.id === selectedFile)?.data?.[0] || {}).map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {files.find(f => f.id === selectedFile)?.data?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {Object.values(row).map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
            选择数据文件以查看内容
          </div>
        )}
      </div>
    </div>
  );
}