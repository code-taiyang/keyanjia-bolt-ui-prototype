import React from 'react';
import { Link } from './Link';
import { LayoutDashboard } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

interface SidebarLink {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  badge?: string;
  extraIcons?: Array<{
    icon: React.ReactNode;
    to: string;
    tooltip?: string;
  }>;
}

interface SidebarSectionProps {
  title: string;
  links: SidebarLink[];
  isCollapsed: boolean;
}

export function SidebarSection({ title, links, isCollapsed }: SidebarSectionProps) {
  return (
    <div className="space-y-1">
      {!isCollapsed && (
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </div>
          {title === "研究课题" && (
            <RouterLink 
              to="/"
              className="p-1 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-700"
              title="工作台"
            >
              <LayoutDashboard size={16} />
            </RouterLink>
          )}
        </div>
      )}
      {links.map((link, index) => (
        <Link
          key={index}
          icon={link.icon}
          label={link.label}
          to={link.to}
          active={link.active}
          isCollapsed={isCollapsed}
          badge={link.badge}
          extraIcons={link.extraIcons}
        />
      ))}
    </div>
  );
}