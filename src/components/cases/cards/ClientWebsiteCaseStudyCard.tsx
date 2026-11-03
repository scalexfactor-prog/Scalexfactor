interface ClientWebsiteCaseStudyCardProps {
  name: string;
  category: string;
  summary: string;
  focusAreas: string[];
  services: string[];
  website: string;
  websiteUrl: string;
}

function ClientWebsiteCaseStudyCard({
  name,
  category,
  summary,
  focusAreas,
  services,
  website,
  websiteUrl,
}: ClientWebsiteCaseStudyCardProps) {
  return (
    <article className="case-card grid grid-cols-1 gap-6 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md lg:grid-cols-12">
      <div className="flex flex-col justify-between gap-space-md lg:col-span-5">
        <div className="space-y-space-md">
          <div className="mb-space-xs flex flex-wrap items-center gap-space-xs">
            <span className="rounded-lg bg-surface-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-surface">
              {category}
            </span>
            <span className="rounded-lg bg-secondary-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
              Selected Client
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md tracking-tight text-on-surface">{name}</h3>
          <p className="mt-space-xs max-w-4xl font-body-md text-body-md text-on-surface-variant">{summary}</p>
        </div>

        <div className="rounded-xl bg-surface-container-low p-space-md">
          <h4 className="mb-space-xs font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
            Business focus
          </h4>
          <ul className="flex flex-wrap gap-space-xs">
            {focusAreas.map((area) => (
              <li key={area} className="rounded bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-surface-container-low p-space-md">
          <h4 className="mb-space-xs font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
            Services
          </h4>
          <ul className="flex flex-wrap gap-space-xs">
            {services.map((service) => (
              <li key={service} className="rounded bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-space-md py-space-xs font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary-container"
        >
          Open {website} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="min-w-0 lg:col-span-7">
        <div className="overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-low shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-outline-variant/50 bg-surface-container-low px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-error/70" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-tertiary/70" />
              <span className="truncate pl-1 font-label-sm text-label-sm text-on-surface-variant">{website}</span>
            </div>
            <span className="shrink-0 font-label-sm text-label-sm text-on-surface-variant">Live preview</span>
          </div>
          <iframe
            src={websiteUrl}
            title={`${name} website preview`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-[420px] w-full bg-white"
          />
        </div>
      </div>
    </article>
  );
}

export function MyGetWellStoreCaseStudyCard() {
  return (
    <ClientWebsiteCaseStudyCard
      name="MyGetWellStore"
      category="Healthcare E-Commerce"
      summary="An online healthcare and wellness store serving customers across India with medical equipment, health-monitoring devices, mobility aids, and home-care products."
      focusAreas={['Medical equipment', 'Health-monitoring devices', 'Home care & mobility', 'Pan-India online shopping']}
      services={['Technology & Web Development', 'SEO', 'Digital Marketing']}
      website="MyGetWellStore.com"
      websiteUrl="https://www.mygetwellstore.com/"
    />
  );
}

export function BajajLifeCareCaseStudyCard() {
  return (
    <ClientWebsiteCaseStudyCard
      name="Bajaj Life Care"
      category="Medical Equipment"
      summary="An India-based medical equipment manufacturer, exporter, and supplier established in 2002, with a focus on flow meters, medical oxygen cylinders, and anaesthesia equipment."
      focusAreas={['Flow meters', 'Medical oxygen cylinders', 'Anaesthesia equipment', 'Manufacturing & exports']}
      services={['Technology & Web Development', 'SEO', 'Digital Marketing']}
      website="BajajLifeCare.com"
      websiteUrl="https://www.bajajlifecare.com/"
    />
  );
}

export function ScaleXFinanceCaseStudyCard() {
  return (
    <ClientWebsiteCaseStudyCard
      name="ScaleX Finance"
      category="Financial Services"
      summary="A financial services platform that connects customers with banks and RBI-registered NBFCs to compare and apply for financial products. It also offers money-transfer tracking and financial advisory inquiries."
      focusAreas={['Loan offer comparison', 'Bank & NBFC connections', 'Money-transfer tracking', 'Financial advisory']}
      services={['Technology & Web Development', 'SEO', 'Digital Marketing']}
      website="ScaleXFinance.com"
      websiteUrl="https://scalexfinance.com/"
    />
  );
}
