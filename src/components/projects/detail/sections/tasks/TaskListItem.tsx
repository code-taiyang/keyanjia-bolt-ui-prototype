import React from 'react';
import { Calendar, Flag } from 'lucide-react';
import { Avatar } from '../../../../common/Avatar';

interface TaskListItemProps {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  assignee?: {
    name: string;
    avatar: string;
  };
  dueDate?: string;
  tags?: string[];
}

export function TaskListItem({
  title,
  description,
  priority,
  assignee,
  dueDate,
  tags
}: TaskListItemProps) {
  const priorityColors = {
    low: 'text-gray-400',
    medium: 'text-yellow-500',
    high: 'text-red-500'
  };

  return (
    <div className="p-3 bg-white border rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 truncate">{title}</h4>
          {description && (
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
          )}
        </div>
        <Flag className={`flex-shrink-0 ${priorityColors[priority]}`} size={16} />
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
        {assignee && (
          <div className="flex items-center gap-2">
            <Avatar src={assignee.avatar} alt={assignee.name} size="sm" />
            <span className="truncate">{assignee.name}</span>
          </div>
        )}
        {dueDate && (
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}