import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { NAV_ITEMS, SITE } from '@/data/site';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const current = pathname + hash;

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-cyan-500 text-center text-[11px] text-white sm:text-xs font-semibold py-2 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="rounded-full bg-white/20 px-2 py-0.5 uppercase tracking-[0.2em] font-extrabold">Q4 Growth Sprint</span>
          <span className="hidden sm:inline">Claim 1 of 5 free conversion &amp; SEO velocity audits</span>
          <Link to="/#audit-form" className="underline font-bold hover:text-slate-200">Claim Now →</Link>
        </div>
      </div>

      <header className="glass-nav border-b backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/scalex-factor-logo.png"
              alt="Scalex Factor — Growth & Tech Agency"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </Link>

          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-600 xl:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-lg px-3 py-2 transition-colors hover:bg-indigo-50 hover:text-indigo-700 ${
                  current === item.to ? 'bg-indigo-50 text-indigo-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {/* <a href={SITE.phoneHref} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-white">
              Client Login
            </a> */}
            <Link
              to="/#audit-form"
              className="relative overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500" />
              <span className="gradient-accent relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90">
                <span>Book Strategy Call</span>
                <Icon name="arrow_forward" className="text-[14px] text-cyan-400" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg xl:hidden" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#audit-form"
              onClick={() => setMenuOpen(false)}
              className="gradient-accent mt-3 block w-full rounded-lg px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
            >
              Book Free Strategy Call
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
