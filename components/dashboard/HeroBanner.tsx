import Link from 'next/link';
import { Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 p-8 md:p-10">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.18),transparent_50%)]" />
      <div className="relative max-w-2xl">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs">
          <Sparkles className="h-3 w-3" />
          Новинка
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
          Создавай, выпускай и продвигай музыку — в одной платформе
        </h1>
        <p className="mt-3 text-white/80">
          Загружай релизы на Spotify, Apple Music, VK и Яндекс. Следи за статистикой и роялти в реальном времени.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard/releases/new">
            <Button className="bg-white text-violet-800 hover:bg-white/90">
              <Upload className="h-4 w-4" />
              Загрузить релиз
            </Button>
          </Link>
          <Link href="/dashboard/catalog">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Мой каталог
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
