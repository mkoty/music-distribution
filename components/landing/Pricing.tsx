import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Старт',
    price: '0 ₽',
    period: 'навсегда',
    features: ['1 артист', '2 релиза в год', 'Базовая аналитика', '85% роялти'],
    cta: 'Начать',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '490 ₽',
    period: '/мес',
    features: ['До 3 артистов', 'Безлимит релизов', 'Полная аналитика', '100% роялти', 'AI-инструменты'],
    cta: 'Выбрать Pro',
    highlighted: true
  },
  {
    name: 'Label',
    price: 'Договорная',
    period: '',
    features: ['Безлимит артистов', 'Личный менеджер', 'White-label кабинет', 'API-интеграции'],
    cta: 'Связаться',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Простые тарифы</h2>
        <p className="mt-3 text-text-1">Платишь только за то, что используешь.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <Card
            key={p.name}
            className={p.highlighted ? 'border-accent ring-1 ring-accent/40' : ''}
          >
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.highlighted && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] uppercase text-accent">
                  Популярно
                </span>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold">{p.price}</span>
              <span className="text-sm text-text-2">{p.period}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/login" className="mt-6 block">
              <Button className="w-full" variant={p.highlighted ? 'primary' : 'secondary'}>
                {p.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
