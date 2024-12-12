import React from 'react';
import { Plus } from 'lucide-react';
import { TaskListItem } from './TaskListItem';
import { Card } from '../../../../common/Card';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee?: {
    name: string;
    avatar: string;
  };
  dueDate?: string;
  tags?: string[];
}

interface TaskGroupProps {
  title: string;
  count: number;
  tasks: Task[];
}

export function TaskGroup({ title, count, tasks }: TaskGroupProps) {
  return (
    <Card className="flex flex-col">
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="text-sm text-gray-500">{count}</span>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Plus size={16} className="text-gray-400" />
        </button>
      </div>
      <div className="flex-1 p-2 space-y-2 min-h-[200px]">
        {tasks.map(task => (
          <TaskListItem key={task.id} {...task} />
        ))}
      </div>
    </Card>
  );
}