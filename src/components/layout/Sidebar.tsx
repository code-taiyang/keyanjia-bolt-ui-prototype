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
  FileText,
  Award,
  Calculator,
  TestTubes,
  Brain,
  LineChart,
  Microscope,
  Code2,
  Lightbulb,
  Database,
  BookMarked,
  MessageSquare,
  BarChart2
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
      icon: <Microscope size={20} />, 
      label: "实验助手",
      to: "/tools/experiment",
      active: location.pathname === "/tools/experiment"
    },
    { 
      icon: <Calculator size={20} />, 
      label: "算法助手",
      to: "/tools/algorithm",
      active: location.pathname === "/tools/algorithm"
    },
    { 
      icon: <Code2 size={20} />, 
      label: "编程助手",
      to: "/tools/coding",
      active: location.pathname === "/tools/coding"
    },
    { 
      icon: <FileText size={20} />, 
      label: "专利助手",
      to: "/tools/patent",
      active: location.pathname === "/tools/patent"
    },
    { 
      icon: <Award size={20} />, 
      label: "基金助手",
      to: "/tools/funding",
      active: location.pathname === "/tools/funding"
    },
    { 
      icon: <Lightbulb size={20} />, 
      label: "研究规划",
      to: "/tools/planning",
      active: location.pathname === "/tools/planning"
    }
  ];

  const researchResources = [
    {
      icon: <Database size={20} />,
      label: "数据集",
      to: "/resources/datasets",
      badge: "32",
      active: location.pathname.startsWith("/resources/datasets")
    },
    {
      icon: <BookMarked size={20} />,
      label: "文献库",
      to: "/resources/papers",
      badge: "484",
      active: location.pathname === "/resources/papers"
    },
    {
      icon: <Brain size={20} />,
      label: "模型库",
      to: "/resources/models",
      badge: "30",
      active: location.pathname === "/resources/models"
    }
  ];

  const settings = [
    { 
      icon: <Settings size={20} />, 
      label: "设置",
      to: "/settings",
      active: location.pathname.startsWith("/settings")
    }
  ];

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