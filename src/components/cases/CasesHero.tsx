import { Icon } from '@/components/ui/Icon';

export function CasesHero() {
  return (
    <section className="relative w-full bg-surface-container-lowest py-space-xl overflow-hidden">
    <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 pointer-events-none blur-3xl"></div>
    <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-tertiary/5 pointer-events-none blur-3xl"></div>
    <div className="max-w-7xl mx-auto px-margin relative z-10 flex flex-col gap-space-lg">
    
    <div className="flex flex-wrap items-center gap-space-sm">
    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm tracking-wide uppercase font-semibold">
    <Icon name="verified" className="text-[15px] text-primary"/>
              PROVEN CLIENT IMPACT &amp; TECHNICAL EXCELLENCE
            </span>
    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold shadow-sm">
    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              100% Client Attribution Verified
            </span>
    </div>
    
    <div className="max-w-4xl space-y-space-sm">
    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Engineered for Impact. Built for Compounding Commercial ROI.
            </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              Explore our portfolio of enterprise web applications, programmatic SEO systems, cloud architectures, and high-velocity acquisition funnels deployed across global verticals.
            </p>
    </div>
    
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-sm">
    <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
    <div className="flex items-center justify-between mb-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Pipeline</span>
    <Icon name="payments" className="text-primary text-[20px]"/>
    </div>
    <div>
    <div className="font-metric-stat text-metric-stat text-on-surface tracking-tight">$42M+</div>
    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">In Client Pipeline Generated</div>
    </div>
    </div>
    <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
    <div className="flex items-center justify-between mb-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Web Performance</span>
    <Icon name="speed" className="text-tertiary text-[20px]"/>
    </div>
    <div>
    <div className="font-metric-stat text-metric-stat text-on-surface tracking-tight">&lt; 0.9s</div>
    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Median P95 Core Web Vitals LCP</div>
    </div>
    </div>
    <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
    <div className="flex items-center justify-between mb-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Delivery</span>
    <Icon name="published_with_changes" className="text-primary text-[20px]"/>
    </div>
    <div>
    <div className="font-metric-stat text-metric-stat text-on-surface tracking-tight">99.4%</div>
    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">First-Deployment SLA Adherence</div>
    </div>
    </div>
    <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
    <div className="flex items-center justify-between mb-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Production Output</span>
    <Icon name="rocket_launch" className="text-primary text-[20px]"/>
    </div>
    <div>
    <div className="font-metric-stat text-metric-stat text-on-surface tracking-tight">128+</div>
    <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Custom Platforms &amp; SEO Shipped</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
