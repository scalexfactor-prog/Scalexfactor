import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16 text-sm text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/scalex-factor-logo.png" alt="" className="h-14 w-14 rounded-xl bg-white object-contain p-1 shadow-sm ring-1 ring-slate-200" />
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                SCALEX<span className="text-cyan-400">FACTOR</span>
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Scalex Factor is a performance growth and web technology agency engineered to accelerate enterprise brands through design, data, and software.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-indigo-700" aria-label="Twitter"><Icon name="alternate_email" className="text-[18px]" /></a>
              <a href="#" className="hover:text-indigo-700" aria-label="LinkedIn"><Icon name="work" className="text-[18px]" /></a>
              <a href="#" className="hover:text-indigo-700" aria-label="GitHub"><Icon name="code" className="text-[18px]" /></a>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Core Services</h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#services" className="hover:text-indigo-700">Web App Engineering</a></li>
              <li><a href="#services" className="hover:text-indigo-700">Search Engine Dominance</a></li>
              <li><a href="#services" className="hover:text-indigo-700">Paid Media &amp; Ads</a></li>
              <li><a href="#services" className="hover:text-indigo-700">Conversion Optimization</a></li>
              <li><a href="#services" className="hover:text-indigo-700">Brand Systems &amp; UI/UX</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Agency</h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#results" className="hover:text-indigo-700">Case Studies</a></li>
              <li><a href="#process" className="hover:text-indigo-700">Our Framework</a></li>
              <li><a href="#calculator" className="hover:text-indigo-700">ROI Predictor</a></li>
              <li><a href="#faq" className="hover:text-indigo-700">FAQs</a></li>
              <li><a href="#audit-form" className="hover:text-indigo-700">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Contact Direct</h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2"><Icon name="mail" className="text-[14px] text-cyan-400" /> scalexfactor@gmail.com</li>
              <li className="flex items-center gap-2"><Icon name="call" className="text-[14px] text-cyan-400" /> +91 8087885433</li>
              <li className="flex items-center gap-2"><Icon name="location_on" className="text-[14px] text-cyan-400" /> Nagpur &amp; India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Scalex Factor Agency Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-700">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-700">Terms of Engagement</a>
            <Link to="/admin" className="text-cyan-400 hover:text-cyan-300">Staff Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
