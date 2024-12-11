import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  fallback?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ src, alt, fallback, size = 'md' }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  if (!src && fallback) {
    return (
      <div className={`
        ${sizes[size]} rounded-full bg-gray-100 
        flex items-center justify-center
      `}>
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover`}
    />
  );
}