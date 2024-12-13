import React from 'react';
import { FileText, X, MessageSquare, Download, ExternalLink, Share2, Star } from 'lucide-react';
import { Paper } from '../../../stores/literatureStore';
import { useLiteratureStore } from '../../../stores/literatureStore';

interface UploadedPaperProps {
  paper: Paper;
}

export function UploadedPaper({ paper }: UploadedPaperProps) {
  const { clearCurrentPaper, sendMessage } = useLiteratureStore();

  const handleAction = (action: string) => {
    let message = '';
    switch (action) {
      case 'interpret':
        message = `请帮我解读这篇文献：${paper.title}`;
        break;
      case 'abstract':
        message = `请帮我提取这篇文献的摘要：${paper.title}`;
        break;
      case 'method':
        message = `请帮我分析这篇文献的研究方法：${paper.title}`;
        break;
      case 'innovation':
        message = `请帮我查找这篇文献的创新点：${paper.title}`;
        break;
    }
    sendMessage(message);
  };

  return (
    <div className="mb-4">
      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-blue-100/50 p-4">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-white/80 backdrop-blur-sm">
            <FileText className="text-blue-600" size={20} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {paper.authors.join('、')} · {paper.journal} · {paper.year}
                </p>
              </div>

                <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-white/80 rounded-lg transition-colors" title="收藏文献">
                        <Star size={16} className="text-gray-400"/>
                    </button>
                    <button className="p-1.5 hover:bg-white/80 rounded-lg transition-colors" title="查看详情">
                        <MessageSquare size={16} className="text-gray-400"/>
                    </button>
                    <button className="p-1.5 hover:bg-white/80 rounded-lg transition-colors" title="下载文献">
                        <Download size={16} className="text-gray-400"/>
                    </button>
                    <button className="p-1.5 hover:bg-white/80 rounded-lg transition-colors" title="分享文献">
                        <Share2 size={16} className="text-gray-400"/>
                    </button>
                    <button className="p-1.5 hover:bg-white/80 rounded-lg transition-colors" title="打开原文">
                        <ExternalLink size={16} className="text-gray-400"/>
                    </button>
                    <div className="w-px h-4 bg-gray-200 mx-1"/>
                    <button
                        onClick={clearCurrentPaper}
                        className="p-1.5 hover:bg-white/80 rounded-lg transition-colors"
                        title="移除文献"
                    >
                        <X size={16} className="text-gray-400"/>
                    </button>
                </div>
            </div>

              <div className="flex items-center gap-2 mt-3">
                  <button
                      onClick={() => handleAction('interpret')}
                      className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-sm text-gray-600 rounded-lg hover:bg-white transition-colors"
              >
                解读全文
              </button>
              <button
                onClick={() => handleAction('abstract')}
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-sm text-gray-600 rounded-lg hover:bg-white transition-colors"
              >
                提取摘要
              </button>
              <button
                onClick={() => handleAction('method')}
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-sm text-gray-600 rounded-lg hover:bg-white transition-colors"
              >
                分析方法
              </button>
              <button
                onClick={() => handleAction('innovation')}
                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-sm text-gray-600 rounded-lg hover:bg-white transition-colors"
              >
                查找创新点
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
