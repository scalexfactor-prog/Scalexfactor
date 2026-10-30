import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function CasesCta() {
  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl">
    <div className="max-w-7xl mx-auto px-margin flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
    <div className="space-y-space-sm max-w-2xl">
    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-inverse-surface/80 text-tertiary-fixed font-label-sm text-label-sm font-semibold tracking-wide uppercase">
    <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
              DIRECT ARCHITECT ACCESS
            </span>
    <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface tracking-tight">
              Have a Complex Project or High-Stakes Growth Goal?
            </h2>
    <p className="font-body-md text-body-md text-inverse-on-surface/80">
              Schedule a 30-minute technical roadmap consultation with our principal architects. We will audit your current architecture, identify digital bottlenecks, and present a custom sprint plan.
            </p>
    <div className="flex items-center gap-space-xs text-inverse-on-surface/60 font-body-sm text-body-sm pt-1">
    <Icon name="security" className="text-[18px] text-tertiary-fixed"/>
    <span>NDA upfront. Direct senior architect engagement. Zero junior handoffs.</span>
    </div>
    </div>
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full lg:w-auto shrink-0">
    <Link to="/#contact" className="bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg font-label-md text-label-md hover:bg-primary transition-colors text-center font-semibold shadow-lg">
              Schedule Technical Consultation
            </Link>
    <a className="bg-surface-container-lowest text-on-surface px-space-lg py-space-sm rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors text-center font-semibold flex items-center justify-center gap-2 shadow-lg" href="https://wa.me/917122000000" rel="noopener noreferrer" target="_blank">
    <Icon name="chat" className="text-tertiary text-[20px]"/>
    <span>Discuss on WhatsApp (+91 712 200 0000)</span>
    </a>
    </div>
    </div>
    </section>
  );
}
