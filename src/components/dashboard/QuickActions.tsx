import React from 'react';
import { Card } from '../common/Card';
import { 
  FolderPlus, 
  Users, 
  FileText,
  Brain,
  Share2 
} from 'lucide-react';

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick: () => void;
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      icon: <FolderPlus className="text-blue-600" size={20} />,
      label: '新建研究课题',
      description: '创建新的研究项目',
      onClick: () => console.log('Create new project')
    },
    {
      icon: <Brain className="text-purple-600" size={20} />,
      label: '开始研究活动',
      description: '使用AI工具开展研究',
      onClick: () => console.log('Start research activity')
    },
    {
      icon: <FileText className="text-green-600" size={20} />,
      label: '上传研究资料',
      description: '添加文献或数据文件',
      onClick: () => console.log('Upload research materials')
    },
    {
      icon: <Users className="text-orange-600" size={20} />,
      label: '邀请团队成员',
      description: '添加新的团队成员',
      onClick: () => console.log('Invite team members')
    },
    {
      icon: <Share2 className="text-indigo-600" size={20} />,
      label: '分享研究成果',
      description: '与团队共享研究进展',
      onClick: () => console.log('Share research results')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {actions.map((action, index) => (
        <Card 
          key={index}
          className="p-4 hover:border-blue-200 cursor-pointer"
          onClick={action.onClick}
        >
          <div className="flex flex-col items-start gap-3">
            <div className="p-2 rounded-lg bg-gray-50">
              {action.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{action.label}</h3>
              <p className="text-sm text-gray-500 mt-1">{action.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}