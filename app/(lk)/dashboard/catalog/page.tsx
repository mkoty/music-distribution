import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { releases, type ReleaseStatus } from '@/lib/mock/releases';
import { Plus } from 'lucide-react';

const statusLabel: Record<ReleaseStatus, { label: string; tone: 'success' | 'warning' | 'neutral' }> = {
  published: { label: 'Опубликован',  tone: 'success' },
  review:    { label: 'На модерации', tone: 'warning' },
  draft:     { label: 'Черновик',     tone: 'neutral' }
};

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Каталог</h1>
        <Link href="/dashboard/releases/new">
          <Button>
            <Plus className="h-4 w-4" />
            Новый релиз
          </Button>
        </Link>
      </div>
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-2">
              <th className="px-5 py-3 font-normal">Релиз</th>
              <th className="px-5 py-3 font-normal">Артист</th>
              <th className="px-5 py-3 font-normal">ISRC</th>
              <th className="px-5 py-3 font-normal">Дата</th>
              <th className="px-5 py-3 font-normal">Статус</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((r) => {
              const s = statusLabel[r.status];
              return (
                <tr key={r.id} className="border-t border-border">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-md bg-gradient-to-br ${r.coverGradient}`} />
                      <div className="font-medium">{r.title}</div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-text-1">{r.artist}</td>
                  <td className="px-5 py-3 text-text-2">{r.isrc}</td>
                  <td className="px-5 py-3 text-text-1">
                    {new Date(r.releasedAt).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-5 py-3">
                    <Badge tone={s.tone}>{s.label}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
