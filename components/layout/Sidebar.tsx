'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music2 } from 'lucide-react';
import { navGroups } from '@/lib/nav';
import { cn } from '@/lib/cn';

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-bg-1">
      <Link href="/dashboard" className="flex items-center gap-2 px-5 h-16 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
          <Music2 className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold tracking-tight">MusicHub</span>
      </Link>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            {group.title && (
              <div className="px-3 mb-2 text-[11px] uppercase tracking-wider text-text-2">
                {group.title}
              </div>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== '/dashboard' && pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm',
                        active
                          ? 'bg-accent/15 text-text-0'
                          : 'text-text-1 hover:bg-bg-2 hover:text-text-0'
                      )}
                    >
                      <Icon className={cn('h-4 w-4 shrink-0', active && 'text-accent')} />
                      <span className="truncate">{item.label}</span>
                      {item.comingSoon && (
                        <span className="ml-auto text-[10px] uppercase text-text-2">soon</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
