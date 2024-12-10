import React from 'react';

interface Category {
  icon: React.ReactNode;
  label: string;
  count: number;
  active?: boolean;
}

interface WorkspaceNavProps {
  categories: Category[];
}

export function WorkspaceNav({ categories }: WorkspaceNavProps) {
  return (
    <nav className="w-56 border-r bg-gray-50 p-4">
      <div className="space-y-1">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm
              ${category.active 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {category.icon}
              <span>{category.label}</span>
            </div>
            <span className={`
              text-xs rounded-full px-2 py-0.5
              ${category.active ? 'bg-blue-100' : 'bg-gray-100'}
            `}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}