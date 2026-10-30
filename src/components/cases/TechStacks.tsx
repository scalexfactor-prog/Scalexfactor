import { Icon } from '@/components/ui/Icon';

export function TechStacks() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
    <div className="max-w-7xl mx-auto px-margin space-y-space-lg">
    <div className="text-center max-w-2xl mx-auto space-y-space-xs">
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">BATTLE-TESTED STACKS</span>
    <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">The Engineering Stacks We Deploy</h2>
    <p className="font-body-md text-body-md text-on-surface-variant">
              We maintain zero technical dogma. Every architecture is chosen for sub-second execution speeds, maintenance longevity, and measurable commercial return.
            </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
    
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm space-y-space-md">
    <div className="flex items-center gap-space-sm">
    <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
    <Icon name="desktop_mac" className="text-[24px]"/>
    </div>
    <div>
    <h3 className="font-headline-sm text-headline-sm text-on-surface">Frontend &amp; Edge</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Client-side rendering &amp; streaming</p>
    </div>
    </div>
    <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Next.js 14 / SSR</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">React 18</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">TypeScript</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Tailwind CSS</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Turborepo</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">WebAssembly</span>
    </div>
    </div>
    
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm space-y-space-md">
    <div className="flex items-center gap-space-sm">
    <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center">
    <Icon name="database" className="text-[24px]"/>
    </div>
    <div>
    <h3 className="font-headline-sm text-headline-sm text-on-surface">Backend &amp; Cloud</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Distributed systems &amp; data stores</p>
    </div>
    </div>
    <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Node.js / Express</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">PostgreSQL / Prisma</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Redis Cache</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">AWS ECS &amp; Lambda</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Cloudflare Workers</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">GraphQL APIs</span>
    </div>
    </div>
    
    <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm space-y-space-md">
    <div className="flex items-center gap-space-sm">
    <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center">
    <Icon name="troubleshoot" className="text-[24px]"/>
    </div>
    <div>
    <h3 className="font-headline-sm text-headline-sm text-on-surface">Search &amp; Telemetry</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Attribution, SEO &amp; conversion</p>
    </div>
    </div>
    <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Programmatic SEO Systems</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Algolia NeuralSearch</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Segment CDP</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Google Analytics 4 / BigQuery</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Stripe Global Rails</span>
    <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-medium shadow-sm">Datadog APM</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
