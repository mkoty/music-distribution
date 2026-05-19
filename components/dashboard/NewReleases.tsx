import { Card } from '@/components/ui/Card';
import { Play } from 'lucide-react';
import { newReleases } from '@/lib/mock/tracks';

function fmtPlays(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function fmtDur(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, '0')}`;
}

export function NewReleases() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {newReleases.map((t) => (
        <Card key={t.id} className="flex items-center gap-4">
          <div
            className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${t.coverGradient}`}
          >
            <Play className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-medium">{t.title}</div>
            <div className="truncate text-xs text-text-2">{t.artist}</div>
          </div>
          <div className="text-right text-xs text-text-2">
            <div>{fmtPlays(t.plays)} прослуш.</div>
            <div className="mt-0.5">{fmtDur(t.durationSec)}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
