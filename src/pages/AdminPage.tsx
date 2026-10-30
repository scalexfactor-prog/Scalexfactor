import { AdminPageHeader, AdminStats, LifecycleFunnel, LeadWorkspace } from '@/components/admin';

export default function AdminPage() {
  return (
    <div className="flex flex-col w-full">
      <AdminPageHeader />
      <AdminStats />
      <LifecycleFunnel />
      <LeadWorkspace />
    </div>
  );
}
