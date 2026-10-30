import { LeadsListPanel } from './LeadsListPanel';
import { LeadDetailPanel } from './LeadDetailPanel';

export function LeadWorkspace() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
      <LeadsListPanel />
      <LeadDetailPanel />
    </div>
  );
}
