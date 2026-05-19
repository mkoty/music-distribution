import { cn } from '@/lib/cn';

export function Avatar({
  name,
  className
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-semibold text-white',
        className
      )}
    >
      {initials}
    </div>
  );
}
