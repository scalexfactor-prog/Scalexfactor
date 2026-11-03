import { Link, useParams } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { SOLUTIONS } from '@/data/solutions';

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = SOLUTIONS.find((item) => item.slug === slug);

  if (!solution) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Solution not found</h1>
        <p className="mt-4 text-slate-600">Choose a service from our solutions overview.</p>
        <Link to="/#services" className="mt-6 inline-flex rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white hover:bg-indigo-800">
          View services
        </Link>
      </section>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-cyan-50">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800 hover:text-indigo-950">
            <Icon name="arrow_back" className="text-base" />
            All services
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm ring-1 ring-indigo-100">
              <Icon name={solution.icon} className="text-lg" />
              {solution.navLabel}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {solution.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
              {solution.subheadline}
            </p>
            <Link
              to="/#audit-form"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-800"
            >
              Discuss your project <Icon name="arrow_forward" className="text-lg" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="space-y-5 lg:col-span-4">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">A practical approach</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Built around your goals and constraints</h2>
        </div>
        <p className="text-lg leading-relaxed text-slate-700 lg:col-span-8">{solution.overview}</p>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">What the work can include</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Capabilities tailored to the project</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {solution.features.map((feature, index) => (
              <article key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-800">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">Planning checklist</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">A clear path from discovery to delivery</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            These are planning priorities, not a one-size-fits-all promise. We confirm scope, ownership, access, and acceptance criteria with your team before implementation.
          </p>
        </div>
        <ul className="space-y-4">
          {solution.priorities.map((priority) => (
            <li key={priority} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon name="task_alt" className="mt-0.5 shrink-0 text-xl text-indigo-700" />
              <span className="leading-relaxed text-slate-700">{priority}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-200 bg-indigo-50/70 py-12">
        <div className="mx-auto flex max-w-7xl gap-4 px-4 sm:px-6 lg:px-8">
          <Icon name="query_stats" className="mt-0.5 shrink-0 text-2xl text-indigo-700" />
          <div>
            <h2 className="font-bold text-slate-900">Measurement and expectations</h2>
            <p className="mt-2 max-w-4xl leading-relaxed text-slate-700">{solution.measurement}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-indigo-700 to-cyan-700 p-8 text-white sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Start with the problem you need to solve.</h2>
            <p className="mt-3 leading-relaxed text-indigo-50">We’ll discuss your objectives, current setup, and a realistic next step—before recommending a solution.</p>
          </div>
          <Link to="/#audit-form" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-800 transition hover:bg-indigo-50">
            Talk to our team <Icon name="arrow_forward" className="text-lg" />
          </Link>
        </div>
      </section>
    </div>
  );
}
