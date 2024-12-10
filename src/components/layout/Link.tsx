import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface ExtraIcon {
  icon: React.ReactNode;
  to: string;
  tooltip?: string;
}

interface LinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  isCollapsed?: boolean;
  badge?: string;
  extraIcons?: ExtraIcon[];
}

export function Link({ 
  icon, 
  label, 
  to, 
  active, 
  isCollapsed, 
  badge,
  extraIcons 
}: LinkProps) {
  return (
    <div className="relative group">
      <RouterLink
        to={to}
        className={`
          flex items-center gap-3 rounded-lg text-sm
          transition-colors duration-200
          ${isCollapsed ? 'justify-center p-2' : 'px-3 py-2'}
          ${active
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }
        `}
        title={isCollapsed ? label : undefined}
      >
        {icon}
        {!isCollapsed && (
          <div className="flex-1 flex items-center justify-between min-w-0">
            <span className="truncate">{label}</span>
            <div className="flex items-center gap-2">
              {badge && (
                <span className={`
                  text-xs rounded-full px-2 py-0.5
                  ${active ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
                `}>
                  {badge}
                </span>
              )}
              {extraIcons && extraIcons.map((extraIcon, index) => (
                <RouterLink
                  key={index}
                  to={extraIcon.to}
                  className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                  title={extraIcon.tooltip}
                >
                  {extraIcon.icon}
                </RouterLink>
              ))}
            </div>
          </div>
        )}
      </RouterLink>
    </div>
  );
}