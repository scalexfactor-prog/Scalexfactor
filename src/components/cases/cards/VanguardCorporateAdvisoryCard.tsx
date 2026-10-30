import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function VanguardCorporateAdvisoryCard() {
  return (
    <article className="case-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow" data-category="fintech-saas web-apps" data-impact="1.9" data-speed="0.75">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
    
    <div className="lg:col-span-7 flex flex-col justify-between space-y-space-md">
    <div>
    <div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
    <span className="px-space-sm py-0.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">Professional Legal &amp; Financial Services</span>
    <span className="px-space-sm py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Fortune 500 Portal</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant ml-auto">Mumbai • Dubai</span>
    </div>
    <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">Vanguard Corporate Advisory</h3>
    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                    Institutional web infrastructure engineered to project absolute authority for high-stakes M&amp;A advisory, featuring secure gated executive research vaults and compliant lead triage.
                  </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl">
    <div>
    <div className="flex items-center gap-1 font-label-sm text-label-sm text-error font-semibold mb-1">
    <Icon name="report_problem" className="text-[16px]"/>
                      Core Challenge
                    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Outdated corporate presence failing to communicate gravitas to Fortune 500 decision-makers and high-net-worth clients, leading to missed RFP pipelines.
                    </p>
    </div>
    <div>
    <div className="flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold mb-1">
    <Icon name="check_circle" className="text-[16px]"/>
                      Engineered Solution
                    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Minimalist high-contrast institutional web presence, gated executive briefing downloads, secure multi-tenant lead routing, and HubSpot Enterprise synchronization.
                    </p>
    </div>
    </div>
    
    <div className="flex flex-wrap items-center gap-space-xs">
    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mr-1">Stack:</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Next.js</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Tailwind</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">HubSpot Enterprise API</span>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">PostgreSQL</span>
    </div>
    
    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
    <Link to="/case-studies" className="bg-primary text-on-primary px-space-md py-space-xs rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors inline-flex items-center gap-1.5 shadow-sm font-semibold">
    <span>Read Full Architecture Case Study</span>
    <Icon name="arrow_forward" className="text-[18px]"/>
    </Link>
    <Link to="/#services" className="bg-surface-container-low text-on-surface px-space-md py-space-xs rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1 font-medium">
    <span>Institutional Consulting</span>
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
    <span className="ml-2 font-label-sm text-label-sm text-inverse-on-surface/60">vanguardadvisory.com/executive-brief</span>
    </div>
    <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">98/100 A11y</span>
    </div>
    <img className="w-full h-44 object-cover rounded shadow-inner" data-alt="Sophisticated monochrome corporate law and advisory portal interface displaying executive private equity research reports with crisp typography and gold metallic highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQcNF5vvNIzcfO-GjFUg41biVOoMKQrz0fjbS6zaueZnaQ7r2P1CzBPSuZEPTE--QHpB5pdR8UG2SYoaYzw8RDIwL23bdLjZIJvpdwuZugjMMef-JYn_lpMTOtbnYVmBnkIGynuTXDxROIo8MLXVVaRicvhtsA58xSdQ8zTyzxfvJrDuShauEj_wkqx45VA-JlsZAgmDOJ97bDhmIPCf1ywykaFH-n127U1PcA1j7E"/>
    </div>
    
    <div className="grid grid-cols-2 gap-space-sm pt-space-md">
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
    <Icon name="business_center" className="text-[16px]"/> C-Suite RFPs
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">+190%</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Qualified Inbound RFPs</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
    <Icon name="accessibility" className="text-[16px]"/> Accessibility
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">98/100</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Desktop A11y Compliance</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
    <Icon name="hourglass_top" className="text-[16px]"/> Engagement
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">4.2x</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Average Time-on-Site</p>
    </div>
    <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
    <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
    <Icon name="account_balance" className="text-[16px]"/> Deal Flow
                    </span>
    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">$31M+</div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Direct Mandate Pipeline</p>
    </div>
    </div>
    </div>
    </div>
    </article>
  );
}
