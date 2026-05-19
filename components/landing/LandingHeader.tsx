import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg-0/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
            <Music2 className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold">MusicHub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-text-1">
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#cta">Начать</a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/login"><Button variant="ghost" size="sm">Войти</Button></Link>
          <Link href="/login"><Button size="sm">Попробовать</Button></Link>
        </div>
      </div>
    </header>
  );
}
