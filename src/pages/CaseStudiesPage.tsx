import { CasesBreadcrumb, CasesHero, CaseExplorer, TechStacks, LeaderQuotes, CasesCta } from '@/components/cases';

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <CasesBreadcrumb />
      <CasesHero />
      <CaseExplorer />
      <TechStacks />
      <LeaderQuotes />
      <CasesCta />
    </div>
  );
}
