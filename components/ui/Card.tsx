import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-xl2 border border-border bg-bg-1 p-5', className)}
      {...rest}
    />
  );
}
