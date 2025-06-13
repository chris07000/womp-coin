import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-black rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border-4 uppercase tracking-wide';
  
  const variants = {
    primary: 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-orange-600 hover:border-orange-700',
    secondary: 'bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white border-purple-600 hover:border-purple-700',
    outline: 'bg-transparent hover:bg-current text-current border-current'
  };
  
  const sizes = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg'
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
} 