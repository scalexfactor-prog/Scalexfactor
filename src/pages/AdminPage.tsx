import { AdminPageHeader, AdminStats, LifecycleFunnel, LeadWorkspace } from '@/components/admin';

export default function AdminPage() {
  return (
    <div className="flex w-full flex-col bg-[#070b11] text-slate-100">
      <AdminPageHeader />
      <AdminStats />
      <LifecycleFunnel />
      <LeadWorkspace />
    </div>
  );
}
