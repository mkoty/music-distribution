import { ComingSoon } from '@/components/dashboard/ComingSoon';
import { navGroups } from '@/lib/nav';

export default function StubPage({ params }: { params: { stub: string[] } }) {
  const href = '/dashboard/' + params.stub.join('/');
  const item = navGroups.flatMap((g) => g.items).find((i) => i.href === href);
  return <ComingSoon title={item?.label ?? 'Раздел'} />;
}
