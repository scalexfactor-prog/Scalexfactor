import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollManager } from './ScrollManager';

export function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <main className="w-full bg-[#070b11] pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
