import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function AuracraftLuxuryECommerceCard() {
  return (
    <article className="case-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow" data-category="ecommerce web-apps" data-impact="3.4" data-speed="1.1">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
    
    <div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">
    <div>
    <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
    <span className="px-space-sm py-0.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">Omnichannel High-Ticket Retail</span>
    <span className="px-space-sm py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Headless Architecture</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant ml-auto">Paris • Dubai</span>
    </div>
    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">AuraCraft Luxury E-Commerce</h3>
    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                    Ultra-high performance headless storefront integrating Shopify Plus, sub-second global checkout, multi-currency routing, and instant dynamic catalog filtering.
                  </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl">
    <div>
    <div className="flex items-center gap-1 font-label-sm text-label-sm text-error font-semibold mb-1">
    <Icon name="report_problem" className="text-[16px]"/>
                      Core Challenge
                    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Sluggish monolithic Magento store with severe checkout drop-offs (68%), regular crash events during flash-sale peaks, and zero multi-currency flexibility.
                    </p>
    </div>
    <div>
    <div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold mb-1">
    <Icon name="check_circle" className="text-[16px]"/>
                      Engineered Solution
                    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Headless Shopify Plus integration with Next.js edge storefront, Stripe global rails, edge geo-currency routing, and instant Algolia catalog indexing.
                    </p>
    </div>
    </div>
    
    <div className="flex flex-wrap items-center gap-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mr-1">Stack:</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Shopify Plus</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Next.js Edge</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Stripe API</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Tailwind</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Algolia</span>
    </div>
    
    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
    <Link to="/case-studies" className="bg-primary text-on-primary px-space-md py-space-xs rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors inline-flex items-center gap-1.5 shadow-sm font-semibold">
    <span>Read Full Architecture Case Study</span>
    <Icon name="arrow_forward" className="text-[18px]"/>
    </Link>
    <Link to="/#services" className="bg-surface-container-low text-on-surface px-space-md py-space-xs rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1 font-medium">
    <span>Headless Commerce Audits</span>
    </Link>
    </div>
    </div>
    
    <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low rounded-xl p-space-md">
    
    <div className="relative bg-inverse-surface rounded-lg p-space-sm overflow-hidden text-inverse-on-surface shadow-sm">
    <div className="flex items-center justify-between pb-2 mb-2 bg-inverse-surface/80">
    <div className="flex items-center gap-1.5">
    <span className="w-2.5 h-2.5 rounded-full bg-error/80"></span>
    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
    <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed"></span>
    <span className="ml-2 font-label-sm text-label-sm text-inverse-on-surface/60">auracraft.luxury/checkout/edge</span>
    </div>
    <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">1.1s Total Flow</span>
    </div>
    <img className="w-full h-44 object-cover rounded shadow-inner" data-alt="High luxury e-commerce modern responsive web interface showing premium timepieces, 1-click international checkout slider, and live multi-currency converter." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGTiabx3WE0tcIP0cU7juQU4i5NrbWjIfyp-VfV_QfeycvU_F_E4ySX-Y5baaH1MDetp8NglKpEvNLWh-NNm7LpXafZ0oMNXSKy6gUgmos-K-1YB_StAYB13Wdfa98_Ovwc7gAhqwZdVmTC_1EdQThdmjphKeMAVSJ8LcSF5bLfbmWTPURqAXzhPQgDSTpD-eblq4W-5B7ov72rPKRkaiJbX1Ft4f8JJekLHLy3_bG"/>
    </div>
    
    <div className="grid grid-cols-2 gap-space-sm pt-space-md">
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
    <Icon name="shopping_bag" className="text-[16px]"/> Mobile Velocity
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">+340%</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Mobile Gross Revenue</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
    <Icon name="arrows_outward" className="text-[16px]"/> Checkout Time
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">1.1s</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Average Completed Flow</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
    <Icon name="signal_cellular_alt" className="text-[16px]"/> Peak Stability
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">0%</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Flash-Sale Peak Downtime</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
    <Icon name="trending_up" className="text-[16px]"/> AOV Impact
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">+74%</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Organic Basket Size</p>
    </div>
    </div>
    </div>
    </div>
    </article>
  );
}
