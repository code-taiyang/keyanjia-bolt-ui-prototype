import React from 'react';

interface QuickActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  link: string;
}

export function QuickActionCard({
  icon,
  title,
  description,
  bgColor,
  iconColor,
  borderColor,
  link
}: QuickActionCardProps) {
  return (
    <a
      href={link}
      className={`
        block rounded-xl border ${borderColor} ${bgColor}
        hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200 ease-in-out
        group relative overflow-hidden
      `}
    >
      <div className="p-4">
        <div className={`
          w-10 h-10 rounded-lg ${iconColor} 
          flex items-center justify-center mb-3
          group-hover:scale-110 transition-transform duration-200
          bg-white/80 backdrop-blur-sm
        `}>
          {icon}
        </div>
        <h3 className="text-gray-900 font-medium mb-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>
      <div className={`
        absolute inset-0 border border-transparent
        group-hover:border-blue-600/20 rounded-xl
        transition-colors duration-200
      `} />
    </a>
  );
}