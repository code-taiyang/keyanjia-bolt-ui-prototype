import React from 'react';

interface WorkspaceHeaderProps {
  title: string;
  description: string;
  actions?: React.ReactNode[];
}

export function WorkspaceHeader({ title, description, actions }: WorkspaceHeaderProps) {
  return (
    <div className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <p className="text-gray-500 mt-1">{description}</p>
        </div>
        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}