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
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-cyan-500 text-white text-center text-[11px] sm:text-xs font-semibold py-2 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="rounded-full bg-white/20 px-2 py-0.5 uppercase tracking-[0.2em] font-extrabold">Q4 Growth Sprint</span>
          <span className="hidden sm:inline">Claim 1 of 5 free conversion &amp; SEO velocity audits</span>
          <Link to="/#audit-form" className="underline font-bold hover:text-slate-200">Claim Now →</Link>
        </div>
      </div>

      <header className="glass-nav border-b backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30">
              <Icon name="bolt" className="text-lg text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-white">
                SCALEX<span className="text-cyan-400">FACTOR</span>
              </span>
              <span className="-mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400">Growth &amp; Tech Agency</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 xl:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors hover:text-white ${
                  current === item.to ? 'rounded-lg bg-slate-800/80 px-3 py-2 text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href={SITE.phoneHref} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-white">
              Client Login
            </a>
            <Link
              to="/#audit-form"
              className="relative overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 animate-pulse-slow rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-slate-900">
                <span>Book Strategy Call</span>
                <Icon name="arrow_forward" className="text-[14px] text-cyan-400" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800/80 hover:text-white xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-800 bg-[#070b11] px-4 pb-6 pt-4 xl:hidden" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#audit-form"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block w-full rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
            >
              Book Free Strategy Call
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
