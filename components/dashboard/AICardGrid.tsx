import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trophy, ImageIcon, ListMusic, BarChart3, Megaphone } from 'lucide-react';

interface AIItem {
  title: string;
  subtitle: string;
  icon: typeof Trophy;
  accent: string;
}

const items: AIItem[] = [
  { title: 'Турнир месяца', subtitle: 'Призовой фонд 100 000 ₽', icon: Trophy,    accent: 'from-amber-500 to-rose-500' },
  { title: 'AI-обложки',    subtitle: 'Сгенерируй за минуту',     icon: ImageIcon, accent: 'from-violet-600 to-fuchsia-600' },
  { title: 'Питч-лист',     subtitle: 'Попади в плейлисты',       icon: ListMusic, accent: 'from-indigo-600 to-cyan-500' },
  { title: 'Аналитика',     subtitle: 'Стримы и аудитория',       icon: BarChart3, accent: 'from-emerald-500 to-teal-500' },
  { title: 'Промо',         subtitle: 'Реклама в соцсетях',       icon: Megaphone, accent: 'from-pink-600 to-orange-500' }
];

export function AICardGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <Card key={it.title} className="flex flex-col gap-3">
            <div
              className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${it.accent}`}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="mt-1 text-xs text-text-2">{it.subtitle}</div>
            </div>
            <Button size="sm" variant="secondary" className="mt-auto">
              Открыть
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
