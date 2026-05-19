import { Card } from '@/components/ui/Card';
import { Construction } from 'lucide-react';

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Card className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-bg-2">
          <Construction className="h-7 w-7 text-accent" />
        </div>
        <div className="text-lg font-medium">Скоро здесь будет интересно</div>
        <p className="max-w-md text-sm text-text-2">
          Этот раздел в активной разработке. Подпишитесь на обновления — мы дадим знать первыми.
        </p>
      </Card>
    </div>
  );
}
