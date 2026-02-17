
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: string;
  className?: string;
}

const FadeIn = ({
  children,
  direction = 'up',
  duration = 'normal',
  delay = '0s',
  className,
}: FadeInProps) => {
  const getAnimation = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in';
      case 'left':
        return 'animate-fade-in-right';
      case 'right':
        return 'animate-fade-in-left';
      case 'none':
        return 'animate-none';
      default:
        return 'animate-fade-in';
    }
  };

  const getDuration = () => {
    switch (duration) {
      case 'fast':
        return 'duration-300';
      case 'slow':
        return 'duration-1000';
      default:
        return 'duration-700';
    }
  };

  return (
    <div
      className={cn(getAnimation(), getDuration(), className)}
      style={{ 
        animationDelay: delay, 
        animationFillMode: 'both',
        opacity: 0 // Start with opacity 0
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
