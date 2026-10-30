import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { NAV_ITEMS, SITE } from '@/data/site';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const current = pathname + hash;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-gutter">
        <Link to="/" className="flex items-center gap-space-sm" onClick={() => setMenuOpen(false)}>
          <img src={SITE.logoUrl} alt="Scalex Factor Brand Logo" className="h-8 w-auto object-contain" />
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-label-md text-label-md transition-colors px-space-sm py-space-xs ${
                current === item.to
                  ? 'bg-secondary-container text-on-secondary-fixed font-bold rounded-lg'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden md:flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg">
            <Icon name="chat" className="text-tertiary text-[20px]" />
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Connect Direct</span>
              <a href={SITE.phoneHref} className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors">
                {SITE.phone}
              </a>
            </div>
          </div>
          <Link
            to="/#contact"
            className="hidden sm:inline-flex bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-lg hover:bg-primary transition-colors shadow-sm items-center justify-center"
          >
            Get a Free Consultation
          </Link>
          <button
            type="button"
            className="xl:hidden p-space-xs rounded-lg text-on-surface hover:bg-surface-container-low"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="xl:hidden bg-surface-container-lowest px-margin-mobile pb-space-md flex flex-col gap-space-xs" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="px-space-sm py-space-sm rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-space-xs bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-lg text-center"
          >
            Get a Free Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
