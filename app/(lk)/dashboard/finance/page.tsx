import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { balanceRub, operations } from '@/lib/mock/finance';
import { ArrowDownRight, ArrowUpRight, Wallet } from 'lucide-react';

const fmt = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

const kindLabel = {
  payout:  { label: 'Вывод',     tone: 'neutral' as const },
  royalty: { label: 'Роялти',    tone: 'accent'  as const },
  fee:     { label: 'Комиссия',  tone: 'warning' as const }
};

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Финансы</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-text-2 text-sm">
              <Wallet className="h-4 w-4" /> Доступно к выводу
            </div>
            <div className="mt-2 text-3xl font-semibold">{fmt.format(balanceRub)}</div>
            <div className="mt-1 text-xs text-text-2">Обновлено сегодня</div>
          </div>
          <Button>Вывести</Button>
        </Card>
        <Card>
          <div className="text-text-2 text-sm">Доход за месяц</div>
          <div className="mt-2 text-2xl font-semibold">{fmt.format(77_570)}</div>
          <div className="mt-1 text-xs text-emerald-400">+12% к прошлому</div>
        </Card>
      </div>
      <Card className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-border font-medium">История операций</div>
        <table className="w-full text-sm">
          <tbody>
            {operations.map((o) => {
              const k = kindLabel[o.kind];
              const positive = o.amountRub > 0;
              return (
                <tr key={o.id} className="border-t border-border">
                  <td className="px-5 py-3 text-text-2 w-32">
                    {new Date(o.date).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      {positive
                        ? <ArrowDownRight className="h-4 w-4 text-emerald-400" />
                        : <ArrowUpRight   className="h-4 w-4 text-text-2" />}
                      <span>{o.source}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <Badge tone={k.tone}>{k.label}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right font-medium">
                    {positive ? '+' : ''}{fmt.format(o.amountRub)}
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
