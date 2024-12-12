import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  isSaved: boolean;
}

export function Header({
  title,
  onTitleChange,
  isSaved
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-4 flex-1">
        <button 
          onClick={() => navigate('/analysis')}
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center flex-1">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="输入分析名称..."
              className="text-xl font-medium border-none focus:outline-none focus:ring-0 placeholder-gray-400"
            />
            <span className={`text-sm ${isSaved ? 'text-green-600' : 'text-gray-400'}`}>
              {isSaved ? '已保存' : '正在保存...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}