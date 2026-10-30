import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function RoiMetrics() {
  return (
    <section className="w-full py-space-xl bg-surface">
    <div className="max-w-7xl mx-auto px-margin space-y-space-xl">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
    <div className="space-y-space-xs max-w-2xl">
    <span className="font-label-md text-label-md text-tertiary font-semibold uppercase tracking-wider">Verifiable Outcomes</span>
    <h2 className="font-headline-lg text-headline-lg text-on-surface">Engineered for Rapid Commercial ROI</h2>
    <p className="font-body-md text-body-md text-on-surface-variant">Real production deployments delivering compounding returns across international supply chain, enterprise fintech, and clinical healthcare.</p>
    </div>
    <Link to="/case-studies" className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold group self-start md:self-auto">
    <span>Read All Case Studies</span>
    <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform"/>
    </Link>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
    
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
    <div className="relative h-48 w-full overflow-hidden bg-surface-container">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern logistics freight management visualization showing digital cargo tracking analytics, clean container ships in a vibrant harbor, modern blue corporate hues, cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKfaWz8m_OHmXybTUomv-QSa-mfLWD4rr_Bma03iXMeQe1Mk9hs5p-mwtJ3sf-i9T8DgcP_YZ_6NqsmAvcriTJ9yQiB4Nz2kflVirOJWjXgAn2B5fwwOi-M4SEn_syi4KbeluYfwHCMpqJaMhsPRoo7n9B3VmDF7DEsXJ8TcbPMMSgAJCQ0q3Xe4gMSCATUhkhopcpMVFMoBSwGKWFBMC4RSaywsxxjv69KezNci2"/>
    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface">
                  Logistics & Supply Chain
                </div>
    </div>
    <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Apex Logistics Global</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Enterprise fleet modernization and global B2B organic lead generation infrastructure overhaul.</p>
    </div>
    
    <div className="bg-surface-container-low p-space-sm rounded-lg grid grid-cols-2 gap-space-sm text-center">
    <div>
    <p className="font-headline-sm text-headline-sm text-primary-container font-bold">+240%</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Organic Inbounds</span>
    </div>
    <div>
    <p className="font-headline-sm text-headline-sm text-tertiary font-bold">0.8s</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Global LCP Score</span>
    </div>
    </div>
    <div className="flex items-center justify-between pt-space-xs">
    <div className="flex gap-1.5 flex-wrap">
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Next.js</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Tailwind</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">PostgreSQL</span>
    </div>
    <Link to="/case-studies" className="text-primary group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[20px]"/>
    </Link>
    </div>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
    <div className="relative h-48 w-full overflow-hidden bg-surface-container">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Fintech enterprise platform dashboard mockup displaying financial trends, cryptographic security nodes, dark clean UI with vivid cyan and electric blue indicators." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-K5kHYIQrebP5RzAmAhxKOUtf4iIoE8cXWEuqlOdF8ENqcceuUFsbRWoh0VeM41395nymkdfZLpPj6j5DQYFHbJoZXxAbx52N9Y-jEJZM8HcM5AFAGY-L7x8t7hu6JWozae_ykt_CXuLLAHFXoNhWbySPGHPe5l-elO1rWtpDmtA7u0VE_DtWQGu3Lb2qZCVlN115D2CMojnUQNh8wUuFqlqSyU4XBuuFTcBvmP3h"/>
    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface">
                  B2B SaaS / Fintech
                </div>
    </div>
    <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">FinVault Enterprise</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">High-velocity re-architecture and landing page CRO sprint focused on venture debt procurement.</p>
    </div>
    
    <div className="bg-surface-container-low p-space-sm rounded-lg grid grid-cols-2 gap-space-sm text-center">
    <div>
    <p className="font-headline-sm text-headline-sm text-primary-container font-bold">+185%</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Demo Bookings</span>
    </div>
    <div>
    <p className="font-headline-sm text-headline-sm text-tertiary font-bold">-48%</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Paid Search CAC</span>
    </div>
    </div>
    <div className="flex items-center justify-between pt-space-xs">
    <div className="flex gap-1.5 flex-wrap">
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">React</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">GraphQL</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Node.js</span>
    </div>
    <Link to="/case-studies" className="text-primary group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[20px]"/>
    </Link>
    </div>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
    <div className="relative h-48 w-full overflow-hidden bg-surface-container">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High tech diagnostic medical lab interior with clean minimalist monitors displaying patient diagnostics in an ultra-clean clinical setting with natural sunlight and teal accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDIC3wzI8mwQniQADNA88OP72o04-1k_2t1xCKKonHh7mEEUWRxcJt0Hc1jrcdonqt-sPYQOMQ9EiDjsKLzvuIx8dYJuIV6m3MbLM8q4vgvFyNYyIAjje8vQPt6t1t5u5JxphpkR8pz1aQnS9T3QendSB2XTzJlGVHFojP0d59SXs06lthIbGxK1pMmxFpQEtrNf3HOADu5TPITdIWunLtrX4k6Y4WVQTxB7JOOlxL"/>
    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold text-on-surface">
                  Healthcare Systems
                </div>
    </div>
    <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
    <div className="space-y-space-xs">
    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">MediCare Health Network</h3>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Multi-center clinic search strategy, HIPAA-compliant patient intake portal, and geo-local targeting.</p>
    </div>
    
    <div className="bg-surface-container-low p-space-sm rounded-lg grid grid-cols-2 gap-space-sm text-center">
    <div>
    <p className="font-headline-sm text-headline-sm text-primary-container font-bold">42 Keywords</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Top 3 National Ranks</span>
    </div>
    <div>
    <p className="font-headline-sm text-headline-sm text-tertiary font-bold">+310%</p>
    <span className="font-label-sm text-label-sm text-on-surface-variant">Direct Appointments</span>
    </div>
    </div>
    <div className="flex items-center justify-between pt-space-xs">
    <div className="flex gap-1.5 flex-wrap">
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Next.js</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">HIPAA Cloud</span>
    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">Redis</span>
    </div>
    <Link to="/case-studies" className="text-primary group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[20px]"/>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
