import React from 'react';
import { ExternalLink, MessageSquare, Download } from 'lucide-react';
import { Reference } from '../../../stores/literatureStore';

interface ReferenceItemProps {
  reference: Reference;
  index: number;
}

export function ReferenceItem({ reference, index }: ReferenceItemProps) {
  return (
    <div className="group">
      <div className="p-4 rounded-xl border border-gray-100 hover:border-blue-100 bg-white hover:shadow-sm transition-all duration-200">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-sm font-medium text-blue-600">
            {index}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium text-gray-900 text-sm leading-5 hover:text-blue-600 cursor-pointer">
                {reference.title}
              </h4>
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center -mr-1">
                  <button className="p-1 hover:bg-gray-100 rounded" title="查看详情">
                    <MessageSquare size={14} className="text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded" title="下载文献">
                    <Download size={14} className="text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded" title="打开原文">
                    <ExternalLink size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-1 text-sm text-gray-500 space-y-1">
              <p>{reference.authors.join(', ')}</p>
              <div className="flex items-center gap-2 text-xs">
                <span>{reference.journal}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{reference.year}</span>
              </div>
              <div className="text-xs text-gray-400">
                DOI: {reference.doi}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}