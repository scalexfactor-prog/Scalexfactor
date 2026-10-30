import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
    
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-primary-fixed/30 via-tertiary-fixed/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
    <div className="max-w-7xl mx-auto px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
    
    <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
    <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full shadow-sm">
    <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
    <span className="font-label-sm text-label-sm text-tertiary font-semibold uppercase tracking-wider">Strategy • Technology • Visibility • Growth</span>
    </div>
    <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
                Build Your Digital Presence. <br className="hidden sm:inline"/>
    <span className="text-primary-container">Accelerate Your Growth.</span>
    </h1>
    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                From high-performing websites to SEO and digital marketing, Scalex Factor helps businesses strengthen their online presence, reach the right audience, and generate meaningful opportunities.
              </p>
    <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
    <Link to="/#contact" className="w-full sm:w-auto bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-3 rounded-lg hover:bg-primary transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-space-xs group">
    <span>Get a Free Consultation</span>
    <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1"/>
    </Link>
    <a className="w-full sm:w-auto bg-surface-container-low text-on-surface font-label-md text-label-md px-space-lg py-3 rounded-lg hover:bg-surface-container hover:text-primary transition-all inline-flex items-center justify-center gap-space-xs" href="#services">
    <span>Explore Our Services</span>
    <Icon name="keyboard_arrow_down" className="text-[18px]"/>
    </a>
    </div>
    
    <div className="w-full pt-space-md mt-space-sm grid grid-cols-2 sm:grid-cols-4 gap-gutter bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
    <div className="flex flex-col">
    <span className="font-metric-stat text-metric-stat text-on-surface">99.4%</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Client Satisfaction</span>
    </div>
    <div className="flex flex-col">
    <span className="font-metric-stat text-metric-stat text-primary-container">280+</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Live Deployments</span>
    </div>
    <div className="flex flex-col">
    <span className="font-metric-stat text-metric-stat text-tertiary">3.4x</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Pipeline Surge</span>
    </div>
    <div className="flex flex-col">
    <span className="font-metric-stat text-metric-stat text-on-surface">45+</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Global Enterprise</span>
    </div>
    </div>
    </div>
    
    <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
    <div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-xl space-y-space-md">
    
    <div className="flex items-center justify-between pb-space-sm bg-surface-container-low px-space-sm py-2 rounded-lg">
    <div className="flex items-center gap-space-xs">
    <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
    <span className="w-2.5 h-2.5 rounded-full bg-surface-dim"></span>
    <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono ml-2">metrics.scalexfactor.io</span>
    </div>
    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold bg-tertiary/10 px-2 py-0.5 rounded-full">
    <Icon name="bolt" className="text-[14px]"/> Live Sync
                  </span>
    </div>
    
    <div>
    <div className="flex items-center justify-between mb-space-xs">
    <p className="font-label-md text-label-md text-on-surface font-semibold">Core Web Vitals & Audit</p>
    <span className="font-label-sm text-label-sm text-tertiary font-mono">100/100 P95 Grade</span>
    </div>
    <div className="grid grid-cols-4 gap-space-xs">
    <div className="bg-surface-container-low p-2 rounded-lg text-center flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-headline-sm text-headline-sm font-bold">100</div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Perf</span>
    </div>
    <div className="bg-surface-container-low p-2 rounded-lg text-center flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-headline-sm text-headline-sm font-bold">100</div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Access</span>
    </div>
    <div className="bg-surface-container-low p-2 rounded-lg text-center flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-headline-sm text-headline-sm font-bold">100</div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Best Pract</span>
    </div>
    <div className="bg-surface-container-low p-2 rounded-lg text-center flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center font-headline-sm text-headline-sm font-bold">100</div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">SEO</span>
    </div>
    </div>
    </div>
    
    <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
    <div className="flex items-center justify-between">
    <div>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Organic Inbound Flow</span>
    <p className="font-headline-sm text-headline-sm text-on-surface font-bold">34,890 <span className="font-label-sm text-label-sm text-tertiary font-semibold">+342% MoM</span></p>
    </div>
    <div className="p-2 bg-surface-container-lowest rounded-lg shadow-sm">
    <Icon name="trending_up" className="text-primary-container text-[20px]"/>
    </div>
    </div>
    <svg className="w-full h-16 text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 240 60">
    <path d="M0 50 Q 30 45, 60 38 T 120 28 T 180 18 T 240 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
    <path d="M0 50 Q 30 45, 60 38 T 120 28 T 180 18 T 240 4 L 240 60 L 0 60 Z" fill="currentColor" fillOpacity="0.08"></path>
    </svg>
    </div>
    
    <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
    <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm">
    <Icon name="speed" className="text-tertiary text-[24px]"/>
    <div>
    <p className="font-headline-sm text-headline-sm font-semibold text-on-surface leading-none">0.64s</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">LCP Benchmark</span>
    </div>
    </div>
    <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm">
    <Icon name="filter_alt" className="text-primary-container text-[24px]"/>
    <div>
    <p className="font-headline-sm text-headline-sm font-semibold text-on-surface leading-none">8.2%</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Lead Conversion</span>
    </div>
    </div>
    </div>
    </div>
    
    <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg items-center gap-space-sm">
    <div className="w-9 h-9 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
    <Icon name="verified" className="text-[20px]"/>
    </div>
    <div>
    <p className="font-label-md text-label-md font-semibold text-on-surface">Venture Proven</p>
    <p className="font-label-sm text-label-sm text-on-surface-variant">Strict SLA Guarantee</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
