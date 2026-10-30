import { Icon } from '@/components/ui/Icon';

export function Industries() {
  return (
    <section id="industries" className="w-full py-space-xl bg-surface">
    <div className="max-w-7xl mx-auto px-margin space-y-space-lg">
    <div className="max-w-2xl space-y-space-xs">
    <span className="font-label-md text-label-md text-tertiary font-semibold uppercase tracking-wider">Tailored Domain Competency</span>
    <h2 className="font-headline-lg text-headline-lg text-on-surface">Engineered for Strict Vertical Requirements</h2>
    <p className="font-body-md text-body-md text-on-surface-variant">Every industry has distinct regulatory, technical, and conversion requirements. We build bespoke systems for your domain.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
    <Icon name="code" className="text-primary text-[28px]"/>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">B2B SaaS & Tech</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">PLG onboarding, interactive interactive calculators, SOC2 security compliance, and developer documentation hubs.</p>
    </div>
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
    <Icon name="gavel" className="text-tertiary text-[28px]"/>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Professional Services</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Corporate law firms, accounting practices, and advisory desks demanding institutional trust and high privacy.</p>
    </div>
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
    <Icon name="health_and_safety" className="text-primary text-[28px]"/>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Healthcare & Biotech</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">HIPAA-governed telemedicine web applications, clinical trial recruitment, and encrypted patient portals.</p>
    </div>
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
    <Icon name="local_shipping" className="text-tertiary text-[28px]"/>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Logistics & Supply</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Freight tracking dashboards, rate calculation tools, warehouse operations platforms, and national B2B SEO.</p>
    </div>
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:bg-surface-container-low transition-colors">
    <Icon name="storefront" className="text-primary text-[28px]"/>
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Modern Retail</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">High-volume transactional storefronts, cross-border payment rails, dynamic promotions, and instant search.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
