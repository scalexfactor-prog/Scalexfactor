

export function LeaderQuotes() {
  return (
    <section className="w-full py-space-xl max-w-7xl mx-auto px-margin">
    <div className="bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-low rounded-xl p-space-xl shadow-sm space-y-space-lg">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
    <div>
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">VERIFIED EXECUTIVE TESTIMONIALS</span>
    <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-1">What Engineering Leaders Say</h2>
    </div>
    <div className="flex items-center gap-1 text-tertiary">
    <span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
    <span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
    <span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
    <span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
    <span className="material-symbols-outlined text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
    <span className="font-label-md text-label-md text-on-surface font-semibold ml-1.5">5.0 / 5.0 Rating</span>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
    <p className="font-body-lg text-body-lg text-on-surface italic">
                "Scalex Factor delivered what two Tier-1 global systems integrators failed to execute over 14 months. Their programmatic route indexing engine unlocked $8.4M in booked freight contracts in under 90 days. Their engineering rigor is rare."
              </p>
    <div className="flex items-center gap-space-sm pt-space-xs">
    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold font-label-md text-label-md">
                  RD
                </div>
    <div>
    <p className="font-label-md text-label-md text-on-surface font-semibold">Rajesh Deshmukh</p>
    <p className="font-body-sm text-body-sm text-on-surface-variant">Chief Technology Officer • Apex Logistics Global</p>
    </div>
    </div>
    </div>
    
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
    <p className="font-body-lg text-body-lg text-on-surface italic">
                "When dealing with Fortune 500 audit committees, page speed and zero-trust security are existential. Scalex Factor brought our P95 LCP down to 0.65s while navigating our complete SOC2 Type II accreditation with ease."
              </p>
    <div className="flex items-center gap-space-sm pt-space-xs">
    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold font-label-md text-label-md">
                  EK
                </div>
    <div>
    <p className="font-label-md text-label-md text-on-surface font-semibold">Elena Kostas</p>
    <p className="font-body-sm text-body-sm text-on-surface-variant">VP of Engineering • FinVault Enterprise</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
