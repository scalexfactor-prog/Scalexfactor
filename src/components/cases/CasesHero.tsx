import { Icon } from '@/components/ui/Icon';

const highlights = [
  { icon: 'web', label: 'Featured clients', value: '2 websites' },
  { icon: 'medical_services', label: 'Industries', value: 'Healthcare & retail' },
  { icon: 'code', label: 'Technology', value: 'Web development' },
  { icon: 'trending_up', label: 'Growth services', value: 'SEO & digital marketing' },
];

export function CasesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-tertiary/5 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-space-lg px-margin">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-secondary-fixed">
            <Icon name="verified" className="text-[15px] text-primary" />
            Selected clients
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-tertiary-fixed shadow-sm">
            Live website previews
          </span>
        </div>

        <div className="max-w-4xl space-y-space-sm">
          <h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
            Technology, Web Development &amp; Digital Growth
          </h1>
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Explore our work with MyGetWellStore and Bajaj Life Care, including technology and web development, SEO, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-sm pt-space-sm sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="flex items-start gap-space-sm rounded-xl bg-surface-container-low p-space-md shadow-sm">
              <Icon name={highlight.icon} className="text-[22px] text-primary" />
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{highlight.label}</p>
                <p className="mt-1 font-label-md text-label-md font-semibold text-on-surface">{highlight.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
