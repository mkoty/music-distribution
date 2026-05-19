'use client';
import Link from 'next/link';
import { Bell, MessageSquare, Search, Settings } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-bg-0/80 px-6 backdrop-blur">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-2" />
        <input
          placeholder="Поиск релизов, артистов, треков…"
          className="h-10 w-full rounded-xl border border-border bg-bg-1 pl-9 pr-4 text-sm text-text-0 placeholder:text-text-2 outline-none focus:border-accent"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <MessageSquare className="h-4 w-4" />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <Bell className="h-4 w-4" />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <Settings className="h-4 w-4" />
        </button>
        <Link href="/" className="ml-2">
          <Avatar name="Стёпа С" />
        </Link>
      </div>
    </header>
  );
}
