'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  isAnimated?: boolean;
  isFullWidth?: boolean;
  href?: string;
}

const CustomButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  rounded = false,
  isAnimated = true,
  isFullWidth = false,
  href,
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 tracking-wide";
  
  const variantClasses = {
    primary: "bg-[#3a86c9] text-primary-foreground hover:bg-[#3078b5]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-transparent hover:bg-secondary text-foreground",
    ghost: "bg-transparent hover:bg-secondary/10 text-foreground",
    link: "text-[#3a86c9] underline-offset-4 hover:underline"
  };
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const roundedClass = rounded ? "rounded-full" : "rounded-md";
  const animatedClass = isAnimated ? "button-animation" : "";
  const fullWidthClass = isFullWidth ? "w-full" : "";
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    roundedClass,
    animatedClass,
    fullWidthClass,
    "gap-2", // Add gap for icon spacing
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
