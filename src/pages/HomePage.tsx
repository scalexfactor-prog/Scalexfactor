import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { Industries } from '@/components/home/Industries';
import { WhyChoose } from '@/components/home/WhyChoose';
import { SITE } from '@/data/site';

const serviceCards = [
  {
    icon: 'code',
    tone: 'indigo',
    title: 'Modern Web & App Development',
    description:
      'Websites and applications planned around user needs, content workflows, integrations, and maintainable delivery.',
    bullets: ['Architecture selected for the project', 'Performance baselines and testing', 'Secure, documented integrations'],
    href: '/solutions/web-development',
  },
  {
    icon: 'search',
    tone: 'cyan',
    title: 'Technical & Performance SEO',
    description:
      'Technical improvements and useful content planning to help the right audiences discover your products and services.',
    bullets: ['Technical SEO audits', 'Intent-led page planning', 'Internal links and crawlability'],
    href: '/solutions/seo',
  },
  {
    icon: 'target',
    tone: 'purple',
    title: 'Performance Digital Marketing',
    description:
      'Focused campaigns across relevant channels, supported by clear conversion definitions and ongoing creative tests.',
    bullets: ['Google, Meta, and LinkedIn campaigns', 'Consent-aware conversion measurement', 'Reporting tied to agreed outcomes'],
    href: '/solutions/paid-media',
  },
  {
    icon: 'palette',
    tone: 'amber',
    title: 'Brand Identity & Positioning',
    description:
      'Clarify what makes your offer useful and express it consistently across your website and customer communications.',
    bullets: ['Positioning and messaging', 'Visual identity and design systems', 'Website and campaign creative'],
  },
  {
    icon: 'speed',
    tone: 'rose',
    title: 'CRO & Conversion Funnels',
    description:
      'Find friction in key journeys and improve the experience through research, accessibility review, and careful experimentation.',
    bullets: ['Journey and usability reviews', 'Privacy-conscious behavior research', 'A/B tests where evidence supports them'],
    href: '/solutions/cro',
  },
  {
    icon: 'memory',
    tone: 'emerald',
    title: 'AI Automation',
    description:
      'Identify repetitive tasks that are suitable for automation and connect the tools your team already uses.',
    bullets: ['Workflow mapping', 'CRM and application integrations', 'Human review and exception handling'],
  },
];

const selectedClients = [
  {
    name: 'MyGetWellStore',
    category: 'Healthcare E-Commerce',
    description: 'An online healthcare and wellness store for medical equipment, health-monitoring devices, and home-care products.',
  },
  {
    name: 'Bajaj Life Care',
    category: 'Medical Equipment',
    description: 'An Indian manufacturer and supplier of flow meters, medical oxygen cylinders, and anaesthesia equipment.',
  },
  {
    name: 'ScaleX Finance',
    category: 'Financial Services',
    description: 'A financial services platform that connects customers with banks and RBI-registered NBFCs to compare and apply for financial products.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Baseline',
    copy: 'Review the current experience, available data, audience, and constraints before recommending changes.',
  },
  {
    number: '02',
    title: 'Priorities & Scope',
    copy: 'Agree on the work, responsibilities, success measures, and what is deliberately out of scope.',
  },
  {
    number: '03',
    title: 'Implementation',
    copy: 'Deliver the agreed changes in reviewable steps, coordinating content, design, development, and campaign work.',
  },
  {
    number: '04',
    title: 'Review & Next Steps',
    copy: 'Check the work against the agreed measures, share findings, and decide together what to improve next.',
  },
];

const progressPrinciples = [
  {
    icon: 'fact_check',
    title: 'Start with a baseline',
    description: 'Review the current site, analytics, search visibility, and conversion journey before recommending changes.',
  },
  {
    icon: 'flag',
    title: 'Agree on useful measures',
    description: 'Choose indicators that reflect the project goal, such as qualified inquiries, task completion, or technical health.',
  },
  {
    icon: 'loop',
    title: 'Share findings and iterate',
    description: 'Document what changed, what the data shows, and what should be tested or improved next.',
  },
];

const partnerQuestions = [
  {
    icon: 'integration_instructions',
    title: 'Who owns implementation?',
    description: 'Agree who is responsible for design, development, integrations, launch, and ongoing maintenance.',
  },
  {
    icon: 'monitoring',
    title: 'How will progress be measured?',
    description: 'Set a baseline and define how technical health, qualified demand, and customer actions will be reported.',
  },
  {
    icon: 'account_tree',
    title: 'Do the channels work together?',
    description: 'Make sure site structure, content, campaigns, and conversion paths support the same customer journey.',
  },
  {
    icon: 'shield',
    title: 'How is data handled?',
    description: 'Discuss consent, access, retention, sensitive data, and the responsibilities of each platform involved.',
  },
];

const faqItems = [
  {
    question: 'What kind of work can Scalex Factor help with?',
    answer:
      'Our work includes website and application development, technical SEO, paid media, and conversion improvement. We can focus on one area or scope connected work around your goals and existing team.',
  },
  {
    question: 'What tech stack do you use for web development?',
    answer:
      'The stack depends on the product, integrations, content workflow, hosting, and your team’s ability to maintain it. We work with modern JavaScript frameworks and TypeScript where they fit, and explain the trade-offs before implementation.',
  },
  {
    question: 'How soon should we expect results?',
    answer:
      'Timing depends on the starting point, scope, competition, available data, and approval process. We agree on milestones and leading indicators for each engagement; search and campaign outcomes cannot be guaranteed to a fixed schedule.',
  },
  {
    question: 'What happens when I submit the contact form?',
    answer:
      'The form opens WhatsApp with the details you entered so you can review and send the message. Nothing is submitted until you send it in WhatsApp.',
  },
];

function HomePage() {
  const [traffic, setTraffic] = useState(25000);
  const [conversionRate, setConversionRate] = useState(2.3);
  const [orderValue, setOrderValue] = useState(1200);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleAuditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get('fullName') ?? '').trim();
    const workEmail = String(formData.get('workEmail') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const monthlyBudget = String(formData.get('monthlyBudget') ?? '').trim();
    const objective = String(formData.get('objective') ?? '').trim();
    const details = [
      `Name: ${fullName}`,
      `Work email: ${workEmail}`,
      company ? `Company: ${company}` : null,
      `Monthly budget: ${monthlyBudget}`,
      objective ? `Primary objective: ${objective}` : null,
    ].filter((detail): detail is string => detail !== null);
    const message = `Hi, I'd like to discuss a digital growth project.\n\n${details.join('\n')}`;

    window.location.href = `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
  };

  const projectedRevenue = useMemo(
    () => traffic * (conversionRate / 100) * orderValue,
    [traffic, conversionRate, orderValue],
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden pb-28 pt-28 md:pb-36 md:pt-32">
        <div className="glow-gradient absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Strategy • Technology • Visibility • Growth</span>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.12] sm:text-6xl lg:text-7xl">
              Engineered for <br className="hidden sm:inline" />
              <span className="gradient-text">Predictable Digital Growth.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-slate-400 sm:text-xl">
              Scalex Factor brings web development, technical SEO, digital marketing, and conversion improvement together around your business goals.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <a
                href="#audit-form"
                className="gradient-accent flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40 sm:w-auto"
              >
                <span>Discuss Your Growth Goals</span>
                <Icon name="arrow_upward" className="text-base" />
              </a>
              <a
                href="#services"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
              >
                <Icon name="layers" className="text-base text-cyan-400" />
                <span>Explore Solutions</span>
              </a>
              <Link
                to="/case-studies"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-sm font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 sm:w-auto"
              >
                <Icon name="insights" className="text-base" />
                <span>View Case Studies</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-sm text-emerald-400" />
                <span>Scope agreed before work begins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-sm text-emerald-400" />
                <span>Clear scope and priorities</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-sm text-emerald-400" />
                <span>Progress measured against agreed goals</span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="glass-card rounded-3xl p-6 shadow-xl sm:p-10">
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-indigo-700">A connected growth system</span>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Every channel works better with a strong foundation.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We connect the website experience, search visibility, acquisition, and conversion measurement—then prioritize improvements with your team.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['devices', 'Build', 'Fast, maintainable web experiences'],
                  ['search', 'Be found', 'Useful content and technical SEO'],
                  ['campaign', 'Reach', 'Relevant paid and organic campaigns'],
                  ['query_stats', 'Improve', 'Measurement and ongoing testing'],
                ].map(([icon, title, description]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                    <Icon name={icon} className="text-2xl text-indigo-700" />
                    <h3 className="mt-3 font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-sm font-semibold text-slate-600 sm:px-6 lg:px-8">
          <span className="text-slate-500">One connected team across</span>
          <span>Web &amp; app development</span>
          <span className="text-indigo-300" aria-hidden="true">/</span>
          <span>Technical SEO</span>
          <span className="text-indigo-300" aria-hidden="true">/</span>
          <span>Paid media</span>
          <span className="text-indigo-300" aria-hidden="true">/</span>
          <span>Conversion optimization</span>
        </div>
      </section>

      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Integrated Growth Stack</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Practical capabilities. <br /> One connected growth plan.
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Choose a focused service or combine disciplines around your goals, current platform, and available resources.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => {
              const toneClasses: Record<string, string> = {
                indigo: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400',
                cyan: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400',
                purple: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
                amber: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
                rose: 'border-rose-500/20 bg-rose-500/10 text-rose-400',
                emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
              };

              return (
                <div key={service.title} className="glass-card group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:scale-110 ${toneClasses[service.tone]}`}>
                      <Icon name={service.icon} className="text-[24px]" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">{service.description}</p>
                  </div>
                  <ul className="space-y-2.5 border-t border-slate-800/80 pt-6 text-xs text-slate-300">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <Icon name="check" className="text-[16px] text-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {service.href && (
                    <Link
                      to={service.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition-colors hover:text-indigo-950"
                    >
                      Explore {service.title} <Icon name="arrow_forward" className="text-base transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-indigo-700">Choosing a growth partner</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Look beyond the channel list.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Compare teams on how they deliver, measure, connect, and protect the work—not just on the tools or platforms they mention.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerQuestions.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5">
                <Icon name={item.icon} className="text-2xl text-indigo-700" />
                <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <WhyChoose />

      <section id="calculator" className="relative border-y border-slate-800 bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Revenue Scenario Calculator</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Explore a Simple Revenue Scenario</h2>
            <p className="mt-2 text-sm text-slate-400">Adjust the inputs to see an illustrative calculation. This is not a forecast of business results.</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Monthly Website Visitors</span>
                    <span className="font-mono text-cyan-400">{traffic.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={250000}
                    step={5000}
                    value={traffic}
                    onChange={(event) => setTraffic(Number(event.target.value))}
                    className="w-full cursor-pointer accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Illustrative Conversion Rate</span>
                    <span className="font-mono text-cyan-400">{conversionRate.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={6}
                    step={0.1}
                    value={conversionRate}
                    onChange={(event) => setConversionRate(Number(event.target.value))}
                    className="w-full cursor-pointer accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Average Customer Order/Deal Value (INR)</span>
                    <span className="font-mono text-cyan-400">{formatCurrency(orderValue)}</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={10000}
                    step={100}
                    value={orderValue}
                    onChange={(event) => setOrderValue(Number(event.target.value))}
                    className="w-full cursor-pointer accent-indigo-500"
                  />
                </div>

                <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-4 text-xs text-slate-400">
                  <Icon name="info" className="mr-1 inline text-[16px] text-cyan-400" />
                  This is an illustration based on your inputs, not a forecast or promise. Actual results vary by business and customer behavior.
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/30 to-cyan-600/10 p-8 text-center">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">Illustrative Monthly Revenue (INR)</span>
                <div className="mt-3 font-mono text-4xl font-black text-white sm:text-5xl">{formatCurrency(projectedRevenue)}</div>
                <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-emerald-400">
                  <Icon name="check_circle" className="text-[14px]" />
                  Calculated from the values you selected
                </p>
                <a
                  href="#audit-form"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition hover:opacity-95"
                >
                  Discuss Your Assumptions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Selected Clients</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">Client Work</h2>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-400 md:mt-0">
              Explore our work across healthcare e-commerce and medical equipment, with technology, web development, SEO, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {selectedClients.map((client) => (
              <Link
                key={client.name}
                to="/case-studies"
                className="glass-card rounded-2xl p-8 transition-colors hover:border-cyan-400/40"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{client.category}</span>
                <h3 className="mt-3 text-2xl font-bold text-white">{client.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{client.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                  View website preview <Icon name="arrow_forward" className="text-base" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-slate-800 bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Execution Framework</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">A clear process, shaped around your team</h2>
            <p className="mt-3 text-sm text-slate-400">We make decisions visible, agree on priorities, and adapt the plan as we learn.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="glass-card rounded-2xl p-6">
                <span className="text-4xl font-extrabold text-indigo-500/30">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-indigo-700">How we measure progress</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Clear decisions, grounded in evidence</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              We don’t promise a predetermined result. We agree on the problem, define meaningful measures, and share what we learn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {progressPrinciples.map((principle) => (
              <article key={principle.title} className="glass-card rounded-2xl p-8">
                <Icon name={principle.icon} className="text-3xl text-indigo-700" />
                <h3 className="mt-5 text-lg font-bold text-slate-900">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audit-form" className="relative overflow-hidden border-t border-slate-800 bg-slate-900 py-24">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Start with a conversation
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Tell Us What You’re Working to Improve</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Share your website, growth priorities, and current challenges. We’ll use that context to understand your needs and discuss appropriate next steps.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                {['Website and application development', 'Technical SEO and search visibility', 'Paid media and conversion improvement'].map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <Icon name="check_circle" className="mt-0.5 shrink-0 text-[16px] text-emerald-400" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                <Icon name="shield" className="h-8 w-8 shrink-0 text-cyan-400" />
                <p className="text-[11px] text-slate-400">
                  Selecting submit opens WhatsApp with your details. Review the message there before sending; your details are not submitted until you send it.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950 p-8 shadow-2xl sm:p-10">
                <h3 className="mb-2 text-xl font-bold text-white">Start a Project Conversation</h3>
                <p className="mb-6 text-xs text-slate-400">Share a few details. You can review the message before it opens in WhatsApp.</p>

                <form className="space-y-4" onSubmit={handleAuditSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Full Name *</label>
                      <input type="text" name="fullName" required placeholder="Alex Vance" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Work Email *</label>
                      <input type="email" name="workEmail" required placeholder="alex@company.com" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Company</label>
                      <input type="text" name="company" placeholder="Northstar Labs" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Monthly Budget</label>
                      <select name="monthlyBudget" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none">
                        <option>₹5k - ₹15k</option>
                        <option>₹15k - ₹40k</option>
                        <option>₹40k - ₹100k</option>
                        <option>₹100k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">Primary Objective</label>
                    <textarea name="objective" rows={4} placeholder="Tell us where your funnel, SEO, or brand is plateauing." className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                  </div>

                  <button type="submit" className="gradient-accent flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95">
                    <span>Continue in WhatsApp</span>
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">FAQ</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="glass-card overflow-hidden rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-bold text-white focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <Icon name={isOpen ? 'expand_less' : 'expand_more'} className="text-[20px] text-slate-400" />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-800/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-400">{item.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-400 p-10 text-center text-white shadow-2xl sm:p-14">
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Ready to Multiply Your Growth Factor?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-base">
              Let’s discuss your current bottlenecks and establish an engineered roadmap to category leadership.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#audit-form" className="rounded-xl bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-indigo-800 transition hover:bg-indigo-50">
                Request Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
