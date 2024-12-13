import React, { useState } from 'react';
import { FileCode, FileSpreadsheet } from 'lucide-react';
import Editor from "@monaco-editor/react";

interface ProjectFile {
  id: string;
  name: string;
  type: 'code' | 'data';
  content: string;
  language?: string;
  size?: string;
  uploadTime?: string;
}

interface ProjectPanelProps {
  files: ProjectFile[];
  onFileSelect: (file: ProjectFile) => void;
}

export function ProjectPanel({ files, onFileSelect }: ProjectPanelProps) {
  const [selectedFile, setSelectedFile] = useState<ProjectFile | null>(
    files.length > 0 ? files[0] : null
  );

  const codeFiles = files.filter(f => f.type === 'code');
  const dataFiles = files.filter(f => f.type === 'data');

  const handleFileClick = (file: ProjectFile) => {
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div className="h-full flex">
      {/* File Explorer */}
      <div className="w-80 border-r bg-white flex flex-col">
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">项目文件</h3>
          
          {/* Code Files */}
          {codeFiles.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <FileCode size={14} />
                <span>代码文件</span>
              </div>
              <div className="space-y-0.5">
                {codeFiles.map(file => (
                  <button
                    key={file.id}
                    onClick={() => handleFileClick(file)}
                    className={`
                      w-full flex items-center p-2 rounded-lg text-left text-sm
                      ${selectedFile?.id === file.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-600'}
                    `}
                  >
                    <FileCode className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Data Files */}
          {dataFiles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <FileSpreadsheet size={14} />
                <span>数据文件</span>
              </div>
              <div className="space-y-0.5">
                {dataFiles.map(file => (
                  <button
                    key={file.id}
                    onClick={() => handleFileClick(file)}
                    className={`
                      w-full flex items-center p-2 rounded-lg text-left text-sm
                      ${selectedFile?.id === file.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-600'}
                    `}
                  >
                    <FileSpreadsheet className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {selectedFile ? (
          <>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                {selectedFile.type === 'code' ? (
                  <FileCode className="h-5 w-5 text-gray-400 mr-2" />
                ) : (
                  <FileSpreadsheet className="h-5 w-5 text-gray-400 mr-2" />
                )}
                <span className="text-sm font-medium text-gray-900">
                  {selectedFile.name}
                </span>
              </div>
              {selectedFile.type === 'data' && (
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{selectedFile.size}</span>
                  <span>{selectedFile.uploadTime}</span>
                </div>
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              {selectedFile.type === 'code' ? (
                <Editor
                  height="100%"
                  defaultLanguage={selectedFile.language || 'python'}
                  value={selectedFile.content}
                  theme="vs-light"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    readOnly: false,
                    wordWrap: 'on'
                  }}
                />
              ) : (
                <div className="p-4">
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
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
            选择文件以查看内容
          </div>
        )}
      </div>
    </div>
  );
}