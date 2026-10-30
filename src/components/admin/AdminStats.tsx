import { Icon } from '@/components/ui/Icon';

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm mb-space-lg">
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Total Inquiries</span>
    <Icon name="inbox" className="text-primary text-[20px]"/>
    </div>
    <div className="my-2">
    <div className="flex items-baseline gap-2">
    <span className="font-metric-stat text-metric-stat text-on-surface leading-none tracking-tight">142</span>
    <span className="inline-flex items-center text-tertiary font-label-sm text-label-sm font-semibold">
    <Icon name="trending_up" className="text-[14px]"/> +18.4%
              </span>
    </div>
    </div>
    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
    <span>Active Month-to-date</span>
    
    <svg className="w-16 h-6 text-primary" fill="none" viewBox="0 0 60 20">
    <path d="M2 17 L12 14 L24 15 L36 9 L48 11 L58 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">New &amp; Uncontacted</span>
    <Icon name="fiber_new" className="text-error text-[20px]"/>
    </div>
    <div className="my-2">
    <div className="flex items-baseline gap-2">
    <span className="font-metric-stat text-metric-stat text-on-surface leading-none tracking-tight">14</span>
    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                6 &lt; 2h SLA
              </span>
    </div>
    </div>
    <div className="flex items-center gap-1.5 text-error font-body-sm text-body-sm pt-2">
    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
    <span className="truncate">Urgent response queued</span>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Qualified Pipeline</span>
    <Icon name="verified" className="text-tertiary text-[20px]"/>
    </div>
    <div className="my-2">
    <div className="flex items-baseline gap-2">
    <span className="font-metric-stat text-metric-stat text-on-surface leading-none tracking-tight">48</span>
    <span className="inline-flex items-center text-tertiary font-label-sm text-label-sm font-semibold">
                $184k ARR
              </span>
    </div>
    </div>
    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
    <span>Weighted Potential</span>
    <span className="font-label-sm text-label-sm font-semibold text-tertiary">33.8% of Total</span>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">In Negotiation</span>
    <Icon name="handshake" className="text-primary-container text-[20px]"/>
    </div>
    <div className="my-2">
    <div className="flex items-baseline gap-2">
    <span className="font-metric-stat text-metric-stat text-on-surface leading-none tracking-tight">26</span>
    <span className="text-on-surface-variant font-label-sm text-label-sm">Active deals</span>
    </div>
    </div>
    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
    <span>Avg Size: $14.2k</span>
    <span className="font-label-sm text-label-sm text-primary font-semibold">Closing soon</span>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Won Opportunities</span>
    <Icon name="workspace_premium" className="text-tertiary text-[20px]"/>
    </div>
    <div className="my-2">
    <div className="flex items-baseline gap-2">
    <span className="font-metric-stat text-metric-stat text-on-surface leading-none tracking-tight">38</span>
    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                26.8% CVR
              </span>
    </div>
    </div>
    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
    <span>$540k Gross ARR</span>
    <Icon name="check_circle" className="text-tertiary text-[16px]"/>
    </div>
    </div>
    </div>
  );
}
