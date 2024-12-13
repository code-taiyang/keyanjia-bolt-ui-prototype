import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  User, 
  Bell, 
  Shield, 
  Key, 
  Settings,
  Palette,
  Globe,
  HardDrive
} from 'lucide-react';

export function SettingsLayout() {
  const location = useLocation();
  
  const settingsSections = [
    {
      title: '个人设置',
      items: [
        { 
          icon: <User size={16} />, 
          label: '个人信息', 
          to: '/settings/profile',
          description: '管理您的个人资料和账户信息'
        },
        { 
          icon: <Bell size={16} />, 
          label: '通知设置', 
          to: '/settings/notifications',
          description: '配置通知和提醒方式'
        },
        { 
          icon: <Shield size={16} />, 
          label: '隐私设置', 
          to: '/settings/privacy',
          description: '管理隐私和安全选项'
        }
      ]
    },
    {
      title: '系统设置',
      items: [
        { 
          icon: <Key size={16} />, 
          label: 'API设置', 
          to: '/settings/api',
          description: '管理API密钥和访问配额'
        },
        { 
          icon: <Palette size={16} />, 
          label: '界面设置', 
          to: '/settings/appearance',
          description: '自定义界面主题和布局'
        },
        { 
          icon: <Globe size={16} />, 
          label: '语言设置', 
          to: '/settings/language',
          description: '设置界面语言和地区'
        },
        { 
          icon: <HardDrive size={16} />, 
          label: '存储设置', 
          to: '/settings/storage',
          description: '管理数据存储和缓存'
        }
      ]
    }
  ];

  return (
    <div className="flex-1 flex min-h-0">
      {/* Sidebar */}
      <div className="w-64 border-r bg-gray-50 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-lg font-medium text-gray-900">设置</h1>
          <p className="text-sm text-gray-500 mt-1">管理您的账户和系统设置</p>
        </div>

        <nav className="px-4 pb-4">
          {settingsSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="px-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.to}
                    className={`
                      block px-2 py-2 rounded-lg text-sm
                      ${location.pathname === item.to
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}