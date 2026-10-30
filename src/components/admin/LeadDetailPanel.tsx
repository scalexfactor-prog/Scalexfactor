import { Icon } from '@/components/ui/Icon';

export function LeadDetailPanel() {
  return (
    <div className="xl:col-span-5 flex flex-col gap-space-md">
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
    <div className="flex items-start justify-between">
    <div className="flex flex-col">
    <div className="flex items-center gap-2">
    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">SF-2026-000128</span>
    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">Tier 1 Enterprise</span>
    </div>
    <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1.5">Dr. Siddharth Verma</h2>
    <span className="font-label-md text-label-md text-on-surface-variant font-medium">VP Digital Transformation • Apex Global Logistics</span>
    </div>
    
    <div className="flex flex-col items-end">
    <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Pipeline State</span>
    <select className="bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold py-1.5 px-3 rounded-lg outline-none cursor-pointer">
    <option value="NEW">STAGE: NEW</option>
    <option value="CONTACTED">STAGE: CONTACTED</option>
    <option selected value="QUALIFIED">STAGE: QUALIFIED</option>
    <option value="PROPOSAL_SENT">STAGE: PROPOSAL SENT</option>
    <option value="NEGOTIATION">STAGE: NEGOTIATION</option>
    <option value="WON">STAGE: WON</option>
    <option value="UNQUALIFIED">STAGE: UNQUALIFIED</option>
    </select>
    </div>
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2 border-t-0">
    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" type="button">
    <Icon name="mail" className="text-[18px] text-primary"/>
    <span className="font-label-sm text-label-sm font-semibold mt-0.5">Send SES Email</span>
    </button>
    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" type="button">
    <Icon name="call" className="text-[18px] text-tertiary"/>
    <span className="font-label-sm text-label-sm font-semibold mt-0.5">Log Call / Meet</span>
    </button>
    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" type="button">
    <Icon name="event" className="text-[18px] text-primary-container"/>
    <span className="font-label-sm text-label-sm font-semibold mt-0.5">Book Session</span>
    </button>
    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" type="button">
    <Icon name="transfer_within_a_station" className="text-[18px] text-secondary"/>
    <span className="font-label-sm text-label-sm font-semibold mt-0.5">Reassign Lead</span>
    </button>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
    <div className="flex items-center justify-between pb-1">
    <span className="font-label-md text-label-md font-bold text-on-surface">Prospect Verification &amp; Scope</span>
    <span className="inline-flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-semibold">
    <Icon name="verified_user" className="text-[15px]"/> MX &amp; Domain Verified
              </span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm bg-surface-container-low/70 p-3 rounded-lg">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm text-on-surface-variant">Business Email</span>
    <span className="font-body-sm text-body-sm font-semibold text-on-surface select-all">s.verma@apexlogistics.io</span>
    </div>
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm text-on-surface-variant">Contact Direct</span>
    <span className="font-body-sm text-body-sm font-semibold text-on-surface">+91 98230 44102 (Nagpur HQ)</span>
    </div>
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm text-on-surface-variant">Target Budget</span>
    <span className="font-body-sm text-body-sm font-bold text-primary">$35,000 - $50,000 USD</span>
    </div>
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm text-on-surface-variant">Deployment Timeline</span>
    <span className="font-body-sm text-body-sm font-semibold text-on-surface">Immediate (&lt; 30 Days)</span>
    </div>
    </div>
    
    <div className="flex flex-col gap-1">
    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Client Inquiry Scope (Raw Submission)</span>
    <div className="p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                "We are modernizing our global freight tracking and partner portal across 4,200 transit hubs. Need sub-second edge rendering and CRM data sync. Require SOC2 and strict SLA delivery."
              </div>
    </div>
    
    <div className="flex flex-wrap gap-1.5 pt-1">
    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">Headless Architecture</span>
    <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">Next.js Edge Runtime</span>
    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">Programmatic SEO Hub</span>
    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">AWS SES Sync</span>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
    <div className="flex items-center justify-between pb-1">
    <span className="font-label-md text-label-md font-bold text-on-surface">Activity Audit Log</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">4 Events Logged</span>
    </div>
    
    <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant">
    
    <div className="relative flex flex-col gap-0.5">
    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-primary-container ring-4 ring-surface-container-lowest"></span>
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">Discovery Call &amp; Scoping Complete</span>
    <span className="text-on-surface-variant text-[11px]">03:00 PM Today</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Conducted 30m technical evaluation. Budget approved by board. RFP presentation scheduled for Friday. Status updated to <span className="font-semibold text-tertiary">QUALIFIED</span>.
                </p>
    <span className="text-[11px] text-primary font-medium">Logged by Rajesh Kulkarni (Sales Mgr)</span>
    </div>
    
    <div className="relative flex flex-col gap-0.5">
    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">Status Transition: NEW → CONTACTED</span>
    <span className="text-on-surface-variant text-[11px]">01:20 PM Today</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Initial phone dial made via Cloud Telephony. Prospect requested afternoon technical callback.
                </p>
    </div>
    
    <div className="relative flex flex-col gap-0.5">
    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-tertiary ring-4 ring-surface-container-lowest"></span>
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">Auto-Ack Email Dispatched</span>
    <span className="text-on-surface-variant text-[11px]">11:15 AM Today</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Automated acknowledgment delivered via AWS SES (Ref: SF-2026-000128). Open tracking verified.
                </p>
    </div>
    
    <div className="relative flex flex-col gap-0.5">
    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-outline ring-4 ring-surface-container-lowest"></span>
    <div className="flex items-center justify-between">
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">Lead Created via Web Inbound</span>
    <span className="text-on-surface-variant text-[11px]">10:45 AM Today</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Form submission from <code className="text-[11px] bg-surface-container px-1 py-0.5 rounded">/get-a-quote</code>. Campaign: Google Organic ("Next.js Enterprise Agency").
                </p>
    </div>
    </div>
    
    <div className="mt-2 pt-3 bg-surface-container-low p-3 rounded-lg flex flex-col gap-2">
    <label className="font-label-sm text-label-sm font-semibold text-on-surface flex items-center justify-between">
    <span>Add Internal Note / Follow-up Task</span>
    <span className="text-[11px] text-on-surface-variant font-normal">Markdown supported</span>
    </label>
    <textarea className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary-container resize-none" placeholder="Document meeting outcomes, objection notes, or internal handover..." rows={2}></textarea>
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <label className="inline-flex items-center gap-1 text-[12px] text-on-surface-variant cursor-pointer">
    <input className="w-3.5 h-3.5 rounded text-primary-container" type="checkbox"/>
    <span>Set Remind Alert</span>
    </label>
    </div>
    <button className="px-3 py-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold rounded-lg hover:bg-primary transition-colors" type="button">
                  Save Activity
                </button>
    </div>
    </div>
    </div>
    </div>
  );
}
