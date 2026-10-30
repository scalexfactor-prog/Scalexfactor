import { Icon } from '@/components/ui/Icon';

export function LifecycleFunnel() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-sm mb-space-lg shadow-sm">
    <div className="flex items-center justify-between px-space-sm py-1.5 mb-2">
    <div className="flex items-center gap-2">
    <Icon name="schema" className="text-primary text-[18px]"/>
    <span className="font-label-md text-label-md font-semibold text-on-surface">Lifecycle Funnel</span>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Click stage to filter view</span>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1.5">
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-surface-container-high/60 hover:bg-surface-container-high text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">New</span>
    <span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">14</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-primary-container h-full w-[100%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">Avg SLA: 42m</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Contacted</span>
    <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">22</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-secondary h-full w-[78%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">First Touch Done</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-primary-fixed/40 hover:bg-primary-fixed/60 text-left transition-all ring-2 ring-primary" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-primary font-bold uppercase">Qualified</span>
    <span className="px-1.5 py-0.2 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold">48</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-primary h-full w-[65%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-primary font-semibold mt-1.5">Active Filter (Viewing)</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Proposal Sent</span>
    <span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold">17</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-outline h-full w-[45%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">Pending Review</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Negotiation</span>
    <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">9</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-secondary-container h-full w-[35%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">Legal / Procurement</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-tertiary-fixed/30 hover:bg-tertiary-fixed/50 text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase">Closed Won</span>
    <span className="px-1.5 py-0.2 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold">38</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-tertiary-container h-full w-[100%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-tertiary font-medium mt-1.5">Contract Signed</span>
    </button>
    
    <button className="group flex flex-col p-2.5 rounded-lg bg-surface-container-low/50 hover:bg-surface-container text-left transition-all" type="button">
    <div className="flex items-center justify-between mb-1">
    <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Unqualified / Spam</span>
    <span className="px-1.5 py-0.2 rounded bg-surface-container text-outline font-label-sm text-label-sm font-bold">12</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
    <div className="bg-outline-variant h-full w-[15%] rounded-full"></div>
    </div>
    <span className="font-label-sm text-label-sm text-outline mt-1.5">Auto-Archived</span>
    </button>
    </div>
    </div>
  );
}
