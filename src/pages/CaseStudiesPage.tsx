import { CasesBreadcrumb, CasesHero, CaseExplorer, ServicesOverview, CasesCta } from '@/components/cases';

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col bg-slate-50 text-slate-900">
      <CasesBreadcrumb />
      <CasesHero />
      <CaseExplorer />
      <ServicesOverview />
      <CasesCta />
    </div>
  );
}
