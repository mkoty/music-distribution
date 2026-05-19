import { DashboardShell } from '@/components/layout/DashboardShell';

export default function LkLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
