interface HealthcareCompanyProfileCardProps {
  name: string;
  category: string;
  summary: string;
  focusAreas: string[];
  website: string;
  websiteUrl: string;
}

function HealthcareCompanyProfileCard({
  name,
  category,
  summary,
  focusAreas,
  website,
  websiteUrl,
}: HealthcareCompanyProfileCardProps) {
  return (
    <article className="case-card rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md">
      <div className="space-y-space-md">
        <div>
          <div className="mb-space-xs flex flex-wrap items-center gap-space-xs">
            <span className="rounded-lg bg-surface-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-surface">
              {category}
            </span>
            <span className="rounded-lg bg-secondary-container px-space-sm py-0.5 font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
              Company Profile
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

        <a
          href={websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-space-md py-space-xs font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary-container"
        >
          Visit {website}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function MyGetWellStoreProfileCard() {
  return (
    <HealthcareCompanyProfileCard
      name="MyGetWellStore"
      category="Healthcare E-Commerce"
      summary="An online healthcare and wellness store serving customers across India with medical equipment, health-monitoring devices, mobility aids, and home-care products."
      focusAreas={['Medical equipment', 'Health-monitoring devices', 'Home care & mobility', 'Pan-India online shopping']}
      website="MyGetWellStore.com"
      websiteUrl="https://www.mygetwellstore.com/"
    />
  );
}

export function BajajLifeCareProfileCard() {
  return (
    <HealthcareCompanyProfileCard
      name="Bajaj Life Care"
      category="Medical Equipment"
      summary="An India-based medical equipment manufacturer, exporter, and supplier established in 2002, with a focus on flow meters, medical oxygen cylinders, and anaesthesia equipment."
      focusAreas={['Flow meters', 'Medical oxygen cylinders', 'Anaesthesia equipment', 'Manufacturing & exports']}
      website="BajajLifeCare.com"
      websiteUrl="https://www.bajajlifecare.com/"
    />
  );
}
