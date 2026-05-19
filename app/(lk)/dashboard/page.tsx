import { HeroBanner } from '@/components/dashboard/HeroBanner';
import { AICardGrid } from '@/components/dashboard/AICardGrid';
import { NewReleases } from '@/components/dashboard/NewReleases';
import { SectionHeader } from '@/components/dashboard/SectionHeader';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <section>
        <SectionHeader title="Возможности" />
        <AICardGrid />
      </section>
      <section>
        <SectionHeader title="Новинки" hrefAll="/dashboard/catalog" />
        <NewReleases />
      </section>
    </div>
  );
}
