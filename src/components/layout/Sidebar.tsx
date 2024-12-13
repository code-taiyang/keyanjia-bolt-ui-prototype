import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FolderKanban,
  Layers,
  Settings,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ScrollText,
  Brain,
  LineChart,
  Code2,
  Database,
  BookMarked,
  MessageSquare,
  BarChart2,
  TestTubes,
  Award,
  ClipboardList
} from 'lucide-react';
import { Link } from './Link';
import { SidebarSection } from './SidebarSection';
import { UserProfile } from './UserProfile';
import { WorkspaceSelector } from './WorkspaceSelector';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const researchManagement = [
    { 
      icon: <FolderKanban size={20} />, 
      label: "研究课题",
      to: "/projects",
      active: location.pathname === "/projects",
      badge: "8"
    },
    { 
      icon: <Layers size={20} />, 
      label: "研究活动",
      to: "/activities",
      badge: "12",
      active: location.pathname === "/activities"
    }
  ];

  const aiTools = [
    { 
      icon: <MessageSquare size={20} />, 
      label: "文献AI",
      to: "/literature",
      active: location.pathname === "/literature"
    },
    { 
      icon: <ScrollText size={20} />, 
      label: "写作助手",
      to: "/tools/writing",
      active: location.pathname.startsWith("/tools/writing")
    },
    { 
      icon: <BarChart2 size={20} />, 
      label: "数据分析",
      to: "/analysis",
      active: location.pathname === "/analysis"
    },
    { 
      icon: <Code2 size={20} />, 
      label: "科研算法",
      to: "/tools/algorithm",
      active: location.pathname === "/tools/algorithm",
      badge: "New"
    },
    { 
      icon: <Brain size={20} />, 
      label: "科研计算",
      to: "/tools/coding",
      active: location.pathname === "/tools/coding"
    },
    {
      icon: <TestTubes size={20} />,
      label: "实验助手",
      to: "/tools/experiment",
      active: location.pathname === "/tools/experiment"
    },
    {
      icon: <Award size={20} />,
      label: "基金助手",
      to: "/tools/funding",
      active: location.pathname === "/tools/funding"
    },
    {
      icon: <ClipboardList size={20} />,
      label: "研究规划",
      to: "/planning",
      active: location.pathname === "/planning"
    }
  ];

  const researchResources = [
    {
      icon: <Database size={20} />,
      label: "数据集",
      to: "/resources/datasets",
      badge: "32"
    },
    {
      icon: <BookMarked size={20} />,
      label: "文献库",
      to: "/resources/papers",
      badge: "484"
    },
    {
      icon: <LineChart size={20} />,
      label: "模型库",
      to: "/resources/models",
      badge: "30"
    }
  ];

  const settings = [
    { 
      icon: <Settings size={20} />, 
      label: "设置",
      to: "/settings"
    }
  ];

  // 检查当前路径是否需要隐藏侧边栏
  const hiddenPaths = [
    '/tools/coding/computing/editor',
    '/tools/algorithm/editor',
    '/writing',
    '/analysis/editor'
  ];

  const shouldHideSidebar = hiddenPaths.some(path => 
    location.pathname.startsWith(path)
  );

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <div className="relative">
      <div 
        className={`
          bg-white border-r h-screen flex flex-col
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'}
        `}
      >
        <div className="h-16 px-4 border-b flex items-center justify-between">
          <WorkspaceSelector isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
            title={isCollapsed ? '展开侧边栏' : '收起侧边栏'}
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-6 p-4">
          <SidebarSection 
            title="研究课题" 
            links={researchManagement} 
            isCollapsed={isCollapsed} 
          />
          
          <SidebarSection 
            title="研究工具" 
            links={aiTools} 
            isCollapsed={isCollapsed} 
          />
          
          <SidebarSection 
            title="研究资源" 
            links={researchResources} 
            isCollapsed={isCollapsed} 
          />
          
          <SidebarSection 
            title="系统设置" 
            links={settings} 
            isCollapsed={isCollapsed} 
          />
        </div>

        <UserProfile isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}
