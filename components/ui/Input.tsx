import { cn } from '@/lib/cn';
import { InputHTMLAttributes, forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-xl border border-border bg-bg-2 px-4 text-sm text-text-0 placeholder:text-text-2 outline-none focus:border-accent',
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = 'Input';
