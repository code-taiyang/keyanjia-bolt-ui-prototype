import React, { useState, useRef, useEffect } from 'react';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Key, 
  LogOut,
  ChevronRight
} from 'lucide-react';

interface UserProfileProps {
  isCollapsed: boolean;
}

export function UserProfile({ isCollapsed }: UserProfileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: <User size={16} />,
      label: '个人信息',
      description: '查看和编辑个人资料',
      to: '/settings/profile'
    },
    {
      icon: <Bell size={16} />,
      label: '通知设置',
      description: '管理通知和提醒',
      to: '/settings/notifications'
    },
    {
      icon: <Shield size={16} />,
      label: '隐私设置',
      description: '管理隐私和安全选项',
      to: '/settings/privacy'
    },
    {
      icon: <Key size={16} />,
      label: 'API设置',
      description: '管理API密钥和配额',
      to: '/settings/api'
    },
    {
      icon: <Settings size={16} />,
      label: '系统设置',
      description: '配置系统参数和选项',
      to: '/settings/system'
    }
  ];

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`
          w-full border-t p-4 flex items-center hover:bg-gray-50
          ${isCollapsed ? 'justify-center' : 'gap-2'}
        `}
      >
        <div className="bg-purple-600 text-white w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
          A
        </div>
        {!isCollapsed && (
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">Alex Johnson</div>
            <div className="text-xs text-gray-500 truncate">Research Scientist</div>
          </div>
        )}
      </button>

      {isMenuOpen && !isCollapsed && (
        <div className="absolute bottom-full left-0 w-72 mb-2 bg-white border rounded-lg shadow-lg py-2">
          <div className="px-4 py-3 border-b">
            <div className="font-medium">Alex Johnson</div>
            <div className="text-sm text-gray-500">alex.johnson@example.com</div>
          </div>

          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 group"
              >
                <div className="text-gray-400 group-hover:text-gray-600">
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-gray-900">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>

          <div className="border-t py-2">
            <button className="w-full px-4 py-2 flex items-center gap-3 text-red-600 hover:bg-red-50">
              <LogOut size={16} />
              <span className="text-sm font-medium">退出登录</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}