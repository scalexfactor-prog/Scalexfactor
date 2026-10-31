import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';

const serviceCards = [
  {
    icon: 'code',
    tone: 'indigo',
    title: 'Modern Web & App Development',
    description:
      'Lightning-fast web applications, headless commerce, and corporate platforms built on Next.js, TypeScript, and cloud-native frameworks engineered for conversions.',
    bullets: ['Custom Web Apps & Headless CMS', 'Sub-second Core Web Vitals', 'High-conversion Funnel Engineering'],
  },
  {
    icon: 'search',
    tone: 'cyan',
    title: 'Technical & Performance SEO',
    description:
      'Dominate high-intent search terms through deep technical architecture, algorithmic content clustering, and high-authority institutional link building.',
    bullets: ['Programmatic & Semantic SEO', 'Enterprise Technical Audits & Fixes', 'Revenue-driven Keyword Architecture'],
  },
  {
    icon: 'target',
    tone: 'purple',
    title: 'Performance Digital Marketing',
    description:
      'Precision paid acquisition across Google Ads, Meta, LinkedIn, and programmatic channels driven by real attribution modeling and ROAS milestones.',
    bullets: ['Multi-Touch Attribution Modeling', 'Creative Testing & Iteration Cadence', 'Pipeline & CAC Optimization'],
  },
  {
    icon: 'palette',
    tone: 'amber',
    title: 'Brand Identity & Positioning',
    description:
      'Cut through market noise with commanding identity design, product packaging, high-converting product UI/UX design systems, and resonant copy.',
    bullets: ['Brand Architecture & Style Guides', 'Figma Design Systems & Prototyping', 'High-Stakes Pitch Decks & Assets'],
  },
  {
    icon: 'speed',
    tone: 'rose',
    title: 'CRO & Conversion Funnels',
    description:
      'Turn current traffic into profitable revenue through behavioral heatmap analysis, dynamic landing pages, and automated A/B split-testing.',
    bullets: ['Heatmap & User Session Dissection', 'Multivariate Landing Page Testing', 'Frictionless Checkout Optimization'],
  },
  {
    icon: 'memory',
    tone: 'emerald',
    title: 'MarTech & AI Automation',
    description:
      'Automate lead qualification, CRM synching, client onboarding, and automated email nurturing using modern AI integrations and webhooks.',
    bullets: ['HubSpot, Salesforce & Klaviyo Workflows', 'Custom Lead Scoring Models', 'Automated Reporting Dashboards'],
  },
];

const trustBrands = ['NOVANET', 'HYPERION', 'SYNAPSE.AI', 'Aethelgard', 'VERTIGO.LABS'];

const caseStudies = [
  {
    tag: 'Next.js & Organic SEO',
    title: 'From Page 4 to #1 for 38 Category Keywords',
    impact: '+340%',
    metric: 'Pipeline Impact',
    value: '-58%',
    label: 'Cost Per Lead',
    description: 'Complete web rebuild and programmatic SEO overhaul resulting in record enterprise pipeline and Series-B valuation bump.',
    theme: 'from-indigo-900 to-slate-900',
  },
  {
    tag: 'Paid Acquisition & CRO',
    title: 'Scaling from $80k to $650k Monthly Ad Spend at 4.6x ROAS',
    impact: '$8.4M',
    metric: 'Annual Revenue',
    value: '4.62x',
    label: 'Blended ROAS',
    description: 'Dynamic headless Shopify checkout combined with rapid TikTok & Meta paid media creative testing sprints.',
    theme: 'from-cyan-950 to-slate-900',
  },
  {
    tag: 'Branding & Funnels',
    title: 'Category Rebranding & Enterprise Demo Generation',
    impact: '+210%',
    metric: 'Sales Qualified Demos',
    value: '-35 days',
    label: 'Sales Cycle',
    description: 'Positioning shift away from legacy clinical terminology to modern software-first enterprise branding.',
    theme: 'from-violet-950 to-slate-900',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Growth Audit & Blueprint',
    copy: 'We dissect code quality, technical SEO vulnerabilities, and funnel friction to uncover revenue opportunities.',
  },
  {
    number: '02',
    title: 'Intervention Design',
    copy: 'We map the highest-conviction engineering and growth strategies tailored to your category and buying motion.',
  },
  {
    number: '03',
    title: 'Execution Sprints',
    copy: 'Our team ships pages, campaigns, landing experiences, and automation in tightly measured 30- to 60-day cycles.',
  },
  {
    number: '04',
    title: 'Optimization & Scale',
    copy: 'We monitor attribution, conversion efficiency, and pipeline quality to compound what works and cut inefficiency.',
  },
];

const testimonials = [
  {
    initials: 'MK',
    name: 'Marcus Klein',
    title: 'VP Marketing, Novanet Cloud',
    quote:
      'Scalex Factor isn’t just an agency; they operate like an internal growth engineering unit. They rebuilt our web platform and increased our conversion rate from 1.2% to 4.1% in under 90 days.',
  },
  {
    initials: 'SR',
    name: 'Sarah Reynolds',
    title: 'Co-Founder, Synapse AI',
    quote:
      'Their SEO architecture alone added $2.4M in pipeline within two quarters. In a market where organic reach is tough, their technical rigor makes all the difference.',
  },
  {
    initials: 'DL',
    name: 'David Lim',
    title: 'Chief Executive, Hyperion Retail',
    quote:
      'Transparent reporting, sharp technical capability, and zero fluff. They took our ad creative and landing pages to an entirely new standard.',
  },
];

const faqItems = [
  {
    question: 'How does Scalex Factor differ from a traditional digital marketing agency?',
    answer:
      'Traditional agencies outsource development or separate SEO from creative and ad buying. Scalex Factor is a technology-first growth firm: our software engineers, data scientists, and growth strategists work in tandem to optimize the complete revenue funnel from first touch to checkout.',
  },
  {
    question: 'What tech stack do you use for web development?',
    answer:
      'We build modern, headless web apps primarily using Next.js, React, Tailwind CSS, TypeScript, and modern headless CMS platforms (Sanity, Strapi, Shopify Plus). This gives our clients instantaneous load speeds, superior SEO crawling, and total visual customization without bloated WordPress plugins.',
  },
  {
    question: 'How fast can we expect measurable SEO and lead results?',
    answer:
      'Paid campaigns and CRO modifications generate actionable data and revenue within 14–21 days of launch. For technical and semantic SEO, clients routinely observe ranking leaps in 60 to 90 days due to our high-velocity programmatic content approach.',
  },
  {
    question: 'Are we tied into restrictive 12-month agency contracts?',
    answer:
      'No. We operate primarily on 90-day growth sprints and rolling retainers. We believe retention is earned each month through ROI, transparency, and consistent execution.',
  },
];

function HomePage() {
  const [traffic, setTraffic] = useState(25000);
  const [conversionRate, setConversionRate] = useState(2.3);
  const [orderValue, setOrderValue] = useState(1200);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const projectedRevenue = useMemo(
    () => traffic * (conversionRate / 100) * orderValue,
    [traffic, conversionRate, orderValue],
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="w-full bg-[#070b11] text-slate-100">
      <section className="relative overflow-hidden pb-28 pt-28 md:pb-36 md:pt-32">
        <div className="glow-gradient absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3.5 py-1.5 text-xs font-medium text-slate-300 shadow-inner backdrop-blur-md">
              <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
              <span>Accepting 3 New Enterprise &amp; Scale-up Brands This Quarter</span>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.12] sm:text-6xl lg:text-7xl">
              Engineered for <br className="hidden sm:inline" />
              <span className="gradient-text">Predictable Digital Growth.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-slate-400 sm:text-xl">
              Scalex Factor combines custom software engineering, aggressive organic search architectures, and performance marketing to scale revenue sustainably.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <a
                href="#audit-form"
                className="gradient-accent flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] hover:shadow-indigo-500/40 sm:w-auto"
              >
                <span>Claim Free Growth Audit</span>
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
                <span>No Locked-in Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-sm text-emerald-400" />
                <span>Google &amp; Meta Premier Partners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="check_circle" className="text-sm text-emerald-400" />
                <span>Full-Stack Development In-House</span>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-transparent p-1 shadow-2xl">
              <div className="overflow-hidden rounded-[14px] border border-slate-800 bg-slate-950 p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500">scalex-growth-intelligence-os.app</span>
                  </div>
                  <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 font-mono text-xs font-medium text-emerald-400">
                    Live Data Stream • 99.98% Attribution Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    ['Attributed Pipeline', '$48.2M', ' +324% YoY'],
                    ['Avg. Organic ROAS', '5.4x', ' +1.8x industry benchmark'],
                    ['App Load Velocity', '0.42s', ' Core Web Vitals 100/100'],
                    ['Customer Retention', '94.8%', ' Enterprise grade'],
                  ].map(([label, value, trend]) => (
                    <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</span>
                      <p className="mt-1 text-2xl font-bold text-white">{value}</p>
                      <span className="mt-1 flex items-center gap-1 text-xs text-emerald-400">
                        <Icon name="trending_up" className="text-[13px]" />
                        {trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Accelerating high-growth disruptors and enterprise leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition duration-500 hover:grayscale-0 md:gap-16">
            {trustBrands.map((brand) => (
              <span key={brand} className="text-xl font-black tracking-tighter text-slate-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Integrated Growth Stack</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Full-Funnel Capabilities. <br /> Zero Outsourcing Friction.
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Growth is an interconnected discipline. We fuse modern engineering with aggressive user acquisition and distinct brand psychology.
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="calculator" className="relative border-y border-slate-800 bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Growth Forecaster</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Calculate Your Revenue Expansion Potential</h2>
            <p className="mt-2 text-sm text-slate-400">Adjust your current traffic and target metrics to calculate monthly upside with Scalex Factor.</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Monthly Website Visitors</span>
                    <span className="font-mono text-cyan-400">{traffic.toLocaleString()}</span>
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
                    <span className="text-slate-300">Expected Conversion Rate</span>
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
                    <span className="text-slate-300">Average Customer Order/Deal Value</span>
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
                  Assumes Scalex Factor’s median CRO uplift from <strong className="text-slate-300">1.5% to 3.8%</strong> over a 120-day sprint.
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/30 to-cyan-600/10 p-8 text-center">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">Estimated Additional Monthly Pipeline</span>
                <div className="mt-3 font-mono text-4xl font-black text-white sm:text-5xl">{formatCurrency(projectedRevenue)}</div>
                <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-emerald-400">
                  <Icon name="check_circle" className="text-[14px]" />
                  +153% conversion capacity
                </p>
                <a
                  href="#audit-form"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition hover:opacity-95"
                >
                  Unlock This Growth Model
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
              <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Demonstrated Impact</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">Real Performance Metrics</h2>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-400 md:mt-0">
              We don’t count vanity metrics. We measure qualified pipeline, organic dominance, customer lifetime value, and speed to close.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="glass-card overflow-hidden rounded-2xl">
                <div className={`flex h-44 items-center justify-center overflow-hidden bg-gradient-to-tr ${item.theme}`}>
                  <span className="relative z-10 text-2xl font-extrabold tracking-tighter text-white">{item.tag.includes('SEO') ? 'FinTech SaaS Cloud' : item.tag.includes('CRO') ? 'Omnichannel D2C' : 'B2B HealthTech'}</span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded bg-indigo-500/20 px-2.5 py-1 text-[11px] font-bold uppercase text-cyan-300">{item.tag}</span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">{item.title}</h4>
                  <div className="my-4 grid grid-cols-2 gap-4 border-y border-slate-800 py-4">
                    <div>
                      <span className="block text-xs text-slate-500">{item.metric}</span>
                      <span className="text-xl font-bold text-emerald-400">{item.impact}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">{item.label}</span>
                      <span className="text-xl font-bold text-white">{item.value}</span>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-slate-800 bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Execution Framework</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">How We Scale Your Factor</h2>
            <p className="mt-3 text-sm text-slate-400">No guesswork. A structured methodology that delivers predictability at every milestone.</p>
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.35em] text-cyan-400">Client Endorsements</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">What Founders &amp; CMOs Say</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="glass-card flex flex-col justify-between rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="star" className="text-[18px]" />
                    ))}
                  </div>
                  <p className="text-sm italic text-slate-300">“{item.quote}”</p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">
                    {item.initials}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.name}</h5>
                    <span className="text-xs text-slate-500">{item.title}</span>
                  </div>
                </div>
              </div>
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
                Zero Obligation • 48-Hour Turnaround
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Claim Your Free Custom Growth Audit</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Our principal growth engineers will analyze your current platform, SEO rankings, and conversion gaps to give you a personalized 15-page breakdown.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                {['Full Website Performance & Core Web Vitals Audit', 'Competitor Keyword Opportunity Matrix', 'Conversion Funnel Leakage Breakdown'].map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <Icon name="check_circle" className="mt-0.5 shrink-0 text-[16px] text-emerald-400" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
                <Icon name="shield" className="h-8 w-8 shrink-0 text-cyan-400" />
                <p className="text-[11px] text-slate-400">
                  We protect your privacy. Your data will never be sold, and your metrics remain protected under strict NDA terms.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950 p-8 shadow-2xl sm:p-10">
                <h3 className="mb-2 text-xl font-bold text-white">Request Your Growth Engine Audit</h3>
                <p className="mb-6 text-xs text-slate-400">Fill in your brand details below to receive your actionable audit report.</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Full Name *</label>
                      <input type="text" required placeholder="Alex Vance" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Work Email *</label>
                      <input type="email" required placeholder="alex@company.com" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Company</label>
                      <input type="text" placeholder="Northstar Labs" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-300">Monthly Budget</label>
                      <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none">
                        <option>$5k - $15k</option>
                        <option>$15k - $40k</option>
                        <option>$40k - $100k</option>
                        <option>$100k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">Primary Objective</label>
                    <textarea rows={4} placeholder="Tell us where your funnel, SEO, or brand is plateauing." className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none" />
                  </div>

                  <button type="submit" className="gradient-accent flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95">
                    <span>Request My Audit</span>
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
              <a href="#audit-form" className="rounded-xl bg-slate-950 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-black">
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
