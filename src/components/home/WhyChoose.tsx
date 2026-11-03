

import { Link } from 'react-router-dom';

export function WhyChoose() {
  const pillars = [
    {
      number: '01',
      title: 'Engineering Precision',
      description: 'Maintainable, modern code and thoughtful technical foundations built to support your next stage of growth.',
    },
    {
      number: '02',
      title: 'ROI Accountability',
      description: 'Clear priorities tied to business outcomes, from qualified leads and conversion rates to acquisition costs.',
    },
    {
      number: '03',
      title: 'Full-Stack Execution',
      description: 'Design, development, search, and marketing work together instead of being handed between disconnected teams.',
    },
    {
      number: '04',
      title: 'Direct Communication',
      description: 'Work closely with the people delivering your project, with straightforward updates and clear ownership.',
    },
  ];

  return (
    <section id="why-choose" className="scroll-mt-32 py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-400">About Scalex Factor</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">A team built around measurable progress</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            We bring strategy, technology, and growth execution together so businesses can move from disconnected efforts to a clear, measurable roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="glass-card rounded-2xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-sm font-extrabold text-cyan-300">
                {pillar.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
            </article>
          ))}
        </div>

        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white"
        >
          Explore our case studies <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
