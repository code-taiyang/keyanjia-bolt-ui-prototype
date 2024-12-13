import React, { useState } from 'react';
import { Search, FileText, Trash2 } from 'lucide-react';
import { useReferenceStore } from '../../../stores/referenceStore';

export function ExperimentReference() {
  const [searchQuery, setSearchQuery] = useState('');
  const { references, removeReference } = useReferenceStore();

  const filteredReferences = references.filter(ref =>
    ref.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索实验资料..."
            className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {filteredReferences.map((ref) => (
          <div
            key={ref.id}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 group"
          >
            <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">
                {ref.title}
              </h4>
              <div className="mt-1 flex items-center text-xs text-gray-500">
                <span>{ref.uploadTime}</span>
                <span className="mx-1">·</span>
                <span>{ref.size}</span>
              </div>
            </div>
            <button 
              onClick={() => removeReference(ref.id)}
              className="ml-2 p-1 text-gray-400 hover:text-red-600 rounded-full opacity-0 group-hover:opacity-100"
              title="删除"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}