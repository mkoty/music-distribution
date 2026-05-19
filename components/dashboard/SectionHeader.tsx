import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SectionHeader({
  title,
  hrefAll
}: {
  title: string;
  hrefAll?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      {hrefAll && (
        <Link
          href={hrefAll}
          className="inline-flex items-center gap-1 text-sm text-text-1 hover:text-text-0"
        >
          Смотреть все <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
