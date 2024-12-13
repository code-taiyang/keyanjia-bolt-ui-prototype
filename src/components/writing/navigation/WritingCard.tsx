import React from 'react';
import { Download, Share2, Star, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WritingCardProps {
  id: string;
  title: string;
  description: string;
  type: 'thesis' | 'journal' | 'report';
  date: string;
  isStarred?: boolean;
  onStar?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

export function WritingCard({
  id,
  title,
  description,
  type,
  date,
  isStarred,
  onStar,
  onShare,
  onDownload
}: WritingCardProps) {
  const typeStyles = {
    thesis: 'bg-purple-50 text-purple-600',
    journal: 'bg-blue-50 text-blue-600',
    report: 'bg-green-50 text-green-600'
  };

  const typeLabels = {
    thesis: '学位论文',
    journal: '期刊论文',
    report: '研究报告'
  };

  return (
    <Link 
      to={`/writing/${id}`}
      className="block group"
    >
      <div className="p-4 border rounded-lg hover:border-blue-200 transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2 py-1 rounded-full text-xs ${typeStyles[type]}`}>
            {typeLabels[type]}
          </span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>

        <h3 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-end gap-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onStar?.();
            }}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <Star 
              size={16} 
              className={isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
            />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onShare?.();
            }}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <Share2 size={16} className="text-gray-400" />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              onDownload?.();
            }}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <Download size={16} className="text-gray-400" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg">
            <MoreVertical size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
    </Link>
  );
}