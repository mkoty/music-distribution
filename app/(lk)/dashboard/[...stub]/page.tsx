import { ComingSoon } from '@/components/dashboard/ComingSoon';
import { navGroups } from '@/lib/nav';

export const dynamicParams = false;

export function generateStaticParams() {
  return navGroups
    .flatMap((g) => g.items)
    .filter((i) => i.comingSoon)
    .map((i) => ({ stub: i.href.replace(/^\/dashboard\//, '').split('/') }));
}

export default function StubPage({ params }: { params: { stub: string[] } }) {
  const href = '/dashboard/' + params.stub.join('/');
  const item = navGroups.flatMap((g) => g.items).find((i) => i.href === href);
  return <ComingSoon title={item?.label ?? 'Раздел'} />;
}
