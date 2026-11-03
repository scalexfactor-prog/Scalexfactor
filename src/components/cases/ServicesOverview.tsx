import { Icon } from '@/components/ui/Icon';

const services = [
  {
    icon: 'devices',
    title: 'Technology & Web Development',
    description: 'Plan, build, and improve websites and digital experiences around your customers and business needs.',
  },
  {
    icon: 'search',
    title: 'Search Engine Optimization',
    description: 'Improve technical foundations, site structure, and discoverability through search.',
  },
  {
    icon: 'campaign',
    title: 'Digital Marketing',
    description: 'Reach the right audiences with focused campaigns, useful content, and ongoing optimization.',
  },
];

export function ServicesOverview() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="mx-auto max-w-7xl space-y-space-lg px-margin">
        <div className="mx-auto max-w-2xl space-y-space-xs text-center">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="font-headline-md text-headline-md tracking-tight text-on-surface">Technology and growth, working together</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            From a strong web foundation to attracting and engaging customers, we support the full digital journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="space-y-space-sm rounded-xl bg-surface-container-low p-space-lg shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary">
                <Icon name={service.icon} className="text-[22px]" />
              </span>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">{service.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
