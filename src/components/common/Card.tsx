import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white rounded-lg border border-gray-200
      hover:border-gray-300 hover:shadow-sm
      transition-all duration-200
      ${className}
    `}>
      {children}
    </div>
  );
}