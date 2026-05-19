import { Card } from '@/components/ui/Card';
import { Globe2, Wallet, Sparkles, BarChart3, Shield, Headphones } from 'lucide-react';

const features = [
  { icon: Globe2,    title: 'Все площадки',     text: 'Spotify, Apple Music, VK, Яндекс, Boom, Deezer — 150+ DSP.' },
  { icon: Wallet,    title: '100% роялти',      text: 'Без скрытых комиссий. Выводи на карту в один клик.' },
  { icon: Sparkles,  title: 'AI-инструменты',   text: 'Генерация обложек, мастеринг, идеи для постов.' },
  { icon: BarChart3, title: 'Живая аналитика',  text: 'Стримы, аудитория и страны — обновляются ежедневно.' },
  { icon: Shield,    title: 'Защита прав',      text: 'ISRC, Content ID и помощь с тайпсквоттингом.' },
  { icon: Headphones,title: 'Поддержка 24/7',   text: 'Менеджеры на связи, отвечаем за минуты.' }
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Всё нужное в одном месте</h2>
        <p className="mt-3 text-text-1">Платформа, которая закрывает путь от идеи до релиза.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title} className="space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-medium">{f.title}</div>
              <div className="text-sm text-text-2">{f.text}</div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
