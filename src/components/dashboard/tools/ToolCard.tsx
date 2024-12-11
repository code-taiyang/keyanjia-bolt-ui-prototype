import React from 'react';
import { Tool } from './types';

interface ToolCardProps extends Tool {
  className?: string;
}

export function ToolCard({
  icon,
  title,
  description,
  bgColor,
  iconColor,
  borderColor,
  features,
  link,
  className = ''
}: ToolCardProps) {
  return (
    <a
      href={link}
      className={`
        block rounded-xl border ${borderColor} ${bgColor}
        hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200
        group relative overflow-hidden
        ${className}
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
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {description}
        </p>
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {features.map((feature, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 bg-white/60 rounded-full text-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={`
        absolute inset-0 border border-transparent
        group-hover:border-blue-600/20 rounded-xl
        transition-colors duration-200
      `} />
    </a>
  );
}