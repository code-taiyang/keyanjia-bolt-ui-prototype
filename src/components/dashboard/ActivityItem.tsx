import React from 'react';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

interface ActivityItemProps {
  user: {
    name: string;
    avatar: string;
  };
  project: {
    name: string;
    type: string;
  };
  action: string;
  time: string;
  icon?: React.ReactNode;
}

export function ActivityItem({ user, project, action, time, icon }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Avatar src={user.avatar} alt={user.name} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-medium truncate">{user.name}</span>
            <span className="text-gray-500 truncate">{action}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          {icon && <span className="text-gray-400">{icon}</span>}
          <span className="text-sm text-gray-600 truncate">{project.name}</span>
          <Badge variant="default">{project.type}</Badge>
        </div>
        <span className="text-xs text-gray-500 block mt-1">{time}</span>
      </div>
    </div>
  );
}