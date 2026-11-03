export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionPageContent {
  slug: string;
  navLabel: string;
  icon: string;
  headline: string;
  subheadline: string;
  overview: string;
  features: SolutionFeature[];
  priorities: string[];
  measurement: string;
}

export const SOLUTIONS: SolutionPageContent[] = [
  {
    slug: 'web-development',
    navLabel: 'Web & App Development',
    icon: 'code',
    headline: 'High-Performance Engineering for Predictable Scale',
    subheadline: 'Build resilient digital experiences that turn technical foundations into a practical engine for customer growth.',
    overview: 'We plan and build websites, web applications, and commerce experiences around your users, integrations, content, and internal capabilities. The right framework and architecture depend on the product—not a one-size-fits-all stack.',
    features: [
      {
        title: 'Modern, maintainable architecture',
        description: 'Use Next.js and TypeScript where they suit the project. A headless approach can decouple the frontend from content systems when independent publishing and product experiences justify the extra complexity.',
      },
      {
        title: 'Performance measured in context',
        description: 'Set Core Web Vitals objectives from a baseline, then test representative pages on real devices and networks. Results depend on content, third-party scripts, hosting, and traffic conditions.',
      },
      {
        title: 'Security built into delivery',
        description: 'Review data flows, access controls, dependency risk, and API boundaries. Apply encryption in transit and at rest where appropriate, and align controls with your organization’s security requirements.',
      },
    ],
    priorities: [
      'Choose a framework and rendering strategy based on content freshness, interactivity, hosting, and team needs; use Next.js App Router and ISR where they are a good fit.',
      'Add automated checks for build quality, accessibility, and performance regressions to the delivery pipeline.',
      'Define structured data and metadata requirements alongside page templates, then validate them before launch.',
    ],
    measurement: 'Agree on a baseline and measurable acceptance criteria before implementation. Lighthouse results are useful lab diagnostics; field Core Web Vitals provide a view of real-user experience.',
  },
  {
    slug: 'seo',
    navLabel: 'Technical SEO',
    icon: 'search',
    headline: 'Build Search Visibility Around High-Intent Demand',
    subheadline: 'Create a durable technical and content foundation that helps the right customers discover and understand your business.',
    overview: 'Search performance starts with useful pages, accessible information, and a site search engines can crawl. We connect technical fixes, content planning, and measurement to your actual audience and commercial priorities.',
    features: [
      {
        title: 'Intent-led and programmatic SEO',
        description: 'Group search topics by audience need. Use programmatic templates only when each resulting page can provide distinct, useful information rather than thin or duplicated copy.',
      },
      {
        title: 'Clear internal discovery paths',
        description: 'Organize navigation and contextual links so visitors and crawlers can reach important pages without unnecessary duplication or orphaned content.',
      },
      {
        title: 'Ongoing technical checks',
        description: 'Review indexability, canonicalization, redirect chains, broken links, structured data, and rendering as the site changes.',
      },
    ],
    priorities: [
      'Generate and validate XML sitemaps from the current set of canonical, indexable URLs.',
      'Test mobile layouts, responsive images, and modern image formats such as WebP or AVIF where supported by the delivery stack.',
      'Measure server response and caching behavior, then prioritize improvements using real crawl and performance data.',
    ],
    measurement: 'Track index coverage, organic visits by intent, qualified actions, and technical health over time. Rankings and traffic vary with competition, site history, content quality, and search-engine changes.',
  },
  {
    slug: 'paid-media',
    navLabel: 'Paid Media',
    icon: 'campaign',
    headline: 'Precision Multi-Channel Acquisition, Measured Clearly',
    subheadline: 'Plan focused campaigns across Google, Meta, and LinkedIn, with reporting that connects media activity to business outcomes.',
    overview: 'Paid media works best when the audience, offer, landing experience, and measurement plan are aligned. We start with the economics and data available, then build a test-and-learn plan for the channels that fit.',
    features: [
      {
        title: 'Channel and audience planning',
        description: 'Match search, social, and professional-network campaigns to buying intent, audience reach, creative capacity, and budget.',
      },
      {
        title: 'Responsible conversion measurement',
        description: 'Where supported by consent and platform policies, configure Meta Conversions API or Google server-side tagging with clear event definitions and data minimization.',
      },
      {
        title: 'Creative and landing-page testing',
        description: 'Test messages and formats against a defined hypothesis. Use dynamic creative options when the channel, budget, and available data support a meaningful test.',
      },
    ],
    priorities: [
      'Audit existing tags, consent settings, account access, campaign structure, and conversion definitions before making changes.',
      'Map meaningful conversion events to CRM stages where the data and integrations support reliable attribution.',
      'Build a reporting view for spend, qualified outcomes, and agreed efficiency measures; label attribution assumptions clearly.',
    ],
    measurement: 'ROAS and acquisition costs are reporting measures, not guaranteed outcomes. Results depend on margins, offer quality, competition, tracking coverage, and the customer journey.',
  },
  {
    slug: 'cro',
    navLabel: 'Conversion Optimization',
    icon: 'speed',
    headline: 'Turn More Visits into Meaningful Actions',
    subheadline: 'Find friction in the customer journey and improve it through research, careful testing, and clear measurement.',
    overview: 'Conversion optimization is a disciplined process of understanding user needs, identifying barriers, and testing changes. We avoid treating a single experiment or short-term lift as proof of a lasting result.',
    features: [
      {
        title: 'Journey and behavior review',
        description: 'Combine analytics, customer feedback, usability review, and privacy-conscious heatmaps to investigate scroll patterns, drop-offs, and interaction friction.',
      },
      {
        title: 'Controlled experiments',
        description: 'Design A/B or multivariate tests where traffic and statistical power support them. Server-side or pre-rendered approaches can reduce flicker when they fit the stack; accessibility remains part of the test.',
      },
      {
        title: 'Simpler forms and checkout',
        description: 'Reduce unnecessary steps, clarify requirements and costs, and test payment and form changes against completion quality—not just clicks.',
      },
    ],
    priorities: [
      'Load analytics and experimentation tools asynchronously where possible, and monitor their effect on page performance.',
      'Mask or exclude personal and sensitive information from recordings; confirm consent, retention, and access settings against applicable privacy requirements.',
      'Agree on conversion-drop alert thresholds and add webhook notifications only where they fit the existing monitoring workflow.',
    ],
    measurement: 'Establish a baseline, document each hypothesis, and account for sample size and experiment duration. Any conversion change should be interpreted alongside lead quality and business impact.',
  },
];
