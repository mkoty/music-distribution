import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.18),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-1 px-3 py-1 text-xs text-text-1">
          Музыкальная дистрибьюция нового поколения
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
          Твоя музыка — <span className="bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent">на всех площадках</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-text-1">
          Загрузи трек один раз — и он окажется в Spotify, Apple Music, VK и Яндекс Музыке.
          Получай роялти, аналитику и инструменты продвижения в одном кабинете.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/login">
            <Button size="lg">Начать бесплатно <ArrowRight className="h-4 w-4" /></Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="secondary">Узнать больше</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
