import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 p-10 text-center md:p-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Готов выпустить первый трек?</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/80">
          Регистрация бесплатна. Первый релиз можно опубликовать уже сегодня.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/login">
            <Button size="lg" className="bg-white text-violet-800 hover:bg-white/90">
              Создать аккаунт
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
