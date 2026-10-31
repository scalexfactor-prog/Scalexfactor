import { Outlet } from 'react-router-dom';
import { AdminSidebar, AdminTopbar } from '@/components/admin';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#070b11] text-slate-100 antialiased">
      <AdminSidebar />
      <div className="pl-72">
        <AdminTopbar />
        <main className="min-h-screen w-full bg-[#070b11] px-space-md pb-space-lg pt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
