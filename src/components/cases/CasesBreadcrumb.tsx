import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function CasesBreadcrumb() {
  return (
    <div className="w-full bg-surface-container-low/70 py-space-sm">
    <div className="max-w-7xl mx-auto px-margin flex items-center justify-between">
    <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md">
    <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
    <Icon name="home" className="text-[16px]"/>
    <span>Home</span>
    </Link>
    <span className="text-outline-variant font-medium">/</span>
    <span className="text-primary font-semibold">Portfolio &amp; Case Studies</span>
    </nav>
    <div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
    <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
    <span>Verified Enterprise Impact</span>
    </div>
    </div>
    </div>
  );
}
