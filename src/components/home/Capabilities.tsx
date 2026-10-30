import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function Capabilities() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="services">
    <div className="max-w-7xl mx-auto px-margin space-y-space-lg">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
    <div className="space-y-space-xs max-w-2xl">
    <div className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold uppercase tracking-wider">
    <Icon name="terminal" className="text-[18px]"/> High-Velocity Competencies
              </div>
    <h2 className="font-headline-lg text-headline-lg text-on-surface">Scalable Capabilities Built for Dominance</h2>
    <p className="font-body-md text-body-md text-on-surface-variant">We merge institutional software engineering with hyper-targeted organic and paid acquisition engines to deliver predictable client revenue.</p>
    </div>
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary hover:text-primary-container font-label-md text-label-md font-semibold group self-start md:self-auto">
    <span>All Specialized Offerings</span>
    <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform"/>
    </Link>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
    <Icon name="devices" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Custom Web Platforms</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Lightning-fast responsive sites, modern web applications, and headless architectures with sub-second page loads.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Next.js</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Vue</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">TypeScript</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Tailwind</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore Platform Engineering <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
    <Icon name="shopping_bag" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">E-Commerce Architecture</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">High-conversion transactional stores engineered for peak inventory spikes, multi-currency flows, and frictionless checkout.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Shopify Plus</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">WooCommerce</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Stripe API</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore E-Commerce Systems <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:bg-tertiary-container group-hover:text-on-tertiary transition-colors">
    <Icon name="manage_search" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">SEO & Search Dominance</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Systematic programmatic and editorial optimization targeting high-intent buyer keywords to capture durable search equity.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Programmatic SEO</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Technical Crawl</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Authority</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore Search Strategy <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
    <Icon name="distance" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Local SEO & Google Maps</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Geo-targeted multi-location ranking, GMB cluster verification, review acquisition mechanics, and proximity optimization.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">GMB Pack 3</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Hyper-Local</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Citations</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore Local Rank Tactics <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
    <Icon name="hub" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Full-Funnel Acquisition</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Precision B2B campaign orchestrations across Google Ads, LinkedIn Account Targeting, Meta Retargeting, and CRO.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Google Performance</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">LinkedIn Ads</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">ABM Funnels</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore Paid & Growth Engine <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
    <div className="space-y-space-md">
    <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:bg-tertiary-container group-hover:text-on-tertiary transition-colors">
    <Icon name="share" className="text-[26px]"/>
    </div>
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Brand & Social Authority</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Thought leadership deployment, enterprise executive profiling, strategic asset creation, and algorithmic reach acceleration.</p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Executive Ghostwriting</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Brand Moats</span>
    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Asset Sprints</span>
    </div>
    </div>
    <div className="pt-space-md mt-space-md">
    <Link to="/#services" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group-hover:text-primary-container">
                  Explore Brand Marketing <Icon name="chevron_right" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between group md:col-span-2 lg:col-span-3 gap-space-md">
    <div className="flex items-start md:items-center gap-space-md">
    <div className="w-12 h-12 shrink-0 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
    <Icon name="verified_user" className="text-[26px]"/>
    </div>
    <div className="space-y-1">
    <div className="flex items-center gap-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">High-Availability Maintenance & SLA Care</h3>
    <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">99.99% Uptime</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">Continuous patch deployments, automated penetration scans, zero-downtime CDN failover, and sub-15-minute engineering responses.</p>
    </div>
    </div>
    <div className="shrink-0">
    <Link to="/#services" className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-2 rounded-lg text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-colors">
                  Review SLA Models <Icon name="arrow_forward" className="text-[16px]"/>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
