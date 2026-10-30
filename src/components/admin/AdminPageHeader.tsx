import { Icon } from '@/components/ui/Icon';

export function AdminPageHeader() {
  return (
    <div className="flex flex-col gap-space-sm mb-space-lg">
    <div className="flex items-center gap-2">
    <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
    <Icon name="home" className="text-[15px]"/> Home
          </span>
    <span className="text-outline-variant font-label-sm text-label-sm">/</span>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Admin Portal</span>
    <span className="text-outline-variant font-label-sm text-label-sm">/</span>
    <span className="font-label-sm text-label-sm text-primary font-semibold">Lead Management &amp; CRM</span>
    </div>
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
    <div className="flex flex-col gap-1">
    <div className="flex items-center flex-wrap gap-space-sm">
    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Lead Inquiries &amp; Commercial Pipeline</h1>
    <div className="flex items-center gap-1.5">
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  142 Total Inquiries
                </span>
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold animate-pulse">
    <Icon name="timer" className="text-[14px]"/>
                  18 Follow-Ups Today
                </span>
    </div>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
              Unified pipeline monitoring, lead enrichment audit log, and SLA compliance engine for enterprise consultations.
            </p>
    </div>
    
    <div className="flex items-center flex-wrap gap-2">
    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors" type="button">
    <Icon name="calendar_today" className="text-[18px]"/>
    <span>Last 30 Days</span>
    <Icon name="expand_more" className="text-[16px] text-on-surface-variant"/>
    </button>
    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors" type="button">
    <Icon name="ios_share" className="text-[18px]"/>
    <span>Export CSV / Audit</span>
    </button>
    
    <div className="inline-flex p-0.5 rounded-lg bg-surface-container shadow-inner">
    <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm" type="button">
    <Icon name="view_list" className="text-[16px]"/>
    <span>Table</span>
    </button>
    <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors" type="button">
    <Icon name="view_kanban" className="text-[16px]"/>
    <span>Kanban</span>
    </button>
    </div>
    <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-sm" type="button">
    <Icon name="add" className="text-[18px]"/>
    <span>Manual Lead Entry</span>
    </button>
    </div>
    </div>
    </div>
  );
}
