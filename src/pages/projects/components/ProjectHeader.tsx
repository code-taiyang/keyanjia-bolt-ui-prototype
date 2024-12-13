import React, { useState } from 'react';
import { Share2, Star, MoreVertical, Calendar, Users, Tag, Archive, Trash2 } from 'lucide-react';
import { Badge } from '../../../components/common/Badge';
import { Avatar } from '../../../components/common/Avatar';
import { useProjectStore } from '../../../stores/projectStore';

interface ProjectHeaderProps {
  project: {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'completed' | 'pending';
    progress: number;
    members: {
      count: number;
      list: Array<{
        avatar: string;
        name: string;
      }>;
    };
    tags: string[];
    isStarred?: boolean;
    isArchived?: boolean;
  };
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleStar, toggleArchive, deleteProject } = useProjectStore();

  const statusLabels = {
    active: { text: '进行中', variant: 'success' as const },
    completed: { text: '已完成', variant: 'default' as const },
    pending: { text: '待开始', variant: 'warning' as const }
  };

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900">{project.title}</h1>
              <Badge variant={statusLabels[project.status].variant}>
                {statusLabels[project.status].text}
              </Badge>
            </div>
            <p className="text-gray-500 mt-1">{project.description}</p>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">2024/01/15 - 2024/06/30</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gray-400" />
                <div className="flex -space-x-2">
                  {project.members.list.map((member, index) => (
                    <Avatar key={index} src={member.avatar} alt={member.name} size="sm" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{project.members.count} 名成员</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-gray-400" />
                <div className="flex gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleStar(project.id)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Star 
                size={20} 
                className={project.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
              />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share2 size={20} className="text-gray-400" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <MoreVertical size={20} className="text-gray-400" />
              </button>
              
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                  <button
                    onClick={() => {
                      toggleArchive(project.id);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Archive size={16} />
                    <span>{project.isArchived ? '取消归档' : '归档项目'}</span>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('确定要删除此项目吗？此操作无法撤销。')) {
                        deleteProject(project.id);
                      }
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    <span>删除项目</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}