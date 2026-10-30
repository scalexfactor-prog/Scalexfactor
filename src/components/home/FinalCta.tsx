import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function FinalCta() {
  return (
    <section id="contact" className="w-full py-space-xl bg-primary text-on-primary relative overflow-hidden">
    
    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container rounded-full opacity-30 blur-2xl pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-margin relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
    <div className="lg:col-span-8 space-y-space-sm">
    <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-on-primary/10 rounded-full font-label-sm text-label-sm font-semibold tracking-wide uppercase">
    <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Open for Q2 Strategic Engagements
              </div>
    <h2 className="font-headline-lg text-headline-lg text-on-primary">
                Ready to Accelerate Your Digital Footprint?
              </h2>
    <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl">
                Book an obligation-free 30-minute technical roadmap consultation with our principal architects. We'll audit your current digital assets and uncover growth bottlenecks.
              </p>
    </div>
    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center">
    <Link to="/#contact" className="bg-surface-container-lowest text-on-surface font-label-md text-label-md px-space-lg py-3.5 rounded-lg hover:bg-surface-container hover:text-primary transition-all shadow-lg text-center flex items-center justify-center gap-space-xs font-semibold">
    <Icon name="calendar_month" className="text-[20px] text-primary"/>
    <span>Schedule Strategy Session</span>
    </Link>
    <a className="bg-tertiary text-on-tertiary font-label-md text-label-md px-space-lg py-3.5 rounded-lg hover:bg-tertiary-container transition-all text-center flex items-center justify-center gap-space-xs font-semibold shadow" href="https://wa.me/917122000000" rel="noopener noreferrer" target="_blank">
    <Icon name="chat" className="text-[20px]"/>
    <span>WhatsApp Quick Chat (+91)</span>
    </a>
    </div>
    </div>
    </div>
    </section>
  );
}
