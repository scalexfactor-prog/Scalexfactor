import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollManager } from './ScrollManager';

export function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <main className="w-full pt-20 bg-surface">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
