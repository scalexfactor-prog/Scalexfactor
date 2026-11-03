import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function Industries() {
  const industries = [
    {
      icon: 'code',
      title: 'B2B SaaS & Tech',
      description: 'PLG onboarding, interactive calculators, developer documentation, and secure product experiences.',
    },
    {
      icon: 'gavel',
      title: 'Professional Services',
      description: 'Trust-building websites and lead journeys for legal, accounting, and advisory firms.',
    },
    {
      icon: 'health_and_safety',
      title: 'Healthcare & Biotech',
      description: 'Accessible digital experiences for healthcare teams, clinical research, and patient engagement.',
    },
    {
      icon: 'local_shipping',
      title: 'Logistics & Supply',
      description: 'Freight portals, tracking dashboards, and digital tools that simplify complex operations.',
    },
    {
      icon: 'storefront',
      title: 'Modern Retail',
      description: 'Fast commerce experiences with streamlined discovery, checkout, and customer journeys.',
    },
  ];

  return (
    <section id="industries" className="scroll-mt-32 border-y border-slate-800 bg-slate-900/50 py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-400">Tailored to your market</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Solutions for complex industries</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Each market has distinct customer expectations and operational challenges. We shape digital experiences around the work your business needs to do.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <article key={industry.title} className="glass-card rounded-2xl p-6">
              <Icon
                name={industry.icon}
                className={`text-[28px] ${index % 2 === 0 ? 'text-cyan-400' : 'text-indigo-400'}`}
              />
              <h3 className="mt-4 text-base font-bold text-white">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{industry.description}</p>
            </article>
          ))}
        </div>

        <Link
          to="/#audit-form"
          className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white"
        >
          Talk through your industry’s needs <Icon name="arrow_forward" className="text-base" />
        </Link>
      </div>
    </section>
  );
}
