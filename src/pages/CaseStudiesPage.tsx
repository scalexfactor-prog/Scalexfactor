import { CasesBreadcrumb, CasesHero, CaseExplorer, TechStacks, LeaderQuotes, CasesCta } from '@/components/cases';

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col bg-[#070b11] text-slate-100">
      <CasesBreadcrumb />
      <CasesHero />
      <CaseExplorer />
      <TechStacks />
      <LeaderQuotes />
      <CasesCta />
    </div>
  );
}
