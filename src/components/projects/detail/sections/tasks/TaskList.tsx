import React from 'react';
import { Plus, Filter, SortAsc } from 'lucide-react';
import { TaskListItem } from './TaskListItem';
import { TaskGroup } from './TaskGroup';

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

export function TaskList() {
  const tasks: Task[] = [
    {
      id: '1',
      title: '数据预处理流程优化',
      description: '优化现有的数据清洗和预处理流程，提高处理效率',
      status: 'in_progress',
      priority: 'high',
      assignee: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      },
      dueDate: '2024/3/20',
      tags: ['数据处理', '优化']
    },
    {
      id: '2',
      title: '实现新的分析模型',
      description: '基于最新研究成果，实现改进后的分析模型',
      status: 'todo',
      priority: 'medium',
      assignee: {
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face'
      },
      dueDate: '2024/3/25',
      tags: ['模型', '分析']
    },
    {
      id: '3',
      title: '撰写技术文档',
      description: '编写模型实现的技术文档和使用说明',
      status: 'review',
      priority: 'low',
      assignee: {
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face'
      },
      dueDate: '2024/3/18',
      tags: ['文档']
    }
  ];

  const groupedTasks = {
    todo: tasks.filter(task => task.status === 'todo'),
    in_progress: tasks.filter(task => task.status === 'in_progress'),
    review: tasks.filter(task => task.status === 'review'),
    done: tasks.filter(task => task.status === 'done')
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium">任务列表</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <Filter size={16} />
              <span>筛选</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <SortAsc size={16} />
              <span>排序</span>
            </button>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={16} />
          <span>新建任务</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <TaskGroup 
          title="待处理" 
          count={groupedTasks.todo.length} 
          tasks={groupedTasks.todo} 
        />
        <TaskGroup 
          title="进行中" 
          count={groupedTasks.in_progress.length} 
          tasks={groupedTasks.in_progress} 
        />
        <TaskGroup 
          title="审核中" 
          count={groupedTasks.review.length} 
          tasks={groupedTasks.review} 
        />
        <TaskGroup 
          title="已完成" 
          count={groupedTasks.done.length} 
          tasks={groupedTasks.done} 
        />
      </div>
    </div>
  );
}