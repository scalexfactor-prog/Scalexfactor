import { Outlet } from 'react-router-dom';
import { AdminSidebar, AdminTopbar } from '@/components/admin';

export function AdminLayout() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <AdminSidebar />
      <div className="pl-72">
        <AdminTopbar />
        <main className="w-full pt-16 px-space-md pb-space-lg bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
