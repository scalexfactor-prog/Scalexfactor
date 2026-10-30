import { Icon } from '@/components/ui/Icon';

export function LeadsListPanel() {
  return (
    <div className="xl:col-span-7 flex flex-col gap-space-md">
    
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
    <div className="flex flex-col md:flex-row items-center gap-space-sm">
    <div className="relative flex-1 w-full">
    <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]"/>
    <input className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-9 pr-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary-container" placeholder="Filter by lead name, company, email, or ref ID..." type="text" defaultValue="Apex Global Logistics"/>
    </div>
    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
    <button className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm font-medium whitespace-nowrap" type="button">
    <span>Service: All</span>
    <Icon name="arrow_drop_down" className="text-[16px]"/>
    </button>
    <button className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm font-medium whitespace-nowrap" type="button">
    <span>Owner: Rajesh K.</span>
    <Icon name="arrow_drop_down" className="text-[16px]"/>
    </button>
    <button className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm font-medium whitespace-nowrap" type="button">
    <span>Budget: $25k+</span>
    <Icon name="arrow_drop_down" className="text-[16px]"/>
    </button>
    </div>
    </div>
    
    <div className="flex items-center justify-between pt-2 px-1 text-on-surface-variant font-label-sm text-label-sm">
    <div className="flex items-center gap-3">
    <label className="flex items-center gap-2 cursor-pointer">
    <input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-primary-container" type="checkbox"/>
    <span className="text-on-surface font-semibold">1 lead selected</span>
    </label>
    <span className="text-outline-variant">|</span>
    <button className="hover:text-primary transition-colors flex items-center gap-1" type="button">
    <Icon name="person_add" className="text-[15px]"/> Assign Rep
                </button>
    <button className="hover:text-primary transition-colors flex items-center gap-1" type="button">
    <Icon name="mark_email_read" className="text-[15px]"/> Mark Contacted
                </button>
    </div>
    <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1-5 of 48 Qualified</span>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
    <div className="overflow-x-auto">
    <table className="w-full text-left">
    <thead>
    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
    <th className="py-3 px-3 w-8">
    <input className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </th>
    <th className="py-3 px-3">Lead Ref &amp; Time</th>
    <th className="py-3 px-3">Prospect &amp; Company</th>
    <th className="py-3 px-3">Service &amp; Budget</th>
    <th className="py-3 px-3">Status</th>
    <th className="py-3 px-3">Owner</th>
    <th className="py-3 px-3 text-right">Actions</th>
    </tr>
    </thead>
    <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm">
    
    <tr className="bg-primary-fixed/20 hover:bg-primary-fixed/30 cursor-pointer transition-colors">
    <td className="py-3.5 px-3">
    <input defaultChecked className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm font-bold text-primary">SF-2026-000128</span>
    <span className="text-on-surface-variant text-[11px]">14 mins ago</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col min-w-[170px]">
    <span className="font-label-md text-label-md font-semibold text-on-surface">Dr. Siddharth Verma</span>
    <span className="text-primary font-medium text-[12px] flex items-center gap-1">
                          Apex Global Logistics
                          <Icon name="open_in_new" className="text-[12px]"/>
    </span>
    <span className="text-on-surface-variant text-[11px]">s.verma@apexlogistics.io</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col gap-1 min-w-[150px]">
    <div className="flex flex-wrap gap-1">
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">Headless Web</span>
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium">SEO</span>
    </div>
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">$35k - $50k</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        QUALIFIED
                      </span>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5 whitespace-nowrap">
    <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold">RK</div>
    <span className="text-on-surface font-medium text-[12px]">Rajesh K.</span>
    </div>
    </td>
    <td className="py-3.5 px-3 text-right">
    <div className="inline-flex items-center gap-1">
    <button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="Inspect Record" type="button">
    <Icon name="visibility" className="text-[18px]"/>
    </button>
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" title="More Options" type="button">
    <Icon name="more_vert" className="text-[18px]"/>
    </button>
    </div>
    </td>
    </tr>
    
    <tr className="hover:bg-surface-container-low transition-colors">
    <td className="py-3.5 px-3">
    <input className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm font-bold text-on-surface">SF-2026-000127</span>
    <span className="text-on-surface-variant text-[11px]">2 hrs ago</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col min-w-[170px]">
    <span className="font-label-md text-label-md font-semibold text-on-surface">Meera Krishnan</span>
    <span className="text-on-surface font-medium text-[12px] flex items-center gap-1">
                          Kavach Cyber Defense
                          <Icon name="open_in_new" className="text-[12px]"/>
    </span>
    <span className="text-on-surface-variant text-[11px]">m.krishnan@kavach.ai</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col gap-1 min-w-[150px]">
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium w-max">B2B Paid Growth</span>
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">$20,000 / mo</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-semibold whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                        PROPOSAL_SENT
                      </span>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5 whitespace-nowrap">
    <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm font-semibold">AR</div>
    <span className="text-on-surface font-medium text-[12px]">Ananya R.</span>
    </div>
    </td>
    <td className="py-3.5 px-3 text-right">
    <div className="inline-flex items-center gap-1">
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="visibility" className="text-[18px]"/>
    </button>
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="more_vert" className="text-[18px]"/>
    </button>
    </div>
    </td>
    </tr>
    
    <tr className="hover:bg-surface-container-low transition-colors">
    <td className="py-3.5 px-3">
    <input className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm font-bold text-on-surface">SF-2026-000126</span>
    <span className="text-on-surface-variant text-[11px]">4 hrs ago</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col min-w-[170px]">
    <span className="font-label-md text-label-md font-semibold text-on-surface">Tarun Chandiramani</span>
    <span className="text-on-surface font-medium text-[12px] flex items-center gap-1">
                          OmniHealth India
                          <Icon name="open_in_new" className="text-[12px]"/>
    </span>
    <span className="text-on-surface-variant text-[11px]">t.chandiramani@omnihealth.org</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col gap-1 min-w-[150px]">
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium w-max">Healthcare Platform</span>
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">$50,000+</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        NEW
                      </span>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5 whitespace-nowrap">
    <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">Unassigned</span>
    </div>
    </td>
    <td className="py-3.5 px-3 text-right">
    <div className="inline-flex items-center gap-1">
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="visibility" className="text-[18px]"/>
    </button>
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="more_vert" className="text-[18px]"/>
    </button>
    </div>
    </td>
    </tr>
    
    <tr className="hover:bg-surface-container-low transition-colors">
    <td className="py-3.5 px-3">
    <input className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm font-bold text-on-surface">SF-2026-000125</span>
    <span className="text-on-surface-variant text-[11px]">7 hrs ago</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col min-w-[170px]">
    <span className="font-label-md text-label-md font-semibold text-on-surface">Pooja Deshmukh</span>
    <span className="text-on-surface font-medium text-[12px] flex items-center gap-1">
                          Vidarbha Agritech Sol.
                          <Icon name="open_in_new" className="text-[12px]"/>
    </span>
    <span className="text-on-surface-variant text-[11px]">pooja@vidarbha-agri.in</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col gap-1 min-w-[150px]">
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium w-max">Mobile App + Cloud</span>
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">$28,000</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        QUALIFIED
                      </span>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5 whitespace-nowrap">
    <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">VS</div>
    <span className="text-on-surface font-medium text-[12px]">Vikram S.</span>
    </div>
    </td>
    <td className="py-3.5 px-3 text-right">
    <div className="inline-flex items-center gap-1">
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="visibility" className="text-[18px]"/>
    </button>
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="more_vert" className="text-[18px]"/>
    </button>
    </div>
    </td>
    </tr>
    
    <tr className="hover:bg-surface-container-low transition-colors">
    <td className="py-3.5 px-3">
    <input className="w-4 h-4 rounded text-primary-container" type="checkbox"/>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col">
    <span className="font-label-sm text-label-sm font-bold text-on-surface">SF-2026-000124</span>
    <span className="text-on-surface-variant text-[11px]">18 hrs ago</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col min-w-[170px]">
    <span className="font-label-md text-label-md font-semibold text-on-surface">David Chen</span>
    <span className="text-on-surface font-medium text-[12px] flex items-center gap-1">
                          FinNova Global HK
                          <Icon name="open_in_new" className="text-[12px]"/>
    </span>
    <span className="text-on-surface-variant text-[11px]">d.chen@finnova.io</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex flex-col gap-1 min-w-[150px]">
    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px] font-medium w-max">Security Audit + Web</span>
    <span className="font-label-sm text-label-sm font-semibold text-on-surface">$45,000</span>
    </div>
    </td>
    <td className="py-3.5 px-3">
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        NEGOTIATION
                      </span>
    </td>
    <td className="py-3.5 px-3">
    <div className="flex items-center gap-1.5 whitespace-nowrap">
    <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold">RK</div>
    <span className="text-on-surface font-medium text-[12px]">Rajesh K.</span>
    </div>
    </td>
    <td className="py-3.5 px-3 text-right">
    <div className="inline-flex items-center gap-1">
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="visibility" className="text-[18px]"/>
    </button>
    <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
    <Icon name="more_vert" className="text-[18px]"/>
    </button>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    
    <div className="p-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-2">
    <span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 5 of 48 leads in 'Qualified' status</span>
    <div className="flex items-center gap-1">
    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm disabled:opacity-50" disabled type="button">Previous</button>
    <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold" type="button">1</button>
    <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container" type="button">2</button>
    <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container" type="button">3</button>
    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm" type="button">Next</button>
    </div>
    </div>
    </div>
    </div>
  );
}
